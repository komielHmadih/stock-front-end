import React, { useState } from "react";
import { Chrono } from "react-chrono";
import useMobileDetect from "use-mobile-detect-hook";

const Timeline = (props) => {
  const detectMobile = useMobileDetect();
  const [Itemwidth,SetItemwidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => {
    SetItemwidth(window.innerWidth);

  });
  return (
    <>
      <div
        style={{
          paddingTop: "100px",
          width: "100%",
          height: "auto",
          direction: "ltr",
          padding: "10px",
        }}
      >
        <Chrono
        flipLayout={true}
        borderLessCards={false}
        hideControls={true}
        allowDynamicUpdate={false}
          disableNavOnKey={false}
          useReadMore={false}
          theme={{ 
            primary: "grey",
            secondary: "red",
            cardBgColor: "white",
            cardForeColor: "grey",
            titleColor: "white",
          }}
          items={props.data}
          itemWidth={window.innerWidth/13}
          mode={
            detectMobile.isDesktop() ? "HORIZONTAL" : "VERTICAL_ALTERNATING"
          }
        >
          
        </Chrono>
      </div>
    </>
  );
};

export default Timeline;
