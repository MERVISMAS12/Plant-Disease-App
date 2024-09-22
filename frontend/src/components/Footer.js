import * as React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const LocationItem = ({ location }) => (
  <div className="mt-4 text-green-900">{location}</div>
);

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Locations = () => {
  const locations = [
    "Mervis Mascarenhas",
    "Nilesh Mishra",
    "Maheshwaran Nadar",
    "Anujeet Kunturkar",
  ];
  return (
    <div className="flex flex-col px-5 text-lg text-green-900 whitespace-nowrap max-md:mt-10">
      <div className="font-bold" style={{ fontFamily: "Raleway, sans-serif" }}>
        Members
      </div>
      {locations.map((location, index) => (
        <LocationItem key={index} location={location} />
      ))}
    </div>
  );
};

const ContactInfo = () => (
  <div className="flex flex-col grow mt-2 ml-28 text-sm text-green-900 max-md:mt-10">
    <div
      className="text-lg font-bold"
      style={{ fontFamily: "Raleway, sans-serif", color: "text-green-500" }}
    >
      Contact Us
    </div>
    <div className="flex gap-3.5 mt-7">
      <IoLocation className="w-5 h-5" />
      <div
        style={{ fontFamily: "Raleway, sans-serif", color: "text-green-500" }}
      >
        XIE, Mahim <br /> Mumbai, 400016{" "}
      </div>
    </div>
    <div className="flex gap-3.5 mt-5 whitespace-nowrap">
      <IoMdMail className="w-5 h-5" />
      <div
        className="flex-auto my-auto"
        style={{ fontFamily: "Raleway, sans-serif", color: "text-green-500" }}
      >
        teena.v@xavier.ac.in
      </div>
    </div>
    <div className="flex gap-3.5 mt-4">
      <FaPhoneAlt className="w-5 h-5" />
      <div
        className="flex-auto my-auto"
        style={{ fontFamily: "Raleway, sans-serif", color: "text-green-500" }}
      >
        +91 9619230440
      </div>
    </div>
  </div>
);

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col flex-1 mt-2">
      {submitted ? (
        <div className="text-lg font-bold text-center text-green-900">
          Thank you for submitting, Stay Tuned!
        </div>
      ) : (
        <>
          <div
            className="text-lg font-bold text-center text-green-900"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Subscribe
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="mt-5 ml-12"
          >
            <label
              htmlFor="emailInput"
              className="sr-only"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Email
            </label>
            <input
              id="emailInput"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="justify-center py-2.5 text-sm leading-6 bg-white border border-solid border-zinc-400 text-green-900 w-48 pl-2"
              style={{ fontFamily: "Raleway, sans-serif" }}
            />
            <button
              type="submit"
              className="justify-center items-center px-16 py-2 mt-4 text-sm text-white bg-gradient-to-r from-green-400 to-green-800 focus:ring-4 focus:outline-none w-48 xs:ml-5"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Subscribe
            </button>
          </form>
        </>
      )}
      <div
        className="mt-9 text-base font-bold text-green-500 ml-12"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        Follow us
      </div>
      <div className="flex gap-4 pr-20 mt-5 max-md:pr-5 ml-12">
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            className="W-6 aspect-square text-green-500 hover:text-violet-900 "
            alt="Facebook Icon"
          />
        </a>
        <a
          href="https://twitter.com/youraccount"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter
            className="w-6 aspect-square text-green-500 hover:text-violet-900 "
            alt="Twitter Icon"
          />
        </a>
        <a
          href="https://www.instagram.com/youraccount"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className="w-6 aspect-square text-green-500 hover:text-violet-900 "
            alt="Instagram Icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="w-6 aspect-square text-green-500 hover:text-violet-900 "
            alt="LinkedIn Icon"
          />
        </a>
      </div>
    </div>
  );
};

const Footer = () => (
  <div className="flex relative gap-5 justify-center mt-16 w-full max-w-[1067px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
    <div
      className="justify-center py-0.5 pr-7 text-xs font-light text-green-500"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      © {new Date().getFullYear()} All Rights Reserved
    </div>
  </div>
);

const MainContent = () => (
  <div className="flex overflow-hidden relative flex-col items-center px-20 pt-20 pb-6 w-full bg-white min-h-[397px] max-md:px-5 max-md:max-w-full">
    <div className="flex relative gap-5 justify-between items-start mt-1.5 w-full max-w-[1115px] max-md:flex-wrap max-md:max-w-full">
      <img
        loading="lazy"
        src="/assets/images/logo_desctop.webp"
        alt="Logo"
        className="shrink-0 self-stretch my-auto max-w-full aspect-[1.89] w-[180px] h-[140px]"
      />
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
            <ContactInfo />
          </div>
          <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
            <Locations />
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
    <Footer />
  </div>
);

const MainContentTab = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className="flex overflow-hidden relative flex-col px-20 pb-6 bg-white min-h-[397px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecc87747b752bbc20e7ac002ec73ad26d8f4fdef4a62166358697ec47988423f?apiKey=0be449f7ecab4405b7d056c64fb07853&"
          alt="Background Image"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative flex flex-col items-center justify-center w-full max-w-screen-lg">
          {submitted ? (
            <div className="text-lg font-bold text-center text-green-900">
              Thank you for submitting, Stay Tuned!
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex flex-col items-center w-full mt-32"
            >
              <label
                htmlFor="email"
                className="mb-7 text-4xl font-medium text-green-900 dark:text-white"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Subscribe
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2.5 text-center text-2xl bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Email For Future Updates"
                required
                style={{ fontFamily: "Raleway, sans-serif" }}
              />
              <div>
                <button
                  type="submit"
                  className="w-full px-20 py-2.5 mt-5 text-3xl text-white bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-700"
                  style={{
                    backgroundColor: "#2B1154",
                    fontFamily: "Raleway, sans-serif",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="">
        <div
          className="text-center py-2 pr-7 text-2xl font-light text-green-900 whitespace-nowrap"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </>
  );
};

const MainContentMobile = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  //   bg-white
  return (
    <>
      <div className="flex overflow-hidden relative flex-col px-20 pb-6  min-h-[397px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecc87747b752bbc20e7ac002ec73ad26d8f4fdef4a62166358697ec47988423f?apiKey=0be449f7ecab4405b7d056c64fb07853&"
          alt="Background Image"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative flex flex-col items-center justify-center w-full max-w-screen-lg">
          {submitted ? (
            <div className="text-md font-bold text-center text-green-900">
              Thank you for submitting!
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex flex-col items-center w-full mt-32"
            >
              <label
                htmlFor="email"
                className="mb-7 text-2xl font-medium text-green-900 dark:text-white"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Subscribe
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2.5 text-center text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Email For Future Updates"
                required
                style={{ fontFamily: "Raleway, sans-serif" }}
              />
              <div>
                <button
                  type="submit"
                  className="w-full px-10 py-2.5 mt-5 text-md text-white bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-700"
                  style={{
                    backgroundColor: "#2B1154",
                    fontFamily: "Raleway, sans-serif",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="bg-white">
        <div
          className="text-center py-2 pr-7 text-md font-light text-green-900 whitespace-nowrap"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </>
  );
};

const App = () => (
  <>
    <Desktop>
      <div className="flex flex-col pt-2.5 ">
        <MainContent />
      </div>
    </Desktop>
    <Tablet>
      <div className="flex flex-col pt-2.5 bg-gray-50">
        <MainContentTab />
      </div>
    </Tablet>
    <Mobile>
      <div className="flex flex-col pt-2.5 bg-gray-50">
        <MainContentMobile />
      </div>
    </Mobile>
  </>
);

export default App;
