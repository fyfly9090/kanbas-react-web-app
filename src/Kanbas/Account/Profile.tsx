import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./accountrReducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
    } catch (err: any) {
      navigate("/Kanbas/Account/Signin");
    }

  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => { fetchProfile(); }, []);
  return (
    <div className="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div className="aligh-left">
          <div>
            <input className="wd-username profile-style" value={profile.username}
                 onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
          </div>
          <div>
            <input className="wd-password profile-style" value={profile.password}
                 onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
          </div>
          <div>
            <input className="wd-firstname profile-style" value={profile.firstName}
                 onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
          </div>
          <div>
            <input className="wd-lastname profile-style" value={profile.lastName}
                 onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>
          </div>
          <div>
            <input className="wd-dob profile-style" value={profile.dob}
                 onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
          </div>
          <div>
            <input className="wd-email profile-style" value={profile.email}
                 onChange={(e) => setProfile({ ...profile, email: e.target.value })}/>
          </div>
          <select className="wd-role profile-style" onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          <div>
          <button onClick={signout} className="wd-signout-btn btn btn-danger width-style">
            Sign out
          </button>
          </div>
        </div>
      )}
    </div>
  );
}
