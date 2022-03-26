import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  backgroundImage: {
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },

  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.35)",
    top: 0,
    left: 0,
    position: "absolute",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: "36px",
    fontWeight: 500,
    lineHeight: 1,
    marginBottom: "20px",
    zIndex: 1,
  },

  description: {
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: 1.4,
    zIndex: 1,
  },

  textWhite: {
    color: "white",
  },
}));

export default useStyles;
