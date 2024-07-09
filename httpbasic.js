const http = require("http");

// const x = http.createServer((req, res) => {
//   res.write(" Welcome to our homepage..");
//   res.end();
// });

// x.listen(4500);

const x = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("This is our short history");
    return;
  }

  res.end(`<h1>we did not find the page you are looking for</h1>
    <a href="/">Return to homepage</a>
    `);
});

x.listen(9800);
