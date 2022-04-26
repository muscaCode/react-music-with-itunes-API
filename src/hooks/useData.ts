import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import axios from "axios";
import { Result, Song } from "../models/songInterface";

export const useData = (term:string) => {
  const [data, setData] = useState<Result[]>([]);

  const getData = async () =>
    axios
      .get<Song>(
        `https://itunes.apple.com/search?term=${term}&limit=12`
      )
      .then( (response) => {
        const {results} = response.data 
        console.log("data:", response.data);
        setData(results);
      })

  useEffect(() => {
    getData();
  }, [term]);

  return data
};
