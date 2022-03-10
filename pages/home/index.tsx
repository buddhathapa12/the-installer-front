import type { NextPage } from "next";
import ImageCarousel from "../../components/ImageCarousel";
import { bannerData } from "../../fixtures/HomePage/bannerData";
import FeedbackCarousel from "../../components/Feedback";
import { feedbackData } from "../../fixtures/HomePage/feedbacks";
import useStyles from "./index.styles";
import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import AboutUsText from "../../components/aboutUs/aboutUsText";
import { aboutUsDetailData } from "../../fixtures/AboutUs/aboutUsDetailData";
import OurServices from "../../components/ourServices/ourServices";

const Home: NextPage = () => {
  const styles = useStyles();
  return (
    <Box>
      <ImageCarousel height="500px" data={bannerData} />
      <AboutUsText data={aboutUsDetailData} />
      <OurServices />
      <Box width={1} className={styles.feedbackContainer} padding="10px">
        <Box width={1} maxWidth="1140px">
          <Typography component="h2" align="center" className={styles.feedbackHeading}>
            Feedback
          </Typography>
          <FeedbackCarousel height="188px" data={feedbackData} />
        </Box>
      </Box>
      <Box></Box>
      <Box width={1} className={styles.contactUsContainer} padding="10px">
        <Typography component="h2" className={styles.contactUsHeading}>
          Contact Us
        </Typography>
        <Typography className={styles.contactUsText}>
          Do you have a project in mind? Get in touch today and let our experts help get the job done right.
        </Typography>
        <Typography className={styles.contactUsText}>Port McNicoll On</Typography>
        <div>
          <div className={styles.contactUsEmailSection}>
            <EmailIcon />
            <Typography className={styles.emailContainer}>
              <Link href="mailto:rb@theinstaller.me">rb@theinstaller.me</Link>
            </Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Home;
