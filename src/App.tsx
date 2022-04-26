import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import MusicCard from "./components/musicCard";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VideoCard from "./components/videoCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/video" component={VideoCard}></Route>
          <Route path="/" component={MusicCard}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
