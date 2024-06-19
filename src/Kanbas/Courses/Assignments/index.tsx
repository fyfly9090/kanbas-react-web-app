import AssignmentsControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { GiNotebook } from "react-icons/gi";
/* import Assignment01 from "./Assignment01"; */
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheck from "./GreenCheck";
/* import Assignment02 from "./Assignment02";
import Assignment03 from "./Assignment03"; */
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";


export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
      <div>
        <AssignmentsControls /><br /><br />
        <ul id="wd-assignments" className="list-group rounded-0">
          <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title wd-title p-3 ps-2 bg-gray">
              <BsGripVertical className="me-2 fs-3" />
              <IoMdArrowDropdown className="me-2 fs-3"/>
              <strong>ASSIGNMENTS</strong>
              <AssignmentsControlButtons />  
            </div>
            <ul className="wd-inassignments list-group rounded-0">
              {assignments
                 .filter((assignment: any) => assignment.course === cid)
                 .map(({_id, title, available_date, due_date}) => (
                <li className="wd-assignment list-group-item p-3 ps-1 border-left">
                 <div className="container-grid">                
                    <div className="col static-element"><BsGripVertical className="me-2 fs-3 centered-element" /></div>  
                    <div className="col static-element"><GiNotebook className="me-2 fs-3 text-success centered-element" /></div>
                    <div className="col static-element">
                      <span className="vertical-centered">
                        <Link key={_id} to={`/Kanbas/Courses/${cid}/Assignments/${_id}`} className="wd-assignment-link nounderline">
                        {title} </Link>
                        <div>
                          <span className="assignment-date d-flex">
                            <span className="text-danger space-ele-right">Multiple Modules</span>| 
                            <strong className="space-ele-left space-sm-right"> Not available until</strong> 
                            <span className="space-ele-right">{available_date}</span>|
                            <strong className="space-ele-left space-sm-right">Due</strong>
                            <span className="space-ele-right">{due_date}</span>| 
                            <span className="space-ele-left">100pts</span>
                          </span> 
                        </div> 
                      </span>
                    </div>  
                    <div className="col static-element"><GreenCheck /></div>
                    <div className="col static-element"><IoEllipsisVertical className="fs-4 centered-right" /></div>
                  </div>   
                </li>
              ))}
            

            </ul>  
          </li>
        </ul>
      </div>

    );
    
}