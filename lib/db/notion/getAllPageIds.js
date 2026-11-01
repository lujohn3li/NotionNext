import BLOG from '@/blog.config'

const normalizeId = id =>
  String(id || '')
    .replace(/-/g, '')
    .toLowerCase()
const getById = (map, id) =>
  map?.[id] ||
  Object.entries(map || {}).find(
    ([key]) => normalizeId(key) === normalizeId(id)
  )?.[1]
const blockIds = view => [
  ...(Array.isArray(view?.blockIds) ? view.blockIds : []),
  ...(Array.isArray(view?.collection_group_results?.blockIds)
    ? view.collection_group_results.blockIds
    : [])
]

/** Preserve configured ordering, then include rows (menus/config) from other views. */
export default function getAllPageIds(
  collectionQuery,
  collectionId,
  collectionView,
  viewIds
) {
  const collection = getById(collectionQuery, collectionId)
  if (!collection || typeof collection !== 'object') return []
  const configuredView = viewIds?.[Number(BLOG.NOTION_INDEX) || 0]
  const preferred = blockIds(getById(collection, configuredView))
  const candidates = [
    ...preferred,
    ...Object.values(collection).flatMap(blockIds)
  ]
  const seen = new Set()
  return candidates.filter(id => {
    if (typeof id !== 'string' || !id) return false
    const key = normalizeId(id)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}
