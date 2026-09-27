const http = require("http");
const { getBalance } = require("./nosana");

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/api/balance") {
    try {
      const balance = await getBalance();

      res.writeHead(200);
      res.end(JSON.stringify(balance));
    } catch (error) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: error.message }));
    }

    return;
  }

  res.writeHead(200);
  res.end(
    JSON.stringify({
      status: "ok",
      service: "Nosana AI Video Studio",
    })
  );
});

server.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
