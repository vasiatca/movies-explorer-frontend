import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header loggedIn={false} />
          <Main />
          <Footer />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Header loggedIn={true} />
          <Profile />
        </Route>
        <Route path="/movies">
          <Header loggedIn={true} />
          <Movies />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <Header loggedIn={true} />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
