import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { PoemPage } from "./components/poemPage.ts";

// ***************** end imports
// const data = Deno.readTextFileSync("./html-pages/index.html");

// ----------------------------
// app
// ----------------------------
const app = new Hono();

// ----------------------------
// middleware
// ----------------------------
app.use("/static/*", serveStatic({ root: "./" })); // for styles, scripts, images, etc

// route handlers
app.get("/", (c) => {
  return c.html(PoemPage());
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
