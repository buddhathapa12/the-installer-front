import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import useStyles from "./aboutUsText.styles";

interface IAboutUsDetailData {
  paragraph: string;
}

interface IAboutUsDetail {
  data: IAboutUsDetailData[];
}

const AboutUsText: NextPage<IAboutUsDetail> = (props) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.aboutUsTitle}>About Us</Typography>
      <div className={classes.paragraphCont}>
        {props.data.map((item, index) => {
          return (
            <Typography key={index} className={classes.paragraph}>
              {item.paragraph}
            </Typography>
          );
        })}
      </div>
    </Box>
  );
};

export default AboutUsText;
