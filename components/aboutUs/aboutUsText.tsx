import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { aboutUsDetailData } from "../../fixtures/AboutUs/aboutUsDetailData";

// interface IAboutUsDetailData {
//   id: BigInteger;
//   paragraph: string;
// }

// interface IAboutUsDetail {
//   data: IAboutUsDetailData[];
// }

const AboutUsText: NextPage = () => {
  return (
    <Box>
      <Typography>About Us</Typography>
      <div>
        <Typography>This is just dummy info .</Typography>
        <Typography>
          We are a building company based in the beautiful Holme Valley near Holmfirth in Huddersfield, Yorkshire.
        </Typography>
        <Typography>
          Proud of our roots, we try to be very Yorkshire like in the way we go about our business. Friendly, honest,
          sticklers for good value and with an appreciation for how stunning the Huddersfield countryside is. As a
          business, we would like to contribute to that beauty by creating amazing buildings constructed with great
          craftsmanship.
        </Typography>
        <Typography>
          Having a wealth of experience in building and construction management, we can tackle small extensions to large
          new build projects. We are happy working with both traditional building materials and new construction
          methods. The quality of our workmanship and customer service is without compromise. In addition to our
          in-house skills, we have a network of first-rate contractors and professionals. If required, we can provide
          you with assistance with architects, planning, structural engineers, costings and project management.
        </Typography>
        <Typography>
          You&apos;ll find us easy to work with, honest, proactive in our approach and forthcoming with information.
          Together we&apos;ll create a finished building to be proud of.
        </Typography>
      </div>
    </Box>
  );
};

export default AboutUsText;
