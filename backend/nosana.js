const NOSANA_API_URL = process.env.NOSANA_API_URL || "https://api.nosana.com";

async function getBalance() {
  const response = await fetch(`${NOSANA_API_URL}/credits/balance`, {
    headers: {
      Authorization: `Bearer ${process.env.NOSANA_API_KEY}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Nosana API error: ${response.status}`);
  }

  return response.json();
}

module.exports = {
  getBalance,
};
