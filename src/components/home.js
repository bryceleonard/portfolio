const aboutStyle = {
    display: "block",
    width: "100%",
    height: "100vh",
    color: "white",  



}

const h3Style = { 
    textAlign: "left",
    marginTop: "250px",
    fontSize: "48px",

}

const pStyle = { 

    textAlign: "right",
    margin: "15px 0",
    fontSize: "24px",
    display: "inline-block",
}

const pStyleWork = { 

    textAlign: "right",
    margin: "15px 0",

    display: "inline-block",
    width: '100%',
    fontSize: '32px',
}

const ptop = {
    marginTop: "200px",
    textAlign: "right",

    fontSize: "24px",
    display: "inline-block",
}

const pContainer = {
    width: "35%",
    display: "inline-block",
}

const h3Container = {
    width: "55%",
    display: "inline-block",
    verticalAlign: "top",

}


export default function About() {
    return (
        <div style={aboutStyle}>
            <div style={h3Container}>
                <h3 style={h3Style}>Hi, my name is Bryce! I'm a process-oriented Product Manager & Developer based in Denver, Colorado. I enjoy designing and building long-lasting web platforms.</h3>
     
            </div>
            <div style={pContainer}>
                <p style={ptop}>
                    Uniquely experienced product manager and developer. I bridge the gap between management,  development, design, and business, 
                    bringing diverse expertise to innovative, forward-thinking organizations. 
                </p>
                <p style={pStyle}>
                    I am passionate about the omnichannel ecosystem, I love to research, conceive and develop innovative solutions, 
                    using my multidisciplinary skills and experiences.
                    </p>
                    <p style={pStyle}>
                    Driven by curiosity and a passion for improvement, my entrepreneurial mindset empowers me to innovate fearlessly. I have a proven track record for delivering enterprise-level platforms in complex 
                    industries.
                    </p>
                    <p style={pStyleWork}>Let's work together</p>
            </div>


         </div>
    )
}   

