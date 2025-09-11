import "./Features.css";
import GradientButton from "../components/Features/GradientButton";
import Header from "../components/Header/Header";
function Features() {
    return(

        <div className="bg-black">
            <Header></Header>
            <div className="w-3/4 mx-auto mt-20">
                <h1 className="text-6xl mb-4 text-white"><span className="gradient_text">Everything</span> You Need</h1>
                <p className="text-white">All in one Platform to learn practice and compete</p>
            </div>
            <div className="mt-24 w-3/4 py-24 flex flex-col items-center space-y-16 mx-auto rounded-3xl border border-[#474747]">
                <div className="flex space-x-20">
                    <div className="my-auto">
                        <h1 className="text-white text-4xl mb-8">Feature Number One</h1>
                        <p className="text-white text-xl mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>Quia hic repudiandae obcaecati totam rerum. <br></br>Repellendus natus deserunt laudantium sequi aut aperiam.
                        </p>
                        <GradientButton text={"click"}></GradientButton>
                    </div>
                    <div className="">
                        <img src="../public/ChatGPT Image Sep 11, 2025, 01_12_28 AM.png" className="h-88 rounded-lg"></img>
                    </div>
                </div>
                <div className="flex space-x-20">
                    <div className="">
                        <img src="../public/ChatGPT Image Sep 11, 2025, 01_12_28 AM.png" className="h-88 rounded-lg"></img>
                    </div>
                    <div className="my-auto">
                        <h1 className="text-white text-4xl mb-8">Feature Number One</h1>
                        <p className="text-white text-xl mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>Quia hic repudiandae obcaecati totam rerum. <br></br>Repellendus natus deserunt laudantium sequi aut aperiam.
                        </p>
                        <GradientButton text={"click"}></GradientButton>
                    </div>
                </div>
                <div className="flex space-x-20">
                    <div className="my-auto">
                        <h1 className="text-white text-4xl mb-8">Feature Number One</h1>
                        <p className="text-white text-xl mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>Quia hic repudiandae obcaecati totam rerum. <br></br>Repellendus natus deserunt laudantium sequi aut aperiam.
                        </p>
                        <GradientButton text={"click"}></GradientButton>
                    </div>
                    <div className="">
                        <img src="../public/ChatGPT Image Sep 11, 2025, 01_12_28 AM.png" className="h-88 rounded-lg"></img>
                    </div>
                </div>
            </div>
            <h1>footer</h1>
        </div>
    )
}

export default Features;