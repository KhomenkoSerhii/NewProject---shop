import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { Container } from "@material-ui/core";
import MainLayuot from "./pages/MainLayuot";
import MainBlockComponent from "./pages/MainBlock";

import "./App.css";

function App() {
  return (
    <MainLayuot>
      <Container className="main-block">
        <MainBlockComponent />
      </Container>
    </MainLayuot>
  );
}

export default App;
