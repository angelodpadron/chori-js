const CHORI_IMAGE_URL =
  "https://petspetz.com/wp-content/uploads/2023/03/red-dachshund.jpg";
const CHORI_P1 =
  "El dachshund, también conocido como perro salchicha o teckel, es una raza de perro originaria de Alemania. Su peculiar fisonomía se debe a una mutación genética conocida como bassetismo, que dota a los ejemplares de unas extremidades cortas en relación con el tamaño del cuerpo. ";
const CHORI_P2 =
  "Según su tamaño y peso puede clasificarse en estándar (9 kg-15 kg), miniatura (5 kg-9 kg) y Kaninchen (3 kg-5 kg) este último no solo se caracteriza por un menor peso y tamaño, sino que presenta unos rasgos físicos distintos.";
const CHORI_P3 =
  "El dachshund de tamaño estándar se desarrolló para oler, perseguir y ahuyentar a los tejones (de ahí su nombre, que en alemán significa 'perro tejonero') y otros animales que viven en madrigueras, mientras que el dachshund en miniatura fue criado para cazar animales pequeños como conejos y ratones.";
const CHORI_P4 =
  "Además el perro salchicha se diferencia en función de la tipología del pelo, puede ser de pelo duro (generalmente de color gris), pelo corto y pelo largo, estos dos últimos pueden ser de color negro con rojo fuego, marrón chocolate y dorado.";

const MICHI_IMAGE_URL =
  "https://s.abcnews.com/images/Lifestyle/ht_buddha_cat_mi_130815_16x9_992.jpg";
const MICHI_P1 =
  "El gato doméstico (Felis silvestris catus), llamado más comúnmente gato, y de forma coloquial minino, michino, michi, micho, mizo, miz, morroño o morrongo y algunos nombres más, es un mamífero carnívoro de la familia Felidae. Es una subespecie domesticada, por la convivencia con el ser humano, del gato montés. ";

const choriPage = () =>
  div(
    div(
      div(h1("Dachshund"), 
      p(CHORI_P1), 
      p(CHORI_P2), 
      p(CHORI_P3)),

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
      href: "/chori",
      class: "p-2",
    }),
    a("Michi").att({
      href: "/michi",
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

const render = () =>
  div(
    navbar(),
    router(
      {
        "/": landingPage,
        "/chori": choriPage,
        "/michi": michiPage,
      },
      notFoundPage
    )
  );
