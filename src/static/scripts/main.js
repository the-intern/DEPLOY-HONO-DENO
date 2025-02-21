// setInterval(() => {
//   console.log("reloading");
//   globalThis.location.reload();
// }, 10000);

const src = new EventSource("/live-reload");

src.addEventListener("message", (e) => {
  if (e.data === "reload") {
    src.close();
    location.reload();
  }
});

src.addEventListener("open", () => {
  console.log("Live reload connected!");
});
