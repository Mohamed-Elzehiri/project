// src/pages/error/NotFound.js
import React from "react";
import "./NotFound.css"; // استيراد ملف CSS

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found-title">404 - الصفحة غير موجودة</h1>
      <p className="not-found-message">
        عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها.
      </p>
      <a href="/" className="not-found-link">
        العودة إلى الصفحة الرئيسية
      </a>
    </div>
  );
};

export default NotFound;
