import PageTitle from "@components/PageTitle";
import Link from "next/link";
import { VscCircleFilled } from "react-icons/vsc";
import Scrollspy from "react-scrollspy";

const TermsAndConditions = () => {
  return (
    <>
      <PageTitle img="/img/about-page-title-bg.jpeg" title="cookie-policy" />
      <div className="select-none bg-dark">
        <div className="container px-4 py-16 pl-8 pr-8 mx-auto lg:max-w-scr lg:pr-0 lg:pl-0 lg:left-8 left-44 lg:px-8 lg:py-32">
          <h2 className="mb-6 text-3xl font-bold text-white uppercase md:text-center lg:mb-16 sm:text-4xl sm:leading-none">
            Colissia cookie policy
          </h2>
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-xl py-3 sm:mx-auto lg:max-w-4xl lg:pl-10">
              <div className="mb-5">
                <h3 className="mb-1 text-2xl font-semibold text-white uppercase">
                  cookie-policy
                </h3>
                <p className="mb-2 font-semibold text-body">
                  Last updated September 26, 2020
                </p>
                <p className="mb-2 text-body">
                  This Cookie Policy explains how Colissia Global Ltd. (“
                  <em className="font-semibold">Company</em>", “
                  <em className="font-semibold">we</em>", “
                  <em className="font-semibold">us</em>",“
                  <em className="font-semibold">our</em>") uses cookies and
                  similar technologies to recognize you when you visit our
                  websites at{" "}
                  <a
                    href="https://colissia.com"
                    className="italic transition-colors text-primary hover:text-secondary"
                  >
                    https://colissia.com
                  </a>
                  , (“<em className="font-semibold">Websites</em>"). It explains
                  what these technologies are and why we use them, as well as
                  your rights to control our use of them.
                </p>
                <p className="mb-2 text-body">
                  In some cases we may use cookies to collect personal
                  information, or that becomes personal information if we
                  combine it with other information.
                </p>
              </div>
              <div className="mb-5">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  What are cookies?
                </h3>
                <p className="mb-2 text-body">
                  Cookies are small data files that are placed on your computer
                  or mobile device when you visit a website. Cookies are widely
                  used by website owners in order to make their websites work,
                  or to work more efficiently, as well as to provide reporting
                  information.<br></br>
                  Cookies set by the website owner (in this case, Colissia Ltd.)
                  are called “first party cookies”. Cookies set by parties other
                  than the website owner are called “third party cookies”. Third
                  party cookies enable third party features or functionality to
                  be provided on or through the website (e.g. like advertising,
                  interactive content and analytics). The parties that set these
                  third party cookies can recognize your computer both when it
                  visits the website in question and also when it visits certain
                  other websites.
                </p>
              </div>
              <div className="mb-5" id="section-3">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Why do we use cookies?
                </h3>
                <p className="mb-2 text-body">
                  We use first and third party cookies for several reasons. Some
                  cookies are required for technical reasons in order for our
                  Websites to operate, and we refer to these as “essential” or
                  “strictly necessary” cookies. Other cookies also enable us to
                  track and target the interests of our users to enhance the
                  experience on our Online Properties. Third parties serve
                  cookies through our Websites for advertising, analytics and
                  other purposes. This is described in more detail below.
                  <br></br>
                  The specific types of first and third party cookies served
                  through our Websites and the purposes they perform are
                  described below (please note that the specific cookies served
                  may vary depending on the specific Online Properties you
                  visit):
                </p>
              </div>
              <div className="mb-5" id="section-2">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  How can I control cookies?
                </h3>
                <p className="mb-2 text-body">
                  You have the right to decide whether to accept or reject
                  cookies. You can exercise your cookie rights by setting your
                  preferences in the Cookie Consent Manager. The Cookie Consent
                  Manager allows you to select which categories of cookies you
                  accept or reject. Essential cookies cannot be rejected as they
                  are strictly necessary to provide you with services.<br></br>
                  The Cookie Consent Manager can be found in the notification
                  banner and on our website. If you choose to reject cookies,
                  you may still use our website though your access to some
                  functionality and areas of our website may be restricted. You
                  may also set or amend your web browser controls to accept or
                  refuse cookies. As the means by which you can refuse cookies
                  through your web browser controls vary from
                  browser-to-browser, you should visit your browser’s help menu
                  for more information.<br></br>
                  In addition, most advertising networks offer you a way to opt
                  out of targeted advertising. If you would like to find out
                  more information, please visit
                  <br></br>
                  By submitting an order through the Site, you agree to pay in
                  advance the full price of the Product(s) ordered, plus any
                  applicable taxes, shipping and handling and/or other charges.
                  Payment may be made by credit card or any other method of
                  payment we may make available to you (each, a “Method of
                  Payment”). In order to make a payment, you must provide us
                  with valid credit card and/or other billing information
                  details and authorize us (or any third party payment service
                  provider engaged by us) to charge your Method of Payment for
                  all orders placed and accepted via the Site.<br></br>
                  <a
                    href="http://www.aboutads.info/choices/"
                    className="italic transition-colors text-primary hover:text-secondary"
                  >
                    http://www.aboutads.info/choices/
                  </a>{" "}
                  or{" "}
                  <a
                    href="http://www.youronlinechoices.com"
                    className="italic transition-colors text-primary hover:text-secondary"
                  >
                    http://www.youronlinechoices.com
                  </a>
                  .<br></br>
                  The specific types of first and third party cookies served
                  through our Websites and the purposes they perform are
                  described in the table below (please note that the specific
                  cookies served may vary depending on the specific Online
                  Properties you visit):
                </p>
              </div>
              <div className="mb-5">
                <h3 className="mb-3 font-semibold text-white underline uppercase text-2x">
                  Essential website cookies:
                </h3>
                <p className="mb-2 text-body">
                  These cookies are strictly necessary to provide you with
                  services available through our Websites and to use some of its
                  features, such as access to secure areas.
                </p>

                <div className="mb-5 border border-primary text-body ">
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Name:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      __tlbcpv
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Purpose:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Used to record unique visitor views of the consent banner.
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Provider:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      {" "}
                      .termly.io
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Service:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Termly{" "}
                      <a
                        href="https://termly.io/our-privacy-policy/"
                        className="italic transition-colors text-primary hover:text-secondary"
                      >
                        View Service Privacy Policy
                      </a>
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Country:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      United State
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Type:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      http_cookie
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line text-body ">
                    <span className="w-10 ml-2 whitespace-pre">
                      Expires in:
                    </span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      1 year
                    </span>
                  </p>
                </div>

                <div className="mb-5 border border-primary text-body ">
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Name:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      PHPSESSID#
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Purpose:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Used by PHP to identify a current user’s session. Its
                      activity expires when a session is ended.
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Provider:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      colissia.com
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Service:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      PHP{" "}
                      <a
                        href="https://www.php.net/privacy.php"
                        className="italic transition-colors text-primary hover:text-secondary"
                      >
                        View Service Privacy Policy
                      </a>
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Country:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      United State
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Type:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      server_cookie
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line text-body ">
                    <span className="w-10 ml-2 whitespace-pre">
                      Expires in:
                    </span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      session
                    </span>
                  </p>
                </div>

                <div className="mb-5 border border-primary text-body ">
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Name:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      __cfduid
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Purpose:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Used by Cloudflare to identify individual clients behind a
                      shared IP address, and apply security settings on a
                      per-client basis. This is a HTTP type cookie that expires
                      after 1 year.
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Provider:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      .cloudflare.com
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Service:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      CloudFlare{" "}
                      <a
                        href="https://www.cloudflare.com/privacypolicy/"
                        className="italic transition-colors text-primary hover:text-secondary"
                      >
                        View Service Privacy Policy
                      </a>
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Country:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      United State
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Type:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      http_cookie
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line text-body ">
                    <span className="w-10 ml-2 whitespace-pre">
                      Expires in:
                    </span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      30 days
                    </span>
                  </p>
                </div>

                <div className="mb-5 border border-primary text-body ">
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Name:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      __cfduid
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Purpose:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Used by Cloudflare to identify individual clients behind a
                      shared IP address, and apply security settings on a
                      per-client basis. This is a HTTP type cookie that expires
                      after 1 year.
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Provider:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      .datatables.net
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Service:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      CloudFlare{" "}
                      <a
                        href="https://www.cloudflare.com/privacypolicy/"
                        className="italic transition-colors text-primary hover:text-secondary"
                      >
                        View Service Privacy Policy
                      </a>
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Country:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      United State
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Type:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      http_cookie
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line text-body ">
                    <span className="w-10 ml-2 whitespace-pre">
                      Expires in:
                    </span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      30 days
                    </span>
                  </p>
                </div>

                <div className="mb-5 border border-primary text-body ">
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Name:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      __cfduid
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Purpose:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Used by Cloudflare to identify individual clients behind a
                      shared IP address, and apply security settings on a
                      per-client basis. This is a HTTP type cookie that expires
                      after 1 year.
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Provider:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      .colissia.com
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Service:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      CloudFlare{" "}
                      <a
                        href="https://www.cloudflare.com/privacypolicy/"
                        className="italic transition-colors text-primary hover:text-secondary"
                      >
                        View Service Privacy Policy
                      </a>
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Country:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      United State
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Type:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      http_cookie
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line text-body ">
                    <span className="w-10 ml-2 whitespace-pre">
                      Expires in:
                    </span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      30 days
                    </span>
                  </p>
                </div>
              </div>

              <div className="mb-5">
                <h3 className="mb-3 font-semibold text-white underline uppercase text-2x">
                  Analytics and customization cookies:
                </h3>
                <p className="mb-2 text-body">
                  These cookies collect information that is used either in
                  aggregate form to help us understand how our Websites are
                  being used or how effective our marketing campaigns are, or to
                  help us customize our Websites for you.
                </p>
                <div className="mb-5 border border-primary text-body ">
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Name:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      NID
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Purpose:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Set by Google to set a unique user ID to remember user
                      preferences. Persistent cookie that stays for 182 days
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Provider:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      .google.com
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Service:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Google{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        className="italic transition-colors text-primary hover:text-secondary"
                      >
                        View Service Privacy Policy
                      </a>
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Country:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      United State
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Type:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      server_cookie
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line text-body ">
                    <span className="w-10 ml-2 whitespace-pre">
                      Expires in:
                    </span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      6 months
                    </span>
                  </p>
                </div>

                <div className="mb-5 border border-primary text-body ">
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Name:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      _gat#
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Purpose:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Enables Google Analytics regulate the rate of requesting.
                      It is a HTTP cookie type that lasts for a session.
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Provider:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      {" "}
                      .colissia.com
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Service:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Google Analytics{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        className="italic transition-colors text-primary hover:text-secondary"
                      >
                        View Service Privacy Policy
                      </a>
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Country:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      United State
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Type:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      http_cookie
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line text-body ">
                    <span className="w-10 ml-2 whitespace-pre">
                      Expires in:
                    </span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      1 minute
                    </span>
                  </p>
                </div>

                <div className="mb-5 border border-primary text-body ">
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Name:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      _gid
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Purpose:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Keeps an entry of unique ID which is then used to come up
                      with statistical data on website usage by visitors. It is
                      a HTTP cookie type and expires after a browsing session.
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Provider:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      {" "}
                      .colissia.com
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Service:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Google Analytics{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        className="italic transition-colors text-primary hover:text-secondary"
                      >
                        View Service Privacy Policy
                      </a>
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Country:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      United State
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Type:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      http_cookie
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line text-body ">
                    <span className="w-10 ml-2 whitespace-pre">
                      Expires in:
                    </span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      1 day
                    </span>
                  </p>
                </div>

                <div className="mb-5 border border-primary text-body ">
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Name:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      _ga
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Purpose:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      It records a particular ID used to come up with data about
                      website usage by the user. It is a HTTP cookie that
                      expires after 2 years.
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Provider:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      .colissia.com
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Service:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Google Analytics{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        className="italic transition-colors text-primary hover:text-secondary"
                      >
                        View Service Privacy Policy
                      </a>
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Country:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      United State
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Type:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      http_cookie
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line text-body ">
                    <span className="w-10 ml-2 whitespace-pre">
                      Expires in:
                    </span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      1 year 11 months 29 days
                    </span>
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="mb-3 font-semibold text-white underline uppercase text-2x">
                  Analytics and customization cookies:
                </h3>
                <p className="mb-2 text-body">
                  These cookies are used to make advertising messages more
                  relevant to you. They perform functions like preventing the
                  same ad from continuously reappearing, ensuring that ads are
                  properly displayed for advertisers, and in some cases
                  selecting advertisements that are based on your interests.
                </p>
                <div className="mb-5 border border-primary text-body ">
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Name:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      wc_fragments_#
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Purpose:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Used to remember items a user has placed in a shopping
                      cart and ensure that cart functionality works perfectly.
                      It expires immediately a user leaves the site.
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Provider:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      colissia.com
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Service:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      Woocommerce{" "}
                      <a
                        href="https://wordpress.org/about/privacy/cookies/"
                        className="italic transition-colors text-primary hover:text-secondary"
                      >
                        View Service Privacy Policy
                      </a>
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Country:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      United State
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line border-b text-body border-primary">
                    <span className="w-10 ml-2 whitespace-pre">Type:</span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      html_session_storage
                    </span>
                  </p>
                  <p className="inline-flex w-full whitespace-pre-line text-body ">
                    <span className="w-10 ml-2 whitespace-pre">
                      Expires in:
                    </span>{" "}
                    <span className="relative flex max-w-screen-sm pl-8 pr-8 lg:pr-0 lg:left-8 left-4">
                      session
                    </span>
                  </p>
                </div>
                <p className="mb-2 text-body">
                  Google DoubleClick DART Cookie. Google is one of a third-party
                  vendor on our site. It also uses cookies, known as DART
                  cookies, to serve ads to our site visitors based upon their
                  visit to other sites on the internet. However, visitors may
                  choose to decline the use of DART cookies by visiting the
                  Google ad and content network Privacy Policy at the following
                  URL –{" "}
                  <a
                    href="https://policies.google.com/technologies/ads"
                    className="italic transition-colors text-primary hover:text-secondary"
                  >
                    https://policies.google.com/technologies/ads
                  </a>
                </p>
              </div>
              <div className="mb-5 mt-14" id="section-8">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  What about other tracking technologies, like web beacons?
                </h3>
                <p className="mb-2 text-body">
                  Cookies are not the only way to recognize or track visitors to
                  a website. We may use other, similar technologies from time to
                  time, like web beacons (sometimes called “tracking pixels” or
                  “clear gifs”). These are tiny graphics files that contain a
                  unique identifier that enable us to recognize when someone has
                  visited our Websites or opened an e-mail including them. This
                  allows us, for example, to monitor the traffic patterns of
                  users from one page within a website to another, to deliver or
                  communicate with cookies, to understand whether you have come
                  to the website from an online advertisement displayed on a
                  third-party website, to improve site performance, and to
                  measure the success of e-mail marketing campaigns. In many
                  instances, these technologies are reliant on cookies to
                  function properly, and so declining cookies will impair their
                  functioning.
                </p>
              </div>

              <div className="mb-5" id="section-8">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Do you use Flash cookies or Local Shared Objects?
                </h3>
                <p className="mb-2 text-body">
                  Websites may also use so-called “Flash Cookies” (also known as
                  Local Shared Objects or “LSOs”) to, among other things,
                  collect and store information about your use of our services,
                  fraud prevention and for other site operations.<br></br>
                  If you do not want Flash Cookies stored on your computer, you
                  can adjust the settings of your Flash player to block Flash
                  Cookies storage using the tools contained in the{" "}
                  <a
                    href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html"
                    className="italic transition-colors text-primary hover:text-secondary"
                  >
                    Website Storage Settings Panel
                  </a>
                  . You can also control Flash Cookies by going to the{" "}
                  <a
                    href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html"
                    className="italic transition-colors text-primary hover:text-secondary"
                  >
                    Global Storage Settings Panel
                  </a>{" "}
                  and following the instructions (which may include instructions
                  that explain, for example, how to delete existing Flash
                  Cookies (referred to “information” on the Macromedia site),
                  how to prevent Flash LSOs from being placed on your computer
                  without your being asked, and (for Flash Player 8 and later)
                  how to block Flash Cookies that are not being delivered by the
                  operator of the page you are on at the time). Please note that
                  setting the Flash Player to restrict or limit acceptance of
                  Flash Cookies may reduce or impede the functionality of some
                  Flash applications, including, potentially, Flash applications
                  used in connection with our services or online content.
                </p>
              </div>

              <div className="mb-5" id="section-9">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Do you serve targeted advertising?
                </h3>
                <p className="mb-2 text-body">
                  Third parties may serve cookies on your computer or mobile
                  device to serve advertising through our Websites. These
                  companies may use information about your visits to this and
                  other websites in order to provide relevant advertisements
                  about goods and services that you may be interested in. They
                  may also employ technology that is used to measure the
                  effectiveness of advertisements. This can be accomplished by
                  them using cookies or web beacons to collect information about
                  your visits to this and other sites in order to provide
                  relevant advertisements about goods and services of potential
                  interest to you. The information collected through this
                  process does not enable us or them to identify your name,
                  contact details or other details that directly identify you
                  unless you choose to provide these.
                </p>
              </div>
              <div className="mb-5" id="section-10">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  How often will you update this Cookie Policy?
                </h3>
                <p className="mb-2 text-body">
                  We may update this Cookie Policy from time to time in order to
                  reflect, for example, changes to the cookies we use or for
                  other operational, legal or regulatory reasons. Please
                  therefore re-visit this Cookie Policy regularly to stay
                  informed about our use of cookies and related technologies.
                  The date at the top of this Cookie Policy indicates when it
                  was last updated.
                </p>
              </div>
              <div className="mb-5" id="section-11">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Where can I get further information?
                </h3>
                <p className="mb-2 text-body">
                  If you have any questions about our use of cookies or other
                  technologies, please email us at{" "}
                  <a
                    href="mailto:contact@colissia.com"
                    className="italic transition-colors text-primary hover:text-secondary"
                  >
                    contact@colissia.com
                  </a>{" "}
                  or by post to:
                  <p>Colissia Global Ltd.</p>
                  <p>House#27/4, Road#Beradanga-2</p>
                  <p>Rajbari, Dhaka 7700</p>
                  <p>Bangladesh</p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+8801733723609"
                      className="italic transition-colors text-primary hover:text-secondary"
                    >
                      (+880)1733723609
                    </a>
                  </p>
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
