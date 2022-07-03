const id = "application-1-ukdhb"; 
const app = new Realm.App({ id: "application-1-ukdhb"});


async function setthenewpass() {
    const params = new URLSearchParams(document.location.search);
    const token = params.get("token");
    const ID = params.get("tokenId");
    const newpass = document.getElementById("newpassword").value;
    
    
    app.emailPasswordAuth
        //And apparently the format for resetPassword is NOT .resetPassword(newpass, token, ID) like
        //the docs SAID right here: https://www.mongodb.com/docs/realm-sdks/js/latest/Realm.Auth.EmailPasswordAuth.html
        //when you scroll down
        .resetPassword(token, ID, newpass)
        .then(() => displayResult("success"))
        .catch(error => displayResult("error", error));
    function displayResult(result, error) {
        const message = document.getElementById("message");
        if(result === "success") {
            message.innerText = "You have successfully reset your password!";
        } else if(result === "error") {
            message.innerText = "Failed to reset your password This is likely because you took longer than 30 minutes after you signed up to verify your email. Please try again =)" + error;
        }
    }
}



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

