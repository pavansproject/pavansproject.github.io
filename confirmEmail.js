const id = "application-1-ukdhb"; 
const config = {
	id,
};
const app = Realm.App.getApp("application-1-ukdhb");

const string = window.location.search;
const urlstuff = new URLSearchParams(string);

async function hi() {
    const hello = await confirmUser()
}
