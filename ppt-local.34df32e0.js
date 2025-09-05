// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"3dtlh":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4b8ea06834df32e0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gH3Lb":[function(require,module,exports,__globalThis) {
var _star = require("./components/star/star");
var _button = require("./components/button/button");
var _score = require("./components/score/score");
var _text = require("./components/text/text");
var _router = require("./router");
(function main() {
    let app = document.querySelector("#app");
    if (!app) throw new Error("Elemento #app no encontrado");
    (0, _router.initRouter)(app);
})();

},{"./components/star/star":"7s6D0","./components/button/button":"eHuqW","./components/score/score":"5Ez2r","./components/text/text":"6jXXp","./router":"4wVP1"}],"7s6D0":[function(require,module,exports,__globalThis) {
class Estrella extends HTMLElement {
    static get style() {
        return /*CSS*/ `
    .container {
        position: relative;
        width: 380px;
        height: 380px;
      }
      .estrella-text {
        font-family: var(--fuete-odibee);
        letter-spacing: 0.5rem;
        font-size: 2.2rem;
        z-index: 2;
        color: #ffffff; /* Cambiar el color del texto a blanco para que contraste con el fondo rojo */
        position: absolute;
        top: 35%; /* Centrar verticalmente */
        left: 48%; /* Centrar horizontalmente */
        transform: translate(
          -50%,
          -50%
        ); /* Ajustar para que el centro del texto coincida con el centro de la estrella */
      }
      .estrella {
        position: absolute;
        z-index: 1;
        width: 330px;
        height: 330px;
        top: 14px;
        bottom: auto;
        left: 14px;
        right: 0px;
        background-color: var(--estrella-win);
        clip-path: polygon(
          50% 0%,
          67% 28%,
          98% 35%,
          79% 55%,
          93% 100%,
          52% 79%,
          10% 100%,
          23% 60%,
          2% 35%,
          33% 26%
        );
      }
      .estrella2 {
        width: 360px;
        height: 360px;
        background-color: rgb(15, 15, 15);
        clip-path: polygon(
          50% 0%,
          67% 28%,
          98% 35%,
          79% 55%,
          93% 100%,
          52% 79%,
          10% 100%,
          23% 60%,
          2% 35%,
          33% 26%
        );
      }     
      .estrella-invertida{
        transform: rotatex(180deg);  
        background-color: var(--estrella-loser);
     
      } 
      .estrella-invertida2{
        transform: rotatex(180deg);  
        background-color: black;
      }   
       `;
    }
    constructor(){
        super();
        this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = /*HTML*/ `
    <style>${Estrella.style}</style>
    <div class="container">
      <div class="estrella"></div>
      <div class="estrella2"></div>
      <h3 class="estrella-text">Ganaste!</h3>
    </div>
    `;
        // const contenedorEstrella = this.shadowRoot!.querySelector(".container");
        if (this.hasAttribute("invertida")) {
            const estrella = this.shadowRoot.querySelector(".estrella");
            const estrella2 = this.shadowRoot.querySelector(".estrella2");
            const estrellaText = this.shadowRoot.querySelector(".estrella-text");
            estrella.setAttribute("class", "estrella estrella-invertida");
            estrella2.setAttribute("class", "estrella2 estrella-invertida2");
            estrellaText.textContent = "Perdiste!";
        }
    }
}
customElements.define("estrella-el", Estrella);

},{}],"eHuqW":[function(require,module,exports,__globalThis) {
class ButtonEl extends HTMLElement {
    static get style() {
        return `
    button {
        font-family: var(--fuente-odibee);
        font-size: 3rem;
        letter-spacing: 0.15rem;
        color: var(--button-font);
        min-width: 380px;
        height: 84px;
        background-color: var(--color-button);
        border: solid 10px var(--color-borderbutton);
        border-radius: 10px;
        transition: ease-in-out 0.25s;
        cursor: pointer;
      }
      button:hover {
        background-color: var(--color-borderbutton);
        border: solid 10px var(--color-button);
      }
    `;
    }
    constructor(){
        super();
        this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        const clase = this.getAttribute("class");
        this.shadowRoot.innerHTML = `
    <style>${ButtonEl.style}</style>
    <button class="${clase}"><slot></slot></button>

    `;
    }
}
customElements.define("button-el", ButtonEl);

},{}],"5Ez2r":[function(require,module,exports,__globalThis) {
class ScoreEl extends HTMLElement {
    static get style() {
        return `
    .container {
        box-sizing: border-box;
        font-family: var(--fuente-odibee);
        font-size: 1.5rem;
        width: 259px;
        height: 187px;
        background-color: white;
        color: black;
        border: solid 10px black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        margin: 0;
      }
      .container h3 {
        /* margin: 0; */
        text-align: center;
        letter-spacing: 0.5rem;
        margin-top: 10px;
      }
      .container-p {
        flex-grow: 1;
        width: 100%;
        height: 140px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .p-pc,
      .p-player {
        margin: 0;
        text-align: end;
        letter-spacing: 0.5rem;
      }
    `;
    }
    constructor(){
        super();
        this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = /*HTML*/ `
    <style>${ScoreEl.style}</style>
    <div class="container">
      <h3>Score</h3>
      <div class="container-p">
        <p class="p-player">Vos: 3</p>
        <p class="p-pc">PC: 3</p>
      </div>
    </div>
    `;
    }
}
customElements.define("score-el", ScoreEl);

},{}],"6jXXp":[function(require,module,exports,__globalThis) {
class TextEl extends HTMLElement {
    static get style() {
        return ``;
    }
    constructor(){
        super(), this.tags = [
            "h1",
            "p"
        ], this.tag = "p";
        this.attachShadow({
            mode: "open"
        });
        if (this.tags.includes(this.getAttribute("tag"))) this.tag = this.getAttribute("tag") || this.tag;
        console.log(this.tag);
        this.render();
    }
    render() {
        const rootEl = document.createElement(this.tag);
        rootEl.textContent = this.textContent;
        this.shadowRoot.append(rootEl);
    }
}
customElements.define("text-el", TextEl);

},{}],"4wVP1":[function(require,module,exports,__globalThis) {
// Importar las páginas
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
parcelHelpers.export(exports, "goTo", ()=>goTo);
var _inicio = require("./pages/inicio/inicio");
var _instruccionesTs = require("./pages/instrucciones/instrucciones.ts");
var _juegoTs = require("./pages/juego/juego.ts");
var _resultadoTs = require("./pages/resultado/resultado.ts");
const BASE_PATH = "/ppt-local-desafio";
function isGithubPages() {
    return location.host.includes("github.io");
}
// Definición de rutas
const routes = [
    {
        pathRegex: /^\/inicio$/,
        render: ()=>(0, _inicio.initHome)({
                goTo
            })
    },
    {
        pathRegex: /^\/instrucciones$/,
        render: ()=>(0, _instruccionesTs.initInstrucciones)({
                goTo
            })
    },
    {
        pathRegex: /^\/juego$/,
        render: ()=>(0, _juegoTs.initJuego)({
                goTo
            })
    },
    {
        pathRegex: /^\/resultado$/,
        render: ()=>(0, _resultadoTs.initResultado)({
                goTo
            })
    },
    {
        pathRegex: /.*/,
        render: ()=>{
            const notFound = document.createElement('div');
            notFound.innerHTML = "<h1>404 - P\xe1gina no encontrada</h1>";
            return notFound;
        }
    }
];
// Función para navegar
function goTo(path) {
    const normalizedPath = path.startsWith("/") ? path : "/" + path;
    const completePath = isGithubPages() ? BASE_PATH + normalizedPath : normalizedPath;
    history.pushState({}, "", completePath);
    renderPath(completePath);
}
// Función para renderizar según la ruta
function renderPath(path) {
    let adjustedPath = path;
    if (isGithubPages()) {
        // Quitar BASE_PATH al inicio
        if (adjustedPath.startsWith(BASE_PATH)) adjustedPath = adjustedPath.slice(BASE_PATH.length);
        // Asegurar slash inicial
        if (!adjustedPath.startsWith("/")) adjustedPath = "/" + adjustedPath;
    }
    // Quitar trailing slash
    adjustedPath = adjustedPath.replace(/\/$/, "");
    const route = routes.find((r)=>r.pathRegex.test(adjustedPath));
    if (route) {
        const app = document.getElementById("app");
        if (app) {
            app.innerHTML = "";
            app.appendChild(route.render({
                goTo
            }));
        }
    } else console.warn(`El path '${adjustedPath}' no fue encontrado.`);
}
// Inicializa router al cargar la página
function initRouter() {
    const pathname = location.pathname.replace(/\/$/, "");
    if (isGithubPages() && (pathname === BASE_PATH || pathname === BASE_PATH + "/")) goTo("/inicio");
    else if (!isGithubPages() && (pathname === "" || pathname === "/")) goTo("/inicio");
    else renderPath(pathname);
    // Escucha cambios del historial
    window.addEventListener("popstate", ()=>renderPath(location.pathname));
}

},{"./pages/inicio/inicio":"kVWoQ","./pages/instrucciones/instrucciones.ts":"fTLuP","./pages/juego/juego.ts":"ahAK2","./pages/resultado/resultado.ts":"9tUjq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kVWoQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHome", ()=>initHome);
var _button = require("../../components/button/button");
const piedra = new URL(require("bf03a7cd12a72b20")).href;
const papel = new URL(require("fbf9f7fff7a6e558")).href;
const tijera = new URL(require("7dbc11fd1d3a12c5")).href;
function initHome(params) {
    const div = document.createElement("div");
    div.innerHTML = `
  <style>
  .contenedor{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    margin-top: 20px;
    margin-bottom: 25px;
    padding: 20px;
    width: 380px;
    height: 330px;
    overflow-wrap: anywhere;
  }
  .title h1 {
    text-align: center;
    margin: 0;
    font-family: var(--fuente-odibee);
    letter-spacing: 0.25rem;
    font-size: 5.5rem;
    color: var(--color-h1);
  }
  
  .title h1 span {
    color: #0090485a;
  }
  .div-button{
    height: 100px;    
  }
  .container-manos {
    padding: 0 10px;
    min-width: 370px;
    position: fixed;
    display: flex;
    bottom: -40px;
    flex-direction: row;
    gap: 40px;
  }
  .container-manos img {
    width: 100px;
    height: 250px;
  }
  </style>
  <div class="contenedor">
  <div class="title">
  <h1>
    Piedra<br />
    Papel <span>\xf3</span> <br />Tijera
  </h1>
</div>
<div class="div-button">
<button-el>Empezar!</button-el>
</div>
<div class="container-manos">
  <img src="${piedra}" alt="Piedra"/>
  <img src="${papel}" alt="Papel"/>
  <img src="${tijera}" alt="Tijera"/>
</div>
</div>
  `;
    const buttonEl = div.querySelector("button-el");
    buttonEl?.addEventListener("click", ()=>{
        params.goTo("/instrucciones");
    });
    return div;
}

},{"../../components/button/button":"eHuqW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","bf03a7cd12a72b20":"85XTt","fbf9f7fff7a6e558":"eM0Ao","7dbc11fd1d3a12c5":"c7WxR"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"85XTt":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("piedra.ef826cab.svg") + "?" + Date.now();

},{}],"eM0Ao":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("papel.840c6168.svg") + "?" + Date.now();

},{}],"c7WxR":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("tijera.ec7cd153.svg") + "?" + Date.now();

},{}],"fTLuP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstrucciones", ()=>initInstrucciones);
var _stateTs = require("../../state.ts");
const piedra = new URL(require("7b272971780da529")).href;
const papel = new URL(require("addf80a08d10f21c")).href;
const tijera = new URL(require("7e6063e6b778c679")).href;
function initInstrucciones(params) {
    let div = document.createElement("div");
    div.innerHTML = /*html*/ `
  <style>
    .container {
      height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.div-text {
  width: 317px;
  height: 380px;
}
.div-text-p {
  font-family: var(--fuente-odibee);
  font-size: 2.7rem;
  letter-spacing: 0.11rem;
  font-weight: 800;
  text-align: center;
}
.div-button {
  
  height: 100px;
}
.container-manos {
  padding: 0 10px;
  min-width: 370px;
  position: fixed;
  display: flex;
  bottom: -40px;
  flex-direction: row;
  gap: 40px;
}
.container-manos img {
  width: 100px;
  height: 250px;
}
</style>
  <div class="container">
      <div class="div-text">
        <p class="div-text-p">
          Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los
          3 segundos. <br> El primero en llegar a 2 puntos gana el juego
        </p>
      </div>
      <div class="button">
        <button-el>Jugar!</button-el>
      </div>
      <div class="container-manos">
        <img src="${papel}" alt="papel"/>
        <img src="${piedra}" alt="piedra"/>
        <img src="${tijera}" alt="tijera"/>
      </div>
  </div>
  `;
    const buttonEl = div.querySelector("button-el");
    (0, _stateTs.state).data.scores.pcScore = 0;
    (0, _stateTs.state).data.scores.myScore = 0;
    buttonEl?.addEventListener("click", ()=>{
        params.goTo("/juego");
    });
    return div;
}

},{"../../state.ts":"dWXvP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","7b272971780da529":"85XTt","addf80a08d10f21c":"eM0Ao","7e6063e6b778c679":"c7WxR"}],"dWXvP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            clientMove: null,
            pcMove: null
        },
        historyByTurn: [],
        scores: {
            myScore: 0,
            pcScore: 0
        }
    },
    subscribers: [],
    subscribe (callback) {
        this.subscribers.push(callback);
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = {
            ...this.data,
            ...newState,
            currentGame: {
                ...this.data.currentGame,
                ...newState.currentGame || {}
            },
            scores: {
                ...this.data.scores,
                ...newState.scores || {}
            }
        };
        this.subscribers.forEach((callback)=>callback(this.data));
        // ✅ Guardar siempre en localStorage
        this.saveToLocalStorage();
    },
    setMoves (move) {
        const pcMove = this.getRandomMove();
        this.setState({
            currentGame: {
                clientMove: move,
                pcMove
            }
        });
    },
    getRandomMove () {
        const moves = [
            "rock",
            "paper",
            "scissors"
        ];
        return moves[Math.floor(Math.random() * moves.length)];
    },
    pushToHistory (turn) {
        const newHistory = [
            ...this.data.historyByTurn,
            turn
        ];
        this.setState({
            historyByTurn: newHistory
        });
    },
    getWinner (clientMove, pcMove) {
        if (clientMove === pcMove) return "tie";
        const winsAgainst = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };
        if (winsAgainst[clientMove] === pcMove) return "clientWins";
        else return "pcWins";
    },
    playGame (playerChoice) {
        if (this.data.currentGame.pcMove === null) return; // seguridad
        const winner = this.getWinner(playerChoice, this.data.currentGame.pcMove);
        if (winner === "clientWins") this.setState({
            scores: {
                myScore: this.data.scores.myScore + 1
            }
        });
        else if (winner === "pcWins") this.setState({
            scores: {
                pcScore: this.data.scores.pcScore + 1
            }
        });
    },
    saveToLocalStorage () {
        localStorage.setItem('gameState', JSON.stringify(this.data));
    },
    loadFromLocalStorage () {
        const savedState = localStorage.getItem('gameState');
        if (savedState) {
            this.data = JSON.parse(savedState);
            this.subscribers.forEach((callback)=>callback(this.data));
        }
    },
    // ✅ Método para reiniciar scores solo cuando vos quieras
    resetScores () {
        this.setState({
            scores: {
                myScore: 0,
                pcScore: 0
            }
        });
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ahAK2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initJuego", ()=>initJuego);
var _stateTs = require("../../state.ts");
const piedra = new URL(require("d9b087dad97681e4")).href;
const papel = new URL(require("fa21e446e9ffb8ba")).href;
const tijera = new URL(require("cc4feb16dd20cd3f")).href;
function initJuego(params) {
    const divEl = document.createElement("div");
    divEl.innerHTML = /*HTML */ `
    <style>
      .principal {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
      }
      .progressbar-container {
        width: 400px;
        height: 400px;
        margin: 0px auto;
      }
      .progressbar-container .outer-box {
        border-radius: 50%;
        background-color: transparent;
        width: 400px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressbar-container .inner-box {
        font-size: 12rem;
        font-weight: 900;
        width: 180px;
        height: 0px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressbar-container svg {
        position: absolute;
      }
      .progressbar-container circle {
        fill: none;
        stroke: url(#gradientColor);
        stroke-width: 30px;
        stroke-dasharray: 1040;
        stroke-dashoffset: 1040;
        animation: loading 3.3s linear forwards;
      }
      @keyframes loading {
        100% {
          stroke-dashoffset: 0;
        }
      }
      .elige {
        font-size: 2rem;
        font-family: var(--fuente-odibee);
        text-align: center;
        margin: 0;
      }
      .my-score, .computer-score {font-family: var(--fuente-odibee);}
      .container-manos {
        position: fixed;
        bottom: -80px;
        display: flex;
        justify-content: space-between;
        max-width: 450px;
      }
      .general {
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 150px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .piedra, .papel, .tijera {
        width: 100px;
        height: 300px;
       
        
        width: 100px;
        height: 300px;
        transform: scale(1) translateY(0); /* Estado inicial */
        transition: transform 0.3s ease-in-out; /* Transici\xf3n suave para ambas transformaciones */ 
          }
        .general:hover .piedra,
        .general:hover .papel,
        .general:hover .tijera {
          transform: scale(1.2) translateY(-40px); /* Se agranda un 20% al hacer click */
        }
        .piedra.active,
        .papel.active,
        .tijera.active {
          transform: scale(1.2) translateY(-40px); /* Se agranda un 20% al hacer click */
        }
        .general .piedra,
        .general .papel,
        .general .tijera {
           transition: transform 0.3s ease-in-out;
        }

        .general.active .piedra,
        .general.active .papel,
        .general.active .tijera {
          transform: scale(1.2) translateY(-40px); /* Se mantiene desplazada */
          }
        .secundario {
        width: 100%;
        height: 100vh;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
      .div-img-maquina, .div-img-jugador {
        width: 400px;
        height: 400px;
      }
      .div-img-maquina {
        width: 400px;
        height: 400px;
        transform: rotate(180deg);
      }
      .imagen-maquina, .imagen-jugador {
        width: 400px;
        height: 400px;
      }
      .my-score, .computer-score {
        font-size: 2rem;
      }
    </style>
    <div class="principal">
      <div class="progressbar-container">
        <div class="outer-box">
          <div class="inner-box">3</div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="400">
            <defs>
              <linearGradient id="gradientColor">
                <stop offset="0%" stop-color="#006cfc" />
                <stop offset="100%" stop-color="#001997" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="160" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      <h3 class="elige">Elige tu jugada antes de que se termina el tiempo!</h3>
      <div class="container-manos">
        <button class="general">
          <img class="piedra" src="${piedra}" alt="piedra" />
        </button>
        <button class="general" >
          <img class="papel" src="${papel}" alt="papel" />
        </button>
        <button class="general" >
          <img class="tijera" src="${tijera}" alt="tijera" />
        </button>
      </div>
      <div class="my-score">Jugador: <span></span></div>
      <div class="computer-score"> Computadora: <span></span></div>
    </div>
    <div class="secundario">
      <div class="div-img-maquina">
        <img class="imagen-maquina" src="${piedra}" alt="" />
      </div>
      
      <div class="div-img-jugador">
        <img class="imagen-jugador" src="${papel}" alt="" />
      </div>
    </div>
  `;
    // Aquí empieza la lógica
    const botonPiedra = divEl.querySelector(".container-manos button img.piedra");
    const botonPapel = divEl.querySelector(".container-manos button img.papel");
    const botonTijera = divEl.querySelector(".container-manos button img.tijera");
    const divPrincipal = divEl.querySelector(".principal");
    const divSecundario = divEl.querySelector(".secundario");
    const imagenPc = divEl.querySelector(".imagen-maquina");
    const imagenJugador = divEl.querySelector(".imagen-jugador");
    // ✅ Elementos del score
    const myScoreEl = divEl.querySelector(".my-score span");
    const computerScoreEl = divEl.querySelector(".computer-score span");
    // Suscripción al state
    (0, _stateTs.state).subscribe(()=>{
        const currentState = (0, _stateTs.state).getState();
        myScoreEl.textContent = currentState.scores.myScore.toString();
        computerScoreEl.textContent = currentState.scores.pcScore.toString();
    });
    // ✅ Refresh inicial de scores apenas se monta la vista
    (()=>{
        const currentState = (0, _stateTs.state).getState();
        myScoreEl.textContent = currentState.scores.myScore.toString();
        computerScoreEl.textContent = currentState.scores.pcScore.toString();
    })();
    function handleMoveSelection(jugada) {
        (0, _stateTs.state).setMoves(jugada);
        const pcMove = (0, _stateTs.state).data.currentGame.pcMove;
        const imagenes = {
            rock: `${piedra}`,
            paper: `${papel}`,
            scissors: `${tijera}`
        };
        imagenPc.src = imagenes[pcMove];
        imagenPc.alt = pcMove;
        imagenJugador.src = imagenes[jugada];
        imagenJugador.alt = jugada;
        (0, _stateTs.state).playGame(jugada);
        const botones = divEl.querySelectorAll(".general");
        botones.forEach((boton)=>boton.classList.remove("active"));
        const botonSeleccionado = divEl.querySelector(`.general img.${jugada}`)?.parentElement;
        if (botonSeleccionado) botonSeleccionado.classList.add("active");
        botones.forEach((boton)=>{
            boton.disabled = true;
            boton.style.pointerEvents = `none`;
        });
    }
    setTimeout(()=>{
        const currentState = (0, _stateTs.state).getState();
        if (currentState.scores.pcScore == 2 || currentState.scores.myScore == 2) params.goTo("/resultado");
        else params.goTo("/juego");
    }, 5000);
    // Listeners de los botones
    botonPiedra.addEventListener("click", ()=>handleMoveSelection("rock"));
    botonPapel.addEventListener("click", ()=>handleMoveSelection("paper"));
    botonTijera.addEventListener("click", ()=>handleMoveSelection("scissors"));
    function actualizarContador() {
        const contador = document.querySelector(".inner-box");
        let valorActual = Number(contador.innerText);
        if (valorActual > -2) contador.innerText = (valorActual - 1).toString();
        if (valorActual <= 0) {
            divSecundario.style.display = "flex";
            divPrincipal.style.display = "none";
            clearInterval(intervalo);
        }
    }
    const intervalo = setInterval(actualizarContador, 1000);
    return divEl;
}

},{"../../state.ts":"dWXvP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","d9b087dad97681e4":"85XTt","fa21e446e9ffb8ba":"eM0Ao","cc4feb16dd20cd3f":"c7WxR"}],"9tUjq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResultado", ()=>initResultado);
var _stateTs = require("../../state.ts");
function initResultado(params) {
    const divEl = document.createElement("div");
    divEl.innerHTML = /*HTML */ `
  <style>.ganaste {
  /* display: none; */
  height: 100vh;
  background-color: var(--background-win);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.container {
  box-sizing: border-box;
  font-family: var(--fuente-odibee);
  font-size: 1.5rem;
  width: 259px;
  height: 187px;
  background-color: white;
  color: black;
  border: solid 10px black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 0;
}
.container h3 {
  /* margin: 0; */
  text-align: center;
  letter-spacing: 0.5rem;
 }
.container-p {
  flex-grow: 1;
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.p-maquina,
.p-persona {
  margin: 0;
  text-align: end;
  letter-spacing: 0.5rem;
}
/*  */
.perdiste {
  height: 100vh;
  background-color: var(--background-loser);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 50px;
}
.contenedor {
  box-sizing: border-box;
  font-family: var(--fuente-odibee);
  font-size: 1.5rem;
  width: 259px;
  height: 187px;
  background-color: white;
  color: black;
  border: solid 10px black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 0;
}
.contenedor h3 {
  text-align: center;
  letter-spacing: 0.5rem;
  margin-top: 10px;
}
.contenedor-p {
  flex-grow: 1;
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.parrafo-maquina,
.parrafo-persona {
  margin: 0;
  text-align: end;
  letter-spacing: 0.5rem;
}
  </style>
  <div class="ganaste">
  <estrella-el></estrella-el>
  <div class="container">
    <h3>Score</h3>
    <div class="container-p">
      <p class="p-persona">Vos: 3</p>
      <p class="p-maquina">Maquina: 3</p>
    </div>
  </div>
   <button-el>Volver a Jugar!</button-el>  
   <!--   <button-el>Ir al Inicio!</button-el>
  -->
  </div>
  <!--  -->
  <div class="perdiste">
  <estrella-el invertida></estrella-el>
  <div class="contenedor">
    <h3>Score</h3>
    <div class="contenedor-p">
    <p class="parrafo-persona">Vos: 3</p>
    <p class="parrafo-maquina">Maquina: 3</p>
    </div>
    </div>
    <button-el class="volver-jugar">Volver a Jugar!</button-el>
    <!-- <button-el>Ir al Inicio!</button-el>  -->

  
</div>
  `;
    const volverAlInicio = divEl.querySelector("button-el");
    volverAlInicio.addEventListener("click", ()=>{
        params.goTo("/inicio");
    });
    const volverAlInicioDos = divEl.querySelector(".volver-jugar");
    volverAlInicioDos.addEventListener("click", ()=>{
        params.goTo("/inicio");
    });
    // localStorage.removeItem("saved-state");
    let newCurrentState = (0, _stateTs.state).getState();
    const pPersona = divEl.querySelector(".p-persona");
    pPersona.textContent = `Vos: ${newCurrentState.scores.myScore}`;
    const pMaquina = divEl.querySelector(".p-maquina");
    pMaquina.textContent = `Maquina: ${newCurrentState.scores.pcScore}`;
    const parrafoPersona = divEl.querySelector(".parrafo-persona");
    parrafoPersona.textContent = `Vos: ${newCurrentState.scores.myScore}`;
    const parrafoMaquina = divEl.querySelector(".parrafo-maquina");
    parrafoMaquina.textContent = `Maquina: ${newCurrentState.scores.pcScore}`;
    // Suponiendo que tienes una variable que indica si el jugador ganó o perdió
    let juegoGanado;
    if (newCurrentState.scores.pcScore > newCurrentState.scores.myScore) juegoGanado = false;
    else juegoGanado = true;
    const mostrarDivGanaste = divEl.querySelector(".ganaste");
    const mostrarDivPerdiste = divEl.querySelector(".perdiste");
    if (juegoGanado) {
        mostrarDivGanaste.style.display = "flex"; // Muestra el div de ganaste
        mostrarDivPerdiste.style.display = "none"; // Oculta el div de perdido
    } else {
        mostrarDivGanaste.style.display = "none"; // Oculta el div de ganado
        mostrarDivPerdiste.style.display = "flex"; // Muestra el div de perdido
    }
    return divEl;
}

},{"../../state.ts":"dWXvP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["3dtlh","gH3Lb"], "gH3Lb", "parcelRequire9dfa", {}, "./", "/")

//# sourceMappingURL=ppt-local.34df32e0.js.map
