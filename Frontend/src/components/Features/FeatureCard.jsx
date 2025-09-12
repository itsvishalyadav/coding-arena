import GradientButton from "./GradientButton";
import { motion } from "framer-motion";

export default function FeatureCard({ features, left = false }) {
  return (
    <div className="flex py-25 justify-around items-center">
      {!left ? (
        <>
          <motion.div
            className="my-auto w-45/100"
            initial={{ x: 100,y:0, opacity: 0 }}
            whileInView={{ x: 0,y:0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 1 }}
          >
            <h1 className="text-white text-4xl mb-8">{features.heading}</h1>
            <p className="text-[#929292ff] text-xl mb-8">{features.text}</p>
            <GradientButton text={features.btnText} />
          </motion.div>

          <motion.div
            initial={{
              width: 0,
              height: 0,
            }}
            whileInView={{
              //jab element view me aayega tab ye apply hogi
              borderRadius: "20px",
              width: 600,
              height: 350,
              boxShadow:
                "0px 0px 20px #1c59fb, 0px 0px 50px #d614e6, 0px 0px 80px #f1041c",
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 1 }} //jab 100 percent view dikhega tab trigger hoga
            className="flex items-center justify-center cursor-pointer bg-black overflow-hidden"
          >
            <img src={features.imgSrc} className="rounded-lg" />
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial={{
              width: 0,
              height: 0,
            }}
            whileInView={{
              //jab element view me aayega tab ye apply hogi
              borderRadius: "20px",
              width: 600,
              height: 350,
              boxShadow:
                "0px 0px 20px #1c59fb, 0px 0px 50px #d614e6, 0px 0px 80px #f1041c",
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 1 }} //jab 100 percent view dikhega tab trigger hoga
            className="flex items-center justify-center cursor-pointer bg-black overflow-hidden"
          >
            <img src={features.imgSrc} className="rounded-lg" />
          </motion.div>
          <motion.div
            className="my-auto w-45/100"
            initial={{ x: -100,y:0, opacity: 0 }}
            whileInView={{ x: 0,y:0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 1 }}
          >
            <h1 className="text-white text-4xl mb-8">{features.heading}</h1>
            <p className="text-[#929292ff] text-xl mb-8">{features.text}</p>
            <GradientButton text={features.btnText} />
          </motion.div>
        </>
      )}
    </div>
  );
}
