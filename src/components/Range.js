// import { useState } from "react";

const Range = ({bpm, setBPM}) => {


    const bpmStatus = (e) => {
        setBPM(e.target.value)
    }

    return(
        <div>
            <div>{bpm} BPM</div>
            <input type="range" min="40" max="200" onChange={bpmStatus}/>
        </div>
    )
}
export default Range;