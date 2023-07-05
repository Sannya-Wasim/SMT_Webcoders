import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        class="banner-thumbnail-wrapper has-description"
        data-content-field="main-image"
      >
        <div class="color-overlay"></div>
        <figure id="thumbnail" class="loading content-fill">
          <div
            class="sqs-video-background content-fill"
            data-config-url="https://www.youtube.com/watch?v=9SDW_8BQ25U"
            data-config-playback-speed="1"
            data-config-filter="1"
            data-config-filter-strength="50"
            style="overflow: hidden;"
          >
            <img
              data-src="https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1606946136701-T6EKQD8ZMZY5DXTSR588/Capture+d%E2%80%99e%CC%81cran+2020-12-02+a%CC%80+1.54.57+PM.png"
              data-image="https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1606946136701-T6EKQD8ZMZY5DXTSR588/Capture+d%E2%80%99e%CC%81cran+2020-12-02+a%CC%80+1.54.57+PM.png"
              data-image-dimensions="1377x549"
              data-image-focal-point="0.5,0.5"
              class="custom-fallback-image loaded"
              data-load="false"
              data-parent-ratio="6.9"
              style="left: 0px; top: -159.775px; width: 1263px; height: 503.549px; position: relative;"
              alt="Capture d’écran 2020-12-02 à 1.54.57 PM.png"
              data-image-resolution="2500w"
              src="https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1606946136701-T6EKQD8ZMZY5DXTSR588/Capture+d%E2%80%99e%CC%81cran+2020-12-02+a%CC%80+1.54.57+PM.png?format=2500w"
            />

            <iframe
              id="player"
              style="position: absolute; inset: -3.21875px 0px 0px; width: 303px; height: 170.438px;"
              frameborder="0"
              allowfullscreen="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="MIT Driverless at Roborace Event 1.1"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/9SDW_8BQ25U?autohide=1&amp;autoplay=0&amp;controls=0&amp;enablejsapi=1&amp;iv_load_policy=3&amp;loop=0&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;wmode=opaque&amp;origin=https%3A%2F%2Fdriverless.mit.edu&amp;widgetid=1"
              class="background-video ready"
            ></iframe>
          </div>
        </figure>
        <div class="desc-wrapper" data-content-field="description">
          <p style="white-space: pre-wrap;" id="yui_3_17_2_1_1688569324530_546">
            <strong data-shrink-original-size="30" style="letter-spacing: 0em;">
              Welcome to MIT Driverless
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
