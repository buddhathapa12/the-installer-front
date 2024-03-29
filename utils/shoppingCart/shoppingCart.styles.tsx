import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  cartIcon: {
    color: "#ffffff",
    fontSize: "40px",
    cursor: "pointer",
    paddingBottom: 5,
    "&:hover": {
      color: "red",
    },
    "&::before": {},
  },
  cartItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "5px",
    padding: "5px",
    background: "#ffffff",
    color: "#cd6b62",
    border: "solid",
    borderRadius: "10px",
  },
  // itemIcon: { width: 96, height: 96, mr: 2, flex: 1 },
  itemContent: { display: "flex", flexDirection: "column", flex: 3, justifyContent: "space-between" },
  itemInformation: { flex: 3, display: "flex", flexDirection: "row", justifyContent: "space-between" },
  itemQuantityAndPrice: { flex: 1, display: "flex", flexDirection: "row", justifyContent: "space-between" },
  itemQuantity: { display: "flex", flexDirection: "row", color: "#000000" },
  addRemoveButton: { color: "#cd6b62", height: "25px", marginRight: "7px", marginLeft: "7px", cursor: "pointer" },

  totalAndCheckoutContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "5px",
    padding: "5px",
    background: "#ffffff",
    color: "#cd6b62",
    border: "solid",
    borderRadius: "10px",
  },
  //Css for shoping item popwup window:
  dialogStyle: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    height: 450,
    background: "#ffffff",
    border: "2px solid #ffffff",
    borderRadius: 15,
    padding: 4,
    display: "flex",
    flexDirection: "row",
  },
}));
export default useStyles;
