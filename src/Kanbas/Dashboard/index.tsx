import React from 'react';

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr/>
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr/>
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                  <img src="/images/reactjs.jpg" width={200} />
                  <div>
                    <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/1234/Home">
                        CS1234 React JS
                    </a>
                    <p className = "wd-dashboard-course-title">
                        Full Stack software developer
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                  </div>
                </div>
                <div className="wd-dashboard-course">
                  <img src="/images/reactjs.jpg" width={200} />
                  <div>
                    <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5001/Home">
                        CS5001 Python
                    </a>
                    <p className = "wd-dashboard-course-title">
                        Intense Foundation of CS
                    </p>
                    <a href="#/Kanbas/Courses/5001/Home"> Go </a>
                  </div>
                </div>
                <div className="wd-dashboard-course">
                  <img src="/images/reactjs.jpg" width={200} />
                  <div>
                    <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5200/Home">
                        CS5200 SQL
                    </a>
                    <p className = "wd-dashboard-course-title">
                        Database Management
                    </p>
                    <a href="#/Kanbas/Courses/5200/Home"> Go </a>
                  </div>
                </div>
                <div className="wd-dashboard-course">
                  <img src="/images/reactjs.jpg" width={200} />
                  <div>
                    <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5004/Home">
                        CS5004 Java
                    </a>
                    <p className = "wd-dashboard-course-title">
                        Object-Oriented Programing
                    </p>
                    <a href="#/Kanbas/Courses/5004/Home"> Go </a>
                  </div>
                </div>
                <div className="wd-dashboard-course">
                  <img src="/images/reactjs.jpg" width={200} />
                  <div>
                    <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5002/Home">
                        CS5002 Mathmatics
                    </a>
                    <p className = "wd-dashboard-course-title">
                        Discrete Structures
                    </p>
                    <a href="#/Kanbas/Courses/5002/Home"> Go </a>
                  </div>
                </div>
                <div className="wd-dashboard-course">
                  <img src="/images/reactjs.jpg" width={200} />
                  <div>
                    <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5800/Home">
                        CS5800 Algorithm
                    </a>
                    <p className = "wd-dashboard-course-title">
                        Algorithm
                    </p>
                    <a href="#/Kanbas/Courses/5800/Home"> Go </a>
                  </div>
                </div>
                <div className="wd-dashboard-course">
                  <img src="/images/reactjs.jpg" width={200} />
                  <div>
                    <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/6620/Home">
                        CS6620 Amazon Web Service
                    </a>
                    <p className = "wd-dashboard-course-title">
                        Fudamentals Cloud Computing
                    </p>
                    <a href="#/Kanbas/Courses/6620/Home"> Go </a>
                  </div>
                </div>
            </div>
        </div>
    )
}

