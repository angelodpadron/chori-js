const CHORI_URL = "https://petspetz.com/wp-content/uploads/2023/03/red-dachshund.jpg";
const P1 = "El dachshund, también conocido como perro salchicha o teckel, es una raza de perro originaria de Alemania. Su peculiar fisonomía se debe a una mutación genética conocida como bassetismo, que dota a los ejemplares de unas extremidades cortas en relación con el tamaño del cuerpo. ";
const P2 = "Según su tamaño y peso puede clasificarse en estándar (9 kg-15 kg), miniatura (5 kg-9 kg) y Kaninchen (3 kg-5 kg) este último no solo se caracteriza por un menor peso y tamaño, sino que presenta unos rasgos físicos distintos.";
const P3 = "Además el perro salchicha se diferencia en función de la tipología del pelo, puede ser de pelo duro (generalmente de color gris), pelo corto y pelo largo, estos dos últimos pueden ser de color negro con rojo fuego, marrón chocolate y dorado.";
const P4 = "El dachshund de tamaño estándar se desarrolló para oler, perseguir y ahuyentar a los tejones (de ahí su nombre, que en alemán significa 'perro tejonero') y otros animales que viven en madrigueras, mientras que el dachshund en miniatura fue criado para cazar animales pequeños como conejos y ratones.";

const tags = ["div", "p", "a", "h1", "h2", "h3", "h4", "h5", "h6", "img"];

const tag = (name, ...children) => {
    const element = document.createElement(name);
    children.forEach(child => element.append(child));

    element.att = function (attributes) {
        Object.keys(attributes).forEach(key => this.setAttribute(key, attributes[key]));

        return this;
    };

    return element;
};

const page = () =>
    div(

        div(
            h1("Dachshund"),
            p(P1),
            p(P2)
        ),

        div(
            a(
                img()
                    .att(
                        {
                            src: CHORI_URL,
                            class: "img-fluid img-thumbnail"
                        }
                    )
            )
                .att(
                    {
                        href: CHORI_URL,
                        target: "_blank",
                    }
                ),

            p("Fig.1: un chorizo"),
            p(P3)

        )
    )
        .att({
            class: "container text-center"
        })


const initFunctions = () => tags.forEach(tagName => window[tagName] = (...children) => tag(tagName, ...children))

window.onload = () => {
    initFunctions();
    app.appendChild(page());
};
