import { render, router, tags } from "./functions.js";
import { landingPage, navbar, choriPage, michiPage, notFoundPage } from "./components.js";

Object.entries(tags()).forEach(([tag, f]) => (window[tag] = f));

const app = () =>
  div(
    navbar(),
    router(
      {
        "/": landingPage,
        "/mascotas": {
          "/chori": choriPage,
          "/michi": michiPage,
        },
      },
      notFoundPage
    )
  );

render(app);
