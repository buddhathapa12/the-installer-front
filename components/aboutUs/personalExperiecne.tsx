import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { IExperience } from "../../fixtures/AboutUs/personalExperienceData";

const PersonalExperiecne: NextPage<IExperience> = ({ ...props }) => {
  return (
    <Box>
      <Box>
        <Image src={props.imageUrl} alt={props.name} width="225" height="300" />
        <Typography>{props.name}</Typography>
        <Typography>{props.description}</Typography>
      </Box>
    </Box>
  );
};

export default PersonalExperiecne;
