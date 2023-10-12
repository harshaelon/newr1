import { GoogleLogout } from 'react-google-login';
const clientId="849129082731-qskc577e7efifla11i6av8b7t1j0bo6r.apps.googleusercontent.com";

function Logout(){

    const onSuccess=()=>{
        console.log("log out successfull");
    }
    return(
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"logout"}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;