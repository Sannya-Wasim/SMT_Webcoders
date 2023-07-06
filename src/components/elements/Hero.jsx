import React from "react";

const Hero = () => {
  return (
    <div>
      <div>
        <div className="flex mx-4 md:mx-20 flex-col lg:mx-40 my-20 text-left">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/fe05c480-cb9a-41cd-9ef8-2a070c2ddd04/IAC_0160_resized.jpg?format=750w"
            alt="Main not found"
            className="mx-4 w-100 h-60"
          />
          <h1 className="text-black text-3xl md:text-4xl mt-6 mx-4 lg:text-5xl font-bold">
            In 2022, we are taking on the Indy Autonomous Challenge
          </h1>
        </div>
        <h5 className="text-red-700 font-bold -mt-10 mx-4 md:mx-220 lg:mx-96">
          We are MIT Driverless, part of MIT-PITT-RW.
        </h5>
        <div className="mx-4 md:mx-24 my-10 text-left">
          <p>
            MIT Driverless’ mission is to be the hub of practical autonomy at
            MIT - to be the place where the brightest minds come to learn about
            the challenges in deploying software on full scale autonomous
            vehicles, and to connect them with our industry partners as they
            look for their future engineering leaders. To do so, we build
            autonomous racecars and compete in competitions around the world.
          </p>
          <br />
          <p>
            Our team was started in 2018. In our first competition season in
            2019, we won 2nd at Italy and 3rd at Germany on the Formula Student
            Driverless circuit. Although COVID derailed our 2020 plans to go for
            first, we took advantage of the opportunity to re-think our plans
            for the future. Moving forwards, we plan to compete in RoboRace and
            the Indy Autonomous Challenge as part of MIT-PITT-RW - a joint team
            between MIT, University of Pittsburgh, Rochester Institute of
            Technology, and University of Waterloo.
          </p>
          <br />
          <p>
            We partner with companies that are as equally excited as us about
            building the future of autonomous driving. From connecting
            interested students to hosting hack-a-thons, we offer many a variety
            of opportunities for our sponsors.
          </p>
          <p>
            The MIT and MIT-PITT-RW team is growing! If you are a student, we
            invite you to join us if you are passionate about driverless
            technology, excited about working with an amazing, friendly team,
            and willing to tenaciously learn and work with us to build
            performant systems.
          </p>
        </div>
        <div className="mx-4 md:mx-32 my-10 flex flex-col md:flex-row justify-between">
          <button className="bg-red-700 text-white font-bold p-4 md:p-8 w-full md:w-50 h-6 my-2 md:my-0 text-center">
            Learn More
          </button>
          <button className="bg-red-700 text-white font-bold p-4 md:p-8 w-full md:w-50 h-6 my-2 md:my-0 text-center">
            Join the Team
          </button>
          <button className="bg-red-700 text-white font-bold p-4 md:p-8 w-full md:w-50 h-6 my-2 md:my-0 text-center">
            Become a Sponsor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
