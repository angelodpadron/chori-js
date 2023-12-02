const _baseUrl = "http://localhost:5500/index.html";

const _tags = ["div", "p", "a", "h1", "h2", "h3", "h4", "h5", "h6", "img"];

const tag = (name, ...children) => {
    const element = document.createElement(name);
    children.forEach(child => element.append(child));

    element.att = function (attributes) {
        Object.keys(attributes).forEach(key => this.setAttribute(key, attributes[key]));

        return this;
    };

    return element;
};


let routes = {}

const tab = (routesConfig) => {
    routes = routesConfig
    routeHandler();
}


const initFunctions = () => _tags.forEach(tagName => window[tagName] = (...children) => tag(tagName, ...children))

const redirect = (path) => {
    root.replaceChildren(routes[path]());
    const url = new URL(_baseUrl + "#" + path);
    history.pushState(null, null, url);
}

const routeHandler = () => {
    let location = window.location.hash.split("#")[1] || "/";
    let builder = routes[location];

    builder ? root.replaceChildren(builder()) : root.replaceChildren(errorPage())

}

window.onload = () => {
    initFunctions();
    mainPage();
};

window.addEventListener("hashchange", routeHandler)
