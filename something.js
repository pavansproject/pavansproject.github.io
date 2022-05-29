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
let user;
async function loginAnonymous() {
	// Create an anonymous credential
	const credentials = Realm.Credentials.anonymous();
	try {
		// Authenticate the user
		user = await app.logIn(credentials);
		// `App.currentUser` updates to match the logged in user
		console.assert(user.id === app.currentUser.id);
		return user;
	} catch (err) {
		console.error("Failed to log in", err);
	}
	return user;
}
let bob = user;
console.log(user);

async function something(user) {
	user = await loginAnonymous();
	console.log("Successfully logged in!", user.id);
	let hello = user.id;
	return hello;
}


async function hello() {
	console.log("have hope");
	//const user = await loginAnonymous();
	console.log("breakpoint 1, this means its using the user variable");
	const result = await user.functions.summed(2, 3);
	console.log(result);
}
hello();
