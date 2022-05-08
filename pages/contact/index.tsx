import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ContactUsForm from "../../components/ContactUsForm";
import ImageBanner from "../../components/ImageBanner";
import useStyles from "../../utils/contactUs";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import GoogleMaps from "../../components/GoogleMaps";

interface IContactInfoFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const classes = useStyles();
  const [error, setError] = useState<string | null>(null);
  const onSubmit = (data: IContactInfoFormData) => {
    setError("error");
  };
  return (
    <Box>
      <ImageBanner
        height="400px"
        data={{
          title: "Contact Us",
          backgroundImageUrl: "/static/images/contact-us/top-contact-us-banner.jpg",
        }}
        titleFontSize="42px"
        applyDarkOverlay={false}
      />
      <Box className={classes.container}>
        <Box className={classes.formWrapper}>
          <ContactUsForm onSubmit={onSubmit} marginTop={"-100px"} error={error} />
        </Box>
        <Box className={classes.contactInfoWrapper}>
          <Box className={classes.imageWrapper}>
            <Image
              src="/static/images/contact-us/contact-us-banner.jpg"
              alt="Contact Us Banner"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Box className={classes.contactInfo}>
            <Typography variant="h2" className={classes.contactInfoHeader}>
              Contact Us
            </Typography>
            <Typography variant="h2" className={classes.contactInfoAddress}>
              Port McNicoll On
            </Typography>
            <Typography variant="h3" className={classes.contactPhoneEmail}>
              <Link href="mailto:rb@theinstaller.me" passHref>
                <ContactMailIcon fontSize="small" className={classes.iconMargin} />
              </Link>
              <Link href="mailto:rb@theinstaller.me" passHref>
                rb@theinstaller.me
              </Link>
            </Typography>
            <Typography variant="h3" className={classes.contactPhoneEmail}>
              <Link href="tel:705-209-6525" passHref>
                <CallIcon fontSize="small" className={classes.iconMargin} />
              </Link>
              <Link href="tel:705-209-6525">705-209-6525</Link>
            </Typography>

            <Box className={classes.socialHandleCont}>
              <Box className={classes.socialHandleItemCont}>
                <FacebookOutlinedIcon />
              </Box>
              <Box className={classes.socialHandleItemCont}>
                <TwitterIcon />
              </Box>
              <Box className={classes.socialHandleItemCont}>
                <LinkedInIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.googleMapsWrapper}>
        <GoogleMaps />
      </Box>
    </Box>
  );
};

export default Contact;
