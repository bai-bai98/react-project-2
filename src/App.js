import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    setUserName(userName);
  }, []);
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home userName={userName} />
          </Route>
          <Route path="/profile">
            <Profile
              userName={userName}
              onUserNameChange={(userName) => setUserName(userName)}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
