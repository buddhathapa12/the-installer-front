import { Box, Typography } from "@material-ui/core";
import type { NextPage } from "next";
import styles from "./styles.module.css";
import Carousel from "react-material-ui-carousel";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface IFeedbackData {
  feedback: string;
  author: string;
}

interface IFeedbackCarousel {
  height: string;
  data: IFeedbackData[];
}

const FeedbackCarousel: NextPage<IFeedbackCarousel> = (props) => {
  return (
    <Box height={props.height}>
      <Carousel
        className={styles.carousel}
        autoPlay={false}
        navButtonsAlwaysVisible
        indicators={true}
        swipe
        cycleNavigation
        animation="slide"
        IndicatorIcon={<FiberManualRecordIcon style={{ color: "white", width: "12px", height: "12px" }} />}
        indicatorContainerProps={{
          style: {
            position: "relative",
            bottom: "35px",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            margin: "0px 4px",
            zIndex: 1,
            opacity: 0.5,
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            opacity: 1,
          },
        }}
        navButtonsWrapperProps={{
          style: {
            height: props.height,
            backgroundColor: "black",
          },
        }}
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
          },
        }}
      >
        {props.data.map((item, index) => {
          return (
            <Box key={index} className={styles.feedbackContainer} height={props.height} paddingX="5%">
              <Typography
                className={styles.feedback}
                style={{
                  fontSize: "1.3rem",
                  fontFamily: '"Poppins", Sans-serif',
                }}
                align="center"
              >
                {item.feedback}
              </Typography>
              <Typography
                className={styles.author}
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  marginTop: "25px",
                  fontFamily: '"Poppins", Sans-serif',
                }}
              >
                {item.author}
              </Typography>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default FeedbackCarousel;
