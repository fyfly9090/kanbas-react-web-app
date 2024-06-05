import GradesControls from "./GradesControls";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { BiExit } from "react-icons/bi";

export default function Grages() {
    return (
        <div id="grades-page">
          <ul className="list-group rounded-0">
            <li className="list-group-item border-0"><GradesControls /></li>
            <li className="list-group-item border-0 pt-0">
              <div className="row ">
                <div className="col-sm-8 pe-1">
                  <label htmlFor="student-name" className="form-label fw-bold font-size-md text-nowrap">Student Names</label>
                  <div className="input-group" id="student-name">
                    <span className="input-group-text transparent-element border-right-0"><PiMagnifyingGlassLight /></span>
                    <input className="form-control input-width" placeholder="Search Students"/>
                    <span className="input-group-text transparent-element border-left-0">
                    <IoIosArrowDown className="position-relative mx-2 " style={{ bottom: "1px" }}/>
                    </span>
                  </div>              
                </div>
                <div className="col-sm-8 pr-1">
                  <label htmlFor="student-name" className="form-label fw-bold font-size-md text-nowrap">Assignment Names</label>
                  <div className="input-group" id="student-name">
                    <span className="input-group-text transparent-element border-right-0"><PiMagnifyingGlassLight /></span>
                    <input className="form-control input-width" placeholder="Search Assingments"/>
                    <span className="input-group-text transparent-element border-left-0">
                    <IoIosArrowDown className="position-relative mx-2 " style={{ bottom: "1px" }}/>
                    </span>
                  </div>              
                </div>            
              </div> 
            </li>
            <li className="list-group-item border-0 pt-0">
              <div className="font-size-large py-2 btn-apply-style">
                <FiFilter className="position-relative mx-1 font-size-larger" style={{ bottom: "1px" }}/>
                Apply Filters
              </div>
            </li>
            <li className="list-group-item border-0 pt-0">
              <div id="grade-table" className="table-responsive">
                <table className="table table-bordered list-table-border ">
                  <thead>
                    <tr>
                      <th className="align-left bg-color">Student Name</th>
                      <th className="table-content bg-color"><div>A1 SETUP</div><div>Out of 100</div></th>
                      <th className="table-content bg-color"><div>A2 HTML</div><div>Out of 100</div></th>
                      <th className="table-content bg-color"><div>A3 CSS</div><div>Out of 100</div></th>
                      <th className="table-content bg-color"><div>A4 BOOTSTRAP</div><div>Out of 100</div></th>
                      <th className="table-content bg-color"><div>A5 JavaScript</div><div>Out of 100</div></th>
                      <th className="table-content bg-color"><div>A6 UIState</div><div>Out of 100</div></th>
                      <th className="table-content bg-color"><div>Q1 </div><div>Out of 100</div></th>
                      <th className="table-content bg-color"><div>Q2 </div><div>Out of 100</div></th>
                      <th className="table-content bg-color"><div>Q3 </div><div>Out of 100</div></th>
                      <th className="table-content bg-color"><div>Q4</div><div>Out of 100</div></th>
                      <th className="table-content bg-color"><div>Q5</div><div>Out of 100</div></th>
                      <th className="table-content bg-color"><div>Q6</div><div>Out of 100</div></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="align-left th-style">Jane Adams</th>
                      <th className="table-content">100%</th> <th className="table-content">96.67%</th>
                      <th className="table-content">92.18%</th> <th className="table-content">66.22%</th>
                      <th className="table-content">98%</th> <th className="table-content">99%</th>
                      <th className="table-content">90%</th> <th className="table-content">85%</th>
                      <th className="table-content">66.66%</th> <th className="table-content">90%</th>
                      <th className="table-content">80%</th> <th className="table-content">100%</th>
                    </tr> 
                    <tr>
                      <th className="align-left th-style bg-color">Christina Allen</th>
                      <th className="table-content bg-color">100%</th> <th className="table-content bg-color">100%</th>
                      <th className="table-content bg-color">100%</th> <th className="table-content bg-color">100%</th>
                      <th className="table-content bg-color">95%</th> <th className="table-content bg-color">98.8%</th>
                      <th className="table-content bg-color">100%</th> <th className="table-content bg-color">80%</th>
                      <th className="table-content bg-color">70%</th> <th className="table-content bg-color">100%</th>
                      <th className="table-content bg-color">83.3%</th> <th className="table-content bg-color">100%</th>
                    </tr>
                    <tr>
                      <th className="align-left th-style">Samreen Ansari</th>
                      <th className="table-content">100%</th> <th className="table-content">100%</th>
                      <th className="table-content">100%</th> <th className="table-content">100%</th>
                      <th className="table-content">96.67%</th> <th className="table-content">99%</th>
                      <th className="table-content">88%</th> <th className="table-content">85%</th>
                      <th className="table-content">83%</th> <th className="table-content">93%</th>
                      <th className="table-content">90%</th> <th className="table-content">82%</th>
                    </tr>
                    <tr>
                      <th className="align-left th-style bg-color">Han Bao</th>
                      <th className="table-content bg-color">100%</th> <th className="table-content bg-color">100%</th>
                      <th className="table-content py-0 ps-2 pe-0">
                        <input type="text" className="grades-edit" value="88.03%"/>
                        <BiExit className="mx-0 exit-btn-style"/>
                      </th> 
                      <th className="table-content bg-color">98.99%</th>
                      <th className="table-content bg-color">100%</th> <th className="table-content bg-color">98.8%</th>
                      <th className="table-content bg-color">99%</th> <th className="table-content bg-color">80.67%</th>
                      <th className="table-content bg-color">84%</th> <th className="table-content bg-color">99.98%</th>
                      <th className="table-content bg-color">97%</th> <th className="table-content bg-color">100%</th>
                    </tr>
                    <tr>
                      <th className="align-left th-style">Mahi Sai Srinivas Bobbili</th>
                      <th className="table-content">100%</th> <th className="table-content">96.67%</th>
                      <th className="table-content">98.37%</th> <th className="table-content">100%</th>
                      <th className="table-content">97.67%</th> <th className="table-content">95%</th>
                      <th className="table-content">80%</th> <th className="table-content">100%</th>
                      <th className="table-content">93%</th> <th className="table-content">68.9%</th>
                      <th className="table-content">83%</th> <th className="table-content">88.7%</th>
                    </tr>
                    <tr>
                      <th className="align-left th-style bg-color">Siran Cao</th>
                      <th className="table-content bg-color">100%</th> <th className="table-content bg-color">100%</th>
                      <th className="table-content bg-color">100%</th> <th className="table-content bg-color">100%</th>
                      <th className="table-content bg-color">100%</th> <th className="table-content bg-color">98.8%</th>
                      <th className="table-content bg-color">91%</th> <th className="table-content bg-color">99%</th>
                      <th className="table-content bg-color">86%</th> <th className="table-content bg-color">94%</th>
                      <th className="table-content bg-color">89%</th> <th className="table-content bg-color">97%</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>

        </div>
    );
}