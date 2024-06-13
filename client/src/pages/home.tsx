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
                Become confident in your cooking skills by following our wide
                range of recipes!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="info-container">
        <div className="info-content">
          <div className="info-item">
            <h2>Fall in love with the kitchen</h2>
            <p>Discover new and exciting recipes to try</p>
            <img src="cuisine1.jpg" alt="cuisine" />
          </div>
          <div className="info-item">
            <h2>Completely free</h2>
            <img src="cuisine2.jpg" alt="cuisine" />
            <p>Quick access with no need to signup</p>
          </div>
          <div className="info-item">
            <h2>Join the community</h2>
            <p>Let us know how each dish turned out!</p>
            <img src="cuisine3.jpg" alt="cuisine" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
