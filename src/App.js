
import FrontPage from "./components/FrontPage";
import Services from "./components/Services/Services";
import Features from "./components/Features/Features"

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Switch>
            <Route exact path="/">
                <FrontPage/>
            </Route>
            <Route exact path="/services">
                <Services/>
            </Route>
            <Route exact path="/features">
                <Features/>
            </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
