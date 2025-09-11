import FeatureCard from "./FeatureCard";
import FeatureTagline from "./FeatureTagline";
function Features() {
  return (
    <div className="mx-25 mt-40 font-[sans-serif]">
      <FeatureTagline />
      <div className="mt-15 flex flex-col items-center space-y-16">
        <FeatureCard
          heading={"Feature Number One"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia hic repudiandae obcaecati totam rerum. Repellendusnatus deserunt laudantium sequi aut aperiam."
          }
          btnText={"click"}
          imgSrc={"../public/ChatGPT Image Sep 11, 2025, 01_12_28 AM.png"}
        />
        <FeatureCard
          heading={"Feature Number One"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia hic repudiandae obcaecati totam rerum. Repellendusnatus deserunt laudantium sequi aut aperiam."
          }
          btnText={"click"}
          imgSrc={"../public/ChatGPT Image Sep 11, 2025, 01_12_28 AM.png"}
        />
        <FeatureCard
          heading={"Feature Number One"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia hic repudiandae obcaecati totam rerum. Repellendusnatus deserunt laudantium sequi aut aperiam."
          }
          btnText={"click"}
          imgSrc={"../public/ChatGPT Image Sep 11, 2025, 01_12_28 AM.png"}
        />
      </div>
    </div>
  );
}

export default Features;
