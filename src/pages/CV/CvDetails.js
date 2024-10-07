import React from "react";
import "./CvDetails.css"; // تأكد من تخصيص الأنماط في هذا الملف
import { Button } from "react-bootstrap"; // استخدام مكتبة React-Bootstrap

function CvDetails() {
  return (
    <div className="cv-details container mt-5">
      <header className="text-center mb-4">
        <h1 className="display-4">Resume</h1>
        <p className="lead">
          I am Mohamed Elzehiri, Frontend Developer with a passion for creating
          engaging and user-friendly web experiences. I am committed to staying
          up-to-date with the latest web technologies and best practices to
          develop effective solutions for my clients and provide exceptional
          user experiences. Key Skills: Frontend Technologies: HTML, CSS,
          Bootstrap, jQuery , JavaScript, React.js. Tools & Libraries: npm,
          Webpack, Git, GitHub, Unit Testing.
        </p>
      </header>
      <hr />
      {/* قسم المعلومات الشخصية */}
      <section className="personal-info mb-4">
        <h2 className="h3">Personal Information</h2>
        <p>
          <strong>Name:</strong> Mohamed Ibrahim Elzehiri
        </p>
        <p>
          <strong>Email:</strong> elzehiriwork@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> (+20) 01025706826
        </p>
        <p>
          <strong>LinkedIn:</strong> https://www.linkedin.com/in/elzehiri/
          <br />
          <strong>Facebook:</strong> https://www.facebook.com/Mohamed1Elzehiri/
          <br />
          <strong>GitHub:</strong> https://github.com/Mohamed-Elzehiri/
        </p>
      </section>
      <hr />
      {/* قسم التعريف الذاتي */}
      <section className="about mb-4">
        <h2 className="h3">About Me</h2>
        <p>
          I am a passionate and dedicated web developer with a strong foundation
          in front-end technologies such as React, HTML, CSS, and JavaScript.
          With experience in graphic design, I have honed my skills in creating
          responsive and user-friendly web applications. I am committed to
          continuous learning and staying up-to-date with the latest industry
          trends and best practices. Throughout my career, I have worked on
          various projects, including e-commerce stores, personal sites, and
          many more, which have equipped me with the ability to solve complex
          problems and deliver high-quality solutions. My strong attention to
          detail and ability to work hard and master have contributed to the
          creation of projects that are creative and distinctive. In addition to
          my technical skills, I am a strong communicator and enjoy sharing my
          knowledge with others. I believe that teamwork and effective
          communication are essential to success in any project. When I am not
          coding, you can find me exploring new technologies, reading about
          software development, or working on personal projects that challenge
          my creativity and problem-solving skills. I am excited to have the
          opportunity to contribute my expertise to innovative projects and be
          part of a dynamic team that values ​​creativity and collaboration.
        </p>
      </section>
      <hr />
      {/* قسم الخبرات */}
      <section className="experience mb-4">
        <h2 className="h3">Professional Experience</h2>
        <ul className="list-unstyled">
          <li>
            <h4>Front End Developer at Freelance</h4>
            <p>
              <strong>Dates:</strong> 2021 - Until now
            </p>
            <p>
              <strong>Responsibilities:</strong>
              <br />
              Led the front-end development of multiple web applications using
              React, ensuring optimal performance and a seamless user
              experience. Collaborated with cross-functional teams, including
              designers and back-end developers, to translate user requirements
              into functional, visually appealing websites. Implemented
              responsive design and ensured cross-browser compatibility to
              enhance accessibility across different devices. Managed the
              integration of APIs and third-party services to add dynamic
              functionality to web applications.
              <br />
              <br />
              <strong>DatesAchievements:</strong>
              <br />I have developed and launched personal projects, such as (an
              online store - a pizza website - a clothing website - a mobile
              website - a clinic website - a personal website - a product
              ordering website) that showcase my skills and improve performance
              and user interaction. Using the following technologies: HTML, CSS,
              JavaScript, Bootstrap and React. I have completed a set of
              training courses and certificates in web development, focusing on
              both front-end and back-end technologies. Continuous learning of
              new technologies and best practices to enhance my programming
              skills and problem-solving abilities and continuously apply
              projects to all the information I have learned, projects are
              implemented on it.
            </p>
          </li>
          {/* يمكنك إضافة المزيد من الخبرات هنا */}
        </ul>
      </section>
      <hr />
      {/* قسم التعليم */}
      <section className="education mb-4">
        <h2 className="h3">Education</h2>
        <ul className="list-unstyled">
          <li>
            <h4>High school</h4>
            <p>
              <strong>Abu Al-Naja</strong>
              <br />
              2003 - 2006 <br />
              Engineering and electronics
            </p>
          </li>
        </ul>
        <ul className="list-unstyled">
          <li>
            <h4>IBI Institute</h4>
            <p>
              2007 - 2009 <br />
              Engineering and electronics
            </p>
          </li>
        </ul>
        <ul className="list-unstyled">
          <li>
            <h4>Creativo Company</h4>
            <p>
              2016 - 2017 <br />
              Graphic design Course
            </p>
          </li>
        </ul>
        <ul className="list-unstyled">
          <li>
            <h4>Createivo Company</h4>
            <p>
              2021 - 2023 <br />
              Web Development Course
            </p>
          </li>
        </ul>
      </section>
      <hr />
      {/* قسم المهارات */}
      <section className="skills mb-4">
        <h2 className="h3">Skills</h2>
        <ul className="list-unstyled">
          <li>
            <strong>Web Development:</strong> HTML, CSS, JavaScript, Bootstrap,
            React.js
          </li>
          <li>
            <strong>UI/UX Design:</strong> Adobe XD, Figma
          </li>
          <li>
            <strong>Video Editing:</strong> Adobe Premiere Pro, After Effects
          </li>
          <li>
            <strong>Graphic Design:</strong> Adobe Photoshop, Illustrator
          </li>
          <li>
            <strong>Front-End Frameworks:</strong> Bootstrap, Tailwind CSS
          </li>
          <li>
            <strong>Version Control:</strong> Git, GitHub
          </li>
          <li>
            <strong>Responsive Design:</strong> Media Queries, Flexbox, CSS Grid
          </li>
          <li>
            <strong>Performance Optimization:</strong> Lazy Loading, Code
            Splitting
          </li>
          <li>
            <strong>Basic SEO:</strong> Meta Tags, Structured Data
          </li>
        </ul>
      </section>
      <hr />
      {/* قسم الشهادات أو الدورات */}
      <section className="certifications mb-4">
        <h2 className="h3">Certifications</h2>
        <ul className="list-unstyled">
          <li>
            <h4>IBI Institute</h4>
            <p>
              <strong>Engineering and Electronics</strong> | 2009
            </p>
          </li>
          <li>
            <h4>Creativo Company</h4>
            <p>
              <strong>Graphic design</strong> | 2017
            </p>
          </li>
          <li>
            <h4>Createivo Company</h4>
            <p>
              <strong>Web Development Course</strong> | 2023
            </p>
          </li>
        </ul>
      </section>

      <hr />

      {/* قسم الأنشطة التطوعية أو الهوايات */}
      <section className="hobbies mb-4">
        <h2 className="h3">Hobbies & Interests</h2>
        <ul className="list-unstyled">
          <li>
            <strong>Learning New Technologies:</strong> Passionate about staying
            current with emerging web development technologies and continuously
            improving coding skills.
          </li>
          <li>
            <strong>Design & Creativity:</strong> Enjoy experimenting with new
            design trends and creating visually appealing user interfaces.
          </li>
          <li>
            <strong>Problem Solving:</strong> I love tackling complex problems,
            whether through coding challenges or real-world projects, and
            finding optimal solutions.
          </li>
          <li>
            <strong>Video Editing & Graphics:</strong> Skilled in video and
            graphic editing using Adobe Premiere Pro, After Effects, and
            Photoshop for creative projects.
          </li>
          <li>
            <strong>Gaming:</strong> Enjoy playing strategy games, which enhance
            critical thinking and problem-solving skills.
          </li>
          <li>
            <strong>Fitness & Sports:</strong> Active in maintaining a balanced
            lifestyle through regular physical activities like [Physical games,
            bikes and hiking].
          </li>
        </ul>
      </section>

      <div className="text-center">
        <a
          href="/path/to/your/cv.pdf" // تأكد من تعديل المسار هنا
          download
        >
          <Button variant="primary" size="lg">
            Download CV
          </Button>
        </a>
      </div>
    </div>
  );
}

export default CvDetails;
