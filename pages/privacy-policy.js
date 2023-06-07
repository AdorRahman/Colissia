import PageTitle from "@components/PageTitle";
import Link from "next/link";
import { VscCircleFilled } from "react-icons/vsc";
import Scrollspy from "react-scrollspy";

const TermsAndConditions = () => {
  return (
    <>
      <PageTitle img="/img/about-page-title-bg.jpeg" title="Privacy Policy" />
      <div className="select-none bg-dark">
        <div className="container px-4 py-16 mx-auto lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-32">
          <h2 className="mb-6 text-3xl font-bold text-white uppercase lg:text-center lg:mb-16 sm:text-4xl sm:leading-none">
            Colissia Privacy Policy
          </h2>
          <div className="flex flex-col lg:flex-row">
            <div className="relative hidden w-full lg:w-52 lg:block">
              <aside className="sticky top-20 lg:min-h-screen">
                <h3 className="py-3 text-xl uppercase text-secondary">
                  Table of contents
                </h3>
                <Scrollspy
                  items={[
                    "section-1",
                    "section-2",
                    "section-3",
                    "section-4",
                    "section-5",
                    "section-6",
                    "section-7",
                    "section-8",
                    "section-9",
                    "section-10",
                    "section-11",
                    "section-12",
                    "section-13",
                    "section-14",
                    "section-15",
                    "section-16",
                  ]}
                  currentClassName="text-primary"
                  className="grid gap-3 text-sm text-body"
                >
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-1"
                    >
                      What information do we collect
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-2"
                    >
                      How do we use your information
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-3"
                    >
                      Will your information be shared with anyone
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-4"
                    >
                      We use cookies and other tracking technologies
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-5"
                    >
                      We use google maps
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-6"
                    >
                      How do we handle your social logins
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-7"
                    >
                      What is our stance on third-party websites
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-8"
                    >
                      How long do we keep your information
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-9"
                    >
                      How do we keep your information safe
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-10"
                    >
                      Do we collect information from minors
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-11"
                    >
                      What are your privacy rights
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-12"
                    >
                      Controls for do-not-track features
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-13"
                    >
                      Do California residents have specific privacy rights
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-14"
                    >
                      Do we make updates to this notice
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-15"
                    >
                      How can you contact us about this notice
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-16"
                    >
                      How can you review, update or delete the data we collect
                      from you
                    </a>
                  </li>
                </Scrollspy>
              </aside>
            </div>
            <div className="max-w-xl py-3 sm:mx-auto lg:max-w-3xl lg:pl-10">
              <div className="mb-5">
                <p className="mb-2 text-body">
                  Thank you for choosing to be part of our community at Curious
                  Craft Ltd. Doing business as Colissia (“
                  <em className="font-semibold">Colissia</em>", “
                  <em className="font-semibold">we</em>", “
                  <em className="font-semibold">us</em>",“
                  <em className="font-semibold">our</em>"). we are committed to
                  protect your personal information and your right to privacy.
                  If you have any questions or concerns about this privacy
                  notice, or our practices with regards to your personal
                  information, please contact us at{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 text-primary hover:text-secondary"
                    href="mailto:contact@colissia.com"
                  >
                    contact@colissia.com
                  </a>
                  . <br></br>When you visit our website{" "}
                  <Link href="/">
                    <a className="italic font-semibold transition-all duration-500 hover:text-secondary text-primary">
                      https://colissia.com
                    </a>
                  </Link>{" "}
                  (the “<em className="font-semibold">Website</em> {'"), '}and
                  more generally, use any of our services (the “
                  <em className="font-semibold">Services</em>
                  “, which include the Website and it’s associate subdomains),
                  we appreciate that you are trusting us with your personal
                  information. We take your privacy very seriously. In this
                  privacy notice, we seek to explain to you in the clearest way
                  possible what information we collect, how we use it and what
                  rights you have in relation to it. We hope you take some time
                  to read through it carefully, as it is important. If there are
                  any terms in this privacy notice that you do not agree with,
                  please discontinue use of our Services immediately.
                  <br></br>
                  This privacy notice applies to all information collected
                  through our Services (which, as described above, include our
                  Websites), as well as, any related services, sales, marketing
                  or events.
                  <br></br>
                  <em className="not-italic font-bold">
                    Please read this privacy notice carefully as it will help
                    you understand what we do with the information that we
                    collect.
                  </em>
                  <em className="font-semibold"> </em>{" "}
                </p>
              </div>
              <div className="mb-5">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  DEFINITIONS AND KEY TERMS
                </h3>
                <ul className="py-3 sm:pl-5">
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>Cookie :</strong> small amount of data generated
                      by a website and saved by your browser. It is to identify
                      your browser, provide analytics, remember information
                      about you such as your product preferences or login
                      information.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>Company :</strong> when this policy mentions
                      “Company”, “we”, “us” or “our”, it refers to Colissia
                      Ltd., that is responsible for your information under this
                      Privacy Policy.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>Countru :</strong> where Colissia Global Ltd. or
                      it’s owners/founders are based, in this case Bangladesh.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>Customer :</strong> refers to the company,
                      organization or person that signs up to use Curious
                      Craft’s service.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>Device :</strong> any connected device such as a
                      phone, tablet, computer or any other device that can be
                      used to visit the website and use the services.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>IP Address :</strong> every device connected to
                      the Internet is assigned a number known as an protocol
                      (IP) address . These numbers are usually assigned in
                      geographic blocks. An IP address can often be used to
                      identify the location from which a device is connecting to
                      the Internet.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>Personnel :</strong> refers to those individuals
                      who are employed by Colissia Global Ltd. or are under
                      contract to perform a service on behalf of one of the
                      parties.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>Personal Data :</strong> any information that
                      directly, indirectly or in connection with other
                      information-including a personal identification
                      number-allows for the identification or identifiability of
                      a natural person.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>Service :</strong> refers to the service provided
                      by Colissia Global Ltd. as described in the relative terms
                      (if available)and on this platform.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>Third-party Service :</strong> refers to
                      advertisers, contest sponsors, promotional and marketing
                      partners, and others who provide our content or whose
                      products or services we think may interest you.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>Website :</strong> Colissia’s site, which can be
                      accessed this URL:{" "}
                      <em className="font-semibold">
                        <Link href="/">
                          <a
                            href="https://colissia.com"
                            className="transition-all duration-300 hover:text-secondary text-primary"
                          >
                            https://colissia.com
                          </a>
                        </Link>
                      </em>
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>You :</strong> a person or entity that is
                      registered with Colissia to use the Services.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="pt-24 mb-7" id="section-1">
                <h4 className="mb-3 text-2xl font-semibold text-white uppercase ">
                  1. WHAT INFORMATION DO WE COLLECT?
                </h4>
                <br></br>
                <h4 className="mb-5 font-semibold text-white uppercase">
                  Personal information you disclose to us
                </h4>
                <p className="mb-3 text-body">
                  <strong className="italic font-semibold text-body">
                    In Short:{" "}
                  </strong>{" "}
                  We collect personal information that you provide to us.
                  <br></br>
                </p>
                <p className="mb-2 text-body">
                  We collect personal information that you voluntarily provide
                  to us when you register on the Website, express an interest in
                  obtaining information about us or our products and Services,
                  when you participate in activities on the Website (such as by
                  posting messages in our online forums or entering
                  competitions, contests or giveaways) or otherwise when you
                  contact us.
                </p>
                <p className="mb-2 text-body">
                  The personal information that we collect depends on the
                  context of your interactions with us and the Website, the
                  choices you make and the products and features you use. The
                  personal information we collect may include the following:
                </p>
                <p className="mb-2 text-body">
                  <em className="not-italic font-semibold text-body">
                    Personal Information:{" "}
                  </em>{" "}
                  We collect names; phone numbers; email addresses; mailing
                  addresses; usernames; debit/credit card numbers; billing
                  addresses; passwords; and other similar information.
                </p>
                <p className="mb-2 text-body">
                  <em className="not-italic font-semibold text-body">
                    Payment Data:
                  </em>{" "}
                  We may collect data necessary to process your payment if you
                  make purchases, such as your payment instrument number (such
                  as a credit card number), and the security code associated
                  with your payment instrument. All payment data is stored by
                  Bkash, Rocket, Nagad and SSLCOMMERZ. You may find their
                  privacy notice link(s) here:{" "}
                  <em className="break-all ">
                    <a
                      className="font-semibold transition-all duration-500 text-primary hover:text-secondary"
                      href="https://www.bkash.com/privacy.policy_bangladeshi.stickers"
                      target="_blank"
                    >
                      https://www.bkash.com/privacy.policy_bangladeshi.stickers
                    </a>
                    ,{" "}
                    <a
                      className="font-semibold transition-all duration-500 text-primary hover:text-secondary"
                      href="https://www.dutchbanglabank.com/rocket/privacy-policy.html"
                      target="_blank"
                    >
                      https://www.dutchbanglabank.com/rocket/privacy-policy.html
                    </a>
                    ,{" "}
                    <a
                      className="font-semibold transition-all duration-500 text-primary hover:text-secondary"
                      href="https://nagad.com.bd/privacy-policy"
                      target="_blank"
                    >
                      https://nagad.com.bd/privacy-policy
                    </a>{" "}
                    and{" "}
                    <a
                      className="font-semibold transition-all duration-500 text-primary hover:text-secondary"
                      href="https://www.sslcommerz.com/privacy-policy"
                      target="_blank"
                    >
                      https://www.sslcommerz.com/privacy-policy
                    </a>
                    .
                  </em>
                </p>
                <p className="mb-2 text-body">
                  <em className="not-italic font-semibold text-body">
                    Social Media Login Data:{" "}
                  </em>
                  We may provide you with the option to register with us using
                  your existing social media account details, like your
                  Facebook, Twitter or other social media account. If you choose
                  to register in this way, we will collect the Information
                  described in the section called “
                  <a
                    className="italic font-semibold transition-all duration-500 text-primary hover:text-secondary"
                    href="#section-6"
                  >
                    HOW DO WE HANDLE YOUR SOCIAL LOGINS
                  </a>
                  ” below.
                </p>
                <p className="mb-2 text-body">
                  All personal information that you provide to us must be true,
                  complete and accurate, and you must notify us of any changes
                  to such personal information.
                </p>
                <h4 className="mb-5 font-semibold text-white uppercase mt-9">
                  Information automatically collected
                </h4>
                <p className="mb-3 text-body">
                  <strong className="italic font-semibold text-body">
                    In Short:{" "}
                  </strong>{" "}
                  Some information — such as your Internet Protocol (IP) address
                  and/or browser and device characteristics — is collected
                  automatically when you visit our Website.
                  <br></br>
                </p>
                <p className="mb-2 text-body">
                  We automatically collect certain information when you visit,
                  use or navigate the Website. This information does not reveal
                  your specific identity (like your name or contact information)
                  but may include device and usage information, such as your IP
                  address, browser and device characteristics, operating system,
                  language preferences, referring URLs, device name, country,
                  location, information about how and when you use our Website
                  and other technical information. This information is primarily
                  needed to maintain the security and operation of our Website,
                  and for our internal analytics and reporting purposes.
                </p>
                <p className="mb-2 text-body">
                  Like many businesses, we also collect information through
                  cookies and similar technologies.
                </p>
                <p className="mb-2 text-body">
                  The information we collect includes:
                </p>
                <ul className="mb-2 text-body">
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        Log and Usage Data –
                      </em>{" "}
                      Log and usage data is service-related, diagnostic, usage
                      and performance information our servers automatically
                      collect when you access or use our Website and which we
                      record in log files. Depending on how you interact with
                      us, this log data may include your IP address, device
                      information, browser type and settings and information
                      about your activity in the Website (such as the date/time
                      stamps associated with your usage, pages and files viewed,
                      searches and other actions you take such as which features
                      you use), device event information (such as system
                      activity, error reports (sometimes called ‘crash dumps’)
                      and hardware settings).
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        Device Data –
                      </em>{" "}
                      We collect device data such as information about your
                      computer, phone, tablet or other device you use to access
                      the Website. Depending on the device used, this device
                      data may include information such as your IP address (or
                      proxy server), device and application identification
                      numbers, location, browser type, hardware model Internet
                      service provider and/or mobile carrier, operating system
                      and system configuration information.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        Location Data –
                      </em>{" "}
                      We collect location data such as information about your
                      device’s location, which can be either precise or
                      imprecise. How much information we collect depends on the
                      type and settings of the device you use to access the
                      Website. For example, we may use GPS and other
                      technologies to collect geolocation data that tells us
                      your current location (based on your IP address). You can
                      opt out of allowing us to collect this information either
                      by refusing access to the information or by disabling your
                      Location setting on your device. Note however, if you
                      choose to opt out, you may not be able to use certain
                      aspects of the Services.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-24 mb-5" id="section-2">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  2. HOW DO WE USE YOUR INFORMATION?
                </h3>
                <p className="mb-3 text-body">
                  <strong className="italic font-semibold text-body">
                    In Short:{" "}
                  </strong>{" "}
                  We process your information for purposes based on legitimate
                  business interests, the fulfillment of our contract with you,
                  compliance with our legal obligations, and/or your consent.
                  <br></br>
                </p>
                <p className="mb-2 text-body">
                  We use personal information collected via our Website for a
                  variety of business purposes described below. We process your
                  personal information for these purposes in reliance on our
                  legitimate business interests, in order to enter into or
                  perform a contract with you, with your consent, and/or for
                  compliance with our legal obligations. We indicate the
                  specific processing grounds we rely on next to each purpose
                  listed below.
                </p>
                <p className="mb-2 text-body">
                  We use the information we collect or receive:
                </p>
                <ul className="mb-2 text-body">
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        To facilitate account creation and logon process.
                      </em>{" "}
                      If you choose to link your account with us to a
                      third-party account (such as your Google or Facebook
                      account), we use the information you allowed us to collect
                      from those third parties to facilitate account creation
                      and logon process for the performance of the contract. See
                      the section below headed “
                      <a
                        className="italic font-semibold transition-all duration-500 hover:text-secondary text-primary"
                        href="#section-6"
                      >
                        HOW DO WE HANDLE YOUR SOCIAL LOGINS
                      </a>
                      ” for further information.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        To post testimonials.
                      </em>{" "}
                      We post testimonials on our Website that may contain
                      personal information. Prior to posting a testimonial, we
                      will obtain your consent to use your name and the content
                      of the testimonial. If you wish to update, or delete your
                      testimonial, please contact us at{" "}
                      <a
                        className="italic font-semibold transition-all duration-500 text-primary hover:text-secondary"
                        href="mailto:contact@colissia.com"
                      >
                        contact@colissia.com
                      </a>{" "}
                      and be sure to include your name, testimonial location,
                      and contact information.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        Request feedback.
                      </em>{" "}
                      We may use your information to request feedback and to
                      contact you about your use of our Website.{" "}
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        To enable user-to-user communications.
                      </em>{" "}
                      We may use your information in order to enable
                      user-to-user communications with each user’s consent.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        To manage user accounts.
                      </em>{" "}
                      We may use your information for the purposes of managing
                      our account and keeping it in working order.{" "}
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        To send administrative information to you.
                      </em>{" "}
                      We may use your personal information to send you product,
                      service and new feature information and/or information
                      about changes to our{" "}
                      <Link href="/terms-and-conditions">
                        <a className="italic font-semibold transition-all duration-500 hover:text-secondary text-primary">
                          terms and conditions
                        </a>
                      </Link>{" "}
                      along with policies.{" "}
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        To protect our Services.
                      </em>{" "}
                      We may use your information as part of our efforts to keep
                      our Website safe and secure (for example, for fraud
                      monitoring and prevention).{" "}
                    </p>
                  </li>

                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        To enforce our terms, conditions and policies for
                        business purposes, to comply with legal and regulatory
                        requirements or in connection with our contract.
                      </em>{" "}
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        To respond to legal requests and prevent harm.
                      </em>{" "}
                      If we receive a subpoena or other legal request, we may
                      need to inspect the data we hold to determine how to
                      respond.{" "}
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        Fulfill and manage your orders.
                      </em>{" "}
                      We may use your information to fulfill and manage your
                      orders, payments, returns, and exchanges made through the
                      Website{" "}
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        Administer prize draws and competitions.
                      </em>{" "}
                      We may use your information to administer prize draws and
                      competitions when you elect to participate in our
                      competitions.{" "}
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        To deliver and facilitate delivery of services to the
                        user.
                      </em>{" "}
                      We may use your information to provide you with the
                      requested service.{" "}
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        To respond to user inquiries/offer support to users.
                      </em>{" "}
                      We may use your information to respond to your inquiries
                      and solve any potential issues you might have with the use
                      of our Services.{" "}
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        To send you marketing and promotional communications.
                      </em>{" "}
                      We and/or our third-party marketing partners may use the
                      personal information you send to us for our marketing
                      purposes, if this is in accordance with your marketing
                      preferences. For example, when expressing an interest in
                      obtaining information about us or our Website, subscribing
                      to marketing or otherwise contacting us, we will collect
                      personal information from you. You can opt-out of our
                      marketing emails at any time (see the “
                      <a
                        className="italic font-semibold transition-all duration-500 text-primary hover:text-secondary"
                        href="#section-11"
                      >
                        WHAT ARE YOUR PRIVACY RIGHTS
                      </a>
                      ” below).{" "}
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        Deliver targeted advertising to you.
                      </em>{" "}
                      We may use your information to develop and display
                      personalized content and advertising (and work with third
                      parties who do so) tailored to your interests and/or
                      location and to measure its effectiveness.{" "}
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        For other business purposes.
                      </em>{" "}
                      We may use your information for other business purposes,
                      such as data analysis, identifying usage trends,
                      determining the effectiveness of our promotional campaigns
                      and to evaluate and improve our Website, products,
                      marketing and your experience. We may use and store this
                      information in aggregated and anonymized form so that it
                      is not associated with individual end users and does not
                      include personal information. We will not use identifiable
                      personal information without your consent.{" "}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-24 mb-5" id="section-3">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                </h3>
                <p className="mb-3 text-body">
                  <strong className="italic font-semibold text-body">
                    In Short:{" "}
                  </strong>{" "}
                  We only share information with your consent, to comply with
                  laws, to provide you with services, to protect your rights, or
                  to fulfill business obligations.
                  <br></br>
                </p>
                <p className="mb-2 text-body">
                  We may process or share your data that we hold based on the
                  following legal basis:
                </p>
                <ul className="mb-2 text-body">
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        Consent :{" "}
                      </em>
                      We may process your data if you have given us specific
                      consent to use your personal information for a specific
                      purpose.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        Legitimate Interests :{" "}
                      </em>
                      We may process your data when it is reasonably necessary
                      to achieve our legitimate business interests.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        Performance of a Contract :{" "}
                      </em>
                      Where we have entered into a contract with you, we may
                      process your personal information to fulfill the terms of
                      our contract.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        Legal Obligations :{" "}
                      </em>
                      We may disclose your information where we are legally
                      required to do so in order to comply with applicable law,
                      governmental requests, a judicial proceeding, court order,
                      or legal process, such as in response to a court order or
                      a subpoena (including in response to public authorities to
                      meet national security or law enforcement requirements).
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        Vital Interests :{" "}
                      </em>
                      We may disclose your information where we believe it is
                      necessary to investigate, prevent, or take action
                      regarding potential violations of our policies, suspected
                      fraud, situations involving potential threats to the
                      safety of any person and illegal activities, or as
                      evidence in litigation in which we are involved.
                    </p>
                  </li>
                </ul>
                <p className="mb-2 text-body">
                  More specifically, we may need to process your data or share
                  your personal information in the following situations:
                </p>
                <ul>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        Business Transfers.
                      </em>{" "}
                      We may share or transfer your information in connection
                      with, or during negotiations of, any merger, sale of
                      company assets, financing, or acquisition of all or a
                      portion of our business to another company.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <em className="not-italic font-semibold text-body">
                        Affiliates.
                      </em>{" "}
                      We may share your information with our affiliates, in
                      which case we will require those affiliates to honor this
                      privacy notice. Affiliates include our parent company and
                      any subsidiaries, joint venture partners or other
                      companies that we control or that are under common control
                      with us.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-24 mb-5" id="section-4">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </h3>
                <p className="mb-2 text-body">
                  <strong className="italic">In Short:</strong> We may use
                  cookies and other tracking technologies to collect and store
                  your information.
                </p>
                <p className="mb-2 text-body">
                  We may use cookies and similar tracking technologies (like web
                  beacons and pixels) to access or store information. Specific
                  information about how we use such technologies and how you can
                  refuse certain cookies is set out in our{" "}
                  <Link href="cookie-policy">
                    <a className="italic font-semibold transition-all duration-500 text-primary hover:text-secondary">
                      Cookie Notice
                    </a>
                  </Link>
                  .
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-5">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  5. DO WE USE GOOGLE MAPS?
                </h3>
                <p className="mb-2 text-body">
                  <strong className="italic ">In Short: </strong> Yes, we use
                  Google Maps for the purpose of providing better service.
                </p>
                <p className="mb-2 text-body">
                  This Website uses Google Maps APIs which is subject to
                  Google’s Terms of Service. You may find the Google Maps APIs
                  Terms of Service here. To find out more about Google’s Privacy
                  Policy, please refer to this{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 text-primary hover:text-secondary"
                    href="https://policies.google.com/privacy"
                    target="_blank"
                  >
                    link
                  </a>
                  .
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-6">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </h3>
                <p className="mb-2 text-body">
                  <strong className="italic ">In Short: </strong> If you choose
                  to register or log in to our services using a social media
                  account, we may have access to certain information about you.
                </p>
                <p className="mb-2 text-body">
                  Our Website offers you the ability to register and login using
                  your third-party social media account details (like your
                  Facebook or Twitter logins). Where you choose to do this, we
                  will receive certain profile information about you from your
                  social media provider. The profile Information we receive may
                  vary depending on the social media provider concerned, but
                  will often include your name, email address, profile picture
                  as well as other information you choose to make public on such
                  social media platform.
                </p>
                <p className="text-body">
                  We will use the information we receive only for the purposes
                  that are described in this privacy notice or that are
                  otherwise made clear to you on the relevant Website. Please
                  note that we do not control, and are not responsible for,
                  other uses of your personal information by your third-party
                  social media provider. We recommend that you review their
                  privacy notice to understand how they collect, use and share
                  your personal information, and how you can set your privacy
                  preferences on their sites and apps.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-7">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  7. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                </h3>
                <p className="mb-2 text-body">
                  <strong className="italic ">In Short: </strong> We are not
                  responsible for the safety of any information that you share
                  with third-party providers who advertise, but are not
                  affiliated with, our Website.
                </p>
                <p className="mb-2 text-body">
                  The Website may contain advertisements from third parties that
                  are not affiliated with us and which may link to other
                  websites, online services or mobile applications. We cannot
                  guarantee the safety and privacy of data you provide to any
                  third parties. Any data collected by third parties is not
                  covered by this privacy notice. We are not responsible for the
                  content or privacy and security practices and policies of any
                  third parties, including other websites, services or
                  applications that may be linked to or from the Website. You
                  should review the policies of such third parties and contact
                  them directly to respond to your questions.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-8">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  8. HOW LONG DO WE KEEP YOUR INFORMATION?
                </h3>
                <p className="mb-2 text-body">
                  <strong className="italic ">In Short: </strong> We keep your
                  information for as long as necessary to fulfill the purposes
                  outlined in this privacy notice unless otherwise required by
                  law.
                </p>
                <p className="mb-2 text-body">
                  We will only keep your personal information for as long as it
                  is necessary for the purposes set out in this privacy notice,
                  unless a longer retention period is required or permitted by
                  law (such as tax, accounting or other legal requirements). No
                  purpose in this notice will require us keeping your personal
                  information for longer than the period of time in which users
                  have an account with us.
                </p>
                <p className="mb-2 text-body">
                  When we have no ongoing legitimate business need to process
                  your personal information, we will either delete or anonymize
                  such information, or, if this is not possible (for example,
                  because your personal information has been stored in backup
                  archives), then we will securely store your personal
                  information and isolate it from any further processing until
                  deletion is possible.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-9">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  9. HOW DO WE KEEP YOUR INFORMATION SAFE?
                </h3>
                <p className="mb-2 text-body">
                  <strong className="italic ">In Short: </strong> We aim to
                  protect your personal information through a system of
                  organizational and technical security measures.
                </p>
                <p className="mb-2 text-body">
                  We have implemented appropriate technical and organizational
                  security measures designed to protect the security of any
                  personal information we process. However, despite our
                  safeguards and efforts to secure your information, no
                  electronic transmission over the Internet or information
                  storage technology can be guaranteed to be 100% secure, so we
                  cannot promise or guarantee that hackers, cybercriminals, or
                  other unauthorized third parties will not be able to defeat
                  our security, and improperly collect, access, steal, or modify
                  your information. Although we will do our best to protect your
                  personal information, transmission of personal information to
                  and from our Website is at your own risk. You should only
                  access the Website within a secure environment.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-10">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  10. DO WE COLLECT INFORMATION FROM MINORS?
                </h3>
                <p className="mb-2 text-body">
                  <strong className="italic ">In Short: </strong> We do not
                  knowingly collect data from or market to children under 18
                  years of age.
                </p>
                <p className="mb-2 text-body">
                  We do not knowingly solicit data from or market to children
                  under 18 years of age. By using the Website, you represent
                  that you are at least 18 or that you are the parent or
                  guardian of such a minor and consent to such minor dependent’s
                  use of the Website. If we learn that personal information from
                  users less than 18 years of age has been collected, we will
                  deactivate the account and take reasonable measures to
                  promptly delete such data from our records. If you become
                  aware of any data we may have collected from children under
                  age 18, please contact us at{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 text-primary hover:text-secondary"
                    href="mailto:contact@colissia.com"
                  >
                    contact@colissia.com
                  </a>
                  .
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-11">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  11. WHAT ARE YOUR PRIVACY RIGHTS?
                </h3>
                <p className="mb-2 text-body">
                  <strong className="italic ">In Short: </strong> in some
                  regions, such as the European Economic Area, you have rights
                  that allow you greater access to and control over your
                  personal information. You may review, change, or terminate
                  your account at any time.
                </p>
                <p className="mb-2 text-body">
                  In some regions (like the European Economic Area), you have
                  certain rights under applicable data protection laws. These
                  may include the right (i) to request access and obtain a copy
                  of your personal information, (ii) to request rectification or
                  erasure; (iii) to restrict the processing of your personal
                  information; and (iv) if applicable, to data portability. In
                  certain circumstances, you may also have the right to object
                  to the processing of your personal information. To make such a
                  request, please use the contact details provided{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 text-primary hover:text-secondary"
                    href="#section-16"
                  >
                    below
                  </a>
                  . We will consider and act upon any request in accordance with
                  applicable data protection laws.
                </p>
                <p className="mb-2 text-body">
                  If we are relying on your consent to process your personal
                  information, you have the right to withdraw your consent at
                  any time. Please note however that this will not affect the
                  lawfulness of the processing before its withdrawal, nor will
                  it affect the processing of your personal information
                  conducted in reliance on lawful processing grounds other than
                  consent.
                </p>
                <p className="mb-2 text-body">
                  If you are a resident in the European Economic Area and you
                  believe we are unlawfully processing your personal
                  information, you also have the right to complain to your local
                  data protection supervisory authority. You can find their
                  contact details here:{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 text-primary hover:text-secondary"
                    href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html"
                    target="_blank"
                  >
                    http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html
                  </a>
                  .
                </p>

                <p className="mb-2 text-body">
                  If you are a resident in Switzerland, the contact details for
                  the data protection authorities are available here:{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 text-primary hover:text-secondary"
                    href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                    target="_blank"
                  >
                    https://www.edoeb.admin.ch/edoeb/en/home.html
                  </a>
                  .
                </p>
                <p className="mb-2 text-body">
                  If you have questions or comments about your privacy rights,
                  you may email us at{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 text-primary hover:text-secondary"
                    href="mailto:contact@curiouscraft.com"
                  >
                    contact@curiouscraft.com
                  </a>
                  .
                </p>
                <p className="mb-2 text-body">
                  <strong className="italic ">Account Information </strong>
                  <br></br>If you would at any time like to review or change the
                  information in your account or terminate your account, you
                  can:
                </p>
                <ul className="mb-2 text-body">
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>Contact us using the contact information provided.</p>
                  </li>

                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      Log in to your account settings and update your user
                      account.
                    </p>
                  </li>
                </ul>
                <p className="mb-2 text-body">
                  Upon your request to terminate your account, we will
                  deactivate or delete your account and information from our
                  active databases. However, we may retain some information in
                  our files to prevent fraud, troubleshoot problems, assist with
                  any investigations, enforce our Terms of Use and/or comply
                  with applicable legal requirements.
                </p>
                <p className="mb-2 text-body">
                  <strong className="underline">
                    Cookies and similar technologies:{" "}
                  </strong>
                  Most Web browsers are set to accept cookies by default. If you
                  prefer, you can usually choose to set your browser to remove
                  cookies and to reject cookies. If you choose to remove cookies
                  or reject cookies, this could affect certain features or
                  services of our Website. To opt-out of interest-based
                  advertising by advertisers on our Website visit{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 text-primary hover:text-secondary"
                    href="http://www.aboutads.info/choicess"
                    target="_blank"
                  >
                    http://www.aboutads.info/choices
                  </a>
                  .
                </p>
                <p className="mb-2 text-body">
                  <strong className="underline">
                    Opting out of email marketing:{" "}
                  </strong>
                  You can unsubscribe from our marketing email list at any time
                  by clicking on the unsubscribe link in the emails that we send
                  or by contacting us using the details provided{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 text-primary hover:text-secondary"
                    href="#section-16"
                  >
                    below
                  </a>
                  . You will then be removed from the marketing email list —
                  however, we may still communicate with you, for example to
                  send you service-related emails that are necessary for the
                  administration and use of your account, to respond to service
                  requests, or for other non-marketing purposes. To otherwise
                  opt-out, you may:
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-12">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  12. CONTROLS FOR DO-NOT-TRACK FEATURES
                </h3>
                <p className="mb-2 text-body">
                  Most web browsers and some mobile operating systems and mobile
                  applications include a Do-Not-Track (“DNT”) feature or setting
                  you can activate to signal your privacy preference not to have
                  data about your online browsing activities monitored and
                  collected. At this stage no uniform technology standard for
                  recognizing and implementing DNT signals has been finalized.
                  As such, we do not currently respond to DNT browser signals or
                  any other mechanism that automatically communicates your
                  choice not to be tracked online. If a standard for online
                  tracking is adopted that we must follow in the future, we will
                  inform you about that practice in a revised version of this
                  Privacy Notice.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-13">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  13. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </h3>
                <p className="mb-2 text-body">
                  <strong className="italic">In Short: </strong> Yes, if you are
                  a resident of California, you are granted specific rights
                  regarding access to your personal information.
                </p>
                <p className="mb-2 text-body">
                  California Civil Code Section 1798.83, also known as the
                  “Shine The Light” law, permits our users who are California
                  residents to request and obtain from us, once a year and free
                  of charge, information about categories of personal
                  information (if any) we disclosed to third parties for direct
                  marketing purposes and the names and addresses of all third
                  parties with which we shared personal information in the
                  immediately preceding calendar year. If you are a California
                  resident and would like to make such a request, please submit
                  your request in writing to us using the contact information
                  provided{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 text-primary hover:text-secondary"
                    href="#section-16"
                  >
                    below
                  </a>
                  .
                </p>

                <p className="mb-2 text-body">
                  If you are under 18 years of age, reside in California, and
                  have a registered account with the Website, you have the right
                  to request removal of unwanted data that you publicly post on
                  the Website. To request removal of such data, please contact
                  us using the contact information provided below, and include
                  the email address associated with your account and a statement
                  that you reside in California. We will make sure the data is
                  not publicly displayed on the Website, but please be aware
                  that the data may not be completely or comprehensively removed
                  from all our systems (e.g. backups, etc.).
                </p>
                <h3 className="mt-3 mb-2 font-semibold text-white uppercase">
                  CCPA Privacy Notice
                </h3>
                <p className="mb-2 text-body">
                  The California Code of Regulations defines a “resident” as:
                </p>
                <p className="mb-2 text-body">
                  (1) every individual who is in the State of California for
                  other than a temporary or transitory purpose and
                  <br></br>
                  (2) every individual who is domiciled in the State of
                  California who is outside the State of California for a
                  temporary or transitory purpose
                </p>
                <p className="mb-2 text-body">
                  All other individuals are defined as “non-residents.”
                  <br></br>
                  If this definition of “resident” applies to you, we must
                  adhere to certain rights and obligations regarding your
                  personal information.
                </p>
                <p className="mb-2 text-body">
                  <strong>
                    What categories of personal information do we collect?
                  </strong>
                  <br></br>
                  We have collected the following categories of personal
                  information in the past twelve (12) months:
                </p>

                <div className="container px-0 mx-auto sm:px-8">
                  <div className="py-8">
                    <div className="-mx-4 overflow-x-auto sm:-mx-8">
                      <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                        <table className="min-w-full leading-normal">
                          <thead>
                            <tr>
                              <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-white uppercase border-b-2 border-primary bg-darker">
                                Category
                              </th>
                              <th className="px-2 py-3 text-xs font-semibold tracking-wider text-left text-white uppercase border-b-2 border-primary bg-darker">
                                Examples
                              </th>

                              <th className="px-5 py-3 text-xs font-semibold tracking-wider text-center text-white uppercase border-b-2 border-primary bg-darker">
                                Collected
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="whitespace-no-wrap text-body">
                                      A. Identifiers
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <p className="whitespace-no-wrap text-body">
                                  Contact details, such as real name, alias,
                                  postal address, telephone or mobile contact
                                  number, unique personal identifier, online
                                  identifier, Internet Protocol address, email
                                  address and account name
                                </p>
                              </td>

                              <td className="py-5 text-sm text-center border-b border-primary bg-liteDark">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-primaryDark">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 rounded-full opacity-50 bg-primary"
                                  ></span>
                                  <span className="relative">YES</span>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="whitespace-no-wrap text-body">
                                      B. Personal information categories listed
                                      in the California Customer Records statute
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <p className="whitespace-no-wrap text-body">
                                  Name, contact information, education,
                                  employment, employment history and financial
                                  information
                                </p>
                              </td>

                              <td className="py-5 text-sm text-center border-b border-primary bg-liteDark">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-300">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 rounded-full opacity-50 bg-primary"
                                  ></span>
                                  <span className="relative">YES</span>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="whitespace-no-wrap text-body">
                                      C. Protected classification
                                      characteristics under California or
                                      federal law
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <p className="whitespace-no-wrap text-body">
                                  Gender and date of birth
                                </p>
                              </td>

                              <td className="py-5 text-sm text-center border-b border-primary bg-liteDark">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-red-200 rounded-full opacity-50"
                                  ></span>
                                  <span className="relative">NO</span>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="whitespace-no-wrap text-body">
                                      D. Commercial information
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <p className="whitespace-no-wrap text-body">
                                  Transaction information, purchase history,
                                  financial details and payment information
                                </p>
                              </td>

                              <td className="py-5 text-sm text-center border-b border-primary bg-liteDark">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-300">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 rounded-full opacity-50 bg-primary"
                                  ></span>
                                  <span className="relative">YES</span>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="whitespace-no-wrap text-body">
                                      E. Biometric information
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <p className="whitespace-no-wrap text-body">
                                  Fingerprints and voiceprints
                                </p>
                              </td>

                              <td className="py-5 text-sm text-center border-b border-primary bg-liteDark">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-red-200 rounded-full opacity-50"
                                  ></span>
                                  <span className="relative">NO</span>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="whitespace-no-wrap text-body">
                                      F. Internet or other similar network
                                      activity
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <p className="whitespace-no-wrap text-body">
                                  Browsing history, search history, online
                                  behavior, interest data, and interactions with
                                  our and other websites, applications, systems
                                  and advertisements
                                </p>
                              </td>

                              <td className="py-5 text-sm text-center border-b border-primary bg-liteDark">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-red-200 rounded-full opacity-50"
                                  ></span>
                                  <span className="relative">NO</span>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="whitespace-no-wrap text-body">
                                      G. Geolocation data
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <p className="whitespace-no-wrap text-body">
                                  Device location
                                </p>
                              </td>

                              <td className="py-5 text-sm text-center border-b border-primary bg-liteDark">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-300">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 rounded-full opacity-50 bg-primary"
                                  ></span>
                                  <span className="relative">YES</span>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="whitespace-no-wrap text-body">
                                      H. Audio, electronic, visual, thermal,
                                      olfactory, or similar information
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <p className="whitespace-no-wrap text-body">
                                  Images and audio, video or call recordings
                                  created in connection with our business
                                  activities
                                </p>
                              </td>

                              <td className="py-5 text-sm text-center border-b border-primary bg-liteDark">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-red-200 rounded-full opacity-50"
                                  ></span>
                                  <span className="relative">NO</span>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="whitespace-no-wrap text-body">
                                      I. Professional or employment-related
                                      information
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <p className="whitespace-no-wrap text-body">
                                  Business contact details in order to provide
                                  you our services at a business level, job
                                  title as well as work history and professional
                                  qualifications if you apply for a job with us
                                </p>
                              </td>

                              <td className="py-5 text-sm text-center border-b border-primary bg-liteDark">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-red-200 rounded-full opacity-50"
                                  ></span>
                                  <span className="relative">NO</span>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="whitespace-no-wrap text-body">
                                      J. Education Information
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-2 py-5 text-sm border-b border-primary bg-liteDark">
                                <p className="whitespace-no-wrap text-body">
                                  Student records and directory information
                                </p>
                              </td>

                              <td className="py-5 text-sm text-center border-b border-primary bg-liteDark">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-red-200 rounded-full opacity-50"
                                  ></span>
                                  <span className="relative">NO</span>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-5 text-sm bg-liteDark">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="whitespace-no-wrap text-body">
                                      K. Inferences drawn from other personal
                                      information
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-2 py-5 text-sm bg-liteDark">
                                <p className="whitespace-no-wrap text-body">
                                  Inferences drawn from any of the collected
                                  personal information listed above to create a
                                  profile or summary about, for example, an
                                  individual’s preferences and characteristics
                                </p>
                              </td>

                              <td className="py-5 text-sm text-center bg-liteDark">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-red-200 rounded-full opacity-50"
                                  ></span>
                                  <span className="relative">NO</span>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mb-2 text-body">
                  We may also collect other personal information outside of
                  these categories instances where you interact with us
                  in-person, online, or by phone or mail in the context of:
                </p>
                <ul className="mb-2 text-body">
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>Receiving help through our customer support channels;</p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>Participation in customer surveys or contests; and</p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      Facilitation in the delivery of our Services and to
                      respond to your inquiries.
                    </p>
                  </li>
                </ul>
                <p className="mb-2 text-body">
                  <strong className="">
                    How do we use and share your personal information?
                  </strong>{" "}
                  <br></br> More information about our data collection and
                  sharing practices can be found in this Privacy Notice.
                </p>
                <p className="mb-2 text-body">
                  You may contact us by email at{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 hover:text-secondary text-primary"
                    href="mailto:contact@colissia.com"
                  >
                    contact@colissia.com
                  </a>
                  , by visiting{" "}
                  <Link href="/contact">
                    <a className="italic font-semibold transition-all duration-500 hover:text-secondary text-primary">
                      https://colissia.com/contact
                    </a>
                  </Link>
                  , or by referring to the contact details at the bottom of this
                  document.
                </p>
                <p className="mb-2 text-body">
                  If you are using an authorized agent to exercise your right to
                  opt-out we may deny a request if the authorized agent does not
                  submit proof that they have been validly authorized to act on
                  your behalf.
                </p>
                <p className="mb-2 text-body">
                  <strong>
                    Will your information be shared with anyone else?
                  </strong>
                  <br></br>
                  We may disclose your personal information with our service
                  providers pursuant to a written contract between us and each
                  service provider. Each service provider is a for-profit entity
                  that processes the information on our behalf.
                </p>
                <p className="mb-2 text-body">
                  We may use your personal information for our own business
                  purposes, such as for undertaking internal research for
                  technological development and demonstration. This is not
                  considered to be “selling” of your personal data.
                </p>
                <p className="mb-2 text-body">
                  Colissia Global Ltd. has not disclosed or sold any personal
                  information to third parties for a business or commercial
                  purpose in the preceding 12 months. Colissia Global Ltd. will
                  not sell personal information in the future belonging to
                  website visitors, users and other consumers.
                </p>
                <p className="mb-2 text-body">
                  <strong>
                    Your rights with respect to your personal data
                  </strong>
                  <br></br>
                  <span className="underline">
                    Right to request deletion of the data – Request to delete
                  </span>
                </p>
                <p className="mb-2 text-body">
                  You can ask for the deletion of your personal information. If
                  you ask us to delete your personal information, we will
                  respect your request and delete your personal information,
                  subject to certain exceptions provided by law, such as (but
                  not limited to) the exercise by another consumer of his or her
                  right to free speech, our compliance requirements resulting
                  from a legal obligation or any processing that may be required
                  to protect against illegal activities.
                </p>
                <p className="mb-2 text-body">
                  <span className="underline">
                    Right to be informed – Request to know
                  </span>
                </p>
                <p className="mb-2 text-body">
                  Depending on the circumstances, you have a right to know:
                </p>
                <ul className="mb-2 text-body">
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>whether we collect and use your personal information;</p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      the categories of personal information that we collect;
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      the purposes for which the collected personal information
                      is used;
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      whether we sell your personal information to third
                      parties;
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      the categories of personal information that we sold or
                      disclosed for a business purpose;
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      the categories of third parties to whom the personal
                      information was sold or disclosed for a business purpose;
                      and
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      the business or commercial purpose for collecting or
                      selling personal information.
                    </p>
                  </li>
                </ul>
                <p className="mb-2 text-body">
                  In accordance with applicable law, we are not obligated to
                  provide or delete consumer information that is de-identified
                  in response to a consumer request or to re-identify individual
                  data to verify a consumer request.
                </p>
                <p className="mb-2 text-body">
                  <span className="underline">
                    Right to Non-Discrimination for the Exercise of a Consumer’s
                    Privacy Rights
                  </span>
                </p>
                <p className="mb-2 text-body">
                  We will not discriminate against you if you exercise your
                  privacy rights.
                </p>
                <p className="mb-2 text-body">
                  <span className="underline">Verification process</span>
                </p>
                <p className="mb-2 text-body">
                  Upon receiving your request, we will need to verify your
                  identity to determine you are the same person about whom we
                  have the information in our system. These verification efforts
                  require us to ask you to provide information so that we can
                  match it with information you have previously provided us. For
                  instance, depending on the type of request you submit, we may
                  ask you to provide certain information so that we can match
                  the information you provide with the information we already
                  have on file, or we may contact you through a communication
                  method (e.g. phone or email) that you have previously provided
                  to us. We may also use other verification methods as the
                  circumstances dictate.
                </p>
                <p className="mb-2 text-body">
                  We will only use personal information provided in your request
                  to verify your identity or authority to make the request. To
                  the extent possible, we will avoid requesting additional
                  information from you for the purposes of verification. If,
                  however, if we cannot verify your identity from the
                  information already maintained by us, we may request that you
                  provide additional information for the purposes of verifying
                  your identity, and for security or fraud-prevention purposes.
                  We will delete such additionally provided information as soon
                  as we finish verifying you.
                </p>
                <p className="mb-2 text-body">
                  <span className="underline">Other privacy rights</span>
                </p>
                <ul className="mb-2 text-body">
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      you may object to the processing of your personal data
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      you may request correction of your personal data if it is
                      incorrect or no longer relevant, or ask to restrict the
                      processing of the data
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      you can designate an authorized agent to make a request
                      under the CCPA on your behalf. We may deny a request from
                      an authorized agent that does not submit proof that they
                      have been validly authorized to act on your behalf in
                      accordance with the CCPA.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    {" "}
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      you may request to opt-out from future selling of your
                      personal information to third parties. Upon receiving a
                      request to opt-out, we will act upon the request as soon
                      as feasibly possible, but no later than 15 days from the
                      date of the request submission.
                    </p>
                  </li>
                </ul>
                <p className="mb-2 text-body">
                  To exercise these rights, you can contact us by email at{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 hover:text-secondary text-primary"
                    href="mailto:contact@colissia.com"
                  >
                    contact@colissia.com
                  </a>
                  , by visiting{" "}
                  <Link href="/contact">
                    <a className="italic font-semibold transition-all duration-500 hover:text-secondary text-primary">
                      https://colissia.com/contact
                    </a>
                  </Link>
                  , or by referring to the contact details{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 hover:text-secondary text-primary"
                    href="#section-16"
                  >
                    at the end
                  </a>{" "}
                  of this document. If you have a complaint about how we handle
                  your data, we would like to hear from you.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-14">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  14. DO WE MAKE UPDATES TO THIS NOTICE?
                </h3>
                <p className="mb-2 text-body">
                  <strong className="italic ">In Short: </strong> Yes, we will
                  update this notice as necessary to stay compliant with
                  relevant laws.
                </p>
                <p className="mb-2 text-body">
                  We may update this privacy notice from time to time. The
                  updated version will be indicated by an updated “Revised” date
                  and the updated version will be effective as soon as it is
                  accessible. If we make material changes to this privacy
                  notice, we may notify you either by prominently posting a
                  notice of such changes or by directly sending you a
                  notification. We encourage you to review this privacy notice
                  frequently to be informed of how we are protecting your
                  information.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-15">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                  FROM YOU?
                </h3>
                <p className="mb-2 text-body">
                  <strong className="italic ">In Short: </strong> Just contact
                  us, we’ll do the rest for you.
                </p>
                <p className="mb-2 text-body">
                  Based on the applicable laws of your country, you may have the
                  right to request access to the personal information we collect
                  from you, change that information, or delete it in some
                  circumstances. To request to review, update, or delete your
                  personal information, please submit a request by clicking{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 hover:text-secondary text-primary"
                    href="mailto:contact@colissia.com"
                  >
                    here
                  </a>
                  . We will respond to your request within 30 days.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-16">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </h3>
                <p className="mb-2 text-body">
                  If you have questions or comments about this notice, you may
                  email us at{" "}
                  <a
                    className="italic font-semibold transition-all duration-500 hover:text-secondary text-primary"
                    href="mailto:contact@colissia.com"
                  >
                    contact@colissia.com
                  </a>{" "}
                  or by post to:
                </p>
                <p className="mb-2 text-body">
                  <i className="text-body">
                    Colissia Global Ltd.
                    <br />
                    Attn : Wasim Zadid
                    <br />
                    House#27/4, Road#Beradanga-2,
                    <br />
                    Rajbari, Dhaka
                    <br />
                    Bangladesh-7700.
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
