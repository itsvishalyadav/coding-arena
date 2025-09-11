function GradientButton({text}){
    return(
        <button className={`font-bold text-white bg-gradient-to-r from-[#1c59fb] via-[#d614e6] to-[#f1041c] px-12 py-2 rounded-xl`}>{text}</button>
    )
}

export default GradientButton;