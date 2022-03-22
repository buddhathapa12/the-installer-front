import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { NextPage } from "next";
import React from "react";
import { IProject } from "../../fixtures/Projects/projectsData";
import useStyles from "./projects.styles";

const ProjectItem: NextPage<IProject> = ({ ...props }) => {
  const classes = useStyles();
  return (
    <Box className={classes.projectItemCont}>
      <Box className={classes.imageWrapper} component="a">
        <Image src={props.imageUrl} alt={props.name} width="335px" height="400px" className={classes.imageCont} />
      </Box>
      <Typography>{props.name} </Typography>
      <Typography>{props.description} </Typography>
    </Box>
  );
};

export default ProjectItem;
