import {
  CHORI_IMAGE_URL,
  CHORI_P1,
  CHORI_P2,
  CHORI_P3,
  CHORI_P4,
  MICHI_IMAGE_URL,
  MICHI_P1,
} from "./data.js";

const choriPage = () =>
  div(
    div(
      div(
        h1("Dachshund"), 
        p(CHORI_P1), 
        p(CHORI_P2), 
        p(CHORI_P3)
      ),

      div(
        a(
          img().att({
            src: CHORI_IMAGE_URL,
            class: "img-fluid img-thumbnail",
          })
        ).att({
          href: CHORI_IMAGE_URL,
          target: "_blank",
        }),

        p("Fig.1: un chorizo"),
        p(CHORI_P4)
      )
    ).att({
      class: "container text-center",
    })
  );

const michiPage = () =>
  div(
    div(
      div(h1("Michi"), p(MICHI_P1)),
      div(
        a(
          img().att({
            src: MICHI_IMAGE_URL,
            class: "img-fluid img-thumbnail",
          })
        ).att({
          href: MICHI_IMAGE_URL,
          target: "_blank",
        }),

        p("Fig.1: un michi")
      )
    ).att({
      class: "container text-center",
    })
  );

const landingPage = () =>
  div(
    div(h1("( ﾉ ﾟｰﾟ)ﾉ landing page ＼(ﾟｰﾟ＼)")).att({
      class: "container text-center",
    })
  );

const navbar = () =>
  div(
    a("Home").att({
      href: "/",
      class: "p-2",
    }),
    a("Chori").att({
      href: "/mascotas/chori",
      class: "p-2",
    }),
    a("Michi").att({
      href: "/mascotas/michi",
      class: "p-2",
    })
  ).att({});

const notFoundPage = () =>
  div(
    h3("404 - Page not found 🤨"),
    a("Back to home").att({
      href: "#",
    })
  ).att({
    class: "container text-center",
  });

export { landingPage, navbar, choriPage, michiPage, notFoundPage };
