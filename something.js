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

const {
	BSON: {ObjectID},
} = Realm;




let sam;
let functionstuff;
async function keepgoing() {
	const bob = await loginEmailPassword(
		email = document.getElementById("userthing").value,
		password = document.getElementById("passthing").value);
	 sam = bob;
	
}

async function please() {
	await app.emailPasswordAuth.registerUser({email : document.getElementById("usersignupthing").value, password : document.getElementById("passsignupthing").value});
	console.log("You have signed up!");
}

//Note: Probably a better idea to combine setupdbstuff() and insertathing() for each
//of the CRUD values


async function setupdbstuff() {
	mongo = app.currentUser.mongoClient("mongodb-atlas");
	collection = mongo.db("hellopeople").collection("secondtry");
	console.log("DB connection is set up");
}

async function insertathing() {
	let mongo = app.currentUser.mongoClient("mongodb-atlas");
	let collection = mongo.db("hellopeople").collection("secondtry");
	const notename = document.getElementById("notenme").value;
	const noteinfo = document.getElementById("noteinfo").value;
	const user = app.currentUser;
	console.log(`Stuff is this: ${notename} , and ${noteinfo}`);
	const result = await collection.insertOne({
		//"_id": user.id,
		"note name": notename,
		"note information": noteinfo
	});
	console.log(result);
	console.log(`"Oh and by the way, ${user.id}"`)
}


async function findthenote() {
	let mongo = app.currentUser.mongoClient("mongodb-atlas");
	let collection = mongo.db("hellopeople").collection("secondtry");
	const noteinfo = document.getElementById("notefinder").value;
	console.log(`"Finding a note with name of ${noteinfo}"`);
	const found = await collection.findOne({name: noteinfo});
	console.log(`"Found the note: ${found}`);
	const huh = found.toString();
	document.getElementById("notedisplayer").innerText = found;
	document.getElementById("note2displayer").innerText = huh;
	console.log(huh);
	alert("Pause");
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
	//havehope();
	const app = Realm.App.getApp("application-1-ukdhb"); // replace this with your App ID
	const user = app.currentUser;
	console.log("have hope");
	console.log("Calculating 1 + 1")
	const result = await user.functions.summed(1, 1);
	console.log("breakpoint 1, this means its done the math");
	console.log(result);
};

//Page 2 Test function
async function letsdothisnow() {
	//havehope();
	const app = Realm.App.getApp("application-1-ukdhb"); // replace this with your App ID
	const userhi = app.currentUser;
	//console.log(user.id);
	console.log(userhi);
	//alert("Pause everything for a second");
	console.log("Beginning calculations");
	const sure = await userhi.functions.summed(2, 2);
	console.log("Done the math");
	console.log(sure);
}
/*Key things to remember here is to always first:
	Do Realm.App.getApp to get the current app
	Then do app.currentUser and send that to a 
	variable to get the current user
	Then you're set to use that as the actual current
	user =)*/


function idekknowanymore() {
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















