"use strict";var precacheConfig=[["/index.html","8abd6b7e115654054d945890658ac2ee"],["/static/css/main.0456e59c.css","ec898e98c37b11e44d15b551661aee1e"],["/static/js/main.0af5bdcf.js","34750ab432ee5a67470a821572d53e79"],["/static/media/SEGA.12a3db8b.woff","12a3db8ba7f5423327bb12aed3c41977"],["/static/media/anonymus.dfdf06d8.png","dfdf06d8a77a9f34b91320c211461078"],["/static/media/attach.9abe47ab.png","9abe47abef90ccf754484c12119b1689"],["/static/media/bgi.966772a1.jpg","966772a10843a1456ca37c69783cb862"],["/static/media/connect.1d84c1ff.png","1d84c1ff25e985f45b9d583db1218518"],["/static/media/cross.2393d9a9.png","2393d9a995bf3fc2111d6eb06cadabe7"],["/static/media/delete.653fbfa7.jpg","653fbfa7a4d9ed04f04aeb0ab8f4ce32"],["/static/media/edit.d37d9400.svg","d37d94008347a67f103811601107af7f"],["/static/media/left-upper-illustration.9516fd56.svg","9516fd565b350839e4d70c632ba62d3f"],["/static/media/liked.f220c35d.png","f220c35d7cc9eb4e82307b0bc3653bf3"],["/static/media/logo.6f53aaa3.png","6f53aaa36d33cbe40b10c1eaf3d9cfd3"],["/static/media/lower-right-illustration.2e28022f.svg","2e28022fa61582b9ff59955836e9a8f1"],["/static/media/notlike.987ae2ff.png","987ae2fff40995a0813cae1be7436991"],["/static/media/qna.7120f8b2.png","7120f8b211157f875ef6d1e0c828b53d"],["/static/media/robot-illustration.b73cca0f.svg","b73cca0f70c1a6b05ef7268b4c9e7fed"],["/static/media/robot-illustration.c98f3fe3.png","c98f3fe3ba71628d70c685a3fae63e59"],["/static/media/search.764c604f.jpg","764c604f27701d4b315df0b2356450a5"],["/static/media/warning.5b47818f.png","5b47818f25b52357bee88df2151ba584"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});