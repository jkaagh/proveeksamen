
import FrontPage from "./components/FrontPage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Services from "./components/Services/Services";

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
        </Switch>
    </Router>
    </>
  );
}

export default App;
