import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Main from "./pages/Main";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Main />
      </Switch>
    </Router>
  );
}

export default App;
