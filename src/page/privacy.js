





import React, {useState, useEffect} from "react"
import englishdata from "./english.json"
import arabicdata from "./arabic.json"
import Footer from "./footer";
import { NavLink } from "react-router-dom";

export default function Privacy() {
    const [data, setData]=useState("");
    const [direction, setDir]=useState("rtl");
    const [showmenures, setMenu]=useState(false);
    useEffect(() => {
      console.log("GETTING", localStorage.getItem("selectedlanguage"))
      if(localStorage.getItem("selectedlanguage")){
        let storagelan=localStorage.getItem("selectedlanguage");
        if(storagelan==="arabic"){
          setDir("rtl");
          setData({...arabicdata})
        }
        else if(storagelan==="eng"){
          setDir("ltr")
          console.log("english",englishdata)
          setData(englishdata)
        }
       
      }
      else{
        localStorage.setItem("selectedlanguage","eng");
        setDir("ltr")
        setData(englishdata)
  
      }
      
    },[]);
    const changelang = lang => {
      if(lang==="arabic"){
        console.log("english data",englishdata)
        localStorage.setItem("selectedlanguage","arabic");
        setDir("rtl");
        setData({...arabicdata})
      }
      else if(lang==="eng"){
  
        localStorage.setItem("selectedlanguage","eng");
        setDir("ltr")
        console.log("english",englishdata)
        setData(englishdata)
      }
    }
  return (
    <>
    {/* <Head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
       
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script type="text/javascript"   src="js/jquery.min.js"></script>
        <script type="text/javascript"  src="js/bootstrap.min.js"></script>
      <script type="text/javascript"  src="js/plugins.js"></script> 
      <script type="text/javascript"  src="js/custom.js"></script> 
     
      </Head> */}
      <div className={direction==="ltr" ? "":"arabic"}>
      <section className="header-section " style={{direction:`${direction}`}}>
    <div className="container ">
    <div className="row top-logo-nav">
                 <div className="col-5  logo">
                 <NavLink to="/" exact>
               <a> <img src={require(`../assets/logo.svg`).default} className="w-100 " /></a>
               </NavLink>
                 </div>

                 <div className="nav col-7">
                     <div className="resposinve-menu" onClick={()=> setMenu(!showmenures)}>
                         <div></div>
                         <div></div>
                         <div></div>
                     </div>
                     <ul id="nav-menu " className={showmenures ? "show":""}>
                      {
                        data && data.nav && data.nav.map((item)=>{
                         return (<li onClick={()=> setMenu(!showmenures)}><a onClick={() => window.location.replace(`/${item.href}`)} >{item.name}</a></li>)
                        })
                      }
                    </ul>
                    <div className="lang">
                        <div className={`eng ${direction==="ltr" && "active"}`} onClick={() => changelang("eng")}>ENG</div>
                        <div className={`arabic ${direction==="rtl" && "active"} `} onClick={()=> changelang("arabic")}>العربية</div>
                    </div>
                 </div>
            </div>
            </div>
            </section>
            <section className="hero-section">
              <div className="container">
            <div className="row">
            <div className="col-7 analytics-img position-relative">
                    <img src={require(`../assets/main picture.png`).default} className="w-100 "/>
                </div>
                <div className="col-5 secon-row-text thrid-row-text d-flex flex-column align-items-center justify-content-center">
                      
                    <h2
                    dangerouslySetInnerHTML={{__html:  data && data.header && data.header.h2&& data.header.h2}} /> 
                    <p>
                    {  data && data.header && data.header.p&& data.header.p}
                    </p>
                    <a href="https://registration.cybasebahrain.com/auth/user-registration"> 
                    <button className="btn"> {  data && data.header && data.header.buttons&& data.header.buttons}</button></a>
                    <div className="android-apple">
                     
                            <div className="android-applae android ">
                              <a href="https://play.google.com/store/apps/details?id=com.cyberspace.cybasebh"><i className="fa fa-android"></i></a></div>
                            <div className="android-applae apple"><a href="https://apps.apple.com/ca/app/cybase-bahrain/id1605718536"><i className="fa fa-apple"></i></a></div>
                       
                    </div>
                </div>
                
            </div>
    </div>
    
</section>
<div className="dtr-main-content privacy">
            
            <section className="dtr-section dtr-py-100">
                <div className="container text-justify">
                  
                    <div className="row dtr-mb-30">
                        <div className="col-12 text-center">
                            <h2>{ data && data.privacy && data.privacy.head&& data.privacy.head}</h2>
                            <p><span className="color-dark-blue font-weight-bold">CY</span><span className="color-green font-weight-bold">BASE</span></p>
                            <div className="dtr-styled-divider divider-center bg-green"></div>
                        </div>
                    </div>
                     
                    <div  className="privacy"
                     dangerouslySetInnerHTML={{__html:   data && data.privacy && data.privacy.para1&& data.privacy.para1}}/>
                     <div
                     dangerouslySetInnerHTML={{__html:   data && data.privacy && data.privacy.para2&& data.privacy.para2}}/>
                     <div 
                      dangerouslySetInnerHTML={{__html:   data && data.privacy && data.privacy.para3&& data.privacy.para3}}/> 
            
                </div>
            </section>
                    </div>
                    <Footer />
              </div>
</>
  )
}








     


