/*if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("sw.js")
	.then(() => console.log("Service worker is registered"));
}*/


const registerServiceWorker = async () => {
	if ('serviceWorker' in navigator) {
	  try {
		const registration = await navigator.serviceWorker.register(
		  'https://pavansproject.github.io/sw.js'
		  );
		if (registration.installing) {
		  console.log('Service worker installing');
		} else if (registration.waiting) {
		  console.log('Service worker installed');
		} else if (registration.active) {
		  console.log('Service worker active');
		}
	  } catch (error) {
		console.error(`Registration failed with ${error}`);
	  }
	}
  };
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#offline_asset_storage
//https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
  registerServiceWorker();
  





const id = "application-1-ukdhb"; 

//const app = new Realm.App(config);
//const app = Realm.App.getApp("application-1-ukdhb");

//Yeah this code was supposed to help me control what happens because of errors, but meh
// try{
// 	const app = Realm.App.getApp("application-1-ukdhb");
// }catch (error){
// 	console.error("There is an error" + error);
// 	if(error.name === "TypeError"){
// 		console.log("The error is a typerror")
// 	}
// }

const app = Realm.App.getApp("application-1-ukdhb");


/*
-----------------------
---LOGIN AND SIGN UP---
-----------------------
*/ 
/*-----PRIMARY LOGIN SYSTEM-----*/
//Main Login Function, usernamepassword
async function keepgoing() {
	// console.log(`keepgoing has the stuff: ${signintime}`);
	const bob = await loginEmailPassword(
		email = document.getElementById("loginemail").value,
		password = document.getElementById("loginpassword").value)
		.then(() => {
			yes("success");
		})
		.catch(error => yes("error", error));
}
//Login Notification pop up
function yes(result, error) {
	const notifier = document.getElementById("loginnotifier");
	if(result === "success") {
		notifier.innerText = "You have successfully logged in!";
	} else if(result === "error") {
		notifier.innerText = "There was a problem logging in. Here is the error:" + error;
	}
}

/*-----USER SIGN UP-----*/
async function please() {
	await app.emailPasswordAuth.registerUser({email : document.getElementById("usersignupthing").value, password : document.getElementById("passsignupthing").value})
	.then(() => {
		yes2("success");
	})
	.catch(error => yes2("error", error));
}
//Creates an HTML notification on screen
function yes2(result, error) {
	const notifier = document.getElementById("signupnotifier");
	if(result === "success") {
		notifier.innerText = "You have successfully signed up! Now please go to your email and verify your account to use it.";
	} else if(result === "error") {
		notifier.innerText = "There was a problem signing up. Here is the error:" + error;
	}
}
/*-----RESENDING AUTHENTICATION EMAIL-----*/
async function pleaseparttwo() {
	const email = document.getElementById("resendemail").value;
	await app.emailPasswordAuth.resendConfirmationEmail(email)
	.then(() => {
		yes3("success");
	})
	.catch(error => yes3("error", error));
}
//Creates an HTML notification on screen
function yes3(result, error) {
	const notifier = document.getElementById("resendconfirmemail");
	if(result === "success") {
		notifier.innerText = "Verification email resent";
	} else if(result === "error") {
		notifier.innerText = "There was a problem sending the verification email. Here is the error:" + error;
	}
}
/*-----SENDING PASSWORD RESET EMAIL-----*/
async function resetpassemail() {
	const email = document.getElementById("resetpassemail").value;
	await app.emailPasswordAuth.sendResetPasswordEmail({email})
	.then(() => {
		yes4("success");
	})
	.catch(error => yes4("error", error));
}
//Creates an HTML notification on screen
function yes4(result, error) {
	const notifier = document.getElementById("resetpassemailnotifier");
	if(result === "success") {
		notifier.innerText = "Password reset email sent";
	} else if(result === "error") {
		notifier.innerText = "There was a problem sending the password reset email. Here is the error: \n" + error;
	}
}

