async function fetcher(apiUrl: string, options: any = {}) {
  const response = await fetch(process.env.NEXT_APP_API_URL + apiUrl, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch data on ${apiUrl}`);
  }

  return response.json();
}

export default fetcher;
