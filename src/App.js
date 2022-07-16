import React from "react";
import { useState, useEffect, useRef } from "react";
import { Grid, Box, Divider, Typography, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SongPanel from "./SongPanel";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Poppins", "Roboto", "Helvitica", "sans-serif", "Arial"].join(
      ","
    ),
  },
});

function processData(data, index) {
  const song = {
    albumImage: data.album.images[0].url,
    artist: data.artists[0].name,
    name: data.name,
    popularity: data.popularity,
    index: index,
  };
  return song;
}
// gets random int between 0 and 99
const getRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [leftSong, setLeftSong] = useState({});
  const [rightSong, setRightSong] = useState({});

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
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (loaded) {
      const leftSongIndex = getRandomNumber();
      setLeftSong(processData(playlist[leftSongIndex].track, leftSongIndex));
      const rightSongIndex = getRandomNumber();
      setRightSong(processData(playlist[rightSongIndex].track, rightSongIndex));
    }
  }, [loaded]);

  const styles = {
    outline: {
      height: "100vh",
    },
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {loaded ? (
        <Box>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            sx={styles.outline}
          >
            <Grid item xs>
              <SongPanel song={leftSong} left={true} />
            </Grid>
            <Divider orientation="vertical">
              <Typography
                sx={{
                  fontSize: "40px",
                  marginBottom: "100px",
                  paddingTop: "5px",
                }}
              >
                VS
              </Typography>
            </Divider>
            <Grid item xs>
              <SongPanel song={rightSong} left={false} />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </ThemeProvider>
  );
}

export default App;
