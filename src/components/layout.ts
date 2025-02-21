import { html } from "hono/html";
import { Button } from "./button.ts";

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
        ${Button()}
        <script type="module" src="/static/scripts/main.js"></script>
      </body>
    </html>
  `;
};
