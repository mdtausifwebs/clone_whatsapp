import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Massanger from "./Components/Massanger";
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientid =
    "488791191740-41u9gjhu8vtak8it7f5neferohrt2si3.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider className="App" clientId={clientid}>
      <AccountProvider>
        <Massanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
