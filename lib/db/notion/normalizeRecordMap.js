/** Normalize Notion's space-scoped record envelope for notion-client 7.x. */
export function normalizeRecordMap(response) {
  if (!response?.recordMap) return response
  for (const table of Object.values(response.recordMap)) {
    if (!table || typeof table !== 'object' || Array.isArray(table)) continue
    for (const [id, record] of Object.entries(table)) {
      if (
        record?.value &&
        typeof record.value === 'object' &&
        record.value.value &&
        typeof record.value.value === 'object' &&
        typeof record.value.value.id === 'string'
      ) {
        table[id] = record.value
      }
    }
  }
  return response
}
