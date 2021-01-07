import "./App.css";
import { useStateValue } from "./StateProvider";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [{ dark }] = useStateValue();

  const nav__class = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-evenly"
  };
  return (
    <div className="App">
      <Router>
        <nav>
          <ul style={nav__class}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/About">
            <div
              style={{ background: dark.background, color: dark.foreground }}
            >
              This is About us page. We are passing data using context api.
            </div>
          </Route>
          <Route path="/">This is default route</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
