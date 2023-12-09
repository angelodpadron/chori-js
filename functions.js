const TAGS = [
  "div",
  "p",
  "a",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "img",
  "button",
];

export const tag = (name, ...children) => {
  const element = document.createElement(name);
  children.forEach((child) => element.append(child));

  element.att = function (attributes) {
    Object.keys(attributes).forEach((key) => {
      let value = attributes[key];
      let isHref = key === "href";

      if (isHref && value.startsWith("/")) value = "#" + value;

      this.setAttribute(key, value);
    });

    return this;
  };

  return element;
};

export const router = (routes, fallback = () => h3("Page not found")) => {
  const page = div();

  const onRouteUpdate = () => {
    const location = window.location.hash.split("#")[1] || "/";
    const pathResult = location
      .split("/")
      .filter((value) => value)
      .map((value) => "/" + value)
      .reduce((acc, key) => acc && acc[key], routes);

    let finalComponent;

    if (typeof pathResult === "object") {
      let defaultComponent = pathResult["/"];

      if (defaultComponent && typeof defaultComponent === "function") {
        finalComponent = defaultComponent;
      } else {
        console.error(`No default component has been defined for this route: ${location}`);
        finalComponent = fallback;
      }
    }

    if (typeof pathResult === "function") finalComponent = pathResult;

    if (!pathResult) finalComponent = fallback;

    page.replaceChildren(finalComponent());

    return page;
  };

  onRouteUpdate();

  window.addEventListener("hashchange", onRouteUpdate);

  return page;
};

export const tags = () => {
  return TAGS.reduce((acc, tagName) => {
    acc[tagName] = (...children) => tag(tagName, ...children);
    return acc;
  }, {});
};

export const render = (component) => {
  root.appendChild(component());
};
