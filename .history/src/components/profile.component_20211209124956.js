import React from "react";
import profile from "../profile.png";
import scroll from "../scroll.png";


const Profile = () => {
  return (
    <div id="container1">
      <div className="photo-wrapper">
      <img className="profile-photo" src={profile} alt="profile" />
      <div className="profile-photo-fade"></div>
      </div>
      <div className="text-wrapper">
        <h2 className="medium">MICHAŁ GÓRNICKI</h2>
        <h1 className="large">Web designer & Front-end developer</h1>
        <h3 className="small">
          Since July 2019 I'm developing web projects and constantly learning
          new frontend skills. I'm looking forward for new challenges to work
          and grow.{" "}
        </h3>
        <a href="https://drive.google.com/file/d/1kun3R3xhS3WsjzI7LtvRrmvGp_tlv28g/view?usp=sharing" download><h3 className="small more">Check my CV here. </h3></a>
      </div>

      <a href="#header-projects"><img className="scroll" src={scroll} alt="" /></a>


    </div>
  );
};

export default Profile;
