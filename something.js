if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("https://pavansproject.github.io/sw.js");
	console.log("Service worker is registered");
}

//import * as Realm from "realm-web";
/*const app = new Realm.App({id: application-1-ukdhb});

const credentials = Realm.Credentials.anonymous();
const user = await app.logIn(credentials);
console.assert(user.id === app.currentUser.id);*/
const id = application-1-ukdhb;
const config = {
	id,
};
const app = new Realm.App(config);