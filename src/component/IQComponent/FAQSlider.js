import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // استيراد react-slick
import "./FAQSlider.css"; // تأكد من وجود تصميمات CSS الخاصة بالبطاقات

const FAQSlider = ({ faqs }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // تغيير السؤال والجواب كل 5 ثواني بشكل تلقائي
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % faqs.length);
    }, 5000); // تغيير كل 5 ثواني

    return () => clearInterval(interval);
  }, [faqs.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="faq-slider">
      <Slider {...settings}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${index === currentSlide ? "active" : ""}`}
          >
            <h5 className="faq-question">{faq.question}</h5>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FAQSlider;
