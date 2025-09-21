import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
    <Header/>
      <div className="about-section">
        <div className="about-badge">About Us</div>

        <h1 className="about-heading">
          At CodeArena, we believe that coding should be fun, challenging, and
          collaborative.
        </h1>
        <p className="about-text">
          Our mission is to empower developers and teams to create custom coding
          contests, compete, and grow together through innovation and
          problem-solving.
        </p>

        <div className="about-tags">
          {[
            "Innovation",
            "Collaboration",
            "Coding Contests",
            "Smart Teams",
            "Scalability",
            "Automation",
            "Efficiency",
            "Quick Challenges",
            "Reliability",
          ].map((tag, i) => (
            <span key={i} className="about-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
