import { useEffect, useState } from "react"

let audio = new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav")
const Button = ({bpm}) => {
    
    const [playing, setPlaying] = useState(false)
    
    
    
    const change = () => {
        setPlaying(!playing)
    }
    
    const play = () => {
            audio.play()
        }

    useEffect(() => {
        
            let interval

            if(playing){
                play()
                interval = setInterval(play, (60 / bpm) * 1000)
            }    
            return () => clearInterval(interval)
        
        
    },[bpm, playing])

    return(
        <button onClick={() => change()}>{!playing ? "Play" : "Pause"}</button>
    )
}

export default Button;