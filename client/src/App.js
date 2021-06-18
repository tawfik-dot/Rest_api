import { Route, Switch } from "react-router";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import UsersList from "./Components/UsersList/UsersList";
import AddUser from "./Components/AddUser/AddUser";
import Footer from "./Components/Footer/Footer";
import Error from "./Components/Error/Error";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users_list" component={UsersList} />
          <Route exact path={["/add_user", "/edit_user"]} component={AddUser} />
          <Route exact path="/*" component={Error} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
