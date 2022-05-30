if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("https://pavansproject.github.io/sw.js");
	console.log("Service worker is registered");
}


const id = "application-1-ukdhb"; 
const config = {
	id,
};
const app = new Realm.App(config);
const okapp = Realm.App.getApp("application-1-ukdhb");

async function keepgoing() {
	const email = document.getElementById("userthing").value;
	const password = document.getElementById("passthing").value;
	const bob = await loginEmailPassword(
		email = document.getElementById("userthing").value,
		password = document.getElementById("passthing").value);
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

//const user = await loginEmailPassword("joe.jasper@example.com", "passw0rd");
//console.log("Successfully logged in!", user);



















//Time for email and password authentication
/*async function loginEmailPassword(email = document.getElementById("userthing").value, password = document.getElementById("passthing").value) {
	// Create an anonymous credential
	const credentials = Realm.Credentials.emailPassword(email, password);
	let sigh = async () => {
		let user = async () => {
			try {
				// Authenticate the user
				const user = await app.logIn(credentials);
				// `App.currentUser` updates to match the logged in user
				console.assert(user.id === app.currentUser.id);
				console.log("First step: " + user);
				return user;
			} catch (err) {
				console.error("Failed to log in", err);
				if (err.status = "401") {
					console.log("ummm");
				}
			}
		}
		console.log("Second step: " + user);
		return user;
	}
	console.log("Third step: " + sigh);
	return sigh;
  };
  
  let bob;
  function keepgoing(email, password) {
	  bob = loginEmailPassword(email, password);
	  console.log("I did it!" + bob);
  }*/
























  /*const suser = function okletsgo(){
	const email = document.getElementById("userthing").value;
	const password = document.getElementById("passthing").value;
	const user = loginEmailPassword(email, password);
	console.log("Successfully logged in!", user);
	huh();
	alert("success?");
	return user;
  };*/
  	//const email = document.getElementById("userthing").value;
	//const password = document.getElementById("passthing").value;
  	//const user = loginEmailPassword(email, password);


  	function huh(){
		console.log("user should be accessible");
		console.log(suser);
	  };
	
  //const email = document.getElementById("userthing").value;
  //const password = document.getElementById("passthing").value;
  //const user = loginEmailPassword(email, password);
  //console.log("Successfully logged in!", user);
  
  /*async function hello() {
	console.log("have hope");
	const user = await loginEmailPassword();
	const result = await user.functions.summed(2, 3);
	console.log("breakpoint 1, this means its done the math");
	console.log(result);
}
hello();*/














/*Note: The problem here is that the user variable from the loginAnonymous
 function is being restricted to just the function scope, and I have been 
 trying to get it into the global scope. This is so that I won't have to 
 do "const user = await loginAnonymous();" each time I want to have it use
  something that depends on the user.*/
/*let user;
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
console.log(hello.id);

async function hello() {
	console.log("have hope");
	//const user = await loginAnonymous();
	console.log("breakpoint 1, this means its using the user variable");
	const result = await user.functions.summed(2, 3);
	console.log(result);
}
hello();*/
