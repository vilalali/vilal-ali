import React from "react";
const recommendationCard = [
  {
    id: 0,
    name: 'Prof. Krishna Reddy P.',
    image: "images/prof-krishna.png",
    designation: 'Professor | IIIT Hyderabad',
    view: "Hi everyone! I highly recommend Vilal for Data Science and Engineering opportunities. He worked for me on multiple projects, showcasing a deep understanding of React.js, React Native, Next.js, and Python. Vilal consistently delivered high-quality code, demonstrated a strong willingness to learn, and approached new challenges with enthusiasm and determination. He is a reliable and dedicated professional who would be a valuable asset to any Engineering team.. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/shahmir-minhas/"
  },
  {
    id: 1,
    name: 'Dr. Rashid Ahmed',
    image: "images/rashid.jpeg",
    designation: 'Data Scientist | Machine Learning Engineer | Python Developer | NLP Expert',
    view: "I had the privilege of working alongside Vilal on multiple NLP projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at Data Science Technologies, where Vilal's professionalism and attention to detail shone brightly. I wholeheartedly endorse Vilal for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "https://faculty.iiit.ac.in/~pkreddy/"
  },
  {
    id: 2,
    name: 'Karthik Vaidhyanathan',
    image: "images/prof-karthik.jpeg",
    designation: 'Assistant Professor at IIIT Hyderabad (IIITH) | Researcher | Teacher | Consultant',
    view: "I wholeheartedly recommend Vilal as a talented software engineer with an incredible flair for System Design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Vilal Ali's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "https://www.linkedin.com/in/karthikv1392/"
  },
  {
    id: 3,
    name: 'Amit Pandey',
    image: "images/amit.jpeg",
    designation: 'Data Science Researcher',
    view: "I highly recommend Vilal Ali for web frontend development positions. Their expertise in ReactJS and Node.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/amitpandey2910/"
  },
];

