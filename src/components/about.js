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
                                 a passionate product manager with over 14 years of experience in the tech industry, blending my expertise as both a product manager and software engineer. My journey began with a BBA from Belmont University, where I developed a strong foundation in business and technology.
                            </p>
                            <p style={p}>
                                I’m fortunate to share my life with my wonderful wife, Lindsey, and our two energetic kids, Theo and Remi. When I’m not working, you’ll likely find me immersed in my favorite hobbies. I’m an avid photographer with a love for medium format film, with a focus on landscapes. 
                            </p>
                            <p style={p}>
                                In addition to photography, I enjoy building analog guitar effects pedals, which has given me a deeper appreciation for electronics and engineering. I also find joy in cooking and golfing—two activities that offer a perfect blend of creativity and relaxation.
                            </p>

                            <p style={p}>
                                I am pleased to present my portfolio and look forward to the opportunity to connect with like-minded professionals and enthusiasts.
                            </p>
                    </div>
                    <Photos />
            </div>
        
        </div>





    )
}