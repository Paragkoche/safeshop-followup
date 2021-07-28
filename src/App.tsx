import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Followup from "./components/followup";
import Phone from "./components/phone";
import { Container } from "react-bootstrap";
const App = () => {
  return (
    <main>
      <Container className="py-5 text-content">
        <img alt="logo" className="d-block mx-auto mb-4" src="/unnamed.png" />
        <h1>Today follow-up</h1>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Phone />
            </Route>
            <Route path="/followup" exact>
              <Followup />
            </Route>
          </Switch>
        </Router>
      </Container>
    </main>
  );
};

export default App;
