// sections/Reviews.jsx
import React from 'react';
import emily_img from "../assets/emily_img.svg";
import red_mark from "../assets/red_mark.svg";
import green_mark from "../assets/green_mark.svg";
import blue_mark from "../assets/blue_mark.svg";
import yellow_mark from "../assets/yellow_mark.svg";

const row1 = [
  { id: 1,  name: "Emily Smith",    role: "Student",    review: "A smooth and well-designed app that helps students practice and gain confidence for their exams.", img: emily_img, mark: red_mark },
  { id: 2,  name: "Michael Johnson",role: "Teacher",    review: "90Percent delivers quality questions and a great learning experience that truly boosts performance.", img: emily_img, mark: blue_mark },
  { id: 3,  name: "Michael Johnson",role: "Sales Head", review: "A game-changer for our sales team! Easy to use, reliable, and packed with great features that enhance efficiency.", img: emily_img, mark: green_mark },
  { id: 4,  name: "Sarah Williams", role: "Parent",     review: "My daughter's grades improved significantly after using this. The content is thorough and easy to follow.", img: emily_img, mark: yellow_mark },
  { id: 5,  name: "James Okafor",   role: "Student",    review: "The practice questions are spot on. I feel so much more prepared for my exams now.", img: emily_img, mark: red_mark },
  { id: 6,  name: "Amara Nwosu",    role: "Educator",   review: "An incredibly well-structured platform. My students have never been more engaged with their studies.", img: emily_img, mark: green_mark },
];

const row2 = [
  { id: 7,  name: "Emily Smith",    role: "Student",    review: "90Percent is an excellent study app that makes exam preparation easier, smarter, and more effective.", img: emily_img, mark: green_mark },
  { id: 8,  name: "Michael Johnson",role: "Sales Head", review: "A game-changer for our team! Reliable, and packed with great features that enhance efficiency and collaboration.", img: emily_img, mark: blue_mark },
  { id: 9,  name: "Emily Smith",    role: "Student",    review: "90Percent is an excellent study app that makes exam preparation easier, smarter, and more effective.", img: emily_img, mark: red_mark },
  { id: 10, name: "Michael Johnson",role: "Teacher",    review: "The quality of questions is outstanding. Students gain real confidence walking into any examination.", img: emily_img, mark: yellow_mark },
  { id: 11, name: "Fatima Hassan",  role: "Parent",     review: "Worth every penny. My son went from average to top of his class within one term of using this app.", img: emily_img, mark: blue_mark },
  { id: 12, name: "David Eze",      role: "Student",    review: "I love how the app tracks my progress. It keeps me motivated and focused on improving every day.", img: emily_img, mark: red_mark },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="w-[357px] h-[119px] bg-white rounded-2xl p-4 mx-2 flex flex-col gap-4 shadow-sm flex-shrink-0">
    
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={testimonial.img} alt={testimonial.name} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
        <p className="text-sm font-semibold text-neutral-900">{testimonial.name}</p>
      </div>
      <img src={testimonial.mark} alt="" className="w-7 h-7 opacity-80 flex-shrink-0" />
    </div>

    {/* Review text */}
    <p className="text-[11px] text-neutral-600 leading-relaxed line-clamp-3">{testimonial.review}</p>
  </div>
);

const MarqueeRow = ({ items, reverse = false }) => (
  <div className="overflow-hidden w-full">
    <style>{`
      @keyframes slide-left  { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      @keyframes slide-right { from { transform: translateX(-50%) } to { transform: translateX(0) } }
    `}</style>
    <div
      className="flex w-max py-2"
      style={{ animation: `${reverse ? "slide-right" : "slide-left"} 35s linear infinite` }}
    >
      {[...Array(2)].map((_, set) =>
        items.map((t) => <TestimonialCard key={`${set}-${t.id}`} testimonial={t} />)
      )}
    </div>
  </div>
);

const Reviews = () => {
  return (
    <section className="font-geist bg-[#800080] py-10 md:py-14 overflow-hidden">
      <p className="text-white text-3xl sm:text-4xl font-semibold px-5 sm:px-10 md:px-16 lg:px-20 mb-8">
        Reviews
      </p>

      <MarqueeRow items={row1} reverse={false} />

      <div className="mt-4">
        <MarqueeRow items={row2} reverse={true} />
      </div>
    </section>
  );
};

export default Reviews;