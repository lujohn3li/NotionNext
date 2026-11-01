import { normalizeRecordMap } from '@/lib/db/notion/normalizeRecordMap'

describe('normalizeRecordMap', () => {
  it('unwraps current space-scoped records before client parsing', () => {
    const inner = { role: 'reader', value: { id: 'a', type: 'page' } }
    const response = {
      recordMap: { block: { a: { spaceId: 's', value: inner } } }
    }
    expect(normalizeRecordMap(response).recordMap.block.a).toBe(inner)
  })
  it('unwraps sync responses that omit spaceId', () => {
    const inner = { role: 'reader', value: { id: 'a', type: 'collection_view' } }
    const response = { recordMap: { block: { a: { value: inner } } } }
    expect(normalizeRecordMap(response).recordMap.block.a).toBe(inner)
  })
  it('preserves legacy records, query results and repeated calls', () => {
    const record = { role: 'reader', value: { id: 'a', type: 'page' } }
    const response = {
      recordMap: {
        block: { a: record },
        collection_query: { c: { v: { blockIds: ['a'] } } }
      }
    }
    normalizeRecordMap(response)
    normalizeRecordMap(response)
    expect(response.recordMap.block.a).toBe(record)
    expect(response.recordMap.collection_query.c.v.blockIds).toEqual(['a'])
  })
  it('does not fabricate records for empty or denied responses', () => {
    expect(normalizeRecordMap(undefined)).toBeUndefined()
    expect(normalizeRecordMap({ error: 'denied' })).toEqual({ error: 'denied' })
  })
})
