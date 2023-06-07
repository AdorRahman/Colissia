import { useState } from "react";
import Link from "next/link";
import { RiQuestionnaireFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import Accordion from "@components/Global/Accordion";

const Faqs = () => {
  return (
    <div className="bg-dark">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
        <div className="max-w-xl sm:mx-auto lg:max-w-4xl">
          <div className="flex flex-col mb-16 sm:text-center">
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 className="text-center uppercase mb-6 text-3xl font-bold text-white sm:text-4xl sm:leading-none">
                GENERAL QUESTIONS
              </h2>
              <p className="text-base text-body md:text-lg">
                Here are a few of the questions we get the most. If you don't
                see what's on your mind, reach out to us anytime on phone, chat,
                or email.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Accordion
              contentBg="bg-lightDark"
              noBorder
              textSize="text-lg font-medium"
              icon={<RiQuestionnaireFill />}
              title="How to Order ?"
            >
              <div className="pb-4 text-body">
                Ordering from our website is much easier.
                <br />
                At first, add the products to your cart, which you’d like to
                purchase from Colissia. On the Cart page, you’ll see the button
                indicating “Proceed to Checkout”… Once you land on the Checkout
                page, you’ll have to input your billing details like every other
                website on the internet. Right after that, choose the payment
                method you want to use and pay for the products as instructed.
                <br />
                Really easy, isn’t it?
              </div>
            </Accordion>
            <Accordion
              contentBg="bg-lightDark"
              noBorder
              textSize="text-lg font-medium"
              icon={<RiQuestionnaireFill />}
              title="Where I’ll Receive the Codes I Ordered?"
            >
              <div className="pb-4 text-body">
                There are several ways how you can check the Product Keys you
                ordered from us… Mainly, the keys are shown in your Account
                Dashboard on each Order Details for the orders you placed.
                <br />
                “Order Details” can also be found easily from the top right of
                the header, under the “My Account” dropdown menu.
              </div>
            </Accordion>
            <Accordion
              contentBg="bg-lightDark"
              noBorder
              textSize="text-lg font-medium"
              icon={<RiQuestionnaireFill />}
              title="Do you Deliver through Email?"
            >
              <div className="pb-4 text-body">
                Now-a-days, most of us acquire several devices and we keep
                ourselves logged in across all of them. Thus, anyone from your
                friends and family may get access to your email and easily
                retrieve keys which was assigned for you… Oops, that is beyond
                our terms and conditions!
                <br />
                Generally, for these kind of security reasons, we don’t deliver
                keys directly to the emails… Although, you’ll receive an email
                regarding code delivery, when it’s delivered… Moreover, right
                after your Order was received, on the Thank You page you’ll be
                shown your Account Dashboard link to get your keys with ease.
              </div>
            </Accordion>
            <Accordion
              contentBg="bg-lightDark"
              noBorder
              textSize="text-lg font-medium"
              icon={<RiQuestionnaireFill />}
              title="What is the expected Delivery Time?"
            >
              <div className="pb-4 text-body">
                Customer Satisfaction is our main priority… We don’t want to
                make our customers wait longer for receiving the keys they
                ordered… Generally, keys are delivered within 5-10 minutes of
                your order placement.
                <br />
                But, we’re humans too…! Deliveries might get a bit delayed if
                there are any unforeseen circumstances… According to our policy,
                deliveries are made within 30 minutes up to 24 hours.
              </div>
            </Accordion>
            <Accordion
              contentBg="bg-lightDark"
              noBorder
              textSize="text-lg font-medium"
              icon={<RiQuestionnaireFill />}
              title="Which payment methods you do accept?"
            >
              <div className="pb-4 text-body">
                Currently, we have all kinds of payment methods for any
                Bangladeshi user… However, international customers will only be
                able to checkout using Visa, MasterCard, Amex and UnionPay Card
                using SSLCOMMERZ or ShurjoPay’s Payment Solution, which are one
                of the leading Payment Service Providers in Bangladesh.
                <br />
                As soon as more local payment system will be available on
                Colissia for our international customers, you’ll get to know!
              </div>
            </Accordion>
            <Accordion
              contentBg="bg-lightDark"
              noBorder
              textSize="text-lg font-medium"
              icon={<RiQuestionnaireFill />}
              title="Is there any Discount Coupon?"
            >
              <div className="pb-4 text-body">
                Rewarding our Customers are one of the specialties of Curious
                Craft!
                <br />
                We do have several Sale and Discounted Price Offers along with
                Coupons from time to time… You can easily check from the Website
                and opt-in to get discounted offers.
              </div>
            </Accordion>
            <Accordion
              contentBg="bg-lightDark"
              noBorder
              textSize="text-lg font-medium"
              icon={<RiQuestionnaireFill />}
              title="How to use Coupon Code?"
            >
              <div className="pb-4 text-body">
                It’s great to have any Discounted Coupon for using on Curious
                Craft, right…? In order to achieve the promotional or discounted
                prices, you’ll have to input your coupon in the Promotional
                Code/Coupon section on the Cart Page… Fear Not, you’ll also get
                a chance to input your coupon on the checkout page as well!
              </div>
            </Accordion>
            <Accordion
              contentBg="bg-lightDark"
              noBorder
              textSize="text-lg font-medium"
              icon={<RiQuestionnaireFill />}
              title="Can I use a coupon several times?"
            >
              <div className="pb-4 text-body">
                Coupons are available when there’s any promotional campaign
                running on our site… Depending on the Promotional Event, there
                are several coupon categories.
                <br />
                There may be coupons for single-use, limited time use and
                unlimited use for your preference… Let’s see, which one you got!
              </div>
            </Accordion>
            <Accordion
              contentBg="bg-lightDark"
              noBorder
              textSize="text-lg font-medium"
              icon={<RiQuestionnaireFill />}
              title="Why do I need to provide my Details in the Billing Section?"
            >
              <div className="pb-4 text-body">
                In order to verify your payment with the bank, details are
                necessary as always… Moreover, it also helps us to contact you
                for any kind of support as well as to collect feedback in the
                future.
                <br />
                Let me assure you, you’ll have to put your information just
                once… Later on, all the data you provide will be saved
                automatically.
              </div>
            </Accordion>
            <Accordion
              contentBg="bg-lightDark"
              noBorder
              textSize="text-lg font-medium"
              icon={<RiQuestionnaireFill />}
              title="Should I write anything in the Order Notes/Additional Information on Checkout?"
            >
              <div className="pb-4 text-body">
                This part is all for yourself, as you can already understand…
                You may request us anything regarding the products you ordered
                or tell us the thing you have in mind… We’ll be really happy if
                we could meet your Special Requests!
                <br />
                In a sentence- if there is any special note you want to attach,
                that’s the perfect place to do that.
              </div>
            </Accordion>
            <Accordion
              contentBg="bg-lightDark"
              noBorder
              textSize="text-lg font-medium"
              icon={<RiQuestionnaireFill />}
              title="What should I do, if I’m getting an error on Checkout?"
            >
              <div className="pb-4 text-body">
                After you provide all your details and needed information on the
                checkout page to purchase, the “Place Order” button is the final
                step to click… If you’re being showed any error, please check
                carefully, as the error is shown on the top of the page.
                <br />
                If you’re getting this one – “Please read and accept the terms
                and conditions to proceed with your order”, that’s because you
                did not select/agree with the policies… There is a button with
                all necessary links before the “Place Order” button… Checking
                that box will be the solution to this problem!
              </div>
            </Accordion>
          </div>
          <div className="flex items-center mt-5">
            <p className="font-semibold text-white mr-3">Still need help?</p>
            <Link href="/contact">
              <a className="text-primary transition-colors hover:text-secondary font-semibold">
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
