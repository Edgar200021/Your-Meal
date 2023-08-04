export type FetchMethods = 'POST' | 'GET' | 'PUT' | 'DELETE'

export async function fetcher<T>(
  url: string,
  method: FetchMethods,
  body: unknown = {}
): Promise<T> {
  try {
    const res = await fetch(url, returnCorrectRequest(method, body))
	if(!res.ok) throw new Error(res.status.toString())
    const data: T = await res.json()
    return data
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message)
  }

  throw new Error()
}

function returnCorrectRequest(
  method: FetchMethods,
  body: unknown = {}
): RequestInit {
  if (method === 'GET' || method === 'DELETE') {
    return {
      method,
      headers: {
        'Content-type': 'application/json',
      },
    }
  }

  return {
    method,
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  }
}
