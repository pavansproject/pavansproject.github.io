/*self.addEventListener("install", function (e) {
	e.waitUntil(
		caches.open("supremecacher").then(function(cache) {
			return cache.addAll([
				"https://pavansproject.github.io/index.html",
				"https://pavansproject.github.io/something.js",
				"https://pavansproject.github.io/favicon.ico",
				"https://pavansproject.github.io/mainstyles.css",
				"https://pavansproject.github.io/page2.html",
				"https://pavansproject.github.io/pavansproject.webmanifest",
				"https://pavansproject.github.io/sw.js",
				"https://pavansproject.github.io/computer 128x128.png",
				"https://pavansproject.github.io/computer 512x512.png"
			]);
		}),
	);
});*/

const addResourcesToCache = async (resources) => {
	const cache = await caches.open("nicecacher");
	await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
	event.waitUntil(
	  addResourcesToCache([
		"https://pavansproject.github.io/index.html",
		"https://pavansproject.github.io/something.js",
		"https://pavansproject.github.io/favicon.ico",
		"https://pavansproject.github.io/mainstyles.css",
		"https://pavansproject.github.io/page2.html",
		"https://pavansproject.github.io/pavansproject.webmanifest",
		"https://pavansproject.github.io/sw.js",
		"https://pavansproject.github.io/computer 128x128.png",
		"https://pavansproject.github.io/computer 512x512.png"
	  ])
	);
  });
  




self.addEventListener("fetch", (e) => {
		console.log(e.request.url);
		try{
		e.respondWith(
			caches.match(e.request).then((response) => response || fetch(e.request))
		);
		} catch (error){
			console.error("Uh oh" + error);
			caches.match("./fallbackpg.html");
		}

	});
console.log("Cache is made?");
