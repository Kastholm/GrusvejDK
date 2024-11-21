globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=31536000, immutable"}}}},"public":{"gtag":{"enabled":true,"id":"G-EKGCY9LVYF","initCommands":[],"config":{},"tags":[],"loadingStrategy":"defer","url":"https://www.googletagmanager.com/gtag/js"}},"mailerUser":"","mailerPass":"","mailerLog":""};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"c9e-MT7FbvHsffPQcGrGACvW3BDRNYc\"",
    "mtime": "2024-11-21T17:52:50.883Z",
    "size": 3230,
    "path": "../public/favicon.ico"
  },
  "/img/gammelGrusvej.png": {
    "type": "image/png",
    "etag": "\"56dfa-mZjd4SQynL1vdOlM9bSmnG/odzI\"",
    "mtime": "2024-11-19T12:51:44.207Z",
    "size": 355834,
    "path": "../public/img/gammelGrusvej.png"
  },
  "/img/Grusvej-logo-lille.png.png": {
    "type": "image/png",
    "etag": "\"280b-FSWRG6ECWcX4v1PxMOWhvmuPTVY\"",
    "mtime": "2024-11-19T12:51:44.199Z",
    "size": 10251,
    "path": "../public/img/Grusvej-logo-lille.png.png"
  },
  "/img/Grusvej-logo-stor.png.png": {
    "type": "image/png",
    "etag": "\"499d-2Fyido5X6zWzDkz/ixExwX5YLyM\"",
    "mtime": "2024-11-19T12:51:44.203Z",
    "size": 18845,
    "path": "../public/img/Grusvej-logo-stor.png.png"
  },
  "/img/nyGrusvej.png": {
    "type": "image/png",
    "etag": "\"a4091-xEasnTdpqNCXZsHu35MvRkkrByI\"",
    "mtime": "2024-11-19T12:51:44.212Z",
    "size": 671889,
    "path": "../public/img/nyGrusvej.png"
  },
  "/video/Final-loading-_screen-Grusvej.dk.mp4": {
    "type": "video/mp4",
    "etag": "\"b7d0-4Pr3uBboRoQM74w5U6ozF0Bb0tc\"",
    "mtime": "2024-11-19T12:51:44.216Z",
    "size": 47056,
    "path": "../public/video/Final-loading-_screen-Grusvej.dk.mp4"
  },
  "/_nuxt/default.d4e6aed3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"148-cnS6rJUoi8Zo9TnUCtCPtQjThCA\"",
    "mtime": "2024-11-21T18:42:40.510Z",
    "size": 328,
    "path": "../public/_nuxt/default.d4e6aed3.css"
  },
  "/_nuxt/default.fa59fe76.js": {
    "type": "application/javascript",
    "etag": "\"5e21-+2LamaiGOUM9pwFQ9hHJTnhtd/I\"",
    "mtime": "2024-11-21T18:42:40.514Z",
    "size": 24097,
    "path": "../public/_nuxt/default.fa59fe76.js"
  },
  "/_nuxt/entry.3c2dc304.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13460-ZRsE/iqmuWN/cKVdhLq7E+Wrc34\"",
    "mtime": "2024-11-21T18:42:40.506Z",
    "size": 78944,
    "path": "../public/_nuxt/entry.3c2dc304.css"
  },
  "/_nuxt/entry.75a520ca.js": {
    "type": "application/javascript",
    "etag": "\"2f9b9-kmqHtj8aV5ygxDOMrTuW9f9lE84\"",
    "mtime": "2024-11-21T18:42:40.514Z",
    "size": 195001,
    "path": "../public/_nuxt/entry.75a520ca.js"
  },
  "/_nuxt/error-404.139bd5af.js": {
    "type": "application/javascript",
    "etag": "\"908-MHKb4s8JetYVkH3AMZoCE09kbJg\"",
    "mtime": "2024-11-21T18:42:40.514Z",
    "size": 2312,
    "path": "../public/_nuxt/error-404.139bd5af.js"
  },
  "/_nuxt/error-404.95c28eb4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-L8dF9pJCW0qi7de8Az4GyBoTHvI\"",
    "mtime": "2024-11-21T18:42:40.510Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.95c28eb4.css"
  },
  "/_nuxt/error-500.e03d72dd.js": {
    "type": "application/javascript",
    "etag": "\"78c-G78Zj3VW7RuIQeOVua8QtYcQTlc\"",
    "mtime": "2024-11-21T18:42:40.514Z",
    "size": 1932,
    "path": "../public/_nuxt/error-500.e03d72dd.js"
  },
  "/_nuxt/error-500.e798523c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-QP983DB9m1oiDr87r1V1AYEhrfo\"",
    "mtime": "2024-11-21T18:42:40.510Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.e798523c.css"
  },
  "/_nuxt/error-component.76890aab.js": {
    "type": "application/javascript",
    "etag": "\"4cc-cDG6efm+N9CWJgK0PBSWA6PC7JQ\"",
    "mtime": "2024-11-21T18:42:40.510Z",
    "size": 1228,
    "path": "../public/_nuxt/error-component.76890aab.js"
  },
  "/_nuxt/grusveje.68e1b5e7.js": {
    "type": "application/javascript",
    "etag": "\"29be-YOBeYlpgtv2uveUvde+mBkJkTyU\"",
    "mtime": "2024-11-21T18:42:40.514Z",
    "size": 10686,
    "path": "../public/_nuxt/grusveje.68e1b5e7.js"
  },
  "/_nuxt/grusveje.de38e889.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5e0-Rv4fKJt179W6+jmpjQQjRAvo3sU\"",
    "mtime": "2024-11-21T18:42:40.510Z",
    "size": 1504,
    "path": "../public/_nuxt/grusveje.de38e889.css"
  },
  "/_nuxt/index.26a58ffc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"390-yD87SDiDT3TgKDOwYNLfTY9VZ/8\"",
    "mtime": "2024-11-21T18:42:40.510Z",
    "size": 912,
    "path": "../public/_nuxt/index.26a58ffc.css"
  },
  "/_nuxt/index.4fcdc1d7.js": {
    "type": "application/javascript",
    "etag": "\"1518-GfIX/jU5AR2ipqXHo9RWlPOWxYg\"",
    "mtime": "2024-11-21T18:42:40.510Z",
    "size": 5400,
    "path": "../public/_nuxt/index.4fcdc1d7.js"
  },
  "/_nuxt/index.ac486a13.js": {
    "type": "application/javascript",
    "etag": "\"343f-RceoI+3i1qFA+P52MfexVa1y6e4\"",
    "mtime": "2024-11-21T18:42:40.514Z",
    "size": 13375,
    "path": "../public/_nuxt/index.ac486a13.js"
  },
  "/_nuxt/kontakt.83ce120b.js": {
    "type": "application/javascript",
    "etag": "\"17cf-N2YTPoS3Esi1PdtBTpgdYhs9i6U\"",
    "mtime": "2024-11-21T18:42:40.510Z",
    "size": 6095,
    "path": "../public/_nuxt/kontakt.83ce120b.js"
  },
  "/_nuxt/loading.b27154ec.js": {
    "type": "application/javascript",
    "etag": "\"216-u2coEcBl5sus3yrSBzq/6uCBj+8\"",
    "mtime": "2024-11-21T18:42:40.513Z",
    "size": 534,
    "path": "../public/_nuxt/loading.b27154ec.js"
  },
  "/_nuxt/loading.d4c46476.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ae-90jMILdcsJrsK9+BcbmpDHPfX6U\"",
    "mtime": "2024-11-21T18:42:40.510Z",
    "size": 174,
    "path": "../public/_nuxt/loading.d4c46476.css"
  },
  "/_nuxt/maskineriet.22d92d5b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6ae-B9ph0OZD2ikkg8ibPnTseDkn7Jc\"",
    "mtime": "2024-11-21T18:42:40.510Z",
    "size": 1710,
    "path": "../public/_nuxt/maskineriet.22d92d5b.css"
  },
  "/_nuxt/maskineriet.e7a6eab2.js": {
    "type": "application/javascript",
    "etag": "\"2890-Fy5ACWXmfd/Adol/0x2Q0hepu0k\"",
    "mtime": "2024-11-21T18:42:40.513Z",
    "size": 10384,
    "path": "../public/_nuxt/maskineriet.e7a6eab2.js"
  },
  "/_nuxt/naturstier.b276c04e.js": {
    "type": "application/javascript",
    "etag": "\"3657-+1GRuDZURkvTJRsVrrImhQPwiEM\"",
    "mtime": "2024-11-21T18:42:40.514Z",
    "size": 13911,
    "path": "../public/_nuxt/naturstier.b276c04e.js"
  },
  "/_nuxt/naturstier.cbf41836.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"631-2TogXhyP9S+ZZIvaDVaeBhnQF0U\"",
    "mtime": "2024-11-21T18:42:40.510Z",
    "size": 1585,
    "path": "../public/_nuxt/naturstier.cbf41836.css"
  },
  "/_nuxt/nuxt-link.ec214754.js": {
    "type": "application/javascript",
    "etag": "\"10e3-hAQAnpgxJKXsjXOubVUibYxhx00\"",
    "mtime": "2024-11-21T18:42:40.511Z",
    "size": 4323,
    "path": "../public/_nuxt/nuxt-link.ec214754.js"
  },
  "/_nuxt/nyheder.05d4ea9b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"77f-m7XkSuBQ6wscbsDlp7jrK/QZDrE\"",
    "mtime": "2024-11-21T18:42:40.510Z",
    "size": 1919,
    "path": "../public/_nuxt/nyheder.05d4ea9b.css"
  },
  "/_nuxt/nyheder.56a31bfb.js": {
    "type": "application/javascript",
    "etag": "\"2342-6bKHcCxTgz0BJkr796uxcqRUhTQ\"",
    "mtime": "2024-11-21T18:42:40.514Z",
    "size": 9026,
    "path": "../public/_nuxt/nyheder.56a31bfb.js"
  },
  "/_nuxt/player.es.72f0a41f.js": {
    "type": "application/javascript",
    "etag": "\"965e-jw+vBn5FGa0D9TPn8o5al34VM/U\"",
    "mtime": "2024-11-21T18:42:40.511Z",
    "size": 38494,
    "path": "../public/_nuxt/player.es.72f0a41f.js"
  },
  "/_nuxt/serviceaftale.84a123ff.js": {
    "type": "application/javascript",
    "etag": "\"489-N7uSy2zcSWgs1CDQC9ZXkB1Qccg\"",
    "mtime": "2024-11-21T18:42:40.513Z",
    "size": 1161,
    "path": "../public/_nuxt/serviceaftale.84a123ff.js"
  },
  "/_nuxt/serviceaftale.c238d1c2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a8-hQF8eWyP9O7ALul4css7BepRq00\"",
    "mtime": "2024-11-21T18:42:40.510Z",
    "size": 424,
    "path": "../public/_nuxt/serviceaftale.c238d1c2.css"
  },
  "/_nuxt/Serviceaftaler.e7983b04.js": {
    "type": "application/javascript",
    "etag": "\"accf-8NlFp0+LpgsFqy3E3aTgTRgKYSs\"",
    "mtime": "2024-11-21T18:42:40.511Z",
    "size": 44239,
    "path": "../public/_nuxt/Serviceaftaler.e7983b04.js"
  },
  "/_nuxt/Stabiliseringafvejen.aa2ad535.js": {
    "type": "application/javascript",
    "etag": "\"1f2c-+noLAXq75TSvlfuDY0RGuSeEyEo\"",
    "mtime": "2024-11-21T18:42:40.510Z",
    "size": 7980,
    "path": "../public/_nuxt/Stabiliseringafvejen.aa2ad535.js"
  },
  "/_nuxt/Stoevbekaempelse.2487588d.js": {
    "type": "application/javascript",
    "etag": "\"2c93-NON+uVo45mbdaVae9uAq9KXA81Y\"",
    "mtime": "2024-11-21T18:42:40.511Z",
    "size": 11411,
    "path": "../public/_nuxt/Stoevbekaempelse.2487588d.js"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2024-11-21T18:42:40.511Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_1eCWuk = () => import('./send.mjs');
const _lazy_2UoTn4 = () => import('./renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/send', handler: _lazy_1eCWuk, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_2UoTn4, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_2UoTn4, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
