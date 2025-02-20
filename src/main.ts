import { Hono } from "hono";

const app = new Hono();

app.use(async (_, next) => {
  console.log("middleware 1 start");
  await next();
  console.log("middleware 1 end");
});
app.use(async (_, next) => {
  console.log("middleware 2 start");
  await next();
  console.log("middleware 2 end");
});

app.use(async (_, next) => {
  console.log("middleware 3 start");
  await next();
  console.log("middleware 3 end");
});

app.get("/", (c) => {
  console.log("handler");
  return c.html(`
	<h1>Ok, working now ???? </h1>
  `);
});

Deno.serve(app.fetch);
