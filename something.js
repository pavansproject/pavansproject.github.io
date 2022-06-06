if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("https://pavansproject.github.io/sw.js");
	console.log("Service worker is registered");
}


const id = "application-1-ukdhb"; 
const config = {
	id,
};
//const app = new Realm.App(config);
const app = Realm.App.getApp("application-1-ukdhb");
let hello;
async function keepgoing() {
	const bob = await loginEmailPassword(
		email = document.getElementById("userthing").value,
		password = document.getElementById("passthing").value);
	hello = bob;
	console.log("This should be a promise: " + hello);
	console.log(hello.id);
	alert("lets slow it down now");
	let userinfo = localStorage.setItem("promise", hello);
}

async function please() {
	await app.emailPasswordAuth.registerUser({email : document.getElementById("usersignupthing").value, password : document.getElementById("passsignupthing").value});
	console.log("You have signed up!");
}

function havehope() {
	if (hello == null) {
		hello = localStorage.getItem("promise");
		console.log(hello);
	}
}


async function loginEmailPassword(email, password) {
	
  // Create an anonymous credential
  const credentials = Realm.Credentials.emailPassword(email, password);
  try {
    // Authenticate the user
    const user = await app.logIn(credentials);
    // `App.currentUser` updates to match the logged in user
    console.assert(user.id === app.currentUser.id);
    return user;
  } catch (err) {
    console.error("Failed to log in", err);
	if(err.status = "401"){
		console.log("ummm");
	}
  }
  
}

//This is a test function
  async function okyeahnow() {
	console.log("have hope");
	console.log("Calculating 1 + 1")
	const result = await hello.functions.summed(1, 1);
	console.log("breakpoint 1, this means its done the math");
	console.log(result);
};

//Page 2 Test function
async function letsdothisnow() {
	havehope();
	console.log(hello.id);
	console.log("Beginning calculations");
	const sure = await hello.functions.summed(2, 2);
	console.log("Done the math");
	console.log(sure);
}















