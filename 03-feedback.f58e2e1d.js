!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l.default(e,t,n[t])}))}return e};var i,l=(i=o("hKHmD"))&&i.__esModule?i:{default:i};var a=o("1WSnx").throttle,f={email:"",message:""},c=document.querySelector("input"),d=document.querySelector("textarea"),s=document.querySelector("form");c.addEventListener("input",(function(){f=e(u)({},f,{email:c.value})})),d.addEventListener("input",(function(){f=e(u)({},f,{message:d.value})})),s.addEventListener("input",a((function(){localStorage.setItem("input_info",JSON.stringify(f))}),500));var p=JSON.parse(localStorage.getItem("input_info"));c.addEventListener("blur",(function(){""==c.value&&(c.value=p.email),""==d.value&&(d.value=p.message)}));document.querySelector("submit")}();
//# sourceMappingURL=03-feedback.f58e2e1d.js.map
