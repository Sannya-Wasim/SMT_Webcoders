import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-32 my-20">
        {/* Firs Section */}
        <div className="flex justify-between my-8">
          <div className="w-20 mr-60 text-center">
          <h3 className="font-bold text-2xl mx-8 w-60">Our History</h3>
          </div>
          <div className="ml-16">
            <p>
              The MIT team was started in 2018 as our three person shop in a
              shared MIT office. In just 18 months, we grew to 25+ students and
              placed 2nd and 3rd in world renowned competitions.{" "}
            </p>
            <br />
            <p>
              The team is currently working out of MIT’s Edgerton Center. We
              continue to scale and push the edges of the autonomous driving
              field. It’s been an incredible journey thus far and we would not
              have been able to accomplish it all without our strong industry
              partners, the amazing collaboration we have through MITT-PITT-RW,
              and most importantly the incredible group of students we’ve
              gathered to make it all a reality.
            </p>
          </div>
        </div>
        {/* Second section */}
        <div className="flex justify-between my-8">
        <div className="w-20 mr-60 text-center">
          <h3 className="font-bold text-2xl mx-8 w-60">Competition History</h3>
          </div>
          <div className="ml-16">
            <p>
              Formula Student is the premier collegiate automotive engineering
              competition for 100+ teams from top universities. Formula Student
              teams design, build, test, and race electric and combustion cars.
              These vehicles trek on the edge of performance and have
              demonstrated record-setting acceleration and handling.
            </p>
            <br />
            <p>
              Formula Student Driverless (FSD) is a new competition category
              that challenges students to build a high-performance autonomous
              racecar. FSD is remarkably unique, in that it allows design across
              the entire stack: from the car’s chassis and electronics layout to
              high-level motion planning with state-of-the-art sensors and
              computing hardware.
            </p>
            <br />
            <p>
              The Indy Autonomous Challenge is a unique competition blending
              cutting edge robotics technologies with one of America’s favorite
              pastimes: racing. We hope this competition will raise awareness of
              autonomous vehicles to diverse audiences that have not been
              exposed to the subject, showcase the technology in the most
              demanding high-speed and competitive environment, and ultimately
              advance the state of autonomous technology.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
