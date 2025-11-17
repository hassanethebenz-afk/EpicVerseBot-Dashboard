
export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <html>
      <head>
        <title>EpicVerse Dashboard</title>
      </head>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1>Welcome to EpicVerse Bot Dashboard</h1>
        <p>Bot Status: Online 🟢</p>
        <p>More features coming soon!</p>
      </body>
    </html>
  `);
}
