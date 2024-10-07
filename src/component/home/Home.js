import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../Header";

function Home() {
  return (
    <div className="home container mt-5">
      <Header />

      <h2 className="mt-5 text-center">Sections</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="card mb-4 shadow-sm border-primary">
            <div className="card-body text-center">
              <i className="fa fa-briefcase fa-2x mb-2"></i>
              <h5 className="card-title">Projects</h5>
              <p className="card-text">
                Explore the projects I have worked on and see my skills in
                action.
              </p>
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-4 shadow-sm border-primary">
            <div className="card-body text-center">
              <i className="fa fa-file-alt fa-2x mb-2"></i>
              <h5 className="card-title">CV</h5>
              <p className="card-text">
                Check my resume and professional experience to understand my
                journey.
              </p>
              <Link to="/cv" className="btn btn-primary">
                View CV
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-4 shadow-sm border-primary">
            <div className="card-body text-center">
              <i className="fa fa-question-circle fa-2x mb-2"></i>
              <h5 className="card-title">Interview Questions</h5>
              <p className="card-text">
                Find common interview questions and answers to prepare for your
                next interview.
              </p>
              <Link to="/interview-questions" className="btn btn-primary">
                Explore Questions
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-4 shadow-sm border-primary">
            <div className="card-body text-center">
              <i className="fa fa-blog fa-2x mb-2"></i>
              <h5 className="card-title">Blog</h5>
              <p className="card-text">
                Read my thoughts and articles on various topics related to
                technology and design.
              </p>
              <Link to="/blog" className="btn btn-primary">
                Visit Blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* قسم العناصر المميزة (الأسئلة والأجوبة) */}
      <h2 className="mt-5 text-center">مميزة الأسئلة والأجوبة</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm border-info">
            <div className="card-body text-center">
              <h5 className="card-title">أسئلة شائعة</h5>
              <p className="card-text">
                تحقق من الأسئلة الشائعة والأجوبة المفيدة للمقابلات الشخصية.
              </p>
              <Link to="/interview-questions" className="btn btn-info">
                استكشاف الأسئلة
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* قسم المقالات المميزة */}
      <h2 className="mt-5 text-center">مقالات مميزة</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm border-success">
            <div className="card-body text-center">
              <h5 className="card-title">المقالات</h5>
              <p className="card-text">
                اقرأ مقالاتي المميزة حول التكنولوجيا والتصميم.
              </p>
              <Link to="/blog" className="btn btn-success">
                زيارة المدونة
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* إضافة الفوتر في نهاية الصفحة */}
      <footer className="mt-5">{/* يمكنك وضع كود الفوتر هنا */}</footer>
    </div>
  );
}

export default Home;
