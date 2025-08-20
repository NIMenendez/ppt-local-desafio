// Importar las páginas
import { initHome } from './pages/inicio/inicio';
import { initInstrucciones } from './pages/instrucciones/instrucciones.ts';
import { initJuego } from './pages/juego/juego.ts';
import { initResultado } from './pages/resultado/resultado.ts';

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
  { pathRegex: /^\/inicio$/, render: () => initHome({ goTo }) },
  { pathRegex: /^\/instrucciones$/, render: () => initInstrucciones({ goTo }) },
  { pathRegex: /^\/juego$/, render: () => initJuego({ goTo }) },
  { pathRegex: /^\/resultado$/, render: () => initResultado({ goTo }) },
  { pathRegex: /.*/, render: () => {
      const notFound = document.createElement('div');
      notFound.innerHTML = '<h1>404 - Página no encontrada</h1>';
      return notFound;
    }
  }
];

// Función para navegar
function goTo(path: string) {
  const normalizedPath = path.startsWith("/") ? path : "/" + path;
  const completePath = isGithubPages() ? BASE_PATH + normalizedPath : normalizedPath;
  history.pushState({}, "", completePath);
  renderPath(completePath);
}

// Función para renderizar según la ruta
function renderPath(path: string): void {
  let adjustedPath = path;

  if (isGithubPages()) {
    // Quitar BASE_PATH al inicio
    if (adjustedPath.startsWith(BASE_PATH)) {
      adjustedPath = adjustedPath.slice(BASE_PATH.length);
    }
    // Asegurar slash inicial
    if (!adjustedPath.startsWith("/")) adjustedPath = "/" + adjustedPath;
  }

  // Quitar trailing slash
  adjustedPath = adjustedPath.replace(/\/$/, "");

  const route = routes.find(r => r.pathRegex.test(adjustedPath));

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

// Inicializa router al cargar la página
function initRouter(): void {
  const pathname = location.pathname.replace(/\/$/, "");

  if (isGithubPages() && (pathname === BASE_PATH || pathname === BASE_PATH + "/")) {
    goTo("/inicio");
  } else if (!isGithubPages() && (pathname === "" || pathname === "/")) {
    goTo("/inicio");
  } else {
    renderPath(pathname);
  }

  // Escucha cambios del historial
  window.addEventListener("popstate", () => renderPath(location.pathname));
}

export { initRouter, goTo };
