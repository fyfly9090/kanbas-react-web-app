export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr/>
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr/>
            <div id="wd-dashboard-courses" className="row">
              <div className="row row-cols-1 row-cols-md-5 g-4">
                <div className="wd-dashboard-course col margin-element" style={{ width: "300px"}}>
                  <div className="card">
                    <img src="/images/reactjs.jpg"/>
                    <div className="card-body">
                      <a className="wd-dashboard-course-link"
                         href="#/Kanbas/Courses/1234/Home"
                         style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                        CS1234 React JS
                      </a>
                      <p className = "wd-dashboard-course-title card-text">
                        Full Stack software developer
                      </p>
                      <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                    </div>
                  </div>
                </div>
                <div className="wd-dashboard-course col margin-element" style={{ width: "300px"}}>
                  <div className="card">
                    <img src="/images/reactjs.jpg"/>
                    <div className="card-body">
                      <a className="wd-dashboard-course-link"
                         href="#/Kanbas/Courses/5001/Home"
                         style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                        CS5001 Python
                      </a>
                      <p className = "wd-dashboard-course-title card-text">
                        Intense Foundation of CS
                      </p>
                      <a href="#/Kanbas/Courses/5001/Home" className="btn btn-primary"> Go </a>
                    </div>
                  </div>
                </div>
                <div className="wd-dashboard-course col margin-element" style={{ width: "300px"}}>
                  <div className="card">
                    <img src="/images/reactjs.jpg"/>
                    <div className="card-body">
                      <a className="wd-dashboard-course-link"
                         href="#/Kanbas/Courses/5200/Home"
                         style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                        CS5200 SQL
                      </a>
                      <p className = "wd-dashboard-course-title card-text">
                        Database Management
                      </p>
                      <a href="#/Kanbas/Courses/5200/Home" className="btn btn-primary"> Go </a>
                    </div>
                  </div>
                </div>
                <div className="wd-dashboard-course col margin-element" style={{ width: "300px"}}>
                  <div className="card">
                    <img src="/images/reactjs.jpg"/>
                    <div className="card-body">
                      <a className="wd-dashboard-course-link"
                         href="#/Kanbas/Courses/5004/Home"
                         style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                        CS5004 Java
                      </a>
                      <p className = "wd-dashboard-course-title card-text">
                        Object-Oriented programming
                      </p>
                      <a href="#/Kanbas/Courses/5004/Home" className="btn btn-primary"> Go </a>
                    </div>
                  </div>
                </div>
                <div className="wd-dashboard-course col margin-element" style={{ width: "300px"}}>
                  <div className="card">
                    <img src="/images/reactjs.jpg"/>
                    <div className="card-body">
                      <a className="wd-dashboard-course-link"
                         href="#/Kanbas/Courses/5004/Home"
                         style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                        CS5004 Mathmetics
                      </a>
                      <p className = "wd-dashboard-course-title card-text">
                        Discrete Structure
                      </p>
                      <a href="#/Kanbas/Courses/5004/Home" className="btn btn-primary"> Go </a>
                    </div>
                  </div>
                </div>
                <div className="wd-dashboard-course col margin-element" style={{ width: "300px"}}>
                  <div className="card">
                    <img src="/images/reactjs.jpg"/>
                    <div className="card-body">
                      <a className="wd-dashboard-course-link"
                         href="#/Kanbas/Courses/5800/Home"
                         style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                        CS5800 Algorithm
                      </a>
                      <p className = "wd-dashboard-course-title card-text">
                        Algorithm
                      </p>
                      <a href="#/Kanbas/Courses/5800/Home" className="btn btn-primary"> Go </a>
                    </div>
                  </div>
                </div>
                <div className="wd-dashboard-course col margin-element" style={{ width: "300px"}}>
                  <div className="card">
                    <img src="/images/reactjs.jpg"/>
                    <div className="card-body">
                      <a className="wd-dashboard-course-link"
                         href="#/Kanbas/Courses/6620/Home"
                         style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                        CS6620 Amazon Web Services
                      </a>
                      <p className = "wd-dashboard-course-title card-text">
                        Basics of Cloud Computing
                      </p>
                      <a href="#/Kanbas/Courses/6620/Home" className="btn btn-primary"> Go </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}

