const _tags = [
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

const tag = (name, ...children) => {
  const element = document.createElement(name);
  children.forEach((child) => element.append(child));

  element.att = function (attributes) {
    Object.keys(attributes).forEach((key) =>
      this.setAttribute(key, attributes[key])
    );

    return this;
  };

  return element;
};

const router = (routes, fallback = () => h3("Page not found")) => {
  const page = div();

  const onRouteUpdate = () => {
    let location = window.location.hash.split("#")[1] || "/";
    page.replaceChildren((routes[location] ? routes[location] : fallback)());

    return page;
  };

  onRouteUpdate();

  window.addEventListener("hashchange", onRouteUpdate);

  return page;
};

const init = () =>
  _tags.forEach(
    (tagName) => (window[tagName] = (...children) => tag(tagName, ...children))
  );

window.onload = () => {
  init();
  if (typeof render !== "function")
    throw new Error(
      `No "render" function was defined. Define function called "render" that returns a set of elements to render.`
    );
  root.appendChild(render());
};
