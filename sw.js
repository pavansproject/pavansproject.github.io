self.addEventListener("install", function (e) {
	e.waitUntil(
		caches.open("supremecacher").then(function(cache) {
			return cache.addAll([
				"./index.html",
				"./something.js",
				"./favicon.ico",
				"./mainstyles.css",
				"./page2.html",
				"./pavansproject.webmanifest"
			]);
		}),
	);
});
self.addEventListener("fetch", (e) => {
		console.log(e.request.url);
		e.respondWith(
			caches.match(e.request).then((response) => response || fetch(e.request))
		);
	});
console.log("Cache is made and service worker installed");
