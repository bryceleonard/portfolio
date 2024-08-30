import $ from 'jquery';
import kd from '../kd.gif';
import gthy from '../mobile.png';
import coors from '../coorsfield.jpg';
import woodward from '../woodward.gif';


const experienceStyle = {
    color: "white",
    background: "#141414",
    width: "95%",
    margin: "0 auto",
    borderRadius: "10px 10px 0 0",
}

const h1 = {
    fontSize: "100px",
    textAlign:  "left",
    margin: "0px",
    display: "inline-block",
    paddingLeft: "25px",
    width: "45%",


}



const img = {
    width: "975px",
    height: "575px",
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

            <div style={experienceStyle}>
                <h1 style={h1}>Experience</h1>
                <div className="slideNav">
                    <ul className="hideDec">
                        <li  id="kd_item" >Key Data Dashboard</li>
                        <li  id="hd_item" >Hoorooh Digital</li> 
                        <li  id="gthy_item" >Glad to Have You</li>
                        <li  id="cr_item" >Colorado Rockies</li>
                    </ul>
                </div>
                <div className="slideContainer">

                    <div className="slideContent">
                        <div   id="kd">
                            <p>Key Data Dashboard is a business intelligence platform used to analyze short-term rental &hotel performance data.</p>
                            <img  alt="image1"style={img} src={kd}></img>
                        </div>
                        <div  id="cr">One of 30 teams in Major League Baseball. I worked inside the Front Office’s Research and
                                        Development department developing proprietary analytics applications used to create
                                        competitive strategies both on and off the field. 
                                        <img  alt="image2"style={img} src={coors}></img>
                        </div>
                                        
                        <div   id="hd"><p>A design and web development firm. Our primary client was Powdr Resorts. Powdr is the parent
                                        company of 10 ski resorts and multiple adventure services. Hoorooh was hired to consolidate 10
                                        different resort websites into one controllable codebase and content management system. </p>
                                        <img  alt="image3"style={img} src={woodward}></img>
                        </div>
                        <div   id="gthy">A guest management & analytics platform for professional property managers. Guests use a
                                        mobile app to access information about the vacation home and recommendations for activities
                                        in the area. Property Managers use a web portal to manage information about their inventory
                                        and access rich analytics on guest booking trends. Over 300 property managers were using the
                                        platform when our company was acquired. 
                                        <img  alt="image4"style={img} src={gthy}></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        
    )
}