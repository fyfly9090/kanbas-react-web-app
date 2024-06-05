import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap lowest-width">
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary-butt me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <div className="btn btn-lg me-1 float-front has-search decrease-padding">
        <CiSearch className="form-control-feedback"  />
        <input type="text" className="form-control" placeholder="Search..." />
      </div>        
    </div>  

  );
}  
  