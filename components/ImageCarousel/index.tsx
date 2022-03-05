import { Box } from "@material-ui/core";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "./styles.module.css";
import Carousel from "react-material-ui-carousel";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface IBannerData {
  title: string;
  description: string;
  backgroundImageUrl: string;
}

interface IImageCarousel {
  height: string;
  data: IBannerData[];
}

const ImageCarousel: NextPage<IImageCarousel> = (props) => {
  return (
    <Carousel
      className={styles.carousel}
      autoPlay
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
      navButtonsProps={{
        style: {
          backgroundColor: "transparent",
        },
      }}
    >
      {props.data.map((item, index) => {
        return (
          <Box
            key={`${item.backgroundImageUrl}-${index}`}
            className={styles.backgroundImage}
            style={{
              backgroundImage: `url(${item.backgroundImageUrl})`,
              color: index === 0 ? "white" : "black",
              height: props.height,
            }}
          >
            <Box className={styles.content}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.description}>{item.description}</p>
              <Box
                className={`${styles.link} ${styles.learnMore}`}
                style={{
                  borderColor: index === 0 ? "white" : "black",
                }}
              >
                <Link href="/bookOnline">Learn More</Link>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
