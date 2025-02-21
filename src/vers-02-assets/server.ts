import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { HomePage } from "./components/homePage.ts";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));
app.use("/favicon.ico", serveStatic({ path: "./favicon.ico" }));
//
app.get("/", (c) => c.text("You can access: /static/hello.txt"));
//
app.get("*", serveStatic({ path: "./static/fallback.txt" }));

app.get("/home", (c) => c.html(HomePage()));

Deno.serve(app.fetch);
