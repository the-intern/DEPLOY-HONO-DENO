import { html } from "hono/html";

export const Button = function () {
  return html` <button id="clicker">Click Here</button> `;
};
