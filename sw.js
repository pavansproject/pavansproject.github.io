self.addEventListener("install", function (e) {
	e.waitUntil(
		caches.open("supremecacher").then(function(cache) {
			return cache.addAll([
				"https://pavansproject.github.io/index.html",
				"https://pavansproject.github.io/something.js",
			]);
		}),
	);
});
self.addEventListener("fetch", function (e) {
	console.log(e.request.url);
	e.respondWith(
		caches.match(e.request).then(function (response) {
			return response || fetch(e.request);
		}),
	);
});
console.log("Cache is made and service worker installed");
