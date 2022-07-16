import React from "react";
import { useState, useEffect } from "react";
import { Grid, Box, Divider, Typography } from "@mui/material";
import SongPanel from "./SongPanel";

function createTrackObject() {
  return {
    albumImage: "",
    artists: "",
    name: "",
    popularity: 0,
  };
}

function processData(data) {
  /*
  const song = {
    albumImage: data.album.images[0].url,
    artist: data.artists[0].name,
    name: data.name,
    popularity: data.popularity,
  };
  return song; */
  return {
    albumImage:
      "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14",
    artist: "Harry Styles",
    name: "As It Was",
    popularity: 98,
  };
}

function App() {
  const [playlist, setPlaylist] = useState([{ track: "" }]);
  /*
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e43a7dd975msh3f626b2de6f059dp18d7e0jsnf6dbf90078d3",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };
    fetch(
      "https://spotify23.p.rapidapi.com/playlist_tracks/?id=6UeSakyzhiEt4NB3UAd6NQ?si=4467ae0410bc4678",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setPlaylist(data.tracks.items);
      })
      .catch((err) => console.error(err));
  }, []);
  */
  // console.log(playlist);
  const styles = {
    test: {
      backgroundColor: "#f5f5f5",
      margin: "0px",
      padding: "0px",
      overflow: "hidden",
    },
    outline: {
      border: "5px solid #e0e0e0",
      height: "98.5vh",
      margin: "0px",
      padding: "0px",
    },
  };

  return (
    <Box sx={styles.test}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        sx={styles.outline}
      >
        <Grid item xs>
          <SongPanel song={processData(playlist[0].track)} />
        </Grid>
        <Divider orientation="vertical">
          <Typography>vs</Typography>
        </Divider>
        <Grid item xs>
          <SongPanel song={processData(playlist[0].track)} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
