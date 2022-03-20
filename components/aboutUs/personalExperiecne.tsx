import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { IExperience } from "../../fixtures/AboutUs/personalExperienceData";
import useStyles from "./experience.styles";

const PersonalExperiecne: NextPage<IExperience> = ({ ...props }) => {
  const classes = useStyles();
  return (
    <Box className={classes.experienceCont}>
      <Image src={props.imageUrl} alt={props.name} width="225" height="300" />
      <Typography className={classes.experienceTitle}>{props.name}</Typography>
      <Typography>{props.description}</Typography>
    </Box>
  );
};

export default PersonalExperiecne;
