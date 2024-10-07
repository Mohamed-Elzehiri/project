import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./styles/style.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/home/Home";
import ErrorBoundary from "./pages/error/ErrorBoundary"; // استيراد ErrorBoundary
import Loader from "./component/loader/Loader"; // استيراد Loader
import ErrorThrower from "./pages/error/ErrorThrower"; // استيراد مكون الخطأ
import NotFound from "./pages/error/NotFound"; // استيراد صفحة 404

const Projects = lazy(() => import("./pages/projectsPage/Projects"));
const CvDetails = lazy(() => import("./pages/CV/CvDetails"));
const InterviewQuestions = lazy(() => import("./pages/IQ/InterviewQuestions"));
const Blog = lazy(() => import("./pages/BlogDetails"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />

        <main className="main">
          <Suspense fallback={<Loader />}>
            {/* لمنع ظهور اخطاء */}
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/error" element={<ErrorThrower />} />
                <Route
                  path="/interview-questions"
                  element={<InterviewQuestions />}
                />
                <Route path="/cv" element={<CvDetails />} />
                <Route path="/blog/:postId" element={<BlogDetails />} />
                <Route path="*" element={<NotFound />} /> {/* إضافة مسار 404 */}
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
