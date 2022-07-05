const id = "application-1-ukdhb"; 
const app = new Realm.App({ id: "application-1-ukdhb"});



const params = new URLSearchParams(document.location.search);
const token = params.get("token");
const ID = params.get("tokenId");

app.emailPasswordAuth
    .confirmUser(token, ID)
    .then(() => displayResult("success"))
    .catch(error => displayResult("error", error));
function displayResult(result, error) {
    const message = document.getElementById("message");
    if(result === "success") {
        message.innerText = "You have completed email password verification! Please sign in =)";
    } else if(result === "error") {
        message.innerText = "Failed to complete email password verification. This is likely because you took longer than 30 minutes after you signed up to verify your email. Please try again =)" + error;
    }
}

//Why thank you Sebastian_Gadzinski:
//https://www.mongodb.com/community/forums/t/email-confirmation-script-for-user-authentication-via-email-address/13905/8
// async function hi() {
//     const app = new Realm.App({ id: application-1-ukdhb});
//     const params = new URLSearchParams(document.location.search);
//     const token = params.get("token");
//     const ID = params.get("tokenID");

//     const hello = await confirmUser(token, ID)
// }
// window.onload = (event) => {
//     hi();
// };

