// sections/Services.jsx
import React from 'react';
import delivery_icon from "../assets/delivery_icon.svg";
import support_icon from "../assets/support_icon.svg";
import guarantee_icon from "../assets/guarantee_icon.svg";

const services = [
  {
    id: 1,
    icon: delivery_icon,
    title: "FREE AND FAST DELIVERY",
    subtitle: "Free delivery for all orders over ₦50,000",
  },
  {
    id: 2,
    icon: support_icon,
    title: "24/7 CUSTOMER SERVICE",
    subtitle: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: guarantee_icon,
    title: "MONEY BACK GUARANTEE",
    subtitle: "We return money within 30 days",
  },
];

const Services = () => {
  return (
    <section className="font-geist bg-white px-5 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-10">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center text-center gap-4">
            {/* Icon circle */}
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <div className="w-11 h-11 rounded-full bg-[#800080] flex items-center justify-center">
  <img src={service.icon} alt={service.title} className="w-6 h-6" />
</div>
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-bold tracking-wide text-neutral-900 uppercase">{service.title}</p>
              <p className="text-sm text-neutral-500 mt-1">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;