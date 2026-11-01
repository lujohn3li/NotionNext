import getAllPageIds from '@/lib/db/notion/getAllPageIds'
import BLOG from '@/blog.config'

jest.mock('@/blog.config', () => ({ NOTION_INDEX: 0 }))

describe('getAllPageIds', () => {
  const cid = '11111111-1111-1111-1111-111111111111'
  const vid = '22222222-2222-2222-2222-222222222222'
  beforeEach(() => {
    BLOG.NOTION_INDEX = 0
  })
  it('returns an empty list for unavailable responses without throwing', () => {
    expect(getAllPageIds(undefined, cid, undefined, [vid])).toEqual([])
    expect(getAllPageIds({}, cid, {}, [vid])).toEqual([])
  })
  it('preserves the configured table order', () => {
    const query = {
      [cid]: { [vid]: { collection_group_results: { blockIds: ['b', 'a'] } } }
    }
    expect(getAllPageIds(query, cid, {}, [vid])).toEqual(['b', 'a'])
  })
  it('accepts compact collection and view identifiers', () => {
    const query = {
      [cid.replace(/-/g, '')]: { [vid.replace(/-/g, '')]: { blockIds: ['a'] } }
    }
    expect(getAllPageIds(query, cid, {}, [vid])).toEqual(['a'])
  })
  it('falls back to other views when the configured view is absent', () => {
    const query = { [cid]: { other: { blockIds: ['a'] } } }
    expect(getAllPageIds(query, cid, {}, [vid])).toEqual(['a'])
  })
  it('deduplicates IDs while preserving first-seen order', () => {
    const query = {
      [cid]: {
        one: { blockIds: ['aa-bb', 'cc'] },
        two: { collection_group_results: { blockIds: ['aabb', 'dd'] } }
      }
    }
    expect(getAllPageIds(query, cid, {}, [])).toEqual(['aa-bb', 'cc', 'dd'])
  })
  it('ignores malformed view entries', () => {
    const query = {
      [cid]: {
        one: null,
        two: { blockIds: 'invalid' },
        three: { blockIds: [null, 42, 'a'] }
      }
    }
    expect(getAllPageIds(query, cid, {}, [])).toEqual(['a'])
  })
  it('includes config and menu rows outside the published-post view', () => {
    const query = {
      [cid]: {
        [vid]: { blockIds: ['post'] },
        config: { blockIds: ['menu', 'config'] }
      }
    }
    expect(getAllPageIds(query, cid, {}, [vid])).toEqual([
      'post',
      'menu',
      'config'
    ])
  })
  it('uses NOTION_INDEX when more than one view is configured', () => {
    BLOG.NOTION_INDEX = 1
    const query = {
      [cid]: { first: { blockIds: ['a'] }, second: { blockIds: ['b'] } }
    }
    expect(getAllPageIds(query, cid, {}, ['first', 'second'])).toEqual([
      'b',
      'a'
    ])
  })
})
