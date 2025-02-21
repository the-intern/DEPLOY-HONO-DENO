import { html } from "hono/html";

//
export const Wrapper = function (head: string, body: string) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      ${head} ${body}
    </html>
  `;
};
