if ("serviceWorker" in navigator) {
	//If this alteration does not work first try then it will be INCREDIBLY
	//sad
	//ALSO OOOOOH this returns a promise now that is cool
	navigator.serviceWorker.register("sw.js")
	.then(() => console.log("Service worker is registered"));
	//Also this is the part of the tutorial that I used:
	//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#offline_asset_storage
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





async function keepgoing() {
	const bob = await loginEmailPassword(
		email = document.getElementById("userthing").value,
		password = document.getElementById("passthing").value);
}

//Huh I guess I really don't need this function now do I? This was just so I
//could global scope my variables, which REALLY is not a good idea
/*async function dontgiveup() {
	const bob = await loginAnonymous();
	let man = bob;
}*/
async function please() {
	await app.emailPasswordAuth.registerUser({email : document.getElementById("usersignupthing").value, password : document.getElementById("passsignupthing").value});
	console.log("You have signed up!");
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
window.onload = (event) => {
	console.log("Page is loaded");
	// fetch("https://unpkg.com/realm-web/dist/bundle.iife.js")
	// 	.then(response => response.json())
	// 	.then(data => console.log(data))
	// 	.then(dontgiveup())
	// 	.then(dataretriever())
	// 	.then(console.log("If this actually works"));

	let bestpromise = new Promise((resolve, reject) => {
		resolve(loginAnonymous());
		/*Out of persistence, I will comment this line out
		resolve(hi())*/
		// setTimeout(() => {
		// 	resolve(dataretriever());
		// }, 1500);
		//reject(console.error());
	})
		//.then(dataretriever())
		.then((value) => {
			dataretriever();
		})
		.then((value) => {
			loginDelete();
		})
		.then((value) => {
			console.log("LETS GO I GOT IT I AM THE PROGRAMMER YES YES YESSSSSSSS IT WORKS IT AC TUALLY WAORKS!!!")
		});
}

/*window.onload = (event) => {
	console.log("Page is loaded");
	sanitysaver();
	console.log("Uhh done?");
}*/

//Let it be said that if and else statements are my
//last resort in dire emergencies

/*async function hi() {
	const app = Realm.App.getApp("application-1-ukdhb");
	const user = app.currentUser
	if(app != null){
		setTimeout(() => {
			const user = app.currentUser;
			if(user.id != null) {
				setTimeout(() => {
					dataretriever();
				}, 1500);
			}else{
				dataretriever();
			}
		}, 1500);
	} else{
		const user = app.currentUser;
		if(user.id != null) {
			setTimeout(() => {
				dataretriever();
			}, 1500);
		} else{
			dataretriever();
		}
	}
	
	
	if(user.id != null) {
		dataretriever();
	}else{
		setTimeout(() => {
			dataretriever();
		}, 1500)
	}
}*/

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
	//Note: I add this first line separately
	//Later note: Its really fine, this line does no harm at all, sooo yeah
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
	});
	console.log(yes);
}




async function getcustomdata() {
	const app = Realm.App.getApp("application-1-ukdhb");
	const customdata = app.currentUser.customData;
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
	if(err.status == "401"){
		console.log("ummm");
	}
  }
}

async function loginAnonymous() {
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
	} catch (err) {
	  console.error("Failed to log in", err);
	}
  }
  
  async function logoutfunc() {
	const app = Realm.App.getApp("application-1-ukdhb");
	let please = await app.currentUser.logOut();
	console.log(please);
  }





  
//Ok careful here, time to delete a user
async function loginDelete() {
	const app = Realm.App.getApp("application-1-ukdhb");
	const user = app.currentUser;
	let hello = await app.deleteUser(user);
	console.log(hello);
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















