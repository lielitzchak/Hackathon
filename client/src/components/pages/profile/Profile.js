import { UserContext } from "../../../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import Button from "@mui/material/Button";

import "./Profile.css";
export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [profileInfoUpdate, SetProfileInfoUpdate] = useState({ ...user });
  const [toggleEdit, setToggleEdit] = useState(false);

  const OnChangedProfileInfo = () => {
    console.log("try");
    // setToggleEdit(!toggleEdit);
  };

  if (!user.firstName) {
    return "Loading...";
  }

  return (
    <div className="profileUser">
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="toFlex">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="Cover pic is not available"
              />
            </div>
            <div className="profileInfo">
              <h1 className="profileInfoName">
                full name: {user.firstName + " " + user.lastName}
                {/* {"israel israeli"} */}
              </h1>
              <h1 className="profileInfoName">
                email: {user.email}
                {/* israel@gmail.com */}
              </h1>
            </div>
          </div>

          <div className="profileRightBottom">
            <Button
              onClick={OnChangedProfileInfo}
              variant="contained"
              disableElevation
            >
              update profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
