import { Zoom, Box } from "@mui/material";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function CenterPiece(props) {
  const styles = {
    centered: {
      width: "90px",
      height: "90px",
      position: "fixed",
      top: "40%",
      left: "calc(50% - 45px)",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#121212",
      marginRight: "20px",
      padding: "5px",
      overflow: "hidden",
    },
    middleDivider: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      height: "100vh",
      width: "1px",
      backgroundColor: "white",
    },
  };

  return (
    <>
      <div style={styles.middleDivider} />
      <Zoom
        in={props.correctness === "correct"}
        out={props.correctness === ""}
        style={{ transitionDuration: "1s" }}
      >
        <Box sx={styles.centered}>
          <FaCheckCircle size={80} color="lightGreen" />
        </Box>
      </Zoom>
      <Zoom
        in={props.correctness === "incorrect"}
        out={props.correctness === ""}
        style={{ transitionDuration: "1s" }}
      >
        <Box sx={styles.centered}>
          <FaTimesCircle size={80} color="red" />
        </Box>
      </Zoom>
    </>
  );
}
