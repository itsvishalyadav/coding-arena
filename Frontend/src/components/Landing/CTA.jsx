import { useNavigate } from "react-router-dom";
import "./CTA.css";

export default function CTA() {
  const navigate=useNavigate();
  return (
    <section className="cta-section">
      <h2 className="cta-heading">
        Ready to Elevate Your Digital <br /> Success?
      </h2>

      <button className="cta-button" onClick={()=>{navigate("/signup")}}>Get Started</button>
    </section>
  );
}
