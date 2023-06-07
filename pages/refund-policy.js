import PageTitle from "@components/PageTitle";
import Link from "next/link";
import { VscCircleFilled } from "react-icons/vsc";
const RefundPolicy = () => {
  return (
    <>
      <PageTitle img="/img/about-page-title-bg.jpeg" title="Refund Policy" />
      <div className="bg-dark select-none">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
          <div className="max-w-xl sm:mx-auto lg:max-w-4xl">
            <div className="mb-5">
              <h2 className="text-center uppercase mb-16 text-3xl font-bold text-white sm:text-4xl sm:leading-none">
                Delivery and Refund Policy
              </h2>
              <div>
                <p className="font-semibold text-white text-lg">
                  All defined terms used below shall have the meanings set forth
                  in our{" "}
                  <Link href="/terms-and-conditions">
                    <a className="text-primary transition-colors hover:text-secondary">
                      Terms and Conditions.
                    </a>
                  </Link>
                </p>
                <p className="mt-3 text-body">
                  First, if you need to consider Refunds and/or Returns, you
                  likely ordered any of the product from our Website. That
                  means, we owe you a “Thank You!”. We’re more pleased to
                  provide best service to our Curious customers, and as such we
                  promise to do our very best to deliver an amazing product and
                  customer experience. And rest assured, we focus on making any
                  hiccups right, along the way. That being said, here are some
                  things you might want to know.
                </p>
                <ul className="py-3 sm:pl-5">
                  <li className="relative mb-2 text-body justify-start items-baseline flex">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      You may cancel an order at any time prior to shipment for
                      physical products. However, Colissia does not accept
                      cancellation requests for perishable products like Game
                      Cards, CD Keys etc including all digital services which is
                      processed immediately right after placing order.
                    </p>
                  </li>
                  <li className="relative mb-2 text-body justify-start items-baseline flex">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      Refund/replacement can be arranged in some exceptional
                      cases where any service purchased is deemed to be faulty
                      or damaged.
                    </p>
                  </li>
                  <li className="relative mb-2 text-body justify-start items-baseline flex">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      The customer will have to submit a request on any faulty
                      or damaged goods. Failure to do so will automatically
                      forfeit the customer’s right to appeal for any return,
                      refund or exchange.
                    </p>
                  </li>
                  <li className="relative mb-2 text-body justify-start items-baseline flex">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      If a Customer is buying any product from our Website after
                      reading the description and provided information’s about
                      the particular product and is received successfully
                      without any faults and later if the product is not
                      compatible with your setup or if you do not want it
                      anymore, then you will not be allowed to change or return
                      the product.
                    </p>
                  </li>
                  <li className="relative mb-2 text-body justify-start items-baseline flex">
                    <i className="mr-3">
                      <VscCircleFilled />
                    </i>
                    <p>
                      Refund Charge for digital services will be applicable for
                      all the respected payment gateways. In case of returning
                      physical goods, if applicable(solely upon Company’s
                      discretion), you’ll have to bear the full return shipping
                      cost.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-5">
              <h3 className="uppercase text-white font-semibold text-2xl mb-3">
                General
              </h3>
              <p className="text-body">
                If you do not comply with any of the above conditions, We
                reserve the right to refuse the return or exchange, or to impose
                different or additional conditions.
                <br />
                After you submit request to return/refund(in case, exchange) any
                of the purchased goods or services, the actual process begins
                after we have completed checking your request and other document
                you provide to support your request. The evaluation process
                generally take 7-10 days from the date we receive your
                application in full. We will communicate via email and/or SMS
                notification once we finish validating your request.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="uppercase text-white font-semibold text-2xl mb-3">
                Additional non-returnable/non-refundable items
              </h3>
              <p className="text-body">
                Several types of goods are exempt from being returned –
                <br />* Gift Cards * CD Keys * Wallet Codes * Software License
                Keys * Pins * Prepaid Cards * Game Points * Virtual Currency
              </p>
            </div>
            <div className="mb-5">
              <h3 className="uppercase text-white font-semibold text-2xl mb-3">
                Order Placing, Prices and Deliveries
              </h3>
              <p className="text-body mb-2">
                The prices displayed for Products available for purchase via the
                Site represent the applicable retail prices, and do not include
                taxes, shipping or handling charges (to the extent applicable).
                Any applicable taxes, shipping or handling charges will be
                communicated to you before you place an order under the law of
                Bangladesh government. The prices displayed on the Site are
                quoted in Bangladeshi Taka(BDT). Products in your shopping cart
                reflect the current price displayed on the Product’s details
                page. Please note that this price may differ from the price
                displayed when the Product was first placed in your shopping
                cart.
              </p>
              <p className="mb-2 text-body">
                Along with the general information stated above, please follow
                this terms as well –
              </p>
              <ul className="pb-3 sm:pl-5">
                <li className="relative mb-2 text-body justify-start items-baseline flex">
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
                <li className="relative mb-2 text-body justify-start items-baseline flex">
                  <i className="mr-3">
                    <VscCircleFilled />
                  </i>
                  <p>
                    Deliveries are subjected to our availability. Whenever our
                    team members or agents are available, you’ll receive the
                    digital product(Service) in the mentioned time.
                    <br />
                    Generally, orders placed for digital products or Services
                    between 11PM-6AM BST(Bangladesh Standard Time, which is
                    GMT+6) will be delivered after 8AM BST only.
                  </p>
                </li>
                <li className="relative mb-2 text-body justify-start items-baseline flex">
                  <i className="mr-3">
                    <VscCircleFilled />
                  </i>
                  <p>
                    All the physical products will be shipped within 2-5
                    business days.
                  </p>
                </li>
                <li className="relative mb-2 text-body justify-start items-baseline flex">
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
              <p className="text-body">
                In case you provided incorrect Email or Game ID information
                while making a purchase, and we will deliver your product before
                you lodge a complaint, contact to game merchant immediately and
                we won’t be able to offer a refund in such a cases.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="uppercase text-white font-semibold text-2xl mb-3">
                Returns
              </h3>
              <p className="text-body">
                If you are not satisfied with your purchase, you have 14 days
                from your order date to make a return/exchange request.
                <br />
                To be eligible for a return/exchange, an item must be unused and
                in the same condition that you received it. Your return does not
                need to include the original packing slip to be accepted.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="uppercase text-white font-semibold text-2xl mb-3">
                Refunds (if applicable)
              </h3>
              <p className="text-body mb-2">
                Once your return is received and inspected, we will send you an
                email to notify you that we have received your returned item. We
                will also notify you of the approval or rejection of your
                refund.
              </p>
              <p className="text-body mb-2">
                If your return is accepted by Us, We will provide one of the
                following within a reasonable time: an Exchange for the item
                returned, a Credit Reversal to the original method you used to
                make the payment or another remedy that we determine in good
                faith is appropriate in the circumstances.
              </p>
              <p className="text-body">
                To process your refund more{" "}
                <span className="font-semibold">quickly and conveniently</span>,
                you have the option to request a refund via{" "}
                <em>
                  a non-transferable credit in the wallet system on our Website
                </em>
                , which must be indicated when you request for a return online
                or by calling our Customer Service.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="uppercase text-white font-semibold text-2xl mb-3">
                Expected Time to get Reimbursed
              </h3>
              <p className="text-body">
                It generally takes 3-5 business days in order to check/examine
                your request. In the occasion where your Refund request is
                accepted, we do process Refund procedure within a reasonable
                time. Depending upon the method you choose, it’ll take some time
                to get fully reflexed on your account.
              </p>
              <div className="py-5">
                <div className="flex text-center justify-center items-center bg-lightDark">
                  <p className="text-white font-semibold w-1/2 px-3 py-5">
                    Refund Method
                  </p>
                  <p className="text-white font-semibold w-1/2 px-3 py-5 border-dark border-l-2">
                    Time Period
                  </p>
                </div>
                <div className="flex text-center justify-center items-center bg-darker">
                  <p className="text-body w-1/2 px-3 py-3">Wallet Refund</p>
                  <p className="text-body w-1/2 px-3 py-3 border-dark border-l-2">
                    Instant
                  </p>
                </div>
                <div className="flex text-center justify-center items-center bg-lightDark">
                  <p className="text-body w-1/2 px-3 py-3">Credit Reversal</p>
                  <p className="text-body w-1/2 px-3 py-3 border-dark border-l-2">
                    7-10 Business Days
                  </p>
                </div>
              </div>
              <p className="text-body mb-2">
                In case you haven’t received any refund(if applicable) within
                the specified time period, please check your bank account once
                again. If the issue persist, contact your credit card company,
                bank or the company which runs the method you used to pay with.
                There is often some processing time from before a refund is
                reflexed in whole on statement. Card payment refund may take
                longer depending on Commercial Banks.
              </p>
              <p className="text-body">
                If you’ve done all of this and you still have not received your
                refund yet, please contact us at{" "}
              </p>
            </div>
            <div className="mb-5">
              <h3 className="uppercase text-white font-semibold text-2xl mb-3">
                Shipping
              </h3>
              <p className="text-body mb-2">
                To return your product, you should send it to this address –
              </p>
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
              <p className="text-body mt-2">
                Please remember to include the digital invoice printed out or
                with a physical receipt if you received(if any). You will be
                responsible for paying for your own shipping costs for returning
                your item. Shipping costs are non-refundable.
                <br />
                If you’re eligible to receive a refund, the cost of Return
                Shipping will be deducted from your refund.
              </p>
            </div>
            <h2 className="text-white text-lg uppercase font-semibold text-center">
              Hooray! That’s the End of Refund Policy.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