//Sighhhh
//What happened here:
/*Ok so when you learn how promises in JS work, then run the loginAnonymous
function and once that returns its promise then run the dataretriever function, 
which, uniquely enough, does not NEED the output from the loginanonymous function,
and CAN run without it, just need the logging in to be completely done first, and the stuff
where it does a "new Promise(stuff stuff) => {
	resolve and stuff} and then a mypromise.then(dataretriever)"": THAT DOESN'T WORK =(
so once you get that figured out then do it.
Also fetch is unnecessary as weirdly enough it DOES get the external script, and its nice to
see that its persistent on getting the script lol, HTTP 200 request, but yeah.*/

//Ok so how I did it was I had to follow the example of how to use the .this statement
//as shown on this page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
//You see, you have to pass a parameter to an asynchronous function that will then
//execute whatever code you want, as opposed to directly executing the desired code from the .this statement
//yayyyyy =)

//You know that a lot of hours were spent trying to fix a bug when there is this much
//commented stuff lol

	// console.log("Beginning the timer");
	// setTimeout(() => {
		/*let mypromise = new Promise((resolve, reject) => {
			resolve(dontgiveup());
			reject(console.log("Oh no"));
		});
		let hi = mypromise
			.then(sanitysaver(), console.log("It first went badly"))
			.then(console.log("Ok I think I got it"), console.log("it went badly"))*/
			// .then(console.log(hi));
			// .then(value => {return value + 1;})
			// .then(value => {return value + 1;})
			// .then(value => {return value + 1;})
			// .then(value => {return value + 1;})
			// .then(value => {return value + 1;}, console.log("Uh I did it?"))
		//dontgiveup().then(dataretriever(), console.log(console.error()));
		//dataretriever();
		// console.log("Alright this part works now I think");
		// console.log(hi);
	// }, 10000);
//
window.onload = (event) => {
	console.log("Page is loaded");
	

	let bestpromise = new Promise((resolve, reject) => {
		resolve(loginAnonymous());
		reject("Failed to login from the promised land");
		
	})
		.then((value) => {
			dataretriever();
		}, reason => {
			console.log("Failed to reach data from the promised land (this should not show");
		})
		.then((value) => {
			loginDelete();
		}, reason => {
			console.log("Failed to delete anonymous login account from the promised land(also should not show)")
		})
		.then((value) => {
			//Yeah this happened after many hours of work and perseverance
			console.log("LETS GO I GOT IT I AM THE PROGRAMMER YES YES YESSSSSSSS IT WORKS IT AC TUALLY WAORKS!!!")
		});
}

//Create part of CRUD
async function insertathing() {
	//hellopeople database, secondtry collection
	let mongo = app.currentUser.mongoClient("mongodb-atlas");
	let collection = mongo.db("hellopeople").collection("secondtry");
	//Get the values and log them
	const notename = document.getElementById("notenme").value;
	const noteinfo = document.getElementById("noteinfo").value;
	console.log(`"Stuff is this: ${notename} , and ${noteinfo}"`);
	//Send the value
	const result = await collection.insertOne({
		name: notename,
		noteinformation: noteinfo
	})
	//Show result
	console.log(result);
}
//Read part of CRUD: Uses the findOne function
async function findthenote() {
	//hellopeople database, secondtry collection
	let mongo = app.currentUser.mongoClient("mongodb-atlas");
	let collection = mongo.db("hellopeople").collection("secondtry");
	//Get the values and log them
	const notename = document.getElementById("notedisplayer");
	const notestuff = document.getElementById("note2displayer")
	const noteinfo = document.getElementById("notefinder").value;
	console.log(`"Finding a note with name of ${noteinfo}"`);
	//Send the value
	const found = await collection.findOne({ name: noteinfo })
	//Show result
	console.log(`"Found the note: ${found.name}, and has ${found.noteinformation} in it"`);
	notename.innerText = found.name;
	notestuff.innerText = found.noteinformation;	
}
//Read part of CRUD: Uses the find function (and finds many)
async function findthemall() {
	let mongo = app.currentUser.mongoClient("mongodb-atlas");
	let collection = mongo.db("hellopeople").collection("secondtry");
	const findinfo = document.getElementById("manyfinder").value;
	console.log(`"Finding notes with type: ${findinfo}"`);
	const foundthem = await collection.find({type: findinfo})
	console.log(`"Found them: ${foundthem}`);
}
//Update part of CRUD: Uses the updateOne function
async function updatetheone() {
	let mongo = app.currentUser.mongoClient("mongodb-atlas");
	let collection = mongo.db("hellopeople").collection("secondtry");
	const findquery = document.getElementById("findthingtoupdate").value;
	const changething = document.getElementById("stufftochange").value;
	console.log(`"Going to find ${findquery} and change its information to ${changething}"`);
	const updatesingle = await collection.updateOne(
		{name: findquery},
		{$set: {noteinformation: changething}}
	)
	console.log(updatesingle);
}

