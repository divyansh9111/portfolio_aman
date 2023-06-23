import { Carousel } from "react-carousel-minimal";
import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HOC from "../../img/hoc.png";
import { themeContext } from "../../Context";
//images
import img1 from "../../img/aman/FASHIONGGG5.jpg";
import img4 from "../../img/aman/new one.jpg";
import img5 from "../../img/aman/NATURE.jpg";
import img6 from "../../img/aman/PHOTOGRAHY  1.jpg";
import img7 from "../../img/aman/Y.jpg";
import img8 from "../../img/aman/dinner.jpeg";
import img9 from "../../img/aman/homes.jpeg";
import img10 from "../../img/aman/ccccg.jpg";
import img11 from "../../img/aman/gym,post.jpg";
import img12 from "../../img/aman/DSIFD.POST.jpg";
import img13 from "../../img/aman/images (11).jpeg";
import img14 from "../../img/aman/IMG-20230310-WA0000.jpg";
import img15 from "../../img/aman/IMG_20230321_221354.jpg";
import img16 from "../../img/aman/international.jpg";
import img17 from "../../img/aman/jal jira.jpg";
import img18 from "../../img/aman/MASALE ACHAR.jpg";
import img19 from "../../img/aman/model one.jpg";
import img20 from "../../img/aman/zone gym.jpg";
import img21 from "../../img/aman/Untitled-1.jpg";
import img22 from "../../img/aman/real.jpeg";
import img23 from "../../img/aman/POST 4.jpg";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const data = [
    {
      image: img1,
    },
    {
      image:
        img4,
    },
    {
      image:
        img5,
    },
    {
      image:
        img6,
    },
    {
      image:
        img7,
    },
    {
      image:
        img8,
    },
    {
      image:
        img9,
    },
    {
      image:
        img10,
    },
    {
      image:
        img11,
    },
    {
      image:
        img12,
    },
    {
      image:
        img13,
    },
    {
      image:
        img14,
    },
    {
      image:
        img15,
    },
    {
      image:
        img16,
    },
    {
      image:
        img17,
    },
    {
      image:
        img18,
    },
    {
      image:
        img19,
    },
    {
      image:
        img20,
    },
    {
      image:
        img21,
    },
    {
      image:
        img22,
    },
    {
      image:
        img23,
    },
    
  ];
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <>
      <div className="portfolio" id="portfolio">
        {/* heading */}
        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Portfolio</span>
        {/* slider */}
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="slideShow" >
          <Carousel
          className="caro"
            data={data}
            time={2000}
            width="750px"
            height="350px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="red"
            pauseIconSize="40px"
            slideBackgroundColor="lightgrey"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
