const id = "application-1-ukdhb"; 
const config = {
	id,
};
//const app = new Realm.App(config);
//const app = Realm.App.getApp("application-1-ukdhb");
try{
	const app = Realm.App.getApp("application-1-ukdhb");
}catch (error){
	console.error("P-modified: Error accessing Realm" + error);
}