async function deletetheone() {
	let mongo = app.currentUser.mongoClient("mongodb-atlas");
	let collection = mongo.db("hellopeople").collection("secondtry");
	const whattodelete = document.getElementById("singledelete").value;
	console.log(`"Deleting ${whattodelete}"`);
	const deletedsingle = await collection.deleteOne({name: whattodelete})
	console.log(deletedsingle);
}



async function massiveinserter() {
	let mongo = app.currentUser.mongoClient("mongodb-atlas");
	let collection = mongo.db("hellopeople").collection("griddataholder");
	const title = document.getElementById("massiveinsert1").value;
	const info = document.getElementById("massiveinsert2").value;
	const price = document.getElementById("massiveinsert3").value;
	const grid = document.getElementById("massiveinsert4").value;
	console.log(`"Here is the info: ${title}, ${info}, ${price}, and ${grid}"`);
	const inserting = await collection.insertOne({
		name: title,
		info: info,
		price: price,
		grid: grid
	})
	console.log(inserting);
}

async function dataretriever() {
	//Note: I add this first line separately
	//Later note: Its really fine, this line does no harm at all, sooo yeah
	try{
		const app = Realm.App.getApp("application-1-ukdhb");
		let mongo = app.currentUser.mongoClient("mongodb-atlas");
		let collection = mongo.db("hellopeople").collection("griddataholder");
		const foundthem = await collection.find({grid: "a"});
		
		console.log(foundthem);
		document.getElementById("item1title").innerText = foundthem[0].name;
		document.getElementById("item1para").innerText = foundthem[0].info;
		document.getElementById("item1price").innerText = foundthem[0].price;

		document.getElementById("item2title").innerText = foundthem[1].name;
		document.getElementById("item2para").innerText = foundthem[1].info;
		document.getElementById("item2price").innerText = foundthem[1].price;

		document.getElementById("item3title").innerText = foundthem[2].name;
		document.getElementById("item3para").innerText = foundthem[2].info;
		document.getElementById("item3price").innerText = foundthem[2].price;

		document.getElementById("item4title").innerText = foundthem[3].name;
		document.getElementById("item4para").innerText = foundthem[3].info;
		document.getElementById("item4price").innerText = foundthem[3].price;

		document.getElementById("item5title").innerText = foundthem[4].name;
		document.getElementById("item5para").innerText = foundthem[4].info;
		document.getElementById("item5price").innerText = foundthem[4].price;

		document.getElementById("item6title").innerText = foundthem[5].name;
		document.getElementById("item6para").innerText = foundthem[5].info;
		document.getElementById("item6price").innerText = foundthem[5].price;

		document.getElementById("item7title").innerText = foundthem[6].name;
		document.getElementById("item7para").innerText = foundthem[6].info;
		document.getElementById("item7price").innerText = foundthem[6].price;
		
		console.log("Complete");
	}catch (error){
		console.error("P-modified: Failed to retrieve data: " + error)
	}
}

