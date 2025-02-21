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
          <h1>Six Poems. Six Classics</h1>
          <h2>Move over, Homer.</h2>
        </div>
        <div class="grid">
          <div class="card">
            <img src="/static/images/tislLife.jpeg" alt="tis life" />
            <div class="container">
              <h2>Tis Life</h2>
              <p>Poetry is of a whole other type.</p>
              <p>
                Sometimes you think you're reading one thing and it turns out
                you weren't.
              </p>
              <p>
                Scholars, to this very day, cannot figure out who the "champion
                chump" is.
              </p>
              <p>Alas, we may never know.</p>
            </div>
          </div>

          <div class="card">
            <img src="/static/images/summersHere.jpeg" alt="tis life" />
            <div class="container">
              <h2>Summer's Here</h2>
              <p>
                The poet here expresses his desire for the warm glow of the
                season.
              </p>
              <ul>
                <li>Who are John and Joe whom he writes about?</li>
                <li>The poet leaves us all in deep and troubling doubt.</li>
              </ul>
            </div>
          </div>
          <div class="card">
            <img src="/static/images/theGrubbersHouse.jpeg" alt="tis life" />
            <div class="container">
              <h2>The Grubbers House</h2>
              <p>The Grubbers have nine (!) children.</p>
              <p>Tommy appears to be the biggest problem.</p>
              <p>Then there's 'Terrorizing Terry'</p>
              <p>
                My pity lies with the dog. Nameless and probably poorly fed.
              </p>
              <p>
                The poet leaves out the end of the story: the Grubber children
                all grow to be wildly successful - precisely because they were
                from a big family.
              </p>
            </div>
          </div>
          <div class="card">
            <img src="/static/images/tubSon.jpeg" alt="tis life" />
            <div class="container">
              <h2>TubSon</h2>
              <p>Poor Timmy Tubson.</p>
              <p>
                This poem raises serious questions about the rodent infestation
                in Timmy's room.
              </p>
              <p>That may explain Timmy's troubles.</p>
            </div>
          </div>
          <div class="card">
            <img src="/static/images/theBoat.jpeg" alt="tis life" />
            <div class="container">
              <h2>The Boat</h2>
              <p>Not to be confused with 'Das Boot', we have 'The Boat'.</p>
              <p>
                A mysterious detail surrounds the sound heard in "your college
                dorm".
              </p>
              <p>This is a clue that the poet is a collegiate himself.</p>
            </div>
          </div>
          <div class="card">
            <img src="/static/images/theTrapper.jpeg" alt="tis life" />
            <div class="container">
              <h2>The Trapper</h2>
              <p>Here is a favorite among the fans.</p>
              <p>
                It is said that the Trapper is based on the famous Samuel
                "Succotash" Sneed, who traded furs in the Old West.
              </p>
              <p>
                The poet wisely leaves out that poor Sneed died of lime
                poisoning.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};
