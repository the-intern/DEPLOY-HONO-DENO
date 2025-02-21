import { html } from "hono/html";
import { Wrapper } from "./htmlWrapper.ts";
import { Head } from "./head.ts";
import { Body } from "./body.ts";

export const HomePage = function () {
  return html` ${Wrapper(Head(), Body())} `;
};
