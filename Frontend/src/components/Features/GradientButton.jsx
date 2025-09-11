function GradientButton({text}){
    return(
        <button className={`font-bold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 px-12 py-2 rounded-xl`}>{text}</button>
    )
}

export default GradientButton;