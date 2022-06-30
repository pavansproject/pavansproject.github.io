const id = "application-1-ukdhb"; 
const config = {
	id,
};
const {
	BSON: {ObjectID},
} = Realm;

const app = Realm.App.getApp("application-1-ukdhb");




async function hi() {
    const string = document.location.search;
    const urlstuff = new URLSearchParams(string);

    const params = new URLSearchParams(document.location.search);
    const token = params.get("token");
    const ID = params.get("tokenID");

    const hello = await confirmUser(token, ID)
}
hi();
