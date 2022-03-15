import { Button, Grow, SvgIconProps, Typography, Zoom } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useState } from "react";
import useStyles from "./styles";
import { NextPage } from "next";

interface IShrinkingButton {
  icon: React.ReactElement<SvgIconProps>;
  title: string;
  scale?: number;
}

const ShrinkingButton: NextPage<IShrinkingButton> = (props) => {
  const [buttonSrink, setButtonSrink] = useState(false);
  const classes = useStyles();

  return (
    <Grow
      in={true}
      onMouseEnter={() => setButtonSrink(true)}
      onMouseLeave={() => setButtonSrink(false)}
      style={
        buttonSrink
          ? {
              transform: `scale(${props.scale ?? 0.9})`,
            }
          : {}
      }
    >
      <Button
        className={classes.button}
        sx={{
          "&:hover": {
            backgroundColor: "#ED1C23",
          },
        }}
      >
        {props.icon}
        <Typography fontSize={16}>{props.title}</Typography>
      </Button>
    </Grow>
  );
};

export default ShrinkingButton;
