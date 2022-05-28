if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("https://pavansproject.github.io/sw.js");
	console.log("Service worker is registered");
}

//import * as Realm from "realm-web";
//const id = "application-1-ukdhb"; // replace this with your App ID
/*const config = {
	id,
  };*/
//const app = new Realm.App({ id: application-1-ukdhb});

const id = "application-1-ukdhb"; // replace this with your App ID
const config = {
	id,
};
const app = new Realm.App(config);

async function loginAnonymous() {
	// Create an anonymous credential
	const credentials = Realm.Credentials.anonymous();
	try {
		// Authenticate the user
		const user = await app.logIn(credentials);
		// `App.currentUser` updates to match the logged in user
		console.assert(user.id === app.currentUser.id);
		return user;
	} catch (err) {
		console.error("Failed to log in", err);
	}
}
async function something() {
	const user = await loginAnonymous();
	console.log("Successfully logged in!", user.id);
}
something();

/*async function hello() {
	console.log("have hope");
	const result = await user.functions.summed(2, 3);
	console.log(result);
};
hello();*/
