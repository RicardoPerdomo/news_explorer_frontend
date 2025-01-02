export function fetchNewsArticles(keyword) {
  const apiKey = "c4a25270531c4b40923f9ecd1eb92a12";
  const today = new Date().toISOString().split("T")[0];
  const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];
  const BASE_URL = `https://newsapi.org/v2/everything?q=${keyword}&from=${lastWeek}&to=${today}&pageSize=100&apiKey=${apiKey}`;

  return fetch(BASE_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch news articles.");
      }
      return response.json();
    })
    .then((data) => data.articles)
    .catch((error) => {
      console.error("Fetch error:", error);
      throw new Error("An error occurred while fetching news articles.");
    });
}
