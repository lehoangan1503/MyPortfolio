import React, { useEffect, useState } from "react";
import "../../styles/SlideImage.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
const SlideImage = ({ listImage, onScroll }) => {
  const listImageTag = listImage.map((image) => {
    return <img key={image.id} src={image.urlImage} alt="" />;
  });

  // state for take one image  to display
  const [indexImage, setIndexImage] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (indexImage === 2) {
        setIndexImage(0);
      } else {
        setIndexImage(indexImage + 1);
      }
    }, 5000);
    // clean up the setinterval of current index to step to next index
    return () => {
      clearInterval(timerId);
    };
  }, [indexImage]);

  return (
    <AnimationOnScroll animateOnce={true} animateIn="SlideImage">
      <div className="images-container">{listImageTag[indexImage]}</div>
      <div className="indexes-dot">
        {indexImage === 0 ? (
          <span style={{ opacity: 1 }}></span>
        ) : (
          <span></span>
        )}
        {indexImage === 1 ? (
          <span style={{ opacity: 1 }}></span>
        ) : (
          <span></span>
        )}
        {indexImage === 2 ? (
          <span style={{ opacity: 1 }}></span>
        ) : (
          <span></span>
        )}
      </div>
    </AnimationOnScroll>
  );
};

export default SlideImage;
