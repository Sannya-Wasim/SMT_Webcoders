import React from "react";

const Challenge = () => {
  return (
    <div className="mx-4 md:mx-48 my-4">
      <div className="flex flex-col md:flex-row justify-center text-left">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1599000900791-LWSGS8U2HNLWI7FCBLQX/image-asset.png?format=500w"
          alt="Not available"
          className="w-52 h-52 m-auto mb-6 md:mb-0"
        />
        <div className="md:ml-10">
          <h3 className="my-1 font-bold text-red-700 text-lg">
            What is The Indy Autonomous challenge?
          </h3>
          <p className="mt-4">
            The Indy Autonomous Challenge is a $1.5 million university prize
            competition to win the world’s first head-to-head, high-speed
            autonomous race at the famed Indianapolis Motor Speedway. Teams
            program a modified Dallara IL-15 racecar to out-race and
            out-maneuver fellow innovators in the world's first head-to-head,
            high-speed autonomous race at the Indianapolis Motor Speedway, the
            world’s most famous racetrack.
          </p>
          <br />
          <p>
            The IAC is a broadly collaborative effort that brings together
            public, private, and academic institutions to challenge university
            students around the world to imagine, invent, and prove a new
            generation of automated vehicle software and inspire the next
            generation of STEM talent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
