import React, { useState } from "react";
import faqs from "../../component/IQComponent/faqs"; // تأكد من مسار المصفوفة
import FAQSlider from "../../component/IQComponent/FAQSlider"; // تأكد من مسار FAQSlider
import Comments from "../../component/comment/Comments"; // تأكد من مسار الاستيراد الصحيح
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InterviewQuestions = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // فلترة الأسئلة بناءً على مصطلح البحث
  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="interview-questions container">
      <h1>أسئلة شائعة عن المقابلات الشخصية</h1>
      <input
        type="text"
        placeholder="ابحث عن سؤال..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-3"
      />

      {/* استخدام مكون FAQSlider لعرض الأسئلة بشكل بطاقات مع التمرير */}
      <FAQSlider faqs={filteredFaqs} />

      {/* إضافة نظام التعليقات */}
      <Comments />
    </div>
  );
};

export default InterviewQuestions;
