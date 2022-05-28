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
  



async function hello() {
	console.log("have hope");
	const result = await user.functions.summed(2, 3);
	console.log(result);
};
hello();



