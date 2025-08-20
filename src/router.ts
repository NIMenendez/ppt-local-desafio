// Importar las páginas aquí
import {initHome} from './pages/inicio/inicio'; // Asegúrate de que la ruta sea correcta
import {initInstrucciones} from './pages/instrucciones/instrucciones.ts';
import {initJuego} from './pages/juego/juego.ts';
import {initResultado} from './pages/resultado/resultado.ts';

// Tipo para las rutas, cada ruta tiene un regex para el path y una función render que devuelve un elemento HTML.
type RouterPath = {
  pathRegex: RegExp;
  render: (params: { goTo: (path: string) => void }) => HTMLElement;
};

const BASE_PATH = "/ppt-local-desafio";

function isGithubPages() {
  return location.host.includes("github.io");
}


// Definición de rutas
const routes: RouterPath[] = [
  {
    pathRegex: /^\/inicio$/,
    render: () => initHome({ goTo }), // Invocamos la página correspondiente
  },
  {
    pathRegex: /^\/instrucciones$/,
    render: () => initInstrucciones({ goTo }),
  },
  {
    pathRegex: /^\/juego$/,
    render: () => initJuego({ goTo }),
  },
  {
    pathRegex: /^\/resultado$/,
    render: () => initResultado({ goTo }),
  },
  {
    pathRegex: /.*/, // Ruta por defecto para manejar 404
    render: () => {
      const notFound = document.createElement('div');
      notFound.innerHTML = '<h1>404 - Página no encontrada</h1>';
      return notFound;
    },
  },
];

// Función para renderizar el contenido en base al path actual.
function goTo(path: string) {
  const completePath = isGithubPages() ? BASE_PATH + path : path;
  history.pushState({}, "", completePath);
  renderPath(completePath);
}

function renderPath(path: string): void {
  const adjustedPath = isGithubPages() ? path.replace(BASE_PATH, "") : path;

  const route = routes.find((route) => route.pathRegex.test(adjustedPath));

  if (route) {
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = "";
      app.appendChild(route.render({ goTo }));
    }
  } else {
    console.warn(`El path '${adjustedPath}' no fue encontrado.`);
  }
}

// Inicializa el router
if (location.pathname.replace(/\/$/, "") == BASE_PATH) {
  goTo("/inicio");
} else {
  renderPath(location.pathname);
}

// Escucha el evento popstate
window.addEventListener("popstate", () => {
  renderPath(location.pathname);
});

// Inicializa el router
export function initRouter(rootEl: Element) : void {
  const initialPath = window.location.pathname;
  renderPath(initialPath);
}
