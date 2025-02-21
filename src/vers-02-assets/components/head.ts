import { html } from "hono/html";
import { rootCSSFile } from "./css.ts";
//
export const Head = function () {
  return html`
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- <link rel="stylesheet" href="${rootCSSFile()}" /> -->
      <style>
        ${rootCSSFile()}
      </style>
      <title>Dono What You Dono</title>
    </head>
  `;
};