async function makecustomdata() {
	const app = Realm.App.getApp("application-1-ukdhb");
	const user = app.currentUser;
	const mongo = app.currentUser.mongoClient("mongodb-atlas");
	const collection = mongo.db("hellopeople").collection("letgowiththis");
	const age = "3";
	const nickname = "bob";
	const userid = user.id;
	const yes = collection.insertOne({
		age: age,
		nickname: nickname,
		userid: userid
	})
	console.log(yes);
}




async function getcustomdata() {
	const app = Realm.App.getApp("application-1-ukdhb");
	const customdata = app.currentUser.customData
		console.log(customdata);
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
	if(err.name === "401"){
		console.log("There has been a problem logging in");
	}
  }
}

async function loginAnonymous() {
	// console.log(`loginAnonymous still have the thing: ${response}`);
	// Create an anonymous credential
	const credentials = Realm.Credentials.anonymous();
	//Note: I add this following line separately
	const app = Realm.App.getApp("application-1-ukdhb");
	try {
	  // Authenticate the user
	  const user = await app.logIn(credentials);
	  // `App.currentUser` updates to match the logged in user
	  console.assert(user.id === app.currentUser.id);
	  return user;
	} catch (error) {
	  console.error("P-modified: Failed to log in anonymously:" + error);
	}
	return response;
  }
  

  async function logoutfunc() {
	const app = Realm.App.getApp("application-1-ukdhb");
	let please = await app.currentUser.logOut()
	console.log(please);
  }

//Validation for Login begins here:
// There are many ways to pick a DOM node; here we get the form itself and the email
	// input box, as well as the span element into which we will place the error message.
	const loginbutton = document.getElementById("loginbutton");

	const loginemail = document.getElementById("loginemail");
	const loginEmailError = document.getElementById("loginemailnotif");

	const loginpassword = document.getElementById("loginpassword");
	const loginPasswordError = document.getElementById("loginpasswordnotif");



	let errornumber
	loginbutton.addEventListener("click", function (event) {
		let thechecker;
		let bob = new Promise((resolve) => {
				resolve(loginAnonymous());
			});
		bob
		.then(() => mongotogooglebridge())
		.catch(value => {
			console.log(value)
		})
		.then(() => loginDelete()) //sad2()
		.then(() => keepgoing()); //sad3()
		
	});

	//Try {} catch (e) {} is how you log an error from a catch
	//THE PROBLEM LIES IN THE REALM
	
	
	function sad1() {
		console.log("Mongo to google has double failed");
	}
	function sad2() {
		console.error("Deleting the Anon Account has failed");
	}
	function sad3() {
		console.error("Logging in has failed");
	}

	async function mongotogooglebridge() {
		let response = grecaptcha.getResponse();
		const user = app.currentUser;
		console.log(`Inside mongotogooglebridge, response is: ${response}`);
		let output = await user.functions.captchaauth(response);
		console.log(output);
		console.log("make me a breakpoint");
		if(output == true) {
			hi = true;
			return true;
		}
		if(output == false) {
			errornumber = 1;
			throw new Error("The captcha has not been completed");
		}
		if(output == undefined) {
			console.log(output)
			throw new Error("Uhhh something has gone wrong...the output variable is undefined...")
		}

		//check here if the captcha was a success or not
	}

	function showEmailError() {
		if (loginemail.validity.valueMissing) {
			// If the field is empty
			// display the following error message.
			loginEmailError.textContent = "You need to enter an e-mail address.";
		} else if (loginemail.validity.typeMismatch) {
			// If the field doesn't contain an loginemail address
			// display the following error message.
			loginEmailError.textContent = "Entered value needs to be an e-mail address.";
		} else if (loginemail.validity.tooShort) {
			// If the data is too short
			// display the following error message.
			loginEmailError.textContent = `Email should be at least ${loginemail.minLength} characters; you entered ${loginemail.value.length}.`;
		}
		// Set the styling appropriately
		loginEmailError.className = "error active";
	}

	function showPasswordError() {
		if (loginpassword.validity.valueMissing) {
			// If the field is empty
			// display the following error message.
			loginPasswordError.textContent = "You need to enter an password";
		} else if (loginpassword.validity.typeMismatch) {
			// If the field doesn't contain an loginpassword address
			// display the following error message.
			loginPasswordError.textContent = "Entered value needs to be a password";
		} else if (loginpassword.validity.tooShort) {
			// If the data is too short
			// display the following error message.
			loginPasswordError.textContent = `Password should be at least ${loginpassword.minLength} characters; you entered ${loginpassword.value.length}.`;
		}
		// Set the styling appropriately
		loginPasswordError.className = "error active";
	}




  
