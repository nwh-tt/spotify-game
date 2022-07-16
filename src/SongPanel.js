import React from "react";
import { Typography, Box, Button } from "@mui/material";
// create a song object

export default function SongPanel(props) {
  // vertically center the song name
  const styles = {
    songName: {
      // borderRadius: "5px",
      textAlign: "center",
      paddingBottom: "20vh",
      height: "70vh",
    },
    text: {
      fontSize: "40px",
      margin: "10px",
    },
    button: {
      margin: "10px",
    },
  };
  // console.log(props.song);

  return (
    <Box sx={styles.songName}>
      <img src={props.song.albumImage} alt="error" />
      <Typography sx={styles.text}>{props.song.name}</Typography>
      <Typography sx={{ fontSize: "12px" }}>
        {props.left ? "has" : "has a"}
      </Typography>
      {props.left ? (
        <Typography sx={styles.text}>{props.song.popularity}</Typography>
      ) : (
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={styles.button}
          >
            Higher
          </Button>
          <Button
            variant="contained"
            color="error"
            size="large"
            sx={styles.button}
          >
            Lower
          </Button>
        </Box>
      )}
    </Box>
  );
}
