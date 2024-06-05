import { LuCalendarDays } from "react-icons/lu";

export default function AssignmentEditor() {
  return (
    <div id="a2-css-styling-form">
      <div className="mb-3">
        <label htmlFor="input1" className="form-label">
          Assignment Name
        </label>
        <input className="form-control" id="input1" placeholder="A1"/>
        <label htmlFor="input1" className="form-label"/>
        <fieldset className="form-control hide-resize"> 
          <div className="pt-3">The assignment is <span className="text-danger">available online</span></div>
          <div className="py-3">Submit a link to the landing page of your Web application running on Netlify.</div>
          <div>The landing page should include the following:</div>
          <ul className="py-3 mb-0">
            <li> Your full name and section </li>
            <li> Links to each of the lab assignments</li>    
            <li> Link to the Kanbas application</li> 
            <li> Links to all relevant source code repositories</li> 
          </ul>
           The Kanabas application should include a link to navigate back to the landing page.
        </fieldset>  
      </div>
      <div className="mb-3 row">  
        <label htmlFor="points1" className="col-sm-4 col-form-label pt-0 label-element">Points</label>
        <div className="col-sm-8">
          <input id="points1" className="form-control hide-resize" type="number" value={100} />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-group" className="col-sm-4 col-form-label pt-0 label-element">Asginment Group</label>
        <div className="col-sm-8"> 
         <select id="wd-group" className="form-control form-select">
            <option value="QIZZE">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option selected>
                   ASSIGNMENTS</option>
            <option value="PROJECT">PROJECT</option>
         </select>
        </div>
      </div> 
      <div className="mb-3 row">
        <label htmlFor="wd-group" className="col-sm-4 col-form-label pt-0 label-element">Display Grade as</label>
        <div className="col-sm-8"> 
         <select id="wd-group" className="form-control form-select">
            <option value="EXACTGRADE">Exact Grade</option>
            <option selected>
                   Percentage</option>
         </select>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-group" className="col-sm-4 col-form-label pt-0 label-element">Submission Type</label>
        <div className="col-sm-8"> 
          <fieldset className="border p-3">
            <select id="wd-group" className="form-control form-select">
              <option value="PAPER">Hardcopy</option>
              <option selected>
                   Online</option>
            </select> 
            <legend className="col-form-label col-sm-2 w-auto py-3">
              <strong>Online Entry Options</strong>
            </legend>
            <div className="form-check pb-3">
              <input className="form-check-input" type="checkbox" id="r1"/>
              <label className="form-check-label" htmlFor="r1">
                Text Entry
              </label>
            </div> 
            <div className="form-check pb-3">
              <input className="form-check-input" type="checkbox" id="r1" checked/>
              <label className="form-check-label" htmlFor="r1">
                Website URL
              </label>
            </div> 
            <div className="form-check pb-3">
              <input className="form-check-input" type="checkbox" id="r1"/>
              <label className="form-check-label" htmlFor="r1">
                Media Recordings
              </label>
            </div>  
            <div className="form-check pb-3">
              <input className="form-check-input" type="checkbox" id="r1"/>
              <label className="form-check-label" htmlFor="r1">
                Student Annotation
              </label>
            </div> 
            <div className="form-check pb-4">
              <input className="form-check-input" type="checkbox" id="r1"/>
              <label className="form-check-label" htmlFor="r1">
                File Uploads
              </label>
            </div> 
         </fieldset>    
        </div>
      </div>
      <div className="mb-element row">
        <label htmlFor="wd-group" className="col-sm-4 col-form-label pt-0 label-element">Assign</label>
        <div className="col-sm-8">
          <fieldset className="border p-3">
            <div>
              <legend className="col-form-label col-sm-2 w-auto pt-2 pd-0 fw-bold">Assgin to</legend>
              <fieldset className ="border p-1">
                <button className ="button-style">
                  <span className="px-2">Everyone</span> 
                  <span className="ps-3 pe-1">x</span>
                </button>
              </fieldset>
            </div>
            <div className="pt-3">
              <label className="fw-bold pt-2" htmlFor="duedate">Due</label>
              <div className="input-group" id="duedate">
                <input type="text" className="form-control" value="2024-05-13 11:59PM"  />
                <span className="input-group-text"><LuCalendarDays /></span>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-form-label pe-1">
                <label className="fw-bold pt-2" htmlFor="startdate">Available from</label>
                <div className="input-group pe-2" id="startdate">
                  <input type="text" className="form-control" value="2024-05-06 12:00AM"  />
                  <span className="input-group-text"><LuCalendarDays /></span>
                </div>
              </div>
              <div className="col-sm-6 col-form-label ps-1"> 
                <label className="fw-bold pt-2" htmlFor="untildate">Until</label>
                <div className="input-group pe-0" id="untildate">
                  <input type="text" className="form-control"  />
                  <span className="input-group-text"><LuCalendarDays /></span>
                </div>
              </div>
            </div>
          </fieldset>       
        </div>
      </div>
      <div className="mb-3 tp-border text-nowrap">
        <button className="btn btn-danger float-end mt-2">Save</button>
        <button className="btn btn-light float-end mt-2 me-1">Cancel</button>
      </div>
    </div>
);}
