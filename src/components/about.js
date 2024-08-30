import Photos from './photos.js';

const aboutStyle = {
    color: "white",
    background: "#141414",
    width: "95%",
    margin: "0 auto",
    borderRadius: "0 0 10px 10px",
    minHeight: "100vh",
    marginBottom: "50px",
}

const h1 = {
    fontSize: "100px",
    textAlign:  "left",
    margin: "0px",

    paddingLeft: "25px",
    width: "45%",
}

const p = {
    width: "100",
}
const container = {
    width: "45%",
    display: "inline-block",
    verticalAlign: "top",
    textAlign: "left",
    paddingRight: "100px",
}

const moveDown = {
    paddingTop: "100px",
}


export default function About() { 
    return (
        <div style={aboutStyle}>

            <div style={moveDown}>
                <h1 style={h1}>About Me</h1>
                    <div style={container}>
                        <p style={p}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p style={p}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p style={p}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                    </div>
                    <Photos />
            </div>
 
        </div>





    )
}