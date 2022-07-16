import React from "react";
import { Typography, Box } from "@mui/material";
// create a song object

export default function SongPanel(props) {
  // vertically center the song name
  const styles = {
    songName: {
      // border: "1px solid #e0e0e0",
      // borderRadius: "5px",
      textAlign: "center",
      paddingBottom: "20px",
    },
    text: {
      fontSize: "30px",
      margin: "10px",
    },
  };
  // console.log(props.song);

  return (
    <Box sx={styles.songName}>
      <img src={props.song.albumImage} alt="error" />
      <Typography sx={styles.text}>{props.song.name}</Typography>
    </Box>
  );
}
