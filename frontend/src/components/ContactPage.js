import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const InputField = ({ label, type, id }) => (
  <div className="flex grow justify-center items-start rounded-xl">
    <input
      type={type}
      id={id}
      className="bg-white border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white dark:text-black py-2.5 pr-16 pl-5"
      placeholder={label}
      required
      style={{ fontFamily: "Raleway, sans-serif" }}
    />
  </div>
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

const ContactForm = () => {
  const inputFields = [
    { label: "Name", type: "text", id: "name" },
    { label: "Surname", type: "text", id: "city" },
    { label: "Email Id", type: "email", id: "email" },
    { label: "Phone Number", type: "tel", id: "phone" },
  ];

  const [message, setMessage] = useState("");
  const maxLength = 30;

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const validateMessageLength = () => {
    const words = message.trim().split(/\s+/).length;
    return words >= maxLength;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateMessageLength()) {
      alert("Message should be at least 30 words.");
      return;
    }
  };

  return (
    <form className="flex flex-col self-stretch px-2 pt-10 pb-4 text-black max-md:max-w-full">
      <div
        className="self-center text-3xl font-semibold text-green-900"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        GET IN TOUCH
      </div>
      <div className="flex gap-1.5 justify-between py-2 mt-8 max-md:flex-wrap">
        {inputFields.slice(0, 2).map((field) => (
          <InputField key={field.id} {...field} />
        ))}
      </div>
      <div className="flex gap-1.5 justify-between py-2 mt-2.5 max-md:flex-wrap">
        {inputFields.slice(2, 4).map((field) => (
          <InputField key={field.id} {...field} />
        ))}
      </div>

      <div className="flex flex-col items-start rounded-xl">
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-lg text-green-900 bg-white border border-green-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-white dark:text-black pt-5 pr-16 pb-20 pl-5 mt-5"
          style={{ fontFamily: "Raleway, sans-serif" }}
          placeholder="Leave a message...(Min. 30 Characters)"
          value={message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button
        type="submit"
        className="justify-center self-center px-12 py-3 mt-7 text-3xl font-bold capitalize bg-gradient-to-r from-green-500 to-green-900 rounded-3xl max-md:px-5 transition-colors duration-300 hover:bg-green-700 text-white"
        style={{ fontFamily: "Raleway, sans-serif" }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => (
  <div>
    <button
      onClick={toggleOpen}
      className="flex justify-between items-center w-full py-4 border-b border-gray-300 text-left focus:outline-none"
    >
      <span
        className="text-green-900"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        {question}
      </span>
      <span>{isOpen ? "-" : "+"}</span>
    </button>
    {isOpen && (
      <p
        className="mt-2 pl-4 text-gray-700"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        {answer}
      </p>
    )}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Which beaches are available on my Base Tide Pro?",
      answer:
        "There are 550 beaches available to program as your home beach or your surf travel destination.",
    },
    {
      question: "How does temperature impact my watch?",
      answer:
        "The watch is built to handle extreme temperatures, but it’s recommended to avoid prolonged exposure to high heat or freezing cold.",
    },
    {
      question: "How do I reset my digital tide watch?",
      answer:
        "Hold down the reset button for 10 seconds until the watch face clears, then follow the setup guide.",
    },
    {
      question: "How do I reset my digital tide watch?",
      answer:
        "Hold down the reset button for 10 seconds until the watch face clears, then follow the setup guide.",
    },
    {
      question: "How do I reset my digital tide watch?",
      answer:
        "Hold down the reset button for 10 seconds until the watch face clears, then follow the setup guide.",
    },
  ];

  return (
    <div className="faq-section">
      <h2
        className="text-3xl font-semibold text-center text-green-900 mt-8 mb-4"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        FAQ's
      </h2>
      {faqItems.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

const ContactPage = () => {
  return (
    <section className="flex justify-center items-center self-stretch px-16 py-5 max-md:px-5 bg-white">
      <main className="w-full max-w-[1140px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <aside className="flex flex-col w-6/12 max-md:w-full">
            <FAQ />
          </aside>
          <ContactForm />
        </div>
      </main>
    </section>
  );
};

const App = () => (
  <>
    <Desktop>
      <div className="flex flex-col pt-2.5">
        <ContactPage />
      </div>
    </Desktop>
    <Tablet>
      <div className="flex flex-col pt-2.5">
        <ContactPage />
      </div>
    </Tablet>
    <Mobile>
      <div className="flex flex-col pt-2.5">
        <ContactPage />
      </div>
    </Mobile>
  </>
);

export default App;
