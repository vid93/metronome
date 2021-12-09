import { useEffect, useState } from "react"

let audio = new Audio("/Click1.mp3")
const Button = ({bpm}) => {

    
    const [playing, setPlaying] = useState(false)
    
        const play = () => {
            audio.play()
        }
        
        const change = () => {
            setPlaying(!playing)
        }
        
        useEffect(() => {
        let interval;
        if(playing){
            play();
            interval = setInterval(play, (60 / bpm) * 1000)
        }    

        return () => clearInterval(interval)

    },[playing, bpm])

    return(
        <button onClick={change}>{!playing ? "Start" : "Stop"}</button>
    )
}

export default Button;