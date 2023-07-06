import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      firstname: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
    };
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center mt-8 md:mt-20">
        {/* left container */}
        <div className="m-4 md:m-10 md:w-72">
          <h3 className="font-bold text-2xl my-4 text-center text-blue-950 md:text-left">
            Contact Us
          </h3>
          <p className="my-6">
            See one of these sites for sponsorship or team inquiries:
          </p>
          <div className="items-center mx-20 md:mx-6 md:items-left">
            <button className="bg-blue-950 text-white p-4 font-bold my-4">
              SPONSORSHIP INQUIRY FORM
            </button>
            <button className="bg-blue-950 text-white p-4 font-bold my-4">
              JOIN THE TEAM
            </button>
            <button className="bg-blue-950 text-white p-4 font-bold my-4">
              NEWSLETTER SIGN UP
            </button>
          </div>
          <div>
            <p className="my-4">
              For press and other general inquiries, please use the form at
              right.
            </p>
          </div>
          <div className="flex justify-center md:justify-start my-4">
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-6 h-6 m-4 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-6 h-6 m-4 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-6 h-6 m-4 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-6 h-6 m-4 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="w-6 h-6 m-4 cursor-pointer"
            />
          </div>
        </div>
        {/* right container */}
        <div className="m-4 md:m-10">
          <form className="mx-8">
            <h3>First Name</h3>
            <input
              type="text"
              className="w-full md:w-96 h-10 bg-gray-200 rounded-sm my-2"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <h3>Last Name</h3>
            <input
              type="text"
              className="w-full md:w-96 h-10 bg-gray-200 rounded-sm my-2"
              onChange={(e) => setLastName(e.target.value)}
            />

            <h3>
              Email Address <sub>(required)</sub>
            </h3>
            <input
              type="text"
              className="w-full md:w-96 h-10 bg-gray-200 rounded-sm my-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3>
              Phone Number <sub>(required)</sub>
            </h3>
            <input
              type="text"
              className="w-full md:w-96 h-10 bg-gray-200 rounded-sm my-2"
              onChange={(e) => setPhone(e.target.value)}
            />
            <h3>Message</h3>
            <textarea
              name="message"
              id="message"
              cols="50"
              rows="3"
              className="w-full bg-gray-200 rounded-sm my-2"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <br />
            <button
              className="my-4 bg-blue-950 text-white font-bold p-2 w-40 h-10 items-left"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
