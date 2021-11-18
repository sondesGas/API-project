import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Fragment, useState } from "react";
import UserList from "./components/UserList";
import User from "./components/User";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/users" />} />
          <Route path="/users" exact>
            <UserList
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
            />
          </Route>
          <Route path="/users/:id">
            <User
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
            />
          </Route>
          <Route
            render={() => (
              <div className="container py-5">
                <div className="alert alert-danger">404 Page Not Found</div>
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}
