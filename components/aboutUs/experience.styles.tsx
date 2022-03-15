import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    maxWidth: 1250,
  },
  experienceList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginBottom: "50px",
  },
  experienceCont: {
    maxWidth: "50%",
    margin: "auto",
    textAlign: "center",
    padding: "10px",
    paddingBottom: "50px",
  },
  experienceTitle: {
    color: "#000000",
    fontSize: "22px",
    fontFamily: "Poppins",
    fontWeight: 500,
    padding: "10px 0px 10px 0px",
  },
  experienceDetail: {
    marginTop: 0,
    marginBottom: "0.9rem",
    textAlign: "center",
  },
});

export default useStyles;
