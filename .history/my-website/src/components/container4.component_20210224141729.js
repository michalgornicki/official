import React from 'react';
import profile from '../profile.png';

const Container1 = () => {
  

    return(

        <div id="container1">
        <img className="profile-photo" src={profile} alt="profile" />
        <div className="profile-photo-fade"></div>
        
        <div className="text-wrapper">
        <h2 class="medium">MICHAŁ GÓRNICKI</h2>
        <h1 class="large">Web designer & frontend developer</h1>
        <h3 class="small">Since July 2019 I'm developing web projects and constantly learning new frontend skills. I'm looking forward for new challenges to work and grow. </h3>
        <h3 class="small more">[More about me.] </h3>
        </div>
        <a href="#container2"><div className="slide-down">SLIDE DOWN</div></a>

      </div>
        
    )

}

export default Container1;