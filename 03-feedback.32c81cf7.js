!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var a,n=o("1WSnx"),l=document.querySelector(".feedback-form"),i=document.querySelector(".feedback-form input"),u=document.querySelector(".feedback-form textarea"),d=function(){localStorage.setItem("feedback-form-state",JSON.stringify({email:i.value,message:u.value}))};i.addEventListener("input",(0,n.throttle)(d,500)),u.addEventListener("input",(0,n.throttle)(d),500),l.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:i.value,message:u.value}),l.reset(),localStorage.clear()})),(a=JSON.parse(localStorage.getItem("feedback-form-state")))&&(i.value=a.email,u.value=a.message)}();
//# sourceMappingURL=03-feedback.32c81cf7.js.map
