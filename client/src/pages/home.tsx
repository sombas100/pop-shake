// src/Home.tsx
import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <>
      <section>
        <div
          className="banner"
          style={{
            backgroundImage: "url(/recipebanner.jpg)",
            height: "40vh",
            marginTop: "30px",
          }}
        ></div>
      </section>
      <section>
        <div className="icons-container">
          <div className="icon-with-quote">
            <img
              className="detail-icons"
              src="/cookingicon.png"
              alt="Cooking Icon"
            />
            <p className="quote">"Cooking is an art"</p>
          </div>
          <div className="icon-with-quote">
            <img className="detail-icons" src="/appicon.png" alt="App Icon" />
            <p className="quote">"Apps make life easier"</p>
          </div>
          <div className="icon-with-quote">
            <img className="detail-icons" src="/bookicon.png" alt="Book Icon" />
            <p className="quote">"Knowledge is power"</p>
          </div>
          <div className="icon-with-quote">
            <img
              style={{ marginTop: "17px" }}
              className="detail-icons"
              src="/fireicon.png"
              alt="Fire Icon"
            />
            <p style={{ paddingTop: "20px" }} className="quote">
              "Fire up your passion for cooking"
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="motivation-container">
          <div className="motivation-description">
            <img
              className="motivation-image"
              src="/pretzalcake.jpg"
              alt="pretzal cake"
            />
            <div className="overlay-box">
              <h2 className="overlay-title">Improve your skills</h2>
              <p className="overlay-text">
                Become confident in your cooking skills by following our range
                of recipes!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
