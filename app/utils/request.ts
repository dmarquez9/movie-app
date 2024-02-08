export const API_URL = 'https://api.themoviedb.org/3'

export const MOVIE_API_KEY = process.env.MOVIE_API_KEY as string

function request<T>(
  endpoint: string,
  { query, data, headers: customHeaders, ...customConfig }: any = {}
): Promise<T> {
  const queryParams = new URLSearchParams({
    ...query,
    api_key: MOVIE_API_KEY
  });

  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  }

  return fetch(`${API_URL}/${endpoint}?${queryParams}`, config).then(async response => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export default request
