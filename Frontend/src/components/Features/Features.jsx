import FeatureCard from "./FeatureCard";
import FeatureTagline from "./FeatureTagline";
function Features() {
  const featureData = [
    {
      heading: "Smart Code Editor",
      text: "Experience coding like never before with our intelligent editor featuring syntax highlighting, auto-completion, and real-time error detection across 15+ programming languages.",
      btnText: "click",
      imgSrc: "../public/ChatGPT Image Sep 11, 2025, 01_12_28 AM.png",
    },
    {
      heading: "Instant Code Execution",
      text: "Run and test your code instantly with our lightning-fast judge system. Get immediate feedback with detailed test case results and performance metrics.",
      btnText: "click",
      imgSrc: "../public/ChatGPT Image Sep 11, 2025, 01_12_28 AM.png",
    },
    {
      heading: "Live Competitions",
      text: "Join thrilling coding contests with developers worldwide. Compete in real-time, climb leaderboards, and win exciting prizes and recognition.",
      btnText: "click",
      imgSrc: "../public/ChatGPT Image Sep 11, 2025, 01_12_28 AM.png",
    },
    {
      heading: "Code Collaboration",
      text: "Team up with friends for pair programming sessions. Share code, debug together, and solve problems collaboratively in real-time.",
      btnText: "click",
      imgSrc: "../public/ChatGPT Image Sep 11, 2025, 01_12_28 AM.png",
    },
    {
      heading: "Performance Analytics",
      text: "Track your progress with detailed insights. View solving patterns, time complexity analysis, and personalized improvement recommendations.",
      btnText: "click",
      imgSrc: "../public/ChatGPT Image Sep 11, 2025, 01_12_28 AM.png",
    },
    {
      heading: "Custom Contests",
      text: "Create private competitions for your team, class, or organization. Set custom problems, timing, and invite participants.",
      btnText: "click",
      imgSrc: "../public/ChatGPT Image Sep 11, 2025, 01_12_28 AM.png",
    },
    {
      heading: "Interview Simulator",
      text: "Prepare for technical interviews with our mock interview feature. Practice with real company questions and get instant feedback.",
      btnText: "click",
      imgSrc: "../public/ChatGPT Image Sep 11, 2025, 01_12_28 AM.png",
    },
  ];
  return (
    <div className="mx-25 mt-40 font-[sans-serif]">
      <FeatureTagline />
      <div className="mt-15 flex flex-col items-center space-y-16">
        <FeatureCard features={featureData[0]} />
        <FeatureCard features={featureData[1]} left={true} />
        <FeatureCard features={featureData[2]} />
        <FeatureCard features={featureData[3]} left={true} />
        <FeatureCard features={featureData[4]} />
        <FeatureCard features={featureData[5]} left={true} />
        <FeatureCard features={featureData[6]} />
      </div>
    </div>
  );
}

export default Features;
