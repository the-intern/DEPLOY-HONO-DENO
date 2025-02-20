import { html } from "hono/html";

export const Layout = function () {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="/static/styles/main.css" />
        <title>03</title>
      </head>
      <body>
        <h1>Testing 03</h1>
      </body>
    </html>
  `;
};