//Ok careful here, time to delete a user
async function loginDelete() {
	try{
	// console.log(`LoginDelete has the stuff: ${stuff}`);
	const app = Realm.App.getApp("application-1-ukdhb");
	const user = app.currentUser;
	let hello = await app.deleteUser(user);
	console.log(hello);
	console.log("Account deleted");
	}catch (error){
		console.error("P-modified: Failed to delete anonymous account: " + error);
	}
}



//This is a test function
  async function okyeahnow() {
	const app = Realm.App.getApp("application-1-ukdhb"); 
	const user = app.currentUser;
	console.log("have hope");
	console.log("Calculating 1 + 1");
	const result = await user.functions.summed(1, 1);
	console.log("breakpoint 1, this means its done the math");
	console.log(result);
}

//Page 2 Test function
async function letsdothisnow() {
	const app = Realm.App.getApp("application-1-ukdhb"); 
	const userhi = app.currentUser;
	console.log(userhi);
	const sure = await userhi.functions.summed(2, 2);
	console.log(sure);
}
/*Key things to remember here is to always first:
	Do Realm.App.getApp to get the current app
	Then do app.currentUser and send that to a 
	variable to get the current user
	Then you're set to use that as the actual current
	user =)*/




function saywhologgedin() {
	const app = Realm.App.getApp("application-1-ukdhb"); 
	// Get an object with all Users, where the keys are the User IDs
for (const userId in app.allUsers) {
	const user = app.allUsers[userId];
	console.log(
	  `User with id ${user.id} is ${
		user.isLoggedIn ? "logged in" : "logged out"
	  }`
	);
  }
}


//This code is for loginvalidity checks to check the format of sending stuff as input
//Supposed to go there under the place where it says "validation for login appears here"


/*loginemail.addEventListener("input", function (event) {
		// Each time the user types something, we check if the
		// form fields are valid.

		if (loginemail.validity.valid) {
			// In case there is an error message visible, if the field
			// is valid, we remove the error message.
			loginEmailError.innerHTML = ""; // Reset the content of the message
			loginEmailError.className = "error"; // Reset the visual state of the message
		} else {
			// If there is still an error, show the correct error
			showEmailError();
		}
	});*/

	/*loginpassword.addEventListener("input", function (event) {
		// Each time the user types something, we check if the
		// form fields are valid.

		if (loginpassword.validity.valid) {
			// In case there is an error message visible, if the field
			// is valid, we remove the error message.
			loginPasswordError.innerHTML = ""; // Reset the content of the message
			loginPasswordError.className = "error"; // Reset the visual state of the message
		} else {
			// If there is still an error, show the correct error
			showPasswordError();
		}
	});*/


	// function loginvaliditychecks(response) {
		// 	// if the form contains valid data, we let it submit
	
		// 	if (!loginemail.validity.valid) {
		// 		// If it isn't, we display an appropriate error message
		// 		showEmailError();
		// 		//Check if password is filled
		// 		if (!loginpassword.validity.valid) {
		// 			showPasswordError();
		// 			return event.preventDefault();
		// 		}
		// 		// Then we prevent the form from being sent by canceling the event
		// 		return event.preventDefault();
		// 	}
	
		// 	if (!loginpassword.validity.valid) {
		// 		showPasswordError();
		// 		return event.preventDefault();
		// 	}
		// 	response = grecaptcha.getResponse();
			
		// 	console.log("skip the JS side for now, make it all regex later");
			
		// }







