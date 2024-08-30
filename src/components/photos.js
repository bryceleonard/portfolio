import { Splide, SplideSlide } from '@splidejs/react-splide';
import zero from "../sitephotos/0.jpg"
import one from "../sitephotos/1.jpg"
import two from "../sitephotos/2.jpg"
import three from "../sitephotos/3.jpg"
import four from "../sitephotos/4.jpg"
import '@splidejs/react-splide/css';



const containerSlide = {
    width: "45%",
    display: "inline-block",
    verticalAlign: "top",

}
const width = {
    width: "78%",
    border: "16px solid white",
}

export default function Photos() {

    return (
        <div style={containerSlide}>
            <Splide aria-label="My Favorite Images">
                <SplideSlide>
                    <img style={width} src={zero} alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img style={width} src={one} alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img style={width} src={two} alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img style={width} src={three} alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img style={width} src={four} alt="Image 1"/>
                </SplideSlide>
            {/* <SplideSlide>
                <img src="image2.jpg" alt="Image 2"/>
            </SplideSlide> */}
            </Splide>
        </div>
    )
}