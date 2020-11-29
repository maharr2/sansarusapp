import React, { Component } from "react";
import '../App.css';
import sansarusLogo from '../images/sansarus-logo.png';
import reactLogo from '../images/react-logo.png';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2> Sansarus is a consulting company, committed to connecting highly proficient technology professionals and clients in various industries.</h2>
  <p className="plus">..</p>
<a target="_blank" href="https://www.sansarus.com">
          <img src={sansarusLogo} className="sansarus-logo" alt="sansarus-logo" />
        </a>
<h4>Sansarus is dedicated to deliver business value to our clients.</h4>
      </div>
    );
  }
}

export default About;
