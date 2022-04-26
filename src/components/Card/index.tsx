import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { customCardsMusic } from '../../models/songInterface'
import ReactPlayer from 'react-player'

export const CardsMusic:React.FC<customCardsMusic> = ({artistName,artworkUrl100,trackName,previewUrl}) => {

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {trackName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {artistName}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause">
          <ReactPlayer
                url={previewUrl}
                width="400px"
                height="50px"
                playing={false}
                controls={true}
              />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ height:100}}
        image={artworkUrl100}
        alt="Live from space album cover"
        
      />
    </Card>
  );
};
export default CardsMusic
