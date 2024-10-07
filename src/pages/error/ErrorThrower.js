import React, { useState } from "react";
import "./ErrorThrower.css"; // استيراد ملف CSS

const ErrorThrower = () => {
  const [shouldThrowError, setShouldThrowError] = useState(false);

  const handleThrowError = () => {
    // إضافة تأخير قبل إثارة الخطأ
    setTimeout(() => {
      setShouldThrowError(true); // تحديث الحالة لإثارة الخطأ
    }, 1000); // 1000 مللي ثانية = 1 ثانية
  };

  if (shouldThrowError) {
    throw new Error("هذا خطأ لاختبار ErrorBoundary!"); // إثارة خطأ
  }

  return (
    <div className="error-thrower">
      <h1 className="large-title">404 صفحة</h1>
      <button className="error-button" onClick={handleThrowError}>
        إثارة خطأ
      </button>
    </div>
  );
};

export default ErrorThrower;
