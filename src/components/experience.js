import $ from 'jquery';
import kd from '../kd.gif';
import gthy from '../gthy.jpg';
import coors from '../coorsfield.jpg';
import woodward from '../woodward.gif';
import copper from '../copper.gif';
import powdr from '../powdr.gif';
import eldora from '../eldora.gif';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const span = {
    display: "block",
    fontSize: "16px",
}






const containerSlide = {
    width: "56%",
    display: "inline-block",
    verticalAlign: "top",

}
const width = {
    width: "100%",

}

const p = {
    borderBottom: "2px dashed white",
    paddingBottom: "15px",
    fontSize: "14px",
    width: "90%",
    margin: "10px 25px",


}







export default function Experience() {

    $(function() {
        $('div[id^=kd]').show();
        $('li[id^=kd_item]').addClass("activeList");
        $('div[id^=cr').hide();
        $('div[id^=hd').hide();
        $('div[id^=gthy').hide();
        //keydata
        $('#kd_item').click(function() {
            $('div[id^=cr]').hide();
            $('div[id^=hd]').hide();
            $('div[id^=gthy]').hide();
            $('li[id^=kd_item]').addClass("activeList");
            $('li[id^=cr_item]').removeClass("activeList");
            $('li[id^=hd_item]').removeClass("activeList");
            $('li[id^=gthy_item]').removeClass("activeList");
            $('#kd').show();
        });
        //rockies
        $('#cr_item').click(function() {
            $('div[id^=kd').hide();
            $('li[id^=cr_item]').addClass("activeList");
            $('li[id^=kd_item]').removeClass("activeList");
            $('li[id^=hd_item]').removeClass("activeList");
            $('li[id^=gthy_item]').removeClass("activeList");
            $('div[id^=hd').hide();
            $('div[id^=gthy').hide();
            $('#cr').show();
        });
        //hd
        $('#hd_item').click(function() {
            $('div[id^=cr]').hide();
            $('div[id^=kd]').hide();
            $('div[id^=gthy]').hide();
            $('li[id^=hd_item]').addClass("activeList");
            $('li[id^=cr_item]').removeClass("activeList");
            $('li[id^=kd_item]').removeClass("activeList");
            $('li[id^=gthy_item]').removeClass("activeList");
            $('#hd').show();
        });
        //gthy
        $('#gthy_item').click(function() {
            $('li[id^=gthy_item]').addClass("activeList");
            $('li[id^=cr_item]').removeClass("activeList");
            $('li[id^=hd_item]').removeClass("activeList");
            $('li[id^=kd_item]').removeClass("activeList");
            $('div[id^=kd').hide();
            $('div[id^=cr').hide();
            $('div[id^=hd').hide();
            $('#gthy').show();
        });
    
    
    })
        
    return (
        <div>
            <div className="experienceStyle">

                <div className="slideNav">
                    <h1>Experience</h1>

                    <ul className="hideDec">
                        <li  id="kd_item" >Key Data Dashboard</li>
                        <li  id="hd_item" >Hoorooh Digital</li> 
                        <li  id="gthy_item" >Glad to Have You</li>
                        <li  id="cr_item" >Colorado Rockies</li>

                    </ul>
                </div>
                <div className="slideContainer">
                    <div className="slideContent">
                        <div className="contain" id="kd">
                            <div className="text">
                                <h3>Director of Product Management<span style={span}>2021 - 2024</span></h3>
                                <p style={p}>Key Data Dashboard is a business intelligence platform used to analyze short-term rental &hotel performance data. Key Data combines rental data from OTA sites with reservation data sourced directly from 65+ of the world’s top property management systems. </p>
                                <p style={p}>Successfully delivered to market 2 unique product offerings accounting for 40% of company’s monthly recurring revenue after designing new system and leading transition to new platform (1.5-year project). New tool has increased site performance, optimized user experiences, improved data access and insights. </p>
                                <p style={p}>Expedited time to value and reduced customer churn after creating new methods for clients to download and share prebuilt dashboard templates.</p>
                                <p style={p}>Earned Best in Show Award (out of 13 total technical vendors) from Vacation Rental Management Association International during industry’s annual conference.</p>
                            </div>
                            <img  alt="image1"className="img" src={kd}></img>
                        </div>
                        <div className="contain" id="cr">
                            <div className="text">
                                    <h3>Full Stack Developer & Data Analyst<span style={span}>2018 - 2021</span></h3>
                                    <p style={p}>Saved organization $100K+ annually in third-party software subscriptions after building and maintaining internal web application’s as sole Full-Stack Developer.</p>
                                    <p style={p}>Optimized development function, increased efficiencies, and strengthened decision making by introducing Agile methodology and SCRUM workflows across organization, serving as SCRUM Master</p>
                                    <p style={p}>Helped define strategies for salary arbitration, amateur drafts, and in-game completion by analyzing and presenting historical data/insights.</p>
                                    <p style={p}>Participated in organization’s salary arbitration case, which saved team $575K.</p>
                                </div>

                                    <img  alt="image2"className="img" src={coors}></img>
                        </div>
                                        
                        <div className="contain" id="hd">
                            <div className="text">
                                <h3>Full-Stack Developer<span style={span}>2016 - 2018</span></h3>
                                <p style={p}>A design and web development firm. Our primary client was Powdr Resorts. Powdr is the parent
                                    company of 10 ski resorts and multiple adventure services. Hoorooh was hired to consolidate 10
                                    different resort websites into one controllable codebase and content management system.
                                </p>
                                <p style={p}>Played instrumental role in consolidating Powdr’s 10 resorts into single controllable codebase (Headless Drupal) and content management system, transforming company performance and revolutionizing content creation. This platform is still used by Powdr today.</p>
                                <p style={p}>Ensured security, scalability, and maintainability of applications via appropriate development practices and tools. </p>
                            </div>
                            <div style={containerSlide}>
                                <Splide aria-label="My Favorite Images">
                                    <SplideSlide>
                                        <img style={width} src={copper} alt="1"/>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img style={width} src={woodward} alt="2"/>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img style={width} src={powdr} alt="3"/>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img style={width} src={eldora} alt="4"/>
                                    </SplideSlide>
                                </Splide>
                            </div>
                        </div>
                        <div className="contain" id="gthy">
                        <div className="text">
                                <h3>Product Manager<span style={span}>2010 - 2015</span></h3>
                                <p style={p}> A guest management & analytics platform for professional property managers. Guests use a
                                        mobile app to access information about the vacation home and recommendations for activities
                                        in the area. Property Managers use a web portal to manage information about their inventory
                                        and access rich analytics on guest booking trends. Over 300 property managers were using the
                                        platform when our company was acquired</p>
                                <p style={p}>Created initial product design and roadmap used to raise $1M in Series A funding. Played role in positioning company for acquisition by Home Away/Expedia Group (for $17M) after 2 years in operation. </p>
                                <p style={p}>Increased frequency of product updates and bug fixes via transitioning team from Waterfall to Agile workflow.</p>
                            </div>
                             <img  alt="image4"className="img" src={gthy}></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        
    )
}