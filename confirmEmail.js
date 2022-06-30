const id = "application-1-ukdhb"; 
const config = {
	id,
};
const {
	BSON: {ObjectID},
} = Realm;

const app = Realm.App.getApp("application-1-ukdhb");




async function hi() {
    const app = Realm.App.getApp("application-1-ukdhb");
    const params = new URLSearchParams(document.location.search);
    const token = params.get("token");
    const ID = params.get("tokenID");

    const hello = await confirmUser(token, ID)
}
window.onload = (event) => {
    hi();
};
async function confirmUser(...args) {
    const { argsObject: tokenDetails } = handleDeprecatedPositionalArgs(args, "confirmUser", ["token", "tokenId"]);
    const appRoute = this.fetcher.appRoute;
    await this.fetcher.fetchJSON({
        method: "POST",
        path: appRoute.emailPasswordAuth(this.providerName).confirm().path,
        body: tokenDetails,
    });
}
