import Features from "@components/AboutPage/Features";
import History from "@components/AboutPage/History";
import Journey from "@components/AboutPage/Journey";
import Partners from "@components/AboutPage/Partners";
import PageTitle from "@components/PageTitle";
import Testimonials from "@components/Testimonials/Testimonials";

const AboutPage = () => {
  return (
    <>
      <PageTitle img="/img/about-page-title-bg.jpeg" title="About" />
      <History />
      <Features />
      <Journey />
      <Testimonials />
      <Partners />
    </>
  );
};

export default AboutPage;
