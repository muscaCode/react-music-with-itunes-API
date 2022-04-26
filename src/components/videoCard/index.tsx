import * as React from "react";
import Grid from "@mui/material/Grid";
import { CardsMusic } from "../Card/index";
import { useVideoData } from "../../hooks/useVideoData";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import { Button, IconButton, Input, TextField } from "@mui/material";
import { Navbar } from "../Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../videoCard/style.css";
import Search from "@mui/icons-material/Search";
import { CardsVideo } from "../CardVideo";

const VideoCard: React.FC = () => {
  const [search, setSearch] = useState("gigi d'agostino");
  const [input, setInput] = useState("");

  const videoData = useVideoData(search);

  const handleSubmit = (event: any) => {
    //non attiva la funzione definitiva
    event.preventDefault();
    setSearch(input);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/*event target fornisce l'elemento che trigghera la funzione e recupera il valore*/}
        <TextField
          type="search"
          name="search"
          placeholder="put artist or song"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <Search style={{ marginTop: 15 }} />
      </form>
      <div className="cards">
        {videoData.map(
          ({ artistName, trackName, previewUrl }) => (
            <CardsVideo
              artistName={artistName}
              trackName={trackName}
              previewUrl={previewUrl}
            />
          )
        )}
      </div>
    </>
  );
};
export default VideoCard;
