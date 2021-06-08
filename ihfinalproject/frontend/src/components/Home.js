import React from "react";
import volleynetdoubles from "../assets/volleynetdoubles.png";
import womansolohit from "../assets/womansolohit.png";

function Home(props) {
  return (
    <div className="py-5 text-center container">
      <div class="container-fluid">
        <div className="card-body">
          <h1 className="card-header">MAKE ME PRO</h1>
          FAMER'S STORY Great coaching is all about personal attention. The more
          personal the coach gets, the better the student becomes. But personal
          coaching is expensive and coaches can’t give their full personal
          attention to many trainees at the same time. Famer is an affordable
          personalized communication coaching platform designed to support
          coaches in sharing their knowledge and expertise at scale, yet on a
          personal level. Regularly using Famer encourages training beyond
          official class time and allows coaches to empower trainees with a
          constant presence of a mentor in their lives.
        </div>
      </div>
      <div class="container-fluid">
        <div className="row">
          <div className="col-lg-6  col-sm-12 card-body d-flex align-items-center">
            <div>
              <h3>Our Vision</h3>
              To empower coaches, teachers, and trainers to build personal,
              meaningful relationships with trainees at scale, thus maximizing
              their potential.
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="card text-left">
              <img src={volleynetdoubles} alt="silhoutte" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid row">
        <div className="row">
          <div className="col-lg-6  col-sm-12 card-body">
            <div className="card text-left">
              <img src={womansolohit} alt="silhoutte" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12  d-flex align-items-center">
            <div>
              <h3>Our Mission</h3>
              To empower coaches, teachers, and trainers to build personal,
              meaningful relationships with trainees at scale, thus maximizing
              their potential.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
