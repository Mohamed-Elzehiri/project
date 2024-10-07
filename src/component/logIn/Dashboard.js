import React from "react";
import { auth } from "../firebaseConfig"; // تأكد من المسار صحيح

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <p>
        User: {auth.currentUser ? auth.currentUser.email : "No user logged in"}
      </p>
    </div>
  );
};

export default Dashboard;
