import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiSmartphone, FiMapPin } from "react-icons/fi";
import { IoMdPaperPlane } from "react-icons/io";
import ContactForm from "./ContactForm";
const ContactInfo = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
      <h2 className="uppercase max-w-lg mb-10 text-3xl font-bold text-white sm:text-4xl sm:leading-none">
        Get In Touch
      </h2>
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <p className="text-base text-body md:text-lg">
              We’ll be more than glad to help you any query you have in mind.
              Please don’t hesitate to ask! Our Concerned Team will get back to
              you shortly, as soon as we receive your query.
            </p>
            <div className="mt-10">
              <div className="flex">
                <div className="text-primary text-3xl mr-5">
                  <FiSmartphone />
                </div>
                <div>
                  <p className="text-body">Phone Number</p>
                  <h2 className="text-white text-xl">
                    <a
                      className="transition-colors hover:text-primary"
                      href="tel:+8801608563609"
                    >
                      +8801608563609
                    </a>
                  </h2>
                </div>
              </div>
              <div className="flex mt-8">
                <div className="text-primary text-3xl mr-5">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-body">Location Address</p>
                  <h2 className="uppercase text-white text-xl">
                    Beradanga-2, Rajbari, Dhaka, Bangladesh – 7700
                  </h2>
                </div>
              </div>
              <div className="flex mt-8">
                <div className="text-primary text-3xl mr-5">
                  <IoMdPaperPlane />
                </div>
                <div>
                  <p className="text-body">Email Address</p>
                  <h2 className="uppercase text-white text-xl">
                    <a
                      className="transition-colors hover:text-primary"
                      href="mailto:contact@colissia.com?subject=General Inquiry"
                    >
                      contact@colissia.com
                    </a>
                  </h2>
                </div>
              </div>
              <div className="flex mt-10 lg:mt-16">
                <a
                  href="https://facebook.com/curiouscraftltd"
                  target="_blank"
                  className="flex justify-center items-center text-xl text-white mr-10 transition-colors hover:text-primary"
                >
                  <i className="text-fb mr-3">
                    <FaFacebookF />
                  </i>
                  <p>Facebook</p>
                </a>
                <a
                  href="https://wa.me/+8801608563609"
                  target="_blank"
                  className="flex justify-center items-center text-xl text-white mr-3 transition-colors hover:text-primary"
                >
                  <i className="text-whatsapp mr-3">
                    <FaWhatsapp />
                  </i>
                  <p>Whatsapp</p>
                </a>
                <a
                  href="https://www.instagram.com/curious_craft_ltd/"
                  target="_blank"
                  className="flex justify-center items-center text-xl text-white ml-8 transition-colors hover:text-primary"
                >
                  <i className="text-insta mr-3">
                    <FaInstagram />
                  </i>
                  <p>Instagram</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <ContactForm />
        </div>
      </div>
      {/* <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15087.171395844594!2d-121.9894867157048!3d37.34991618319829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fca6d3808fcd1%3A0xe4eded4330a64e36!2sSanta%20Clara%2C%20CA%2095055%2C%20USA!5e0!3m2!1sen!2sbd!4v1597894003972!5m2!1sen!2sbd"
          width="100%"
          height={400}
          frameBorder={0}
          style={{ border: 0, filter: "invert(90%)" }}
          allowFullScreen={false}
          tabIndex={0}
        ></iframe>
      </div> */}
    </div>
  );
};

export default ContactInfo;
