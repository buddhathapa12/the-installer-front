import type { NextPage } from "next";
import ImageCarousel from "../../components/ImageCarousel";
import { bannerData } from "../../fixtures/HomePage/bannerData";
import FeedbackCarousel from "../../components/Feedback";
import { feedbackData } from "../../fixtures/HomePage/feedbacks";
import useStyles from "./index.styles";
import { Box, Typography } from "@mui/material";

const Home: NextPage = () => {
  const styles = useStyles();
  return (
    <Box>
      <ImageCarousel height="500px" data={bannerData} />
      <Box width={1} className={styles.feedbackContainer} padding="10px">
        <Box width={1} maxWidth="1140px">
          <Typography component="h2" align="center" className={styles.feedbackHeading}>
            Feedback
          </Typography>
          <FeedbackCarousel height="188px" data={feedbackData} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
