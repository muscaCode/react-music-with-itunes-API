import * as React from 'react';
import ReactPlayer from 'react-player';
import { customCardsVideo } from '../../models/videoInterface';
import Grid from "@mui/material/Grid";
import '../CardVideo/style.css'

export const CardsVideo:React.FC<customCardsVideo> = ({artistName,trackName,previewUrl}) => {
    return (
      <div className='player-wrapper'>
        <ReactPlayer url={previewUrl} controls height='auto' />
       </div> 
      );
}