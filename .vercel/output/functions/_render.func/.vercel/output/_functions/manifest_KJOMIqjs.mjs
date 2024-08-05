import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_B5-HWYXN.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BrX6Z7n4.js"}],"styles":[{"type":"external","src":"/_astro/about.D3bCPZLU.css"},{"type":"inline","content":".active{color:#fff;background-color:#000;border-radius:2px;box-shadow:2px 2px #fbbf24;font-size:110%;padding:6px 3px;margin-right:6px}ul li a{font-family:Metal,system-ui}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BrX6Z7n4.js"}],"styles":[{"type":"external","src":"/_astro/about.D3bCPZLU.css"},{"type":"external","src":"/_astro/about.C9Z5H_JY.css"},{"type":"inline","content":".active{color:#fff;background-color:#000;border-radius:2px;box-shadow:2px 2px #fbbf24;font-size:110%;padding:6px 3px;margin-right:6px}ul li a{font-family:Metal,system-ui}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BrX6Z7n4.js"}],"styles":[{"type":"external","src":"/_astro/about.D3bCPZLU.css"},{"type":"inline","content":".form{color:#fff;background-color:#818cf8;border-radius:2px;box-shadow:8px 8px #fbbf24;font-size:110%;margin-right:4px}h1{font-family:Lora Variable,serif;line-height:2.5rem}\n.active{color:#fff;background-color:#000;border-radius:2px;box-shadow:2px 2px #fbbf24;font-size:110%;padding:6px 3px;margin-right:6px}ul li a{font-family:Metal,system-ui}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BrX6Z7n4.js"}],"styles":[{"type":"external","src":"/_astro/about.D3bCPZLU.css"},{"type":"inline","content":".active{color:#fff;background-color:#000;border-radius:2px;box-shadow:2px 2px #fbbf24;font-size:110%;padding:6px 3px;margin-right:6px}ul li a{font-family:Metal,system-ui}\n"}],"routeData":{"route":"/projects/tag/[...tag]","isIndex":false,"type":"page","pattern":"^\\/projects\\/tag(?:\\/(.*?))?\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"tag","dynamic":false,"spread":false}],[{"content":"...tag","dynamic":true,"spread":true}]],"params":["...tag"],"component":"src/pages/projects/tag/[...tag].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BrX6Z7n4.js"}],"styles":[{"type":"external","src":"/_astro/about.D3bCPZLU.css"},{"type":"inline","content":"h1{font-family:Lora Variable,serif;line-height:2.5rem}\n.active{color:#fff;background-color:#000;border-radius:2px;box-shadow:2px 2px #fbbf24;font-size:110%;padding:6px 3px;margin-right:6px}ul li a{font-family:Metal,system-ui}\n"}],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BrX6Z7n4.js"}],"styles":[{"type":"external","src":"/_astro/about.D3bCPZLU.css"},{"type":"inline","content":"p{margin:20px 0;line-height:1.8rem}h2{margin:20px 0;font-size:1.8rem;font-weight:600;margin-bottom:1rem}h2+p:first-letter{color:#fff;background-color:#000;border-radius:2px;box-shadow:3px 3px #fbbf24;font-size:250%;padding:6px 3px;margin-right:6px;float:left}ol{list-style-type:disc;padding-left:1rem;line-height:1.8rem}\n.active{color:#fff;background-color:#000;border-radius:2px;box-shadow:2px 2px #fbbf24;font-size:110%;padding:6px 3px;margin-right:6px}ul li a{font-family:Metal,system-ui}\n"}],"routeData":{"route":"/projects/[...slug]","isIndex":false,"type":"page","pattern":"^\\/projects(?:\\/(.*?))?\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/projects/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.D3bCPZLU.css"}],"routeData":{"route":"/test","isIndex":false,"type":"page","pattern":"^\\/test\\/?$","segments":[[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test.astro","pathname":"/test","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BrX6Z7n4.js"}],"styles":[{"type":"external","src":"/_astro/about.D3bCPZLU.css"},{"type":"inline","content":"@font-face{font-family:\"Cedarville Cursive\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/cedarville-cursive-latin-400-normal.iwxzJfoE.woff2) format(\"woff2\"),url(/_astro/cedarville-cursive-latin-400-normal.7KdGsMYE.woff) format(\"woff\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}h1+span{font-family:Lora Variable,serif;line-height:2.5rem}.featured{color:#fff;background-color:#eef2ff;border-radius:2px;box-shadow:8px 8px #fbbf24;font-size:110%;margin-right:4px}h2{font-family:Lora Variable,serif;line-height:2.5rem}\n.active{color:#fff;background-color:#000;border-radius:2px;box-shadow:2px 2px #fbbf24;font-size:110%;padding:6px 3px;margin-right:6px}ul li a{font-family:Metal,system-ui}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/projects/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/projects/tag/[...tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/tag/[...tag]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_DgonQVgC.mjs","/src/pages/contact.astro":"chunks/pages/contact_B1KNV2tt.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Ba9nUTpt.mjs","/src/pages/test.astro":"chunks/pages/test_B4b7ucsS.mjs","\u0000@astrojs-manifest":"manifest_KJOMIqjs.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_daDdRx9B.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_Dt8vOK9e.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_BmWbYkqY.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_RvCBAfJv.mjs","\u0000@astro-page:src/pages/projects/tag/[...tag]@_@astro":"chunks/_.._CtHws9nk.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_LP_g6pht.mjs","\u0000@astro-page:src/pages/projects/[...slug]@_@astro":"chunks/_.._BMLbA3zh.mjs","\u0000@astro-page:src/pages/test@_@astro":"chunks/test_CEkp8RwV.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Dgu4Gvcl.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/drivingschool-landingpage.md?astroContentCollectionEntry=true":"chunks/drivingschool-landingpage_aKSJI5iO.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/pet-care-website.md?astroContentCollectionEntry=true":"chunks/pet-care-website_B3nnf8Ga.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/portfolio-website.md?astroContentCollectionEntry=true":"chunks/portfolio-website_ChmQsvHh.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/rifvy.md?astroContentCollectionEntry=true":"chunks/rifvy_B8LQj94s.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/shamanic.md?astroContentCollectionEntry=true":"chunks/shamanic_Zua7CIb2.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/todo-app.md?astroContentCollectionEntry=true":"chunks/todo-app_B-7mTSZO.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/drivingschool-landingpage.md?astroPropagatedAssets":"chunks/drivingschool-landingpage_CNlZXRrU.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/pet-care-website.md?astroPropagatedAssets":"chunks/pet-care-website_DPnTJZGH.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/portfolio-website.md?astroPropagatedAssets":"chunks/portfolio-website_CwvsIPPg.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/rifvy.md?astroPropagatedAssets":"chunks/rifvy_BDb-pYxE.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/shamanic.md?astroPropagatedAssets":"chunks/shamanic_al04iIKl.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/todo-app.md?astroPropagatedAssets":"chunks/todo-app_Cuvg9TGW.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/drivingschool-landingpage.md":"chunks/drivingschool-landingpage_nraNQ2yi.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/pet-care-website.md":"chunks/pet-care-website_DYwsGc7B.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/portfolio-website.md":"chunks/portfolio-website_C1BDvX7W.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/rifvy.md":"chunks/rifvy_BeMmmQg6.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/shamanic.md":"chunks/shamanic_ZxC8UdIi.mjs","C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/todo-app.md":"chunks/todo-app_B2niaXNO.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BrX6Z7n4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/aboutImg.C8eO2e0m.png","/_astro/logoB.BoEtmN-K.png","/_astro/catsham.B5YStQOs.png","/_astro/1.fQ26yvH7.png","/_astro/cedarville-cursive-latin-400-normal.iwxzJfoE.woff2","/_astro/lora-cyrillic-ext-wght-normal.BU83u1rA.woff2","/_astro/lora-cyrillic-wght-normal.jFvAfotC.woff2","/_astro/lora-symbols-wght-normal.CY1XnJg6.woff2","/_astro/lora-vietnamese-wght-normal.DM_poPwB.woff2","/_astro/lora-latin-wght-normal.BCvxm8Te.woff2","/_astro/lora-math-wght-normal.Z_Oh2JgV.woff2","/_astro/lora-latin-ext-wght-normal.DVZdNwTD.woff2","/_astro/cedarville-cursive-latin-400-normal.7KdGsMYE.woff","/_astro/about.D3bCPZLU.css","/_astro/about.C9Z5H_JY.css","/favicon.svg","/Website-img/bootstrapexpret.png","/Website-img/contact-bootstrap.png","/Website-img/driving-card.png","/Website-img/driving1.png","/Website-img/drivingreview.png","/Website-img/Flower-cake.png","/Website-img/healing.png","/Website-img/pet-contact.png","/Website-img/pet-features.png","/Website-img/petcare.png","/Website-img/portfolio.png","/Website-img/shaman-card.png","/Website-img/shamancategroy.png","/Website-img/todo-app edit.png","/Website-img/todoapp.png","/_astro/hoisted.BrX6Z7n4.js"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
