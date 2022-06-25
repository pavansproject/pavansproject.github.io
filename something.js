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

let man;
async function dontgiveup() {
	const bob = await loginAnonymous();
	man = bob;
}
async function please() {
	await app.emailPasswordAuth.registerUser({email : document.getElementById("usersignupthing").value, password : document.getElementById("passsignupthing").value});
	console.log("You have signed up!");
}

window.onload = (event) => {
	console.log("Page is loaded");
	setTimeout(() => {
		dontgiveup();
		dataretriever();
		console.log("Alright this part works now");
	}, 10000);
	//setTimeout(dontgiveup(), 1000);
	//dontgiveup();
}


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
	console.log(`"Stuff is this: ${notename} , and ${noteinfo}"`);
	const result = await collection.insertOne({
		name: notename,
		noteinformation: noteinfo
	});
	console.log(result);
	console.log(`"Oh and by the way, ${user.id}"`);
}



async function findthenote() {
	let mongo = app.currentUser.mongoClient("mongodb-atlas");
	let collection = mongo.db("hellopeople").collection("secondtry");
	const noteinfo = document.getElementById("notefinder").value;
	console.log(`"Finding a note with name of ${noteinfo}"`);
	const found = await collection.findOne({ name: noteinfo });
	console.log(`"Found the note: ${found.name}, and has ${found.noteinformation} in it"`);
	document.getElementById("notedisplayer").innerText = found.name;
	document.getElementById("note2displayer").innerText = found.noteinformation;
}

async function findthemall() {
	let mongo = app.currentUser.mongoClient("mongodb-atlas");
	let collection = mongo.db("hellopeople").collection("secondtry");
	const findinfo = document.getElementById("manyfinder").value;
	console.log(`"Finding notes with type: ${findinfo}"`);
	const foundthem = await collection.find({type: findinfo});
	console.log(`"Found them: ${foundthem}`);
}

async function updatetheone() {
	let mongo = app.currentUser.mongoClient("mongodb-atlas");
	let collection = mongo.db("hellopeople").collection("secondtry");
	const findquery = document.getElementById("findthingtoupdate").value;
	const changething = document.getElementById("stufftochange").value;
	console.log(`"Going to find ${findquery} and change its information to ${changething}"`);
	const updatesingle = await collection.updateOne(
		{name: findquery},
		{$set: {noteinformation: changething}}
	);
	console.log(updatesingle);
}

async function deletetheone() {
	let mongo = app.currentUser.mongoClient("mongodb-atlas");
	let collection = mongo.db("hellopeople").collection("secondtry");
	const whattodelete = document.getElementById("singledelete").value;
	console.log(`"Deleting ${whattodelete}"`);
	const deletedsingle = await collection.deleteOne({name: whattodelete});
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
	});
	console.log(inserting);
}

async function dataretriever() {
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
	if(err.status == "401"){
		console.log("ummm");
	}
  }
}

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
  
  





//This is a test function
  async function okyeahnow() {
	//havehope();
	const app = Realm.App.getApp("application-1-ukdhb"); // replace this with your App ID
	const user = app.currentUser;
	console.log("have hope");
	console.log("Calculating 1 + 1");
	const result = await user.functions.summed(1, 1);
	console.log("breakpoint 1, this means its done the math");
	console.log(result);
}

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















