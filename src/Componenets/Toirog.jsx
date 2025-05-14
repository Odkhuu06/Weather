export const Toirog = () => {
    return (
        <div className="relative inset-0 z-3 flex items-center justify-center">
            <div className="absolute border border-gray-300 rounded-full h-[140px] w-[140px]"></div>
            <div className="absolute border border-gray-300 rounded-full h-[340px] w-[340px]"></div>
            <div className="absolute border border-gray-300 rounded-full h-[540px] w-[540px]"></div>
            <div className="absolute border border-gray-300 rounded-full h-[940px] w-[940px]"></div>
            <div className="flex items-center justify-center w-[140px] h-[140px] bg-[#f3f4f6] rounded-full ">
                <div className="relative">
                    <div className="absolute -top-[114px] left-[47px] w-10 h-14 bg-[#F3F4F6]"></div>
                    <div className="absolute -top-[117px] left-[48px] w-20 h-16 bg-[#0F141E] rounded-bl-full"></div>
                </div>
                <div className="flex items-center justify-center gap-[10px]">
                    <span>
                        <img src="./logo1.png" alt="neg"/>
                    </span>
                    <span>
                        <img src="./logo2.png" alt="hoer"/>
                    </span>
                </div>
                <div className="relative">
                    <div className="absolute top-[55px] right-[10px] w-10 h-14 bg-[#f3f4f6]"></div>
                    <div className="absolute top-[53.5px] right-[-30.5px] w-20 h-16 bg-[#0f141e] rounded-tl-full"></div>
                </div>
            </div>
        </div>
    )
}