const Home = () => {
  return (
    <React.StrictMode>
      <div className="main-page-content">
        <div id="home">
          <div id="particles-js"></div>
          <div className="home-content-main">
            <div className="table-cell">
              <div className="container">
                <div className="row home-row">
                  <div className="col-md-12 col-sm-12">
                    <div className="home-text wow fadeIn text-center">
                      <h1 className="cd-headline clip is-full-width">
                        <span
                          className="cd-words-wrapper"
                          style={{ width: "266px", overflow: "hidden" }}
                        >
                          <b className="is-hidden">Vilal Ali</b>
                          <b className="is-hidden">Full Stack Developer</b>
                          <b className="is-visible">System Architecture</b>
                        </span>
                      </h1>
                      <div className="about-social-icon text-center">
                        <ul className="about-social">
                          <li className="wow fadeIn" data-wow-delay=".4s">
                            <a
                              href="https://www.linkedin.com/in/vilal-ali/"
                              target="newtab"
                            >
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".2s">
                            <a
                              href="https://github.com/vilalali"
                              target="newtab"
                            >
                              <i
                                className="fa fa-github"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          {/* <li className="wow fadeIn" data-wow-delay=".6s">
                            <a
                              href="https://www.instagram.com/vilalz/"
                              target="newtab"
                            >
                              <i
                                className="fa fa-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li> */}
                          <li className="wow fadeIn" data-wow-delay=".8s">
                            <a href="https://x.com/b_belaal" target="newtab">
                              <i
                                className="fa fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay="1s">
                            <a
                              href="https://www.facebook.com/vilalZ"
                              target="newtab"
                            >
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax" data-velocity="-.1"></div>
          <div className="parallax" data-velocity="-.5" data-fit="525"></div>
        </div>

        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about">
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>What I do</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        As a Full Stack Software Engineer with 6+ years of
                        experience, I specialize in architecting, developing,
                        and deploying robust, scalable system. I have a strong
                        foundation in React.js, Node.js, Express.js, MySQL,
                        NoSQL, Python, Flask and AWS S3. I thrive on solving
                        complex technical challenges, optimizing system
                        performance, and mentoring team members to deliver
                        innovative solutions. I have a proven track record of
                        leading teams and successfully delivering high-quality
                        projects.As a Full Stack Software Engineer with 6+ years
                        of experience, I specialize in architecting, developing,
                        and deploying robust, scalable system. I have a strong
                        foundation in React.js, Node.js, Express.js, MySQL,
                        NoSQL, Python, Flask and AWS S3. I thrive on solving
                        complex technical challenges, optimizing system
                        performance, and mentoring team members to deliver
                        innovative solutions. I have a proven track record of
                        leading teams and successfully delivering high-quality
                        projects.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".1s">
                      <i
                        className="fa fa-pencil-square-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Striving for Excellence</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Always believe in dedication and passion in my
                        profession
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".3s">
                      <i
                        className="fa fa-lightbulb-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Problem Solver</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Innovative and creative problem-solving.</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".2s">
                      <i
                        className="fa fa-code love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Full Stack</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Building dynamic and scalable applications end-to-end.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".4s">
                      <i
                        className="fa fa-cloud love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>System Architecture</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Expertise in designing robust systems with
                        microservices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-back"></div>
            <div className="me-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                    <div className="about-image">
                      <img
                        src="assets/img/about-image.jpg"
                        alt="Vilal-Ali"
                        className="about-img wow fadeIn"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                    <div className="about-details wow fadeIn">
                      <div className="main-title left-title text-left wow fadeIn">
                        <h3>Hi! I'm Vilal Ali</h3>
                        <div className="underline1 no-margin"></div>
                        <div className="underline2 no-margin"></div>
                      </div>
                      <p className="wow fadeIn">
                        I am a versatile professional based in Hyderabad, India,
                        with over 6 years of experience in IT, including 2 years
                        as a tech lead. I specialize in designing and
                        implementing scalable solutions across diverse domains
                        such as AI, ML, MLOps, DevOps, and full-stack
                        development. Whether you're a business in need of
                        innovative solutions or an employer seeking a
                        well-rounded expert, feel free to connect with me
                        <a
                          className="underline2"
                          href="https://www.linkedin.com/in/vilal-ali/"
                        >
                          here.
                        </a>
                        <br />
                        <br />I take pride in creating impactful digital
                        experiences with clean, efficient, and scalable code. My
                        expertise spans from backend system development to
                        user-friendly interfaces, and I am driven by the passion
                        for delivering exceptional outcomes tailored to client
                        needs.
                      </p>

                      <a
                        className="about-link-1"
                        href="assets/cv/VILAL_ALI_CV_SDE_II_2024_V4.pdf"
                        target="_blank"
                      >
                        See Resume
                      </a>
                      <a
                        className="about-link-2"
                        href="https://www.linkedin.com/in/vilal-ali/"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-counter text-center">
              <div className="counter">
                <div className="container">
                  <div className="row wow fadeIn">
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-code stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">50+</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Projects Delivered</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-object-group stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">35+</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>UI/UX Designs Completed</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-globe stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">20+</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Web Applications Built</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-briefcase stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">12+</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Years of Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ Skill =============================== --> */}

        <div id="skill">
          <div className="skill-main">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>My Skill</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>
                      I value simple content structure, clean design patterns,
                      and thoughtful interactions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row love-row wow fadeIn">
                <div className="col-md-6">
                  <div className="skill-details text-left">
                    <p>
                      I specialize in backend development with expertise in
                      building scalable, secure, and efficient server-side
                      applications and APIs. My strengths include implementing
                      microservices architectures, gRPC-based communication, and
                      robust data processing pipelines. With a passion for
                      innovation, I design solutions that address real-world
                      challenges, delivering impactful and reliable systems
                      tailored to modern application demands.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-details">
                    <div className="content">
                      <div className="col">
                        <ul id="skill-main">
                          <li>
                            <h3>
                              Frontend Technologies (React JS, React Native,
                              JavaScript, HTML, CSS, ) - 95%
                            </h3>
                          </li>
                          <li>
                            <h3>
                              Backend Development (Node.js, Laravel, gRPC) - 92%
                            </h3>
                          </li>
                          <li>
                            <h3>
                              Python Full Stack (Django, Flak, Panda, Numpy) -
                              90%
                            </h3>
                          </li>
                          <li>
                            <h3>
                              Database Management (SQL, NoSQL, MongoDB,
                              PostgreSQL) - 90%
                            </h3>
                          </li>
                          <li>
                            <h3>
                              DevOps & CI/CD (Git, Docker, Kubernetes) - 88%
                            </h3>
                          </li>
                          <li>
                            <h3>UI / UX Design - 80%</h3>
                          </li>
                          <li>
                            <h3>
                              Microservices Architecture & API Development - 85%
                            </h3>
                          </li>
                          <li>
                            <h3>
                              Cloud Platforms (AWS, Azure, Google Cloud) - 80%
                            </h3>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================ Professional Experience =============================== */}
        <div id="work">
          <div className="work-content">
            <div className="work-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Professional Experience</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I like to code things from scratch, and enjoy bringing
                        ideas to life in the browser.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mr-2">
                  {" "}
                  {/* Added mr-5 for right margin */}
                  <div className="col-md-12 col-sm-12">
                    <div className="resume-details" data-wow-delay=".2s">
                      <div className="resume-hover"></div>
                      <div className="row love-row wow fadeIn">
                        {/* First column with col-md-1 for the icon */}
                        <div className="col-md-1 col-sm-1">
                          <div className="resume-main">
                            <i
                              className="fa fa-briefcase resume-icon"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>

                        {/* Second column with col-md-11 for the content */}
                        <div className="col-md-11 col-sm-11 text-left">
                          <h3>Sr. Software Engineer (Full Stack)</h3>
                          <h2>
                            IHub Data, IIIT-H | Feb 2023 – Ongoing | Hyderabad,
                            IN
                          </h2>

                          <ul>
                            <p>
                              <li>
                                <strong>System Design and Architecture:</strong>{" "}
                                Designed scalable, high-level systems and
                                microservice architectures for the Data
                                Foundation platform, ensuring robustness and
                                modularity.
                              </li>
                            </p>

                            <p>
                              <li>
                                <strong>Coding and Development:</strong>{" "}
                                Delivered clean, scalable, and efficient code to
                                support large-scale systems and improve
                                performance. Performed full-stack development,
                                integrating tools and frameworks to enhance
                                functionality and maintainability.
                              </li>
                            </p>

                            <p>
                              <li>
                                <strong>Code Review and Training:</strong> Led
                                code reviews to enhance code readability,
                                scalability, and reusability, while mentoring
                                the team.
                              </li>
                            </p>

                            <p>
                              <li>
                                <strong>Tool and Framework Integration:</strong>{" "}
                                Integrated advanced tools and frameworks into
                                existing platforms to enhance functionality and
                                scalability.
                              </li>
                            </p>

                            <p>
                              <li>
                                <strong>
                                  Team Leadership and Agile Practices:
                                </strong>{" "}
                                Managed cross-functional teams using Agile
                                methodologies and Jira Atlassian tools,
                                streamlining workflows and resolving bottlenecks
                                to enhance team efficiency by 30%. Provided
                                SME-level guidance on hosting issues, logins,
                                and server upgrades.
                              </li>
                            </p>

                            <p>
                              <li>
                                <strong>Documentation:</strong> Authored
                                detailed technical documentation for proprietary
                                software, reducing orientation time for new
                                hires by 50%.
                              </li>
                            </p>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mr-2">
                  {/* Added mr-5 for right margin */}
                  <div className="col-md-12 col-sm-12">
                    <div className="resume-details" data-wow-delay=".2s">
                      <div className="resume-hover"></div>
                      <div className="row love-row wow fadeIn">
                        {/* First column with col-md-1 for the icon */}
                        <div className="col-md-1 col-sm-1">
                          <div className="resume-main">
                            <i
                              className="fa fa-briefcase resume-icon"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>

                        {/* Second column with col-md-11 for the content */}
                        <div className="col-md-11 col-sm-11 text-left">
                          <h3>Sr. Software Engineer & UI/UX</h3>
                          <h2>
                            eBhasha Setu, CIE, IIITH | April 2019 – Feb 2023 |
                            Hyderabad, IN
                          </h2>

                          <ul>
                            <p>
                              <li>
                                <strong>System Design and Development:</strong>{" "}
                                Worked on developing, deploying, and maintaining
                                various tools, including increasing the accuracy
                                of an HMM-based transliteration system for
                                Urdu-Hindi machine transliteration, now used by
                                Rekhta.
                              </li>
                            </p>

                            <p>
                              <li>
                                <strong>SWAYAM Project (MHRD):</strong> Designed
                                and developed Videozaar, a video transcript
                                generation and editing platform with subtitle
                                synchronization support for multiple Indian
                                regional languages.
                              </li>
                            </p>

                            <p>
                              <li>
                                <strong>Leadership and Teamwork:</strong> Led a
                                team of 4+ in developing the Avatar OCR
                                Translation System for the Bhashini Challenge,
                                aimed at digitizing and translating government
                                documents in regional languages. Utilized tools
                                like indicOCR and SWAYAM MT and won 1st prize.
                              </li>
                            </p>

                            <p>
                              <li>
                                <strong>Technologies Used:</strong> Python,
                                SciPy, NumPy, Pandas, Django, Flask, JavaScript,
                                MySQL, MongoDB.
                              </li>
                            </p>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mr-2">
                  {/* Added mr-5 for right margin */}
                  <div className="col-md-12 col-sm-12">
                    <div className="resume-details" data-wow-delay=".2s">
                      <div className="resume-hover"></div>
                      <div className="row love-row wow fadeIn">
                        {/* First column with col-md-1 for the icon */}
                        <div className="col-md-1 col-sm-1">
                          <div className="resume-main">
                            <i
                              className="fa fa-briefcase resume-icon"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>

                        {/* Second column with col-md-11 for the content */}
                        <div className="col-md-11 col-sm-11 text-left">
                          <h3>Research Intern</h3>
                          <h2>
                            CVEST Research Center, IIITH | Sept 2018 – April
                            2019 | Hyderabad, IN
                          </h2>

                          <ul>
                            <p>
                              <li>
                                <strong>
                                  Desktop Application Development:
                                </strong>{" "}
                                Created a desktop application using Electron JS,
                                HTML, and CSS.
                              </li>
                            </p>

                            <p>
                              <li>
                                <strong>Full-Stack Development:</strong>{" "}
                                Developed a Flask-based full-stack website for
                                CVEST, handling both back-end and front-end
                                development.
                              </li>
                            </p>

                            <p>
                              <li>
                                <strong>Installation for Linux OS:</strong>{" "}
                                Designed back-end and front-end structures for a
                                desktop application to be installable on
                                Debian-based Linux OS.
                              </li>
                            </p>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ RESUME =============================== --> */}

        <div id="resume">
          <div className="resume-content">
            <div className="resume-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Educational Story</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I like to code things from scratch, and enjoy bringing
                        ideas to life in the browser.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".2s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-graduation-cap resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>MS By Research in CSE</h3>
                        <h2>July 2024 – Pursuing</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          I am currently pursuing MS By Research in Computer
                          Science and Engineering at IIIT Hyderabad.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".4s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-graduation-cap resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Master of Computer Applications (MCA)</h3>
                        <h2>Aug 2012 – May 2015</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          I completed my MCA at the Institute of Engineering &
                          Technology.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".5s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-graduation-cap resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>B.Sc. in Computer Science</h3>
                        <h2>July 2007 – May 2010</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          I completed my B.Sc. in Computer Science at Lucknow
                          University.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ WORK =============================== --> */}

        {/* <div id="work">
          <div className="work-content">
            <div className="work-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Work Portfolio</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Here are a few design projects I've worked on recently.
                        Want to see more?{" "}
                        <a className="underline2" href="#contact">
                          contact me.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="gallery" style={{ paddingTop: "80px" }}>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <div className="gallery-item">
                    <img
                      className="gallery-image"
                      src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                      alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                    />
                  </div>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop"
                        alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop"
                        alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop"
                        alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                        alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                        alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- ============================================== SERVICE ===================================================== --> */}

        <div id="service">
          <div className="service-content">
            <div id="service">
              <div className="service-content">
                <div className="service-grid text-center">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title text-center wow fadeIn">
                          <h3>Service List</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <p>
                            Passionate about creating innovative solutions that
                            drive business growth, enhance performance, and
                            ensure scalability.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row love-row wow fadeIn">
                      <div className="col-md-4 col-sm-6">
                        <div className="service-details" data-wow-delay=".1s">
                          <div className="service-head">
                            <img
                              src="assets/img/service/design-development.jpg"
                              alt="design-development"
                            />
                          </div>
                          <div className="service-bottom">
                            <i
                              className="fa fa-edit service-icon"
                              aria-hidden="true"
                            ></i>
                            <h3>System Design & Architecture</h3>
                            <div className="underline1"></div>
                            <div className="underline2"></div>
                            <p>
                              Designing scalable and efficient architectures for
                              cloud-native applications, ensuring high
                              performance and reliability.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="service-details" data-wow-delay=".1s">
                          <div className="service-head">
                            <img
                              src="assets/img/service/e-commarce.jpg"
                              alt="e-commarce"
                            />
                          </div>
                          <div className="service-bottom">
                            <i
                              className="fa fa-cart-plus exp-icon"
                              aria-hidden="true"
                            ></i>
                            <h3>Full-Stack Development</h3>
                            <div className="underline1"></div>
                            <div className="underline2"></div>
                            <p>
                              Developing full-stack solutions using modern
                              technologies like React.js and Node.js to create
                              seamless user experiences and powerful backend
                              systems.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="service-details" data-wow-delay=".1s">
                          <div className="service-head">
                            <img
                              src="assets/img/service/analytics.jpg"
                              alt="analytics"
                            />
                          </div>
                          <div className="service-bottom">
                            <i
                              className="fa fa-tachometer service-icon"
                              aria-hidden="true"
                            ></i>
                            <h3>Cloud & DevOps Solutions</h3>
                            <div className="underline1"></div>
                            <div className="underline2"></div>
                            <p>
                              Expertise in cloud infrastructure management and
                              DevOps practices to ensure smooth, automated
                              deployments and scaling across platforms like AWS
                              and GCP.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="service-details" data-wow-delay=".1s">
                          <div className="service-head">
                            <img
                              src="assets/img/service/mobile-friendly.jpg"
                              alt="mobile-friendly"
                            />
                          </div>
                          <div className="service-bottom">
                            <i
                              className="fa fa-desktop exp-icon"
                              aria-hidden="true"
                            ></i>
                            <h3>Machine Learning & AI</h3>
                            <div className="underline1"></div>
                            <div className="underline2"></div>
                            <p>
                              Applying machine learning and AI techniques to
                              enhance business decisions, automate tasks, and
                              provide deeper insights into operations.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="service-details" data-wow-delay=".1s">
                          <div className="service-head">
                            <img
                              src="assets/img/service/website-audit.jpg"
                              alt="website-audit"
                            />
                          </div>
                          <div className="service-bottom">
                            <i
                              className="fa fa-search exp-icon"
                              aria-hidden="true"
                            ></i>
                            <h3>Agile Methodology & Team Leadership</h3>
                            <div className="underline1"></div>
                            <div className="underline2"></div>
                            <p>
                              Leading teams with Agile methodologies to drive
                              high-impact projects, focusing on collaboration
                              and iterative development for continuous
                              improvement.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="service-details" data-wow-delay=".1s">
                          <div className="service-head">
                            <img
                              src="assets/img/service/content-management.jpg"
                              alt="content-management"
                            />
                          </div>
                          <div className="service-bottom">
                            <i
                              className="fa fa-file exp-icon"
                              aria-hidden="true"
                            ></i>
                            <h3>Custom Content Management Solutions</h3>
                            <div className="underline1"></div>
                            <div className="underline2"></div>
                            <p>
                              Developing custom CMS solutions and plugins for
                              seamless content updates and maintenance without
                              the need for deep technical knowledge.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial">
  <div className="testimonial-content">
    <div className="testimonial-grid">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title text-center wow fadeIn">
              <h3>Testimonials</h3>
              <div className="underline1"></div>
              <div className="underline2"></div>
              <p>People I've worked with have said some nice things</p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-details">
        <section id="carousel">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="quote">
                  <i className="fa fa-quote-left fa-4x"></i>
                </div>
                <div
                  className="carousel slide"
                  id="fade-quote-carousel"
                  data-ride="carousel"
                  data-interval="3000"
                >
                  <ol className="carousel-indicators">
                    {recommendationCard.map((card, index) => (
                      <li
                        key={card.id}
                        data-target="#fade-quote-carousel"
                        data-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                      ></li>
                    ))}
                  </ol>
                  <div className="carousel-inner">
                    {recommendationCard.map((card, index) => (
                      <div
                        className={`item ${index === 0 ? 'active' : ''}`}
                        key={card.id}
                      >
                        <blockquote>
                          <div className="testimonial-author">
                            <img
                              src={card.image}
                              alt={card.name}
                              className="author-img"
                            />
                            <span>{card.name}</span>
                            <p>{card.designation}</p>
                          </div>
                          <p>{card.view}</p>
                          <a href={card.linkednURL} target="_blank" rel="noopener noreferrer">
                            View LinkedIn
                          </a>
                        </blockquote>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>

        {/* <!-- ================================ BLOG ========================== --> */}

        <div id="blog">
          <div className="blog-content">
            <div className="blog-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>My Blog</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        The Blog, Which has thoughts on life, work and
                        everything in between.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="blog-details wow fadeIn text-left">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        <a
                          href="https://vilalali.github.io/vilal-ali/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="assets/img/blog/blog1.png"
                            alt="React hooks were introduced in version 16.8"
                            className="blog-img"
                          />
                        </a>
                        <div className="blog-head">
                          <a
                            href="https://vilalali.github.io/vilal-ali/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <h3>
                              <strong>
                                What is the importance of hooks in React JS?
                              </strong>
                            </h3>
                          </a>
                        </div>
                        <div className="blog-bottom">
                          <p>
                            In this article, you will learn what are hooks in
                            React JS? and when to use react hooks? React JS is
                            developed by Facebook in the year 2013. There are
                            many students and the new developers who have
                            confusion between react and hooks in react. Well, it
                            is not different, react is a programming language
                            and hooks is ...
                          </p>
                          <a
                            href="https://vilalali.github.io/vilal-ali/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-link-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        <a
                          href="https://vilalali.github.io/vilal-ali/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="assets/img/blog/blog2.png"
                            alt="The importance of UI/UX"
                            className="blog-img"
                          />
                        </a>
                        <div className="blog-head">
                          <a
                            href="https://vilalali.github.io/vilal-ali/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <h3>
                              <strong>
                                The importance of UI/UX | Software Engineering
                              </strong>
                            </h3>
                          </a>
                        </div>
                        <div className="blog-bottom">
                          <p>
                            UI or User Interface is the interface that is the
                            access point where users interact with computers. It
                            is also a way through which users can interact with
                            a website or an application. UI design typically
                            refers to graphical user interfaces but also
                            includes others, such as voice-controlled ones, a
                            keyboard and the appearance ...
                          </p>
                          <a
                            href="https://vilalali.github.io/vilal-ali/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-link-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        <a
                          href="https://vilalali.github.io/vilal-ali/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="assets/img/blog/blog3.png"
                            alt="blog-img"
                            className="blog-img"
                          />
                        </a>
                        <div className="blog-head">
                          <a
                            href="https://vilalali.github.io/vilal-ali/"
                            target="_blank"
                            rel="noopener noreferrer"
                            My Blog  style={{ textDecoration: "none" }}
                          >
                            <h3>
                              <strong>Form Example in Laravel 8</strong>
                            </h3>
                          </a>
                        </div>
                        <div className="blog-bottom">
                          <p>
                            Laravel 8 form example tutorial. In this post, i
                            will teach from starting on how to send form data on
                            controller and how to insert form data in database
                            using laravel 8. If you are trying to create form
                            and want to insert form data into database using
                            laravel 8 latest version. So this post will help you
                            to do this. Because in this post example, i will
                            create contact-list ...
                          </p>
                          <a
                            href="https://vilalali.github.io/vilal-ali/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-link-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ textAlign: "center" }}>
                      <a
                        href="https://vilalali.github.io/vilal-ali/"
                        target="newtab"
                        className="btn btn-warning"
                        style={{
                          width: "50%",
                          fontSize: "16px",
                          backgroundColor: "#efd236",
                          borderColor: "#efd236",
                          color: "black",
                        }}
                      >
                        More Blog
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* <!-- ================================ CONTACT ========================== --> */}

        <div id="contact">
          <div className="contact-content">
            <div className="text-grid">
              <div className="text-grid-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="main-title text-center wow fadeIn">
                        <h3>Contact Me</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          I'm always open to discussing product design work or
                          partnership opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-form-details wow fadeIn">
                <div className="container">
                  <div className="row contact-row">
                    <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-1 contact-col">
                      <h3>Write Your Message Here</h3>
                      <div className="contact-form">
                        <form
                          action="https://herokuapp.us6.list-manage.com/subscribe/post?u=870e1b447d1f93893227a9c52&amp;id=85d6c939a5"
                          method="post"
                          id="mc-embedded-subscribe-form contactForm"
                          name="mc-embedded-subscribe-form"
                          className="contact-form shake validate"
                          target="_blank"
                          data-toggle="validator"
                          novalidate
                        >
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="text"
                                name="FLNAME"
                                id="mce-FLNAME"
                                className="required form-control"
                                placeholder="Your Name"
                                required
                                data-error="Please enter your name"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="email"
                                className="email required form-control"
                                name="EMAIL"
                                id="mce-EMAIL"
                                placeholder="Your Email"
                                required
                                data-error="Please enter your email"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="phone"
                                name="PHONE"
                                className="phone form-control"
                                id="phone mce-PHONE"
                                placeholder="Your Phone"
                                required
                                data-error="Please enter your phone"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <textarea
                                id="message mce-MESSAGE"
                                rows="7"
                                placeholder="Your Massage"
                                name="MESSAGE"
                                className="required form-control"
                                required
                                data-error="Please enter your message"
                              ></textarea>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div id="mce-responses" class="clear">
                            <div
                              class="response"
                              id="mce-error-response"
                              style={{ display: "none" }}
                            ></div>
                            <div
                              class="response"
                              id="mce-success-response"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                          <div
                            style={{ position: "absolute", left: "-5000px" }}
                            aria-hidden="true"
                          >
                            <input
                              type="text"
                              name="b_870e1b447d1f93893227a9c52_85d6c939a5"
                              tabindex="-1"
                              value=""
                            />
                          </div>
                          <button
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="submit mc-embedded-subscribe"
                            className="btn btn-success"
                          >
                            Send Message
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
                          <div className="clearfix"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="row contact-info-row text-center wow fadeIn">
                    <div className="col-md-4 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".2s">
                        <i
                          className="fa fa-map-marker contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Address</h3>
                        <p>Hyderabad IIIT</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".4s">
                        <i
                          className="fa fa-envelope contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Email</h3>
                        <a
                          href="mailto:mail.belaal.ali@gmail.com"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          mail.belaal.ali@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-television contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Latest Portfolio</h3>
                        <a
                          href="https://vilalali.github.io/vilal-ali/"
                          target="_blank"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          https://vilalali.github.io/vilal-ali/
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid map-col">
                  <div class="col-md-12 col-sm-12 map-col">
                    <div class="google-maps">
                      <div class="map-wrap">
                        <iframe
                          title="google-maps"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7618.898940037569!2d78.38523512820622!3d17.444819901940025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ef279b0435%3A0x4fc41dfdb274c933!2sInternational%20Institute%20of%20Information%20Technology%20Hyderabad%20(IIIT-H)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                          width="100%"
                          height="450"
                          style={{ border: "0" }}
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Home;
