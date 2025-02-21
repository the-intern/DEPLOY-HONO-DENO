import { html } from "hono/html";

export const PoemPage = function () {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/static/styles/main.css" />
        <script src="/static/scripts/main.js" defer></script>
        <title>Poet's Page</title>
      </head>
      <body>
        <div class="header">
          <h1>Poetry's Finest</h1>
        </div>
        <div class="grid">
          <div class="card">
            <img src="/static/images/tislLife.jpeg" alt="tis life" />
            <div class="container">
              <h2>Tis Life</h2>
              <p>Poetry is of a whole other type.</p>
            </div>
          </div>

          <div class="card">
            <img src="/static/images/summersHere.jpeg" alt="tis life" />
            <div class="container">
              <h2>Summer's Here</h2>
              <p>L</p>
            </div>
          </div>
          <div class="card">
            <img src="/static/images/theGrubbersHouse.jpeg" alt="tis life" />
            <div class="container">
              <h2>The Grubbers House</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                repellat excepturi ipsum. Rerum deleniti eveniet delectus fugit
                ab consequatur officia unde quos, earum expedita placeat.
                Officiis tempore similique animi totam.
              </p>
            </div>
          </div>
          <div class="card">
            <img src="/static/images/tubSon.jpeg" alt="tis life" />
            <div class="container">
              <h2>Summer's Here</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                repellat excepturi ipsum. Rerum deleniti eveniet delectus fugit
                ab consequatur officia unde quos, earum expedita placeat.
                Officiis tempore similique animi totam.
              </p>
            </div>
          </div>
          <div class="card">
            <img src="/static/images/theBoat.jpeg" alt="tis life" />
            <div class="container">
              <h2>Summer's Here</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                repellat excepturi ipsum. Rerum deleniti eveniet delectus fugit
                ab consequatur officia unde quos, earum expedita placeat.
                Officiis tempore similique animi totam.
              </p>
            </div>
          </div>
          <div class="card">
            <img src="/static/images/theTrapper.jpeg" alt="tis life" />
            <div class="container">
              <h2>Summer's Here</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                repellat excepturi ipsum. Rerum deleniti eveniet delectus fugit
                ab consequatur officia unde quos, earum expedita placeat.
                Officiis tempore similique animi totam.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};
