"use strict";var precacheConfig=[["/index.html","e175c8c232ae139d68ffe6493e273359"],["/static/css/main.9b0fa4cb.css","06b5de6f9e36146f6e87429fccfef6cb"],["/static/js/main.668beead.js","e8c009c27cda0d7ba566c60c632fbbe1"],["/static/media/SEGA.12a3db8b.woff","12a3db8ba7f5423327bb12aed3c41977"],["/static/media/anonymus.7cc54cb3.png","7cc54cb3e6499673de8cd41d7d614687"],["/static/media/connect.34c16d41.png","34c16d41e31850d08d517ce04c2f305b"],["/static/media/cross.2393d9a9.png","2393d9a995bf3fc2111d6eb06cadabe7"],["/static/media/delete.653fbfa7.jpg","653fbfa7a4d9ed04f04aeb0ab8f4ce32"],["/static/media/edit.d37d9400.svg","d37d94008347a67f103811601107af7f"],["/static/media/liked.f220c35d.png","f220c35d7cc9eb4e82307b0bc3653bf3"],["/static/media/logo.6f53aaa3.png","6f53aaa36d33cbe40b10c1eaf3d9cfd3"],["/static/media/notlike.987ae2ff.png","987ae2fff40995a0813cae1be7436991"],["/static/media/qna.246f82aa.JPG","246f82aa3b0fc92811297440bc9b99ac"],["/static/media/search.764c604f.jpg","764c604f27701d4b315df0b2356450a5"],["/static/media/warning.5b47818f.png","5b47818f25b52357bee88df2151ba584"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});