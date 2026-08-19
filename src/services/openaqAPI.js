const API_KEY = import.meta.env.VITE_OPENAQ_API_KEY

export const fetchLocations = async (limit = 15) => {
  if (!API_KEY) {
    throw new Error('No se encontró la API Key. Revisa tu archivo .env')
  }

  const url = `/api-openaq/v3/locations?iso=US&limit=${limit}`
  const response = await fetch(url, {
    headers: {
      'X-API-Key': API_KEY,
    },
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Error ${response.status}: ${errorText || response.statusText}`)
  }

  const data = await response.json()
  return data.results || []
}