
import { useRef } from 'react';


const MyComponent = () => {
  const myRef = useRef<HTMLElement | null>(null);
}

const pStyle =  {

    margin: "0",
    verticalalign: "middle",
    lineheight: "50px",
    display: "inlineblock",
}

const listStyle =  {
    color: "white",
    textdecoration: "none ",
    fontsize: "20px",
    margin: "0 18px",
    padding: "5px 20px",
    display: "inline-block",
    cursor: "pointer",
    borderradius: "4px",
}


const navStyle ={
    height: "50px",
}

export default function Nav() {
    return (
        <div style={navStyle}>

            <ul>
                <li style={listStyle}>Home</li>
                <li style={listStyle}>About Me</li>
                <li style={listStyle}>Experience</li>
                <li style={listStyle}>Resume</li>
            </ul>
         </div>
    )
}