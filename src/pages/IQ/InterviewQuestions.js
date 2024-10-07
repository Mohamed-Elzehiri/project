import React, { useState } from "react";
import faqs from "../../component/IQComponent/faqs"; // تأكد من مسار المصفوفة
import FAQSlider from "../../component/IQComponent/FAQSlider"; // تأكد من مسار FAQSlider
import Comments from "../../component/comment/Comments"; // تأكد من مسار الاستيراد الصحيح
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate إذا لم يكن موجودًا

const InterviewQuestions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // إنشاء navigate

  // تحقق من وجود معلومات المستخدم في localStorage
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  // فلترة الأسئلة بناءً على مصطلح البحث
  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // إذا لم يكن المستخدم مسجلاً الدخول، إعادة التوجيه إلى صفحة تسجيل الدخول
  if (!userInfo) {
    return (
      <div>
        <h2>يرجى تسجيل الدخول للوصول إلى المحتوى</h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/login")} // إعادة التوجيه إلى صفحة تسجيل الدخول
        >
          تسجيل الدخول
        </button>
      </div>
    );
  }

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
