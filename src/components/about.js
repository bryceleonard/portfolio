import Photos from './photos.js';



export default function About() { 
    return (
        <div className="aboutStyle">

            <div className="moveDown">
                <h1 >About Me</h1>
                    <div className="container">
                        <p >
                                 A passionate product manager with over 14 years of experience in the tech industry, blending my expertise as both a product manager and software engineer. My journey began with a BBA from Belmont University, where I developed a strong foundation in business and technology.
                            </p>
                            <p >
                                I’m fortunate to share my life with my wonderful wife, Lindsey, and our two energetic kids, Theo and Remi. When I’m not working, you’ll likely find me immersed in my favorite hobbies. I’m an avid photographer with a love for medium format film, with a focus on landscapes. 
                            </p>
                            <p >
                                In addition to photography, I enjoy building analog guitar effects pedals, which has given me a deeper appreciation for electronics and engineering. I also find joy in cooking and golfing—two activities that offer a perfect blend of creativity and relaxation.
                            </p>

                            <p >
                                I am pleased to present my portfolio and look forward to the opportunity to connect with like-minded professionals and enthusiasts.
                            </p>
                    </div>
                    <Photos />
            </div>
        
        </div>





    )
}