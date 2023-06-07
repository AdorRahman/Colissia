import PageTitle from "@components/PageTitle";
import Link from "next/link";
import { VscCircleFilled } from "react-icons/vsc";
import Scrollspy from "react-scrollspy";

const Disclaimer = () => {
  return (
    <>
      <PageTitle img="/img/about-page-title-bg.jpeg" title="Disclaimer" />
      <div className="select-none bg-dark">
        <div className="container px-4 py-16 mx-auto lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-32">
          <h2 className="mb-6 text-3xl font-bold text-white uppercase lg:text-center lg:mb-16 sm:text-4xl sm:leading-none">
            Interpretation and Definitions
          </h2>
          <div className="flex flex-col lg:flex-row">
            <div className="relative hidden w-full lg:w-52 lg:block">
              <aside className="sticky top-20 lg:h-screen">
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
                  ]}
                  currentClassName="text-primary"
                  className="grid gap-3 text-sm text-body"
                >
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-1"
                    >
                      Disclaimer
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-2"
                    >
                      Order Placing, Prices and Deliveries
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-3"
                    >
                      Payment
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-4"
                    >
                      Backorder
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-5"
                    >
                      Offer Codes or Coupons
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-6"
                    >
                      External Links
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-7"
                    >
                      Errors and Omissions
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-8"
                    >
                      Views Expressed
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-9"
                    >
                      Use at Your Own Risk
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-10"
                    >
                      Dispute Resolution
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-11"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#section-12"
                    >
                      The Rest
                    </a>
                  </li>
                </Scrollspy>
              </aside>
            </div>
            <div className="max-w-xl py-3 sm:mx-auto lg:max-w-3xl lg:pl-10">
              <div className="mb-5">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Interpretation
                </h3>
                <p className="mb-2 text-body">
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </p>
              </div>
              <div className="mb-5">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Definitions
                </h3>
                <p className="mb-2 text-body">
                  For the purposes of this Disclaimer:
                </p>
                <ul className="py-3 sm:pl-5">
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>Company</strong> (referred to as either “the
                      Company”, “We”, “Us” or “Our” in this Disclaimer) refers
                      to Colissia Global Ltd., located at House#27/4,
                      Road#Beradanga-2, Rajbari, Dhaka, Bangladesh-7700.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>Service</strong> refers to the Website.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>You</strong> means the individual accessing the
                      Service, or the company, or other legal entity on behalf
                      of which such individual is accessing or using the
                      Service, as applicable.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>Country</strong> represents where the Company is
                      located, in this case – Bangladesh.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      <strong>Website</strong> refers to Colissia, accessible
                      from{" "}
                      <a
                        href="https://colissia.com"
                        className="italic transition-colors text-primary hover:text-secondary"
                      >
                        https://colissia.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-24" id="section-1">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Disclaimer
                </h3>
                <p className="mb-2 text-body">
                  The information contained on the Service is for general
                  information purposes only.
                </p>
                <p className="mb-2 text-body">
                  In no event shall the Company be liable for any special,
                  direct, indirect, consequential, or incidental damages or any
                  damages whatsoever, whether in an action of contract,
                  negligence or other tort, arising out of or in connection with
                  the use of the Service or the contents of the Service. The
                  Company reserves the right to make additions, deletions, or
                  modifications to the contents on the Service at any time
                  without prior notice.
                </p>
                <p className="mb-2 text-body">
                  The Company does not warrant that the Service is free of
                  viruses or other harmful components.
                </p>
                <p className="mb-2 text-body">
                  By using our website, you hereby consent to our disclaimer and
                  agree to its terms.
                </p>
                <p className="mb-2 text-body">
                  Should we update, amend or make any changes to this document,
                  those changes will be prominently posted here.
                </p>
              </div>
              <div className="pt-24" id="section-2">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Order Placing, Prices and Deliveries
                </h3>
                <p className="mb-2 text-body">
                  The prices displayed for Products available for purchase via
                  the Site represent the applicable retail prices, and do not
                  include taxes, shipping or handling charges (to the extent
                  applicable). Any applicable taxes, shipping or handling
                  charges will be communicated to you before you place an order
                  under the law of Bangladesh government. The prices displayed
                  on the Site are quoted in Bangladeshi Taka(BDT). Products in
                  your shopping cart reflect the current price displayed on the
                  Product’s details page. Please note that this price may differ
                  from the price displayed when the Product was first placed in
                  your shopping cart.
                </p>
                <p className="mb-2 text-body">
                  Along with the general information stated above, please follow
                  this terms as well –
                </p>
                <ul className="py-3 sm:pl-5">
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      All the digital products will be shown on your account
                      dashboard once delivered. It may take minimum 5 minutes up
                      to 24 hours to deliver your products after order placement
                      on our Site. You’ll receive notification through email as
                      well.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      Deliveries are subjected to our availability. Whenever our
                      team members or agents are available, you’ll receive the
                      digital product(Service) in the mentioned time.<br></br>
                      Generally, orders placed for digital products or Services
                      between 11PM-6AM BST(Bangladesh Standard Time, which is
                      GMT+6) will be delivered after 8AM BST only.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      All the physical products will be shipped within 2-5
                      business days.
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      Exchange rates on payment for your order(if you use
                      currencies other than BDT) may varies as per the timezones
                      and servers.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-24" id="section-3">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Payment
                </h3>
                <p className="mb-2 text-body">
                  By submitting an order through the Site, you agree to pay in
                  advance the full price of the Product(s) ordered, plus any
                  applicable taxes, shipping and handling and/or other charges.
                  Payment may be made by credit card or any other method of
                  payment we may make available to you (each, a “Method of
                  Payment”). In order to make a payment, you must provide us
                  with valid credit card and/or other billing information
                  details and authorize us (or any third party payment service
                  provider engaged by us) to charge your Method of Payment for
                  all orders placed and accepted via the Site.
                </p>
              </div>
              <div className="pt-24" id="section-4">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Backorder
                </h3>
                <p className="mb-2 text-body">
                  Colissia is capable of taking backorders for products in
                  advance. You can backorder products that are out of stock or
                  marked as “available on backorder”, which is allowed by the
                  Company.
                </p>
                <p className="mb-2 text-body">
                  However, immediate availability is not guaranteed. When
                  products are restocked/available, backorders will be fulfilled
                  first (first come first serve rule applied). Backordered
                  products are subjected to be delivered within 7-10 working
                  days. But, stay assured, our concerned team will contact you
                  regarding the availability and delivery which will depend on
                  our convenience.
                </p>
                <p className="mb-2 text-body">
                  For your ease, you may contact us regarding this issue if you
                  want using the communication method stated{" "}
                  <a
                    href="#section-11"
                    className="italic transition-colors text-primary hover:text-secondary"
                  >
                    below
                  </a>
                  .
                </p>
              </div>
              <div className="pt-24" id="section-5">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Offer Codes or Coupons
                </h3>
                <p className="mb-2 text-body">
                  From time to time, the Company may offer qualified consumers
                  “coupon codes” or “offer codes” through a variety of
                  promotional activities and communications (collectively
                  referred to herein as “coupons”) that are redeemable towards a
                  purchase on Colissia, while supplies last, and subject to
                  certain merchandise exclusions or any other restrictions as
                  may be determined and communicated by Colissia in its sole
                  discretion.<br></br>
                  Only valid offer codes provided or promoted by Colissia will
                  be honored at checkout. Codes supplied or promoted by third
                  parties unauthorized by us (including any unauthorized third
                  party websites) will not be considered valid. Each offer code
                  promoted by Colissia is non-transferable and valid for single
                  use on an item (or items) of Services as determined by
                  Colissia. Offer codes may not be combined and customers are
                  limited to the use of a single coupon per order or as Company
                  allow to.
                </p>
                <p className="mb-2 text-body">
                  For online purchases, the code must be entered in the ‘coupon’
                  field at checkout. We are not responsible for lost, stolen or
                  corrupted codes or any unauthorized use of coupons. Offer
                  codes cannot be redeemed for cash or any cash equivalent; no
                  substitutions or credits allowed. The currency value of any
                  offer code will not be refunded or credited back if any or all
                  of the purchased products(Services) is returned.
                </p>
                <p className="mb-2 text-body">
                  Expiry dates may apply to each coupon. Offer codes are void if
                  copied, transferred, sold, exchanged or expired, and where
                  prohibited. Requests not complying with all offer code
                  requirements will not be honored.
                </p>
              </div>
              <div className="pt-24" id="section-6">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  External Links
                </h3>
                <p className="mb-2 text-body">
                  The Service may contain links to external websites and ads
                  that are not provided or maintained by or in any way
                  affiliated with the Company.<br></br>
                  Please note that the Company does not guarantee the accuracy,
                  relevance, timeliness, or completeness of any information on
                  these external websites.
                </p>
              </div>
              <div className="pt-24" id="section-7">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Errors and Omissions
                </h3>
                <p className="mb-2 text-body">
                  The information given by the Service is for general
                  information on matters of interest only. Even if the Company
                  takes every precaution to insure that the content of the
                  Service is both current and accurate, errors can occur. Plus,
                  given the changing nature of laws, rules and regulations,
                  there may be delays, omissions or inaccuracies in the
                  information contained on the Service.
                </p>
                <p className="mb-2 text-body">
                  The Company is not responsible for any errors or omissions, or
                  for the results obtained from the use of this Service.
                </p>
              </div>
              <div className="pt-24" id="section-8">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Views Expressed
                </h3>
                <p className="mb-2 text-body">
                  The Service may contain views and opinions which are those of
                  the authors and do not necessarily reflect the official policy
                  or position of any other author, agency, organization,
                  employer or company, including the Company.
                </p>
                <p className="mb-2 text-body">
                  Comments published by users are their sole responsibility and
                  the users will take full responsibility, liability and blame
                  for any libel or litigation that results from something
                  written in or as a direct result of something written in a
                  comment. The Company is not liable for any comment published
                  by users and reserve the right to delete any comment for any
                  reason whatsoever.
                </p>
                <p className="text-body">
                  In no event shall the Company or its suppliers be liable for
                  any special, incidental, indirect, or consequential damages
                  whatsoever arising out of or in connection with your access or
                  use or inability to access or use the Service.
                </p>
              </div>
              <div className="pt-24" id="section-9">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  “Use at Your Own Risk”
                </h3>
                <p className="mb-2 text-body">
                  All information in the Service is provided “as is”, with no
                  guarantee of completeness, accuracy, timeliness or of the
                  results obtained from the use of this information, and without
                  warranty of any kind, express or implied, including, but not
                  limited to warranties of performance, merchantability and
                  fitness for a particular purpose.
                </p>
                <p className="mb-2 text-body">
                  The Company will not be liable to You or anyone else for any
                  decision made or action taken in reliance on the information
                  given by the Service or for any consequential, special or
                  similar damages, even if advised of the possibility of such
                  damages.
                </p>
              </div>
              <div className="pt-24" id="section-10">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Dispute Resolution
                </h3>
                <p className="mb-2 text-body">
                  We don’t like disputes (and we’re sure that neither do you
                  like). So, why not do our best to avoid them!? Most customer
                  concerns can be resolved quickly and to a customer’s
                  satisfaction by contacting us at{" "}
                  <a
                    className="italic transition-colors text-primary hover:text-secondary"
                    href="mailto:contact@colissia.com"
                  >
                    contact@colissia.com
                  </a>
                  . In the unexpected event that our customer service department
                  is not able to resolve a objection you may have to your
                  satisfaction, the terms of this section govern dispute
                  resolution between You and the Company.
                </p>
                <p className="mb-2 text-body">
                  These Terms and the connection between you and Colissia Ltd.
                  will be governed by the laws of Government of Bangladesh
                  without regard to its conflict of law provisions. You and the
                  Company agree to submit to the personal and exclusive
                  arbitration of any disputes relating to your use of the Site
                  under the rules of Bangladesh. Any such arbitration, to the
                  extent necessary, will be conducted in the Country. You pact
                  not to sue Colissia in any other forum.
                </p>
                <p className="mb-2 text-body">
                  You also acknowledge and understand that, with respect to any
                  dispute with us or anyone representing the Company arising out
                  of or relating to your use of the Site, purchase of Products,
                  or these Terms:
                </p>
                <ul className="py-3 sm:pl-5">
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>YOU ARE GIVING UP YOUR RIGHT TO HAVE A TRIAL BY JURY</p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      YOU ARE GIVING UP YOUR RIGHT TO SERVE AS A REPRESENTATIVE,
                      AS A PRIVATE ATTORNEY GENERAL, OR IN ANY OTHER
                      REPRESENTATIVE CAPACITY, OR TO PARTICIPATE AS A MEMBER OF
                      A CLASS OF CLAIMANTS, IN ANY LAWSUIT INVOLVING ANY SUCH
                      DISPUTE; AND
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      YOU MUST FILE ANY CLAIM WITHIN ONE (1) YEAR AFTER SUCH
                      CLAIM AROSE OR IT IS FOREVER BARRED.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-24" id="section-11">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  Contact Us
                </h3>
                <p className="mb-2 text-body">
                  If you have any questions about this Disclaimer, You can
                  contact Us:
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
                <ul className="py-3 sm:pl-5">
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      By email:{" "}
                      <a
                        className="italic transition-colors text-primary hover:text-secondary"
                        href="mailto:contact@colissia.com"
                      >
                        contact@colissia.com
                      </a>
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      By visiting this page on our website:{" "}
                      <a
                        className="italic transition-colors text-primary hover:text-secondary"
                        href="colissia.com/contact"
                      >
                        colissia.com/contact
                      </a>
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      By phone number:{" "}
                      <a
                        className="italic transition-colors text-primary hover:text-secondary"
                        href="tel:+880 1733723609"
                      >
                        +880 1733723609
                      </a>
                    </p>
                  </li>
                  <li className="relative flex items-baseline justify-start mb-2 text-body">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      By mail: House#27/4, Road#Beradanga-2, Rajbari, Dhaka,
                      Bangladesh-7700
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-24" id="section-12">
                <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
                  The Rest
                </h3>
                <p className="mb-2 text-body">
                  We take our commitment to customers seriously, and we’ll do
                  what we can for you. However, sometimes things may come up
                  that are outside of our control. We will not be liable for any
                  failure to perform any of our obligations stated in these
                  Terms if the failure results from a cause beyond our
                  reasonable control, including, without limitation—mechanical,
                  electronic or communications failure or degradation.
                </p>
                <p className="mb-2 text-body">
                  If any provision of this agreement is found to be invalid by a
                  proficient court, the invalidity of such provisions shall not
                  affect the validity of the remaining provisions. Likewise, if
                  we choose to terminate any provision in accordance with the
                  termination provision, that termination shall not affect the
                  termination of other provisions.
                </p>
              </div>
              <p className="mb-2 font-semibold tracking-wider text-white mt-14">
                Phew… You made it to the finish line…! Congratulations…
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
