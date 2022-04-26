import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import axios from "axios";
import { Result, RootObject } from "../models/videoInterface";

export const useVideoData = (term:string) => {
  const [data, setData] = useState<Result[]>([]);

  const getData = async () =>
    axios
      .get<RootObject>(
        `https://itunes.apple.com/search?term=${term}&entity=musicVideo`
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
