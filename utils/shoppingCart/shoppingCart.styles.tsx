import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
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
  itemQuantity: { display: "flex", flexDirection: "row" },
  addRemoveButton: { color: "#cd6b62", height: "25px", marginRight: "7px", marginLeft: "7px", cursor: "pointer" },
}));
export default useStyles;
