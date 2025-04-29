import React from "react";

const ChallengingStep = ({icon, heading, content}) => {
    return (    
        <div>
            <img src={icon} alt="" className="mb-10 max-w-[78px]" />
            <h3 className="font-bold text-2xl mb-[8px]">{heading}</h3>
            <p className="text-base">{content}</p>
        </div>
    )   
}
export default ChallengingStep;