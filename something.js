if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("https://pavansproject.github.io/sw.js");
    console.log("Service worker is registered");
  }
