import { LuCalendarDays } from "react-icons/lu";
import * as db from "../../Database";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ListItems from "./ListItems";


export default function AssignmentEditor() {
  const {cid, id} = useParams();
  const assignments = db.assignments;
  /* console.log(assignments); */
  
  return (
    <div id="a2-css-styling-form">
      {assignments.
        filter((assignment: any) => assignment._id === id)
        .map((assignment: any) => (
        <>
          <div className="mb-3">
            <label htmlFor="input1" className="form-label">
              Assignment Name
            </label>
            <input className="form-control" id="input1" value={assignment.title} />
            <label htmlFor="input1" className="form-label" />
            <fieldset className="form-control hide-resize">
              <div className="pt-3">{assignment.description.start} <span className="text-danger">{assignment.description.method}</span></div>
              <div className="py-3">{assignment.description.submission}</div>
              <div>{assignment.description.landing_page.first}</div>
              <ul className="py-3 mb-0">
                <ListItems list = {assignment.description.items}/>
               {/*  <li> {assignment.description.items.first} </li>
                <li> {assignment.description.items.second}</li>
                <li> {assignment.description.items.third}</li>
                <li> {assignment.description.items.fourth}</li> */}
              </ul>
              The Kanabas application should include a link to navigate back to the landing page.
            </fieldset> 
          </div>
          <div className="mb-3 row">  
            <label htmlFor="points1" className="col-sm-4 col-form-label pt-0 label-element">Points</label>
            <div className="col-sm-8">
            <input id="points1" className="form-control hide-resize" type="number" value={assignment.points} />
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
                    <input type="text" className="form-control" value={assignment.due}  />
                    <span className="input-group-text"><LuCalendarDays /></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-form-label pe-1">
                    <label className="fw-bold pt-2" htmlFor="startdate">Available from</label>
                      <div className="input-group pe-2" id="startdate">
                        <input type="text" className="form-control" value={assignment.available}  />
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
           <Link key={id} to={`/Kanbas/Courses/${cid}/Assignments`} className="wd-assignment-link nounderline">
              <button className="btn btn-danger float-end mt-2">Save</button>           
            </Link>
            <Link key={id} to={`/Kanbas/Courses/${cid}/Assignments`} className="wd-assignment-link nounderline">
              <button className="btn btn-light float-end mt-2 me-1">Cancel</button>
           </Link>
          </div>
        </>  
      ))}
    </div>
);}
