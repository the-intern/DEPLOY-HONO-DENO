import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { PoemPage } from "./components/poemPage.ts";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./src" }));

app.get("/", (c) => {
  return c.html(PoemPage());
});

Deno.serve(app.fetch);
