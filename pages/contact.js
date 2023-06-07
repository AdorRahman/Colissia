import ContactInfo from "@components/ContactPage/ContactInfo";
import OpeningHours from "@components/ContactPage/Hours";
import PageTitle from "@components/PageTitle";
import { DefaultSeo } from "next-seo";

const ContactPage = () => {
  const SEO = {
    title: `Curiouscraft | Contact`,
  };
  return (
    <>
      <DefaultSeo {...SEO} />
      <PageTitle img="/img/about-page-title-bg.jpeg" title="Contact" />
      <ContactInfo />
      <div className="grid lg:grid-cols-2">
        <OpeningHours />
        <iframe
          className="min-h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.671675394819!2d89.64840904412893!3d23.75908478482819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe41d9033ca26d%3A0x33174c27edf0899a!2sBeradanga%20Rd%20No.%202!5e0!3m2!1sen!2sbd!4v1635762467787!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default ContactPage;
