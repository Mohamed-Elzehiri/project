import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // حالة المستخدم

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userData = result.user; // الحصول على بيانات المستخدم
      console.log("User logged in successfully with Google!", userData);

      // تخزين بيانات المستخدم
      const userInfo = {
        name: userData.displayName,
        photoURL: userData.photoURL,
        email: userData.email,
      };

      // يمكنك استخدام localStorage أو Context API حسب الحاجة
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      setUser(userInfo); // تحديث حالة المستخدم
      navigate("/dashboard"); // إعادة توجيه المستخدم إلى لوحة التحكم
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
