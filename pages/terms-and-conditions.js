import PageTitle from "@components/PageTitle";
import Link from "next/link";
import { VscCircleFilled } from "react-icons/vsc";
import Scrollspy from "react-scrollspy";

const TermsAndConditions = () => {
  return (
    <>
      <PageTitle
        img="/img/about-page-title-bg.jpeg"
        title="Terms and Conditions"
      />
      <div className="select-none bg-dark">
        <div className="container px-4 py-16 mx-auto lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-32">
          <h2 className="mb-6 text-3xl font-bold text-white uppercase lg:text-center lg:mb-16 sm:text-4xl sm:leading-none">
            Colissia Terms of Use
          </h2>
          <div className="flex flex-col lg:flex-row">
            <div className="relative hidden w-full lg:w-52 lg:block">
              <aside className="sticky lg:h-screen top-20">
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
                  ]}
                  currentClassName="text-primary"
                  className="grid gap-3 text-sm text-body"
                >
                  <li className="relative ">
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-1"
                    >
                      Aggrement to terms
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-2"
                    >
                      Acceptable use
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-3"
                    >
                      Information you provide to us
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-4"
                    >
                      Content you provide to us
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-5"
                    >
                      Our content
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-6"
                    >
                      Link to third party content
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-7"
                    >
                      Site management
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-8"
                    >
                      Modifications to and availability of the site
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-9"
                    >
                      Disclaimer/limitation of liability
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-10"
                    >
                      Term and termination
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-11"
                    >
                      Mobile application
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-12"
                    >
                      Copyright policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-13"
                    >
                      General
                    </a>
                  </li>
                </Scrollspy>
              </aside>
            </div>
            <div className="max-w-xl py-3 sm:mx-auto lg:max-w-3xl lg:pl-10">
              <div className="mb-5">
                <p className="mb-2 text-body">
                  These Terms and Conditions constitute a legally binding
                  agreement made between you, whether personally or on behalf of
                  an entity <em className="font-semibold">You</em>, and{" "}
                  <em className="font-semibold">Colissia Global Ltd.</em>,
                  located at{" "}
                  <em className="font-semibold">
                    {" "}
                    House#27/4, Road#Beradanga-2, Rajbari, Dhaka,
                    Bangladesh-7700 (we, us),
                  </em>
                  concerning your access to and use of the{" "}
                  <em className="font-semibold">
                    https://colissia.com (Colissia){" "}
                  </em>
                  website as well as any related applications the{" "}
                  <em className="font-semibold">(Site)</em>
                </p>
                <p className="mb-2 text-body">
                  The Colissia website, accessible from https://colissia.com is
                  a copyrighted work belonging to{" "}
                  <em className="font-semibold">Colissia Global Ltd.</em>{" "}
                  Certain features of the Site may be subject to additional
                  guidelines, terms or rules, which will be posted on the Site
                  in connection with such features. All such additional terms,
                  guidelines, and rules are incorporated by reference into these
                  Terms.
                </p>
                <p className="text-body">
                  <span className="uppercase">
                    BY LOG INTO AND/OR USING THE SITE, YOU ARE BEING COMPLIANT
                    TO THESE TERMS and you represent that you have the authority
                    and capacity to enter into these Terms. YOU SHOULD BE AT
                    LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE
                    WITH ALL OF THE PROVISION OF THESE TERMS, YOU MUST
                    DISCONTINUE IMMEDIATELY.
                  </span>
                </p>
              </div>
              <div className="mt-16 mb-5">
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
                      <strong>Country :</strong> where Colissia Global Ltd. or
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
                          <a>https://colissia.com</a>
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
              <div className="pt-24 mb-5" id="section-3">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  1. Agreement to Terms
                </h3>
                <p className="mb-2 text-body">
                  <strong className="text-white">1.1</strong> The Site provides
                  the following services: Digital Gift Cards, Game Codes,
                  Software Keys and so on (whatsoever available on the website,
                  the “<strong>Services”</strong>). You agree that by accessing
                  the Site and/or Services, you have read, understood, and agree
                  to be bound by all of these Terms and Conditions. If you do
                  not agree with all of these Terms and Conditions, then you are
                  prohibited from using the Site and Services.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">1.2</strong> The supplemental
                  policies set out in Section 1.6 below, as well as any
                  supplemental terms and condition or documents that may be
                  posted on the Site from time to time, are expressly
                  incorporated by reference.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">1.3</strong> We may make
                  changes to these Terms and Conditions at any time. The updated
                  version of these Terms and Conditions will be indicated by an
                  updated “Revised” date and the updated version will be
                  effective as soon as it is accessible. You are responsible for
                  reviewing these Terms and Conditions to stay informed of
                  updates. Your continued use of the Site represents that you
                  have accepted such changes.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">1.4</strong> We may update or
                  change the Site from time to time to reflect changes to our
                  products, our users’ needs and/or our business priorities.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">1.5</strong> The Site is
                  intended for users who are at least 18 years old. If you are
                  under the age of 18, you are not permitted to register for the
                  Site or use the Services without parental permission.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">1.6</strong> Additional
                  policies which also apply to your use of the Site include:
                </p>
                <ul className="py-3 sm:pl-5">
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      Our{" "}
                      <em>
                        <Link href="/privacy-policy">
                          <a className="transition-colors text-primary hover:text-secondary">
                            Privacy Policy
                          </a>
                        </Link>
                      </em>
                      , which sets out the terms on which we process any
                      personal data we collect from you, or that you provide to
                      us. By using the Site, you consent to such processing and
                      you warrant that all data provided by you is accurate.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      Our{" "}
                      <em>
                        <Link href="/refund-policy">
                          <a className="transition-colors text-primary hover:text-secondary">
                            Refund Policy
                          </a>
                        </Link>
                      </em>
                      , which will apply if you purchase from the Site and want
                      any Return/Refund.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-24 mb-5" id="section-3">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  2. Acceptable Use
                </h3>
                <p className="mb-2 text-body">
                  <strong className="text-white">2.1</strong> The following
                  terms constitute our “Acceptable Use Policy”: You agree not to
                  use the Site to collect, upload, transmit, display, or
                  distribute any User Content <em>(i)</em> that violates any
                  third-party right or any intellectual property or proprietary
                  right;<em>(ii)</em> that is unlawful, harassing, abusive,
                  tortious, threatening, harmful, invasive of another’s privacy,
                  vulgar, defamatory, false, intentionally misleading, trade
                  libelous, pornographic, obscene, patently offensive, promotes
                  racism, bigotry, hatred, or physical harm of any kind against
                  any group or individual; <em>(iii)</em> that is harmful to
                  minors in any way; or <em>(iv)</em> that is in violation of
                  any law, regulation, or obligations or restrictions imposed by
                  any third party.
                </p>
                <p className="mb-2 text-body">
                  In addition, you agree not to: <em>(i)</em> upload, transmit,
                  or distribute to or through the Site any software intended to
                  damage or alter a computer system or data; <em>(ii)</em> send
                  through the Site unsolicited or unauthorized advertising,
                  promotional materials, junk mail, spam, chain letters, pyramid
                  schemes, or any other form of duplicative or unsolicited
                  messages; <em>(iii)</em> use the Site to harvest, collect,
                  gather or assemble information or data regarding other users
                  without their consent; <em>(iv)</em> interfere with, disrupt,
                  or create an undue burden on servers or networks connected to
                  the Site, or violate the regulations, policies or procedures
                  of such networks; <em>(v)</em> attempt to gain unauthorized
                  access to the Site, whether through password mining or any
                  other means; <em>(vi)</em> harass or interfere with any other
                  user’s use and enjoyment of the Site; or <em>(vii)</em> use
                  software or automated agents or scripts to produce multiple
                  accounts on the Site, or to generate automated searches,
                  requests, or queries to the Site.
                </p>
                <p className="mb-2 text-body">
                  We reserve the right to review any User Content, and to
                  investigate and/or take appropriate action against you in our
                  sole discretion if you violate the Acceptable Use Policy or
                  any other provision of these Terms or otherwise create
                  liability for us or any other person. Such action may include
                  removing or modifying your User Content, terminating your
                  Account in accordance with Section 8, and/or reporting you to
                  law enforcement authorities.
                </p>
                <p className="mb-2 text-body">
                  If you provide Company with any feedback or suggestions
                  regarding the Site, you hereby assign to Company all rights in
                  such Feedback and agree that Company shall have the right to
                  use and fully exploit such Feedback and related information in
                  any manner it believes appropriate. Company will treat any
                  Feedback you provide to Company as non-confidential and
                  non-proprietary.
                </p>
                <p className="mb-2 text-body">
                  You agree to indemnify and hold Company and its officers,
                  employees, and agents harmless, including costs and attorneys’
                  fees, from any claim or demand made by any third-party due to
                  or arising out of <em>(a)</em> your use of the Site,{" "}
                  <em>(b)</em> your violation of these Terms, <em>(c)</em> your
                  violation of applicable laws or regulations or <em>(d)</em>{" "}
                  your User Content. Company reserves the right to assume the
                  exclusive defense and control of any matter for which you are
                  required to indemnify us, and you agree to cooperate with our
                  defense of these claims. You agree not to settle any matter
                  without the prior written consent of Company. Company will use
                  reasonable efforts to notify you of any such claim, action or
                  proceeding upon becoming aware of it.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">2.2</strong> The rights
                  approved to you in these Terms are subject to the following
                  restrictions: <em>(a)</em> you shall not sell, rent, lease,
                  transfer, assign, distribute, host, or otherwise commercially
                  exploit the Site; <em>(b)</em> you shall not change, make
                  derivative works of, disassemble, reverse compile or reverse
                  engineer any part of the Site; <em>(c)</em> you shall not
                  access the Site in order to build a similar or competitive
                  website; and <em>(d)</em> except as expressly stated herein,
                  no part of the Site may be copied, reproduced, distributed,
                  republished, downloaded, displayed, posted or transmitted in
                  any form or by any means unless otherwise indicated, any
                  future release, update, or other addition to functionality of
                  the Site shall be subject to these Terms. All copyright and
                  other proprietary notices on the Site must be retained on all
                  copies thereof.
                </p>
                <p className="mb-2 text-body">
                  Company reserves the right to change, suspend, or cease the
                  Site with or without notice to you. You approved that Company
                  will not be held liable to you or any third-party for any
                  change, interruption, or termination of the Site or any part.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">2.3 </strong>Company grants you
                  a non-transferable, non-exclusive, revocable, limited license
                  to access the Site solely for your own personal use.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">2.4 </strong>You may not access
                  or use the Site for any purpose other than that for which we
                  make the site and our services available. The Site may not be
                  used in connection with any commercial endeavors except those
                  that are specifically endorsed or approved by us.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-2">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  3. Information you provide to us
                </h3>
                <p className="mb-2 text-body">
                  You represent and warrant that: <em>(a)</em> all registration
                  information you submit will be true, accurate, current, and
                  complete and relate to you and not a third party; <em>(b)</em>{" "}
                  you will maintain the accuracy of such information and
                  promptly update such information as necessary; <em>(c)</em>{" "}
                  you will keep your password confidential and will be
                  responsible for all use of your password and account;{" "}
                  <em>(d)</em> you have the legal capacity and you agree to
                  comply with these Terms and Conditions; and <em>(e)</em> you
                  are not a minor in the jurisdiction in which you reside, or if
                  a minor, you have received parental permission to use the
                  Site.
                </p>
                <p className="mb-2 text-body">
                  If you provide any information that is untrue, inaccurate, not
                  current or incomplete, we may suspend or terminate your
                  account. We may remove or change a user name you select if we
                  determine that such user name is inappropriate.
                </p>
                <p className="mb-2 text-body">
                  In case you know or suspect that anyone other than you knows
                  your user information (such as an identification code or user
                  name) and/or password you must promptly notify us at{" "}
                  <a
                    className="italic transition-colors text-primary hover:text-secondary"
                    href="mailto:contact@colissia.com"
                  >
                    contact@colissia.com
                  </a>
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-4">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  4. Content you provide to us
                </h3>
                <p className="mb-2 text-body">
                  <strong className="text-white">4.1</strong> “
                  <strong>User Content</strong>” means any and all information
                  and content that a user submits or posts to the Site or send
                  feedback to us. You understand and agree that your User
                  Content may be viewed by other users on the Site, and that
                  they may be able to see who has posted that User Content. You
                  are exclusively responsible for your User Content.
                </p>
                <p className="mb-2 text-body">
                  <strong>4.2</strong> You further agree that we can use your
                  User Content for any other purposes whatsoever in perpetuity
                  without payment to you, and combine your User Content with
                  other content for use within the Site and otherwise. We do not
                  have to attribute your User Content to you. When you upload or
                  post content to our site, you grant us the following rights to
                  use that content:
                </p>
                <p className="mb-2 text-body">
                  <em>(a)</em> In posting User Content, including reviews or
                  making contact with other users of the Site you shall comply
                  with our Acceptable Use Policy.
                </p>
                <p className="mb-2 text-body">
                  <em>(b)</em> You warrant that any User Content does comply
                  with our Acceptable Use Policy, and you will be liable to us
                  and indemnify us for any breach of that warranty. This means
                  you will be responsible solely for your content and any loss
                  or damage we suffer as a result of your breach of this
                  warranty.
                </p>
                <p className="mb-2 text-body">
                  <em>(c)</em> We have the right to remove any User Content you
                  put on the Site if, in our opinion, such User Content does not
                  comply with the Acceptable Use Policy.
                </p>
                <p className="mb-2 text-body">
                  <em>(d)</em> We are not responsible and accept no liability
                  for any User Content including any such content that contains
                  incorrect information or is defamatory or loss of User
                  Content. We accept no obligation to screen, edit or monitor
                  any User Content but we reserve the right to remove, screen
                  and/or edit any User Content without notice and at any time.
                  User Content has not been verified or approved by us and the
                  views expressed by other users on the Site do not represent
                  our views or values.
                </p>
                <p className="mb-2 text-body">
                  <em>(e)</em> Each Site user is solely responsible for any and
                  all of its own User Content. Because we do not control User
                  Content, you acknowledge and agree that we are not responsible
                  for any User Content, whether provided by you or by others.
                  You agree that Company will not be responsible for any loss or
                  damage incurred as the result of any such interactions. If
                  there is a dispute between you and any Site user, we are under
                  no obligation to become involved.
                </p>
                <p className="mb-2 text-body">
                  <em>(f)</em> You hereby grant to Company an irreversible,
                  nonexclusive, royalty-free and fully paid, worldwide license
                  to reproduce, distribute, publicly display and perform,
                  prepare derivative works of, incorporate into other works, and
                  otherwise use and exploit your User Content, and to grant
                  sublicenses of the foregoing rights, solely for the purposes
                  of including your User Content in the Site. You hereby
                  irreversibly waive any claims and assertions of moral rights
                  or attribution with respect to your User Content.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-5">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  5. Our content
                </h3>
                <p className="mb-2 text-body">
                  <strong className="text-white">5.1</strong> Unless otherwise
                  indicated, the Site and Services including source code,
                  databases, functionality, software, website designs, audio,
                  video, text, photographs, and graphics on the Site (
                  <strong>Our Content</strong>) are owned or licensed to us, and
                  are protected by copyright and trade mark laws.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">5.2</strong> Except as
                  expressly provided in these Terms and Conditions, no part of
                  the Site, Services or Our Content may be copied, reproduced,
                  aggregated, republished, uploaded, posted, publicly displayed,
                  encoded, translated, transmitted, distributed, sold, licensed,
                  or otherwise exploited for any commercial purpose whatsoever,
                  without our express prior written permission.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">5.3</strong> Provided that you
                  are eligible to use the Site, you are granted a limited
                  license to access and use the Site and Our Content and to
                  download or print a copy of any portion of the Content to
                  which you have properly gained access solely for your
                  personal, non-commercial use.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">5.4</strong> You shall not{" "}
                  <em>(a)</em> try to gain unauthorized access to the Site or
                  any networks, servers or computer systems connected to the
                  Site; and/or <em>(b)</em> make for any purpose including error
                  correction, any modifications, adaptions, additions or
                  enhancements to the Site or Our Content, including the
                  modification of the paper or digital copies you may have
                  downloaded.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">5.5</strong> We shall
                  <em>(a)</em> prepare the Site and Our Content with reasonable
                  skill and care; and <em>(b)</em> use industry standard virus
                  detection software to try to block the uploading of content to
                  the Site that contains viruses.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">5.6</strong> Although we make
                  reasonable efforts to update the information on our site, we
                  make no representations, warranties or guarantees, whether
                  express or implied, that Our Content on the Site is accurate,
                  complete or up to date.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-6">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  6. Link to third party content
                </h3>
                <p className="mb-2 text-body">
                  <strong className="text-white">6.1</strong> The Site may
                  contain links to websites or applications operated by third
                  parties. We do not have any influence or control over any such
                  third party websites or applications or the third party
                  operator. We are not responsible for and do not review,
                  approve, monitor, endorse, warrant, or make any
                  representations to any third party websites or applications or
                  their availability or content.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">6.2</strong> We accept no
                  responsibility for adverts contained within the Site. If you
                  agree to purchase goods and/or services from any third party
                  who advertises in the Site, you do so at your own risk. The
                  advertiser, and not us, is responsible for such goods and/or
                  services and if you have any questions or complaints in
                  relation to them, you should contact the advertiser.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-7">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  7. Site Management
                </h3>
                <p className="mb-2 text-body">
                  <strong className="text-white">7.1</strong> We reserve the
                  right at our sole discretion, to <em>(a)</em> monitor the Site
                  for breaches of these Terms and Conditions; <em>(b)</em> take
                  appropriate legal action against anyone in breach of
                  applicable laws or these Terms and Conditions; <em>(c)</em>{" "}
                  refuse, restrict access to or availability of, or disable (to
                  the extent technologically feasible) any of your
                  Contributions; <em>(d)</em> remove from the Site or otherwise
                  disable all files and content that are excessive in size or
                  are in any way a burden to our systems; and <em>(e)</em>{" "}
                  otherwise manage the Site in a manner designed to protect our
                  rights and property and to facilitate the proper functioning
                  of the Site and Services.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">7.2</strong> We do not
                  guarantee that the Site will be secure or free from bugs or
                  viruses.
                </p>
                <p className="text-body">
                  <strong className="text-white">7.3</strong> You are
                  responsible for configuring your information technology,
                  computer programs and platform to access the Site and you
                  should use your own virus protection software.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-8">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  8. Modifications to and Availability of the Site
                </h3>
                <p className="mb-2 text-body">
                  <strong className="text-white">8.1</strong> We reserve the
                  right to change, modify, or remove the contents of the Site at
                  any time or for any reason at our sole discretion without
                  notice. We also reserve the right to modify or discontinue all
                  or part of the Services without notice at any time.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">8.2</strong> We cannot
                  guarantee the Site and Services will be available at all
                  times. We may experience hardware, software, or other problems
                  or need to perform maintenance related to the Site, resulting
                  in interruptions, delays, or errors. You agree that we have no
                  liability whatsoever for any loss, damage, or inconvenience
                  caused by your inability to access or use the Site or Services
                  during any downtime or discontinuance of the Site or Services.
                  We are not obliged to maintain and support the Site or
                  Services or to supply any corrections, updates, or releases.
                </p>
                <p className="text-body">
                  <strong className="text-white">8.3</strong> There may be
                  information on the Site that contains typographical errors,
                  inaccuracies, or omissions that may relate to the Services,
                  including descriptions, pricing, availability, and various
                  other information. We reserve the right to correct any errors,
                  inaccuracies, or omissions and to change or update the
                  information at any time, without prior notice.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-9">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  9. Disclaimer/Limitation of Liability
                </h3>
                <p className="mb-2 text-body">
                  The Site and Services are provided on an as-is and
                  as-available basis. You agree that your use of the Site and/or
                  Services will be at your sole risk except as expressly set out
                  in these Terms and Conditions. All warranties, terms,
                  conditions and undertakings, express or implied (including by
                  statute, custom or usage, a course of dealing, or common law)
                  in connection with the Site and Services and your use thereof
                  including, without limitation, the implied warranties of
                  satisfactory quality, fitness for a particular purpose and
                  non-infringement are excluded to the fullest extent permitted
                  by applicable law.
                </p>
                <p className="mb-2 text-body">
                  We make no warranties or representations about the accuracy or
                  completeness of the Site’s content and are not liable for any{" "}
                  <em>(a)</em> errors or omissions in content; <em>(b)</em> any
                  unauthorized access to or use of our servers and/or any and
                  all personal information and/or financial information stored
                  on our server; <em>(c)</em> any interruption or cessation of
                  transmission to or from the site or services; and/or{" "}
                  <em>(d)</em> any bugs, viruses, trojan horses, or the like
                  which may be transmitted to or through the site by any third
                  party. We will not be responsible for any delay or failure to
                  comply with our obligations under these Terms and Conditions
                  if such delay or failure is caused by an event beyond our
                  reasonable control.
                </p>
                <p className="text-body">
                  You hereby release and forever discharge the Company and our
                  officers, employees, agents, successors, and assigns from, and
                  hereby waive and relinquish, each and every past, present and
                  future dispute, claim, controversy, demand, right, obligation,
                  liability, action and cause of action of every kind and
                  nature, that has arisen or arises directly or indirectly out
                  of, or that relates directly or indirectly to, the Site. If
                  you are a California resident, you hereby waive California
                  civil code section 1542 in connection with the foregoing,
                  which states: “a general release does not extend to claims
                  which the creditor does not know or suspect to exist in his or
                  her favor at the time of executing the release, which if known
                  by him or her must have materially affected his or her
                  settlement with the debtor.”
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-10">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  10. Term and Termination
                </h3>
                <p className="mb-2 text-body">
                  <strong className="text-white">10.1</strong> These Terms and
                  Conditions shall remain in full force and effect while you use
                  the Site or Services or are otherwise a user of the Site, as
                  applicable. You may terminate your use or participation at any
                  time, for any reason, by following the instructions for
                  terminating user accounts in your account settings, if
                  available, or by contacting us at{" "}
                  <a
                    className="italic transition-colors text-primary hover:text-secondary"
                    href="mailto:contact@colissia.com"
                  >
                    contact@colissia.com
                  </a>
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">10.2</strong> Without limiting
                  any other provision of these Terms and Conditions, we reserve
                  the right to, in our sole discretion and without notice or
                  liability, deny access to and use of the Site and the Services
                  (including blocking certain IP addresses), to any person for
                  any reason including without limitation for breach of any
                  representation, warranty or covenant contained in these Terms
                  and Conditions or of any applicable law or regulation.
                </p>
                <p className="mb-2 text-body">
                  If we determine, in our sole discretion, that your use of the
                  Site/Services is in breach of these Terms and Conditions or of
                  any applicable law or regulation, we may terminate your use or
                  participation in the Site and the Services or delete your
                  profile and any content or information that you posted at any
                  time, without warning.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">10.3</strong> If we terminate
                  or suspend your account for any reason set out in{" "}
                  <a className="fusion-one-page-text-link" href="#9">
                    Section 9
                  </a>
                  , you are prohibited from registering and creating a new
                  account under your name, a fake or borrowed name, or the name
                  of any third party, even if you may be acting on behalf of the
                  third party. In addition to terminating or suspending your
                  account, we reserve the right to take appropriate legal
                  action, including without limitation pursuing civil, criminal,
                  and injunctive redress.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-11">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  11. Mobile Application
                </h3>
                <p className="mb-2 text-body">
                  <strong className="text-white">11.1</strong>&nbsp;If you
                  access&nbsp;the Services via a mobile application, then we
                  grant you a revocable, non-exclusive, non-transferable,
                  limited right to install and use the mobile application on
                  wireless electronic devices owned or controlled by you, and to
                  access and use the mobile application on such devices strictly
                  in accordance with the terms and conditions of this license.
                </p>
                <p className="mb-2 text-body">
                  <strong>11.2</strong>&nbsp;The following terms apply&nbsp;when
                  you use a mobile application obtained from either the Apple
                  Store or Google Play (each an App Distributor) to access the
                  Services:
                </p>
                <p className="mb-2 text-body">
                  <em>(a)</em> The license granted to you for our mobile
                  application is limited to a non-transferable license to use
                  the application on a device that utilizes the Apple iOS or
                  Android operating system, as applicable, and in accordance
                  with the usage rules set forth in the applicable App
                  Distributor terms of service;
                </p>
                <p className="mb-2 text-body">
                  <em>(b)</em> We are responsible&nbsp;for providing any
                  maintenance and support services with respect to the mobile
                  application as specified in these Terms and Conditions or as
                  otherwise required under applicable law. You acknowledge that
                  each App Distributor has no obligation whatsoever to furnish
                  any maintenance and support services with respect to the
                  mobile application;
                </p>
                <p className="mb-2 text-body">
                  <em>(c)</em> In the event of any failure of the mobile
                  application to conform to any applicable warranty, you may
                  notify an App Distributor, and the App Distributor, in
                  accordance with its terms and policies, may refund the
                  purchase price, if any, paid for the mobile application, and
                  to the maximum extent permitted by applicable law, an App
                  Distributor will have no other warranty obligation whatsoever
                  with respect to the mobile application;
                </p>
                <p className="mb-2 text-body">
                  <em>(d)</em> You represent and warrant that (i) you are not
                  located in a country that is subject to a Bangladesh
                  government embargo, or that has been designated by the
                  Bangladesh government as a “terrorist supporting” country; and
                  (ii) you are not listed on any Bangladesh government list of
                  prohibited or restricted parties;
                </p>
                <p className="mb-2 text-body">
                  <em>(e)</em> You must comply with applicable third party terms
                  of agreement when using the mobile application; and
                </p>
                <p className="mb-2 text-body">
                  <em>(f)</em> You acknowledge and agree that the App
                  Distributors are third party beneficiaries of these Terms and
                  Conditions, and that each App Distributor will have the right
                  (and will be deemed to have accepted the right) to enforce
                  these Terms and Conditions against you as a third party
                  beneficiary thereof.
                </p>
              </div>
              <div className="pt-24 mb-5" id="section-12">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  12. Copyright Policy
                </h3>
                <p className="mb-2 text-body">
                  All rights reserved by Colissia Global Ltd. All trademarks,
                  logos and service marks displayed on the Site are our property
                  or the property of other third-parties. You are not permitted
                  to use these Marks without our prior written consent or the
                  consent of such third party which may own the Marks.
                </p>
                <p className="mb-2 text-body">
                  Company respects the intellectual property of others and asks
                  that users of our Site do the same. In connection with our
                  Site, we have adopted and implemented a policy respecting
                  copyright law that provides for the removal of any infringing
                  materials and for the termination of users of our online Site
                  who are repeated infringers of intellectual property rights,
                  including copyrights. If you believe that one of our users is,
                  through the use of our Site, unlawfully infringing the
                  copyright(s) in a work, and wish to have the allegedly
                  infringing material removed, the following information in the
                  form of a written notification (pursuant to 17 U.S.C. §
                  512(c)) must be provided to our designated office:
                </p>
                <ul className="py-3 sm:pl-5">
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>your physical or electronic signature.</p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      Identification of the copyrighted work(s) that you claim
                      to have been infringed.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      Identification of the material on our services that you
                      claim is infringing and that you request us to remove.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      Sufficient information to permit us to locate such
                      material.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>Your address, telephone number, and e-mail address.</p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      A statement that you have a good faith belief that use of
                      the objectionable material is not authorized by the
                      copyright owner, its agent, or under the law.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      A statement that the information in the notification is
                      accurate, and under penalty of perjury, that you are
                      either the owner of the copyright that has allegedly been
                      infringed or that you are authorized to act on behalf of
                      the copyright owner.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-24 mb-5" id="section-13">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  13. General
                </h3>
                <p className="mb-2 text-body">
                  <strong className="text-white">13.1</strong> Visiting the
                  Site, sending us emails, and completing online forms
                  constitute electronic communications. You consent to receive
                  electronic communications and you agree that all agreements,
                  notices, disclosures, and other communications we provide to
                  you electronically, via email and on the Site, satisfy any
                  legal requirement that such communication be in writing.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">13.2</strong> These Terms and
                  Conditions and any policies or operating rules posted by us on
                  the Site or in respect to the Services constitute the entire
                  agreement and understanding between you and us.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">13.3</strong> Our failure to
                  exercise or enforce any right or provision of these Terms and
                  Conditions shall not operate as a waiver of such right or
                  provision.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">13.4</strong> We may assign any
                  or all of our rights and obligations to others at any time.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">13.5</strong> We shall not be
                  responsible or liable for any loss, damage, delay or failure
                  to act caused by any cause beyond our reasonable control.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">13.6</strong> If any provision
                  or part of a provision of these Terms and Conditions is
                  unlawful, void or unenforceable, that provision or part of the
                  provision is deemed severable from these Terms and Conditions
                  and does not affect the validity and enforceability of any
                  remaining provisions.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">13.7</strong> There is no joint
                  venture, partnership, employment or agency relationship
                  created between you and us as a result of these Terms and
                  Conditions or use of the Site or Services.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">13.8</strong> A person who is
                  not a party to these Terms and Conditions shall have no right
                  under the Contracts (Rights of Third Parties) Act 1999 to
                  enforce any term of these Terms and Conditions.
                </p>
                <p className="mb-2 text-body">
                  <strong className="text-white">13.9</strong> In order to
                  resolve a complaint regarding the Services or to receive
                  further information regarding use of the Services, please
                  contact us by email at{" "}
                  <a href="mailto:contact@colissia.com">contact@colissia.com</a>{" "}
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
