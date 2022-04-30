import React from "react";
import "./UserProfile.css";

function UserProfile(props) {
  const isNotEmpty = props.userProfileProp;

  if (isNotEmpty) {
    const birthMonth = new Date(
      props.userProfileProp.dateOfBirth
    ).toLocaleString("en-US", { month: "short" });
    const birthDay = new Date(props.userProfileProp.dateOfBirth).toLocaleString(
      "en-US",
      { day: "2-digit" }
    );
    const birthYear = new Date(props.userProfileProp.dateOfBirth).getFullYear();

    const registerMonth = new Date(
      props.userProfileProp.registerDate
    ).toLocaleString("en-US", { month: "short" });
    const registerDay = new Date(
      props.userProfileProp.registerDate
    ).toLocaleString("en-US", { day: "2-digit" });
    const registerYear = new Date(
      props.userProfileProp.registerDate
    ).getFullYear();

    return (
      <div className="UserProfileOuterDiv">
        <div className="UserProfileInnerDivs">
          <div className="UserProfileFirstLine">
            ID: {props.userProfileProp.id}
          </div>
          <img src={props.userProfileProp.picture} alt={""} />
        </div>
        <div className="UserProfileInnerDivs">
          <div className="UserProfileFirstLine">Personal Information</div>
          <div>
            {props.userProfileProp.title +
              ". " +
              props.userProfileProp.firstName +
              " " +
              props.userProfileProp.lastName}
          </div>
          <div>Gender: {props.userProfileProp.gender}</div>
          <div>
            Date of birth: {birthMonth + " " + birthDay + " " + birthYear}
          </div>
          <div>
            Register date:
            {" "+ registerMonth + " " + registerDay + " " + registerYear}
          </div>
          <div className="UserProfileEmail">
            Email: {props.userProfileProp.email}
          </div>
          <div>Phone: {props.userProfileProp.phone}</div>
        </div>
        <div className="UserProfileInnerDivs">
          <div className="UserProfileFirstLine">Address</div>
          <div>State: {props.userProfileProp.location.state}</div>
          <div>Street: {props.userProfileProp.location.street}</div>
          <div>City: {props.userProfileProp.location.city}</div>
          <div>Country: {props.userProfileProp.location.country}</div>
          <div>Timezone: {props.userProfileProp.location.timezone}</div>
        </div>
      </div>
    );
  }
  return <div></div>;
}

export default UserProfile;
