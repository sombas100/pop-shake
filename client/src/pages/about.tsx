import "./About.css";
import { useRef } from "react";

const About = () => {
  const purposeRef = useRef(null);
  const historyRef = useRef(null);
  const diversityRef = useRef(null);
  const communityRef = useRef(null);

  const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <article className="container">
      <aside className="article-navbar">
        <h2>In this Article</h2>
        <ul>
          <li onClick={() => scrollToSection(purposeRef)}>Our Purpose</li>
          <li onClick={() => scrollToSection(historyRef)}>Our History</li>
          <li onClick={() => scrollToSection(diversityRef)}>Our Diversity</li>
          <li onClick={() => scrollToSection(communityRef)}>Our Community</li>
        </ul>
      </aside>
      <div className="article-content">
        <h1 className="article-title">About Us</h1>
        <h2 ref={purposeRef} className="article-our">
          Our Purpose
        </h2>
        <p className="article-description">
          Welcome to Popshake, your go-to destination for discovering new and
          exciting recipes with ease. Our mission is to provide users with quick
          access to a wide variety of recipes, ensuring that anyone can find the
          perfect dish for any occasion. Whether you're a seasoned chef or just
          starting in the kitchen, our platform makes it simple to explore,
          save, and share your favorite recipes.
        </p>
        <h2 ref={historyRef} className="article-our">
          Our History
        </h2>
        <p className="article-description">
          Founded in 2024 by Corey, Popshake was born out of a passion for
          cooking and a desire to make culinary exploration accessible to
          everyone. Corey recognized the need for a comprehensive, user-friendly
          recipe site that could serve as a one-stop hub for food enthusiasts of
          all levels. From humble beginnings, we have grown into a vibrant
          community of food lovers who share a love for delicious and diverse
          cuisine.
        </p>
        <h2 ref={diversityRef} className="article-our">
          Our Diversity
        </h2>
        <p className="article-description">
          At Popshake, we celebrate the rich tapestry of global cuisines. Our
          extensive recipe collection includes something for everyone,
          regardless of dietary preferences or restrictions.
          <li>
            <span>Vegan:</span> Discover plant-based recipes that are both
            nutritious and delicious. From hearty mains to delectable desserts,
            our vegan collection is sure to inspire.
          </li>
          <li>
            <span>Vegetarian:</span> Enjoy a variety of vegetarian dishes that
            highlight the natural flavors of fresh produce, grains, and dairy.
            Perfect for those who prefer a meat-free diet.
          </li>
          <li>
            <span>Global Cuisines:</span> Explore the culinary traditions of
            different countries with our international recipes. From Italian
            pasta to Thai curries, Mexican tacos to Japanese sushi, our platform
            offers a taste of the world at your fingertips.
          </li>
          We believe that food is a universal language that brings people
          together. Our diverse recipe offerings ensure that everyone can find
          dishes that resonate with their tastes and dietary needs.
        </p>
        <h2 ref={communityRef} className="article-our">
          Join Our Community
        </h2>
        <p className="article-description">
          We invite you to join our growing community of food enthusiasts. Share
          your favorite recipes, discover new ones, and connect with fellow
          cooks who share your passion for great food. At Popshake, we are
          committed to making your culinary journey as enjoyable and rewarding
          as possible. Thank you for being a part of our story. Let's cook,
          share, and savor the wonderful world of food together!
        </p>
      </div>
    </article>
  );
};

export default About;
