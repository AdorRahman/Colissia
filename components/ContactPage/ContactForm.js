import InputField, { TextArea } from "../InputField";
const ContactForm = () => {
  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputField
          placeholder="Name"
          type="text"
          label="Full Name"
          name="name"
        />
        <InputField
          placeholder="Email address"
          type="text"
          label="Email Address"
          name="email"
        />
        <InputField
          placeholder="Phone number"
          type="phone"
          label="Phone Number"
          name="phone"
        />
        <InputField
          placeholder="Subject"
          type="text"
          label="Subject"
          name="subject"
        />
        <div className="sm:col-span-2">
          <TextArea label="Your Message..." name="message" height="36" />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-primary rounded hover:bg-secondary hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
