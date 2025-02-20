import { Hono } from "hono";
import { serveStatic } from "hono/deno";
//
import { Layout } from "./components/layout.ts";
// * end imports
//
// ! app
const app = new Hono();

// middleware

app.use("/static/*", serveStatic({ root: "./" })); // for styles, scripts, images, etc

// route handlers
app.get("/", (c) => {
  return c.html(Layout());
});

/**
 **
import { HomePage } from "./components/homePage.ts";
**
app.get("/home", (c) => c.html(HomePage()));
 */

app.get("/testing", (c) => {
  return c.text("you are testing ");
});

Deno.serve(app.fetch);
