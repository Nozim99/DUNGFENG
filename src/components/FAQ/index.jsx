import Accordion from "./Accordion.jsx";
import {useState} from "react";

const accordion = [
  {
    title: "how can i rent an electrical car?",
    desc: "Renting an electric car in USA California could soon be the smartest choice you make. At EconomyBookings.com you can rent this modern vehicle and enjoy a eco-friendly ride with all of the benefits of a traditional car. Renting an electric car in USA California is a great option for those who want to save money and reduce their carbon footprint."
  },
  {
    title: "how to check the status code of booking code?",
    desc: "All groups or blocks have a status that is attached to the block header. This status code reflects the groups’ status in terms of inquiry, contract sent, contract pending, confirmed, open for pickup, cancelled, etc. With each status, different options can be included, and the next available status or a status cycle can be set. (Up to 12 status codes may be defined.)\n" +
      "\n" +
      "The status type of the status code determines if blocked rooms are deducted from inventory (e.g., a Definite status code), not deducted from inventory (e.g., a Tentative status code), or if the blocked rooms should be returned to availability (e.g., a Cancel status code).",
  },
  {
    title: "how do i cancel a rent order?",
    desc: "Cancellations made more than 30 days before your delivery date will result in a refund to your original payment method. A $9.95 cancellation fee will be deducted from the refunded amount.\n" +
      "\n" +
      "Cancellations made within 30 days of your delivery date will result in a credit to your Rent the Runway account. A $9.95 cancellation fee will be deducted from that credit.",
  },
  {
    title: "how do i make a rent order change?",
    desc: "You can make changes to your order here. If we haven't started packing your order, you can change your rental begin date, change sizes, add an accessory, and update your shipping address. \n" +
      "\n" +
      "We typically start packing your order 3—5 days before your rental start date. If we’ve begun packing or have shipped your order, we can no longer make any changes. \n" +
      "\n" +
      "This policy does not apply to membership orders or purchases.\n" +
      "\n",
  },
]

const Index = () => {
  const [active, setActive] = useState();

  return (
    <section className="container mx-auto px-5 my-20">
      <h1 className="font-medium md:text-2xl xl:text-4xl text-center md:text-start mb-3 md:mb-5 xl:mb-10"><span
        className="text-lightCyan">FAQ.</span> ANSWER FOR QUESTIONS</h1>
      {
        accordion.map((item, index) => (
          <Accordion key={index} item={item} index={index} active={active} setActive={setActive}/>
        ))
      }
    </section>
  );
};

export default Index;