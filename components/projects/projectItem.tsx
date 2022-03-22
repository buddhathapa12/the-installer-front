import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { NextPage } from "next";
import React from "react";
import { IProject } from "../../fixtures/Projects/projectsData";

const ProjectItem: NextPage<IProject> = ({ ...props }) => {
  return (
    <Box>
      <Box>
        <Image src={props.imageUrl} alt={props.name} width="335" height="400" />
      </Box>
      <Typography>{props.name} </Typography>
      <Typography>{props.description} </Typography>
    </Box>
  );
};

export default ProjectItem;
