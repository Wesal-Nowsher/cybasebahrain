import React, {useState, useEffect} from "react"
import englishdata from "./english.json"
import arabicdata from "./arabic.json"
import { NavLink } from "react-router-dom";

import Footer from "./footer";

export default function Home() {
  const [data, setData]=useState("");
  const [direction, setDir]=useState("rtl");
  const [showmenures, setMenu]=useState(false);
  const [orangeoff, setOrangeoff]=useState(true);
  const [showfeature, setFeatureoff]=useState(``);
  useEffect(() => {
    if(localStorage.getItem("selectedlanguage")){
      let storagelan=localStorage.getItem("selectedlanguage");
      if(storagelan==="arabic"){
        setDir("rtl");
        setData({...arabicdata});
        setFeatureoff(`${arabicdata && arabicdata.featuresarea && arabicdata.featuresarea.upperhead&& arabicdata.featuresarea.upperhead[0]}`)
      }
      else if(storagelan==="eng"){
        setDir("ltr")
        setData(englishdata)
        setFeatureoff(`${englishdata && englishdata.featuresarea && englishdata.featuresarea.upperhead&& englishdata.featuresarea.upperhead[0]}`)
      }
    }
    else{
      localStorage.setItem("selectedlanguage","eng");
      setDir("ltr")
      setData(englishdata)
      setFeatureoff(`${englishdata && englishdata.featuresarea && englishdata.featuresarea.upperhead&& englishdata.featuresarea.upperhead[0]}`)
    }
    
  },[]);
  const changelang = lang => {
    if(lang==="arabic"){
     
      localStorage.setItem("selectedlanguage","arabic");
      setDir("rtl");
      setData({...arabicdata})
    }
    else if(lang==="eng"){

      localStorage.setItem("selectedlanguage","eng");
      setDir("ltr")
     
      setData(englishdata)
    }
  }
  return (
    <>
  
      <div className={ direction === "ltr" ? "" : "arabic" }>

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
                         return (<li onClick={()=> setMenu(!showmenures)}><a href={item.href}>{item.name}</a></li>)
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
            <div className="row" >
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
<div className="MOBIEL-FEATURS-ONLY">
{/* <section className="feature-section" style={{direction:`${direction}`}}>
    <div className="container" id="features">
        <div className="row features-text">
            <h2>{  data && data.featuresarea && data.featuresarea.head&& data.featuresarea.head}</h2>
        </div>
       <div className="row not-shown-in-mobile">
        <div className="col-7 d-flex responsive-column p-0">
            <div className={`col-4 single-amine ${orangeoff ? "first-orange":""}`}>
                <div className="orange-shadow " id="orange-shadow1" onMouseOver={()=> setOrangeoff(false)} >
                    <img src={require("../assets/more assets/teams.png").default} /> 
                </div>
                <div className="black-shadow" id="black-shadow1" ><h3 className='text-uppercase'>{  data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[0]}</h3></div>
            </div>Wx`
            <div className="col-4 single-amine" onMouseOver={()=> setOrangeoff(false)}>
                <div className="orange-shadow " id="orange-shadow2"  >
                    <img src={require("../assets/vagicon.png").default} /> 
                </div>
                <div className="black-shadow" id="black-shadow2"><h3 className='text-uppercase'>{  data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[1]}</h3></div>
            </div>
            <div className="col-4 single-amine" onMouseOver={()=> setOrangeoff(false)}>
                <div className="orange-shadow" id="orange-shadow3"  >
                <img src={require("../assets/iconing.png").default} /> 
                   
                </div>
                <div className="black-shadow" id="black-shadow3"><h3 className='text-uppercase'>{  data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[2]}</h3></div>
            </div>
        </div> 
        <div className="col-5 d-flex responsive-column p-0 " onMouseOver={()=> setOrangeoff(false)}>
            <div className="col-6 single-amine6 p-0">
                <div className="orange-shadow" id="orange-shadow4"  >
                <img src={require("../assets/more assets/Group 17.png").default} /> 
                   
                </div>
                <div className="black-shadow" id="black-shadow4"  ><h3 className='text-uppercase'>{  data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[3]}</h3></div>
            </div> 
            <div className="col-6 single-amine7 p-0" onMouseOver={()=> setOrangeoff(false)}>
                <div className="orange-shadow" id="orange-shadow5"  >
                <img src={require("../assets/more assets/Group 15.png").default} /> 
                </div>
                <div className="black-shadow"  id="black-shadow5"><h3 className='text-uppercase'>{  data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[4]}</h3></div>
            </div>
        </div>
       </div>
    </div>
</section> */}
<section className="features" id="features" style={{direction:`${direction}`}}>
    <div className="container">
    <div className="row features-text">
            <h2>{  data && data.featuresarea && data.featuresarea.head&& data.featuresarea.head}</h2>
        </div>
        <div className="row ">
            <div className="col-6 ">

            <img src={require("../assets/b.png").default} className="w-100 features-img " /> 
             
              </div>
            <div className="col-6 extra-pad  d-flex flex-column align-items-center justify-content-center">
               <div className="secon-row-text p-0">.
               
                <h2 id="" className="text-uppercase ">
                {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[0].head}
                 
                  </h2>
                <p>
                {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[0].p}
                </p>
                <NavLink to="/manageyourteam">
                <button className="btn text-uppercase">
                  {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[0].buttons}
               </button> </NavLink>
               </div>

            </div>  
        </div>
        <div className="row">
            <div className="col-6 extra-pad   d-flex flex-column align-items-center justify-content-center">
            <div className="secon-row-text p-0">.
               
               <h2 id="" className="text-uppercase ">
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[1].head}
                
                 </h2>
               <p>
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[1].p}
               </p>
               <NavLink to="/organizeyourprojects">
               <button className="btn text-uppercase"> 
               <a>  {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[1].buttons}</a>
              </button> </NavLink>
              </div>

            </div>
            <div className="col-6 ">
                <img src={require("../assets/d.png").default} className="w-100 features-img " /> 
              </div>
           
        </div>
        <div className="row">
            <div className="col-6 wow fadeInLeft">
            <img src={require("../assets/Group 58.png").default} className="w-100 features-img " /> 
             
              </div>
            <div className="col-6 extra-pad  d-flex flex-column align-items-center justify-content-center">
            <div className="secon-row-text p-0">.
               
               <h2 id="" className="text-uppercase ">
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[2].head}
                 
                 </h2>
               <p>
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[2].p}
               </p>
               <NavLink to="/organizecommunications"> <button className="btn text-uppercase">
                 {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[2].buttons}
              </button> </NavLink>
              </div>

            </div>
        </div>
        <div className="row">
            <div className="col-6 extra-pad  d-flex flex-column align-items-center justify-content-center">
            <div className="secon-row-text p-0">.
               
               <h2 id="" className="text-uppercase ">
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[3].head}
               
                 </h2>
               <p>
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[3].p}
               </p>
               <NavLink to="/clientorganizations">
               <button className="btn text-uppercase">
                {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[3].buttons}
              </button> </NavLink>
              </div>

            </div>
            <div className="col-6 ">
            <img src={require("../assets/a.png").default} className="w-100 features-img " /> 
           
              
              </div>
           
        </div>
        <div className="row">
           
            <div className="col-6 ">
            <img src={require("../assets/f.png").default} className="w-100 features-img " /> 
              
              </div>
            <div className="col-6 extra-pad  d-flex flex-column align-items-center justify-content-center">
            <div className="secon-row-text p-0">.
               
               <h2 id="" className="text-uppercase ">
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[4].head}
               
                 </h2>
               <p>
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[4].p}
               </p>
               <NavLink to="/analyticaldashboard">
               <button className="btn text-uppercase">
                 {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[4].buttons}
              </button> </NavLink>
              </div>

            </div>
           
        </div>
    </div>
</section>
</div>
<div className="after-758"  >
{/* <section className="feature-section" style={{direction:`${direction}`}}>
    <div className="container" id="features">
        <div className="row features-text">
            <h2>{  data && data.featuresarea && data.featuresarea.head&& data.featuresarea.head}</h2>
        </div>
       <div className="row">
        <div className="col-7 d-flex responsive-column p-0">
          
            <div className={`col-4 single-amine  `}
              >
                <div className="orange-shadow " id="orange-shadow1" >
                    <img src={require("../assets/more assets/teams.png").default} /> 
                </div>
                <div className="black-shadow" id="black-shadow1" ><h3 className='text-uppercase'>{  data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[0]}</h3></div>
            </div>
            <div  className={`col-4 single-amine  `}  onMouseOver={()=> {setFeatureoff(`${data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[1]}`) }}>
                <div className="orange-shadow " id="orange-shadow2"  >
                    <img src={require("../assets/vagicon.png").default} /> 
                </div>
                <div className="black-shadow" id="black-shadow2"><h3 className='text-uppercase'>{  data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[1]}</h3></div>
            </div>
            <div className={`col-4 single-amine ${showfeature ===  `${data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[2] }` ? "first-orange":""}`} onMouseOver={()=> {setFeatureoff(`${data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[2]}`) }}>
                <   div className="orange-shadow" id="orange-shadow3"  >
                <img src={require("../assets/iconing.png").default} />  
                </div>
                <div className="black-shadow" id="black-shadow3"><h3 className='text-uppercase'>{  data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[2]}</h3></div>
            </div>
        </div> 
        <div className="col-5 d-flex responsive-column p-0 " >
            <div className={`col-6 single-amine6 p-0 ${showfeature ===  `${data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[3] }` ? "first-orange":""}`}   onMouseOver={()=> {setFeatureoff(`${data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[3]}`) }}>
                <div className="orange-shadow" id="orange-shadow4"  >
                <img src={require("../assets/more assets/Group 17.png").default} />  
                </div>
                <div className="black-shadow" id="black-shadow4"  ><h3 className='text-uppercase'>{  data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[3]}</h3></div>
            </div> 
            <div className={`col-6 single-amine7 p-0 ${showfeature ===  `${data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[4] }` ? "first-orange":""}`}  onMouseOver={()=> {setFeatureoff(`${data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[4]}`) }}>
                <div className="orange-shadow" id="orange-shadow5"  >
                <img src={require("../assets/more assets/Group 15.png").default} /> 
                </div>
                <div className="black-shadow"  id="black-shadow5"><h3 className='text-uppercase'>{  data && data.featuresarea && data.featuresarea.upperhead&& data.featuresarea.upperhead[4]}</h3></div>
            </div>
        </div>
       </div>
    </div>
</section> */}
{/* <section className="features" id="features" style={{direction:`${direction}`}}>
    <div className="container">
    <div className="row features-text" >
            <h2>{  data && data.featuresarea && data.featuresarea.head&& data.featuresarea.head}</h2>
        </div>
        <div className="row ">
            <div className="col-6  col-6 wow fadeInLeft ">

            <img src={require("../assets/b.png").default} className="w-100 features-img " /> 
             
              </div>
            <div className="col-6 extra-pad  d-flex flex-column align-items-center justify-content-center">
               <div className="secon-row-text p-0">.
               
                <h2 id="" className="text-uppercase ">
                {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[0].head}
                 
                  </h2>
                <p>
                {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[0].p}
                </p>
                <NavLink to="/manageyourteam">
                <button className="btn text-uppercase">
                  {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[0].buttons}
                </button></NavLink>
               </div>

            </div>  
        </div>
      
     
      
        <div className="row">
            <div className="col-6 extra-pad   d-flex flex-column align-items-center justify-content-center">
            <div className="secon-row-text p-0">.
               
               <h2 id="" className="text-uppercase ">
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[1].head}
                
                 </h2>
               <p>
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[1].p}
               </p>
               <NavLink to="/organizeyourprojects">
               <button className="btn text-uppercase"> 
               <a>  {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[1].buttons}</a>
             </button>  </NavLink>
              </div>

            </div>
            <div className="col-6 fadeInRight wow">
                <img src={require("../assets/d.png").default} className="w-100 features-img " /> 
              </div>
           
        </div>
      
     
        
        <div className="row">
            <div className="col-6 wow fadeInLeft">
            <img src={require("../assets/Group 58.png").default} className="w-100 features-img " /> 
             
              </div>
            <div className="col-6 extra-pad  d-flex flex-column align-items-center justify-content-center">
            <div className="secon-row-text p-0">.
               
               <h2 id="" className="text-uppercase ">
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[2].head}
                 
                 </h2>
               <p>
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[2].p}
               </p>
               <NavLink to="/organizecommunications">
               <button className="btn text-uppercase">
                 {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[2].buttons}
             </button>  </NavLink>
              </div>

            </div>
        </div>
       
        
         
        <div className="row">
            <div className="col-6 extra-pad  d-flex flex-column align-items-center justify-content-center">
            <div className="secon-row-text p-0">.
               
               <h2 id="" className="text-uppercase ">
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[3].head}
               
                 </h2>
               <p>
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[3].p}
               </p>
               <NavLink to="/clientorganizations">
                <button className="btn text-uppercase">
                  {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[3].buttons}
                </button>   </NavLink>
              </div>

            </div>
            <div className="col-6 fadeInRight wow ">
            <img src={require("../assets/a.png").default} className="w-100 features-img " /> 
           
              
              </div>
           
        </div>
       
      
          
        <div className="row">
           
            <div className="col-6 col-6 wow fadeInLeft  ">
            <img src={require("../assets/f.png").default} className="w-100 features-img " /> 
              
              </div>
            <div className="col-6 extra-pad  d-flex flex-column align-items-center justify-content-center">
            <div className="secon-row-text p-0">.
               
               <h2 id="" className="text-uppercase ">
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[4].head}
               
                 </h2>
               <p>
               {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[4].p}
               </p>
               <NavLink to="/analyticaldashboard">
               <button className="btn text-uppercase"> 
                 {  data && data.featuresarea && data.featuresarea.onebyone&& data.featuresarea.onebyone[4].buttons}
               </button></NavLink>
              </div>

            </div>
           
        </div>  
      
    </div>
</section> */}

</div>
<section style={{direction:`${direction}`}} className="pricingplanhead">
    <div className="container  position-relative " id="plans">
       
        <div className="row head position-relative ">
            <h2 className="text-center"> {  data && data.plans && data.plans.head&& data.plans.head}</h2>
            <img src={require("../assets/specialoffer.jpg").default} className="special-offer" />
        </div>
        <div className="row buy1"> <div className="col-12 text-center d-flex justify-content-center highlighted-offer pr-0">
          <p className="text-uppercase">{  data && data.but1 && data.but1}
          </p></div></div>
        <div className="row pricingplan">
            <div className="container">
                <div className="row pricepplan">
                  
                    {  data && data.plans && data.plans && data.plans.allplans && data.plans.allplans.map((item)=>{
                        return(
                      <div className="col-3 white-back"> 
                        <div className="dtr-pricing w-100">
                         
                            <h3 className="color-white"
                             dangerouslySetInnerHTML={{__html: item.name}}
                            />
                                <h5>{item.place}</h5>
                            <p className="dtr-price price-special-dir "
                             dangerouslySetInnerHTML={{__html:   item.price}}
                            />
                              
        
                                <p className="dtr-m-0 color-white">{item.employees}</p>
                            <a href="https://registration.cybasebahrain.com/auth/user-registration" className="dtr-btn  mt-3">{item.button}</a>
                            <p className="text-size-md font-weight-600 pt-3  d-no-res">{item.updates}</p>
                            <ul className="dtr-list-block text-justify  color-white">
                              {
                                item.features && item.features.map((item)=>{
                                  return(  <li>{item}</li>)
                                })
                              }
                                   
                            </ul>
                        </div>
                    </div>
                        )
                    }) }
                </div>
                <div className="row">
                    <div className="offer">
                    {/* <img src={require("../assets/offer30dayts.png").default} className="w-100 features-img " />  */}
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</section>
<section id="Faqs" className="dtr-section dtr-py-100"  style={{direction:`${direction}`}}>
    <div className="container">
        <h3 className=" dtr-mb-40">{ data && data.faqs && data.faqs.header &&  data.faqs.header }</h3>
     
        <div className="row justify-content-start"> 

           
            <div className="col-12 col-md-6">

               {
                 data && data.faqs && data.faqs && data.faqs.questions && data.faqs.questions.map((item,index)=>{
                  if(index<3){
                    return(
                      <div className="faq-item">
                      <h4 className="faq-heading">{item.question} </h4>
                      <div className="faq-content">{item.answer} </div>
                  </div>
                    )
                  }
                    
                 })
               }
               
              
               
                

            </div>
           
            <div className="col-12 col-md-6">

            {
                 data && data.faqs && data.faqs && data.faqs.questions && data.faqs.questions.map((item,index)=>{
                  if(index>=3){
                    return(
                      <div className="faq-item">
                      <h4 className="faq-heading">{item.question} </h4>
                      <div className="faq-content">{item.answer} </div>
                  </div>
                    )
                  }
                    
                 })
               }
               
                
              

            </div>
           
            {/* <a href="#" className="dtr-btn  dtr-mt-20 faq-buttons">{ data && data.faqs.button && data.faqs.button }</a> */}
        </div>
      
        <div className="dtr-cta-box dtr-rounded-corner-xl dtr-shadow  dtr-mt-100 bg-white">
            <div className="row d-flex">
                <div className="col-12 col-md-5"> 
                <img
                 src={require(`../assets/cta-img.png`).default} className="dtr-mt-15 dtr-ml-20 dtr-mb-20 res-margin" />
              </div>
                <div className="col-12 col-md-7 text-center dtr-py-50 dtr-px-60">
                    <h3 className=""> { data && data.gettingstarted && data.gettingstarted.head && data.gettingstarted.head } </h3>
                    <p className="text-size-md">
                    { data && data.gettingstarted && data.gettingstarted.head && data.gettingstarted.head }
                        
                    </p>
                    <a href="https://registration.cybasebahrain.com/auth/user-registration" className="dtr-btn  dtr-mt-20">{ data && data.gettingstarted && data.gettingstarted.buttons && data.gettingstarted.buttons }</a>
                </div>
        </div>
    </div>
    </div>
</section>
<section className="dtr-section dtr-py-100 howitworkssection"  >
    <div className="container" id="hiws">
        <div className="row dtr-mb-30">
            <div className="col-12 text-center">
                <h2>{ data && data.howitworks && data.howitworks.tophead && data.howitworks.tophead }</h2>
                <p>{ data && data.howitworks && data.howitworks.topp && data.howitworks.topp }</p>
                <div className="dtr-styled-divider divider-center "></div>
            </div>
        </div>
        <div className="row d-flex align-items-center dtr-features-tab">
            <div className="col-12 col-md-6">
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active tabs-images-sizer" id="features-tab-1" role="tabpanel" aria-labelledby="features-tab-1-tab">
                       <img src={require(`../assets/1.png`).default}  />
                    </div>
                    <div className="tab-pane fade tabs-images-sizer" id="features-tab-2" role="tabpanel" aria-labelledby="features-tab-2-tab">
                    <img src={require(`../assets/4.png`).default}  />
                      </div>
                    <div className="tab-pane fade tabs-images-sizer" id="features-tab-3" role="tabpanel" aria-labelledby="features-tab-3-tab">
                    <img src={require(`../assets/3.png`).default}  />
                     </div>
                    
                    <div className="tab-pane fade tabs-images-sizer" id="features-tab-4" role="tabpanel" aria-labelledby="features-tab-4-tab">
                    <img src={require(`../assets/2.png`).default}  />
                       </div>

                </div>
            </div>
       
            <div className="col-12 col-md-6 howitworkssection-inner">
                <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="features-tab-1-tab" data-toggle="pill" href="#features-tab-1" role="tab" aria-controls="features-tab-1" aria-selected="true">
                        <h4 className="font-weight-600">{data && data.howitworks && data.howitworks.process && data.howitworks.process[0].head}</h4>
                        <p className="">
                        {data && data.howitworks && data.howitworks.process && data.howitworks.process[0].para}
                        </p>
                    </a>
                    <a className="nav-link" id="features-tab-2-tab" data-toggle="pill" href="#features-tab-2" role="tab" aria-controls="features-tab-2" aria-selected="false">
                    <h4 className="font-weight-600">{data && data.howitworks && data.howitworks.process && data.howitworks.process[1].head}</h4>
                        <p className="">
                        {data && data.howitworks && data.howitworks.process && data.howitworks.process[1].para}
                        </p>
                    </a>
                    <a className="nav-link" id="features-tab-3-tab" data-toggle="pill" href="#features-tab-3" role="tab" aria-controls="features-tab-3" aria-selected="false">
                    <h4 className="font-weight-600">{data && data.howitworks && data.howitworks.process && data.howitworks.process[2].head}</h4>
                        <p className="">
                        {data && data.howitworks && data.howitworks.process && data.howitworks.process[2].para}
                        </p>
                    </a>
                    <a className="nav-link" id="features-tab-3-tab" data-toggle="pill" href="#features-tab-4" role="tab" aria-controls="features-tab-4" aria-selected="false">
                    <h4 className="font-weight-600">{data && data.howitworks && data.howitworks.process && data.howitworks.process[3].head}</h4>
                        <p className="">
                        {data && data.howitworks && data.howitworks.process && data.howitworks.process[3].para}
                        </p>
                    </a>
                </div>
            </div>
              

        </div>
         

    </div>
</section>
<section id="" className="dtr-section dtr-py-100" style={{direction:`${direction}`}}>
    <div className="container" id="Contacts">

         
        <div className="row dtr-mb-50">
            {/* <div className="col-12 text-center">
                <h2 className="dtr-mb-5"> {data && data.contact && data.contact.tophead && data.contact.tophead}</h2>
                <p>{data && data.contact && data.contact.topp && data.contact.topp}</p>
                <div className="dtr-styled-divider divider-center "></div>
            </div> */}
        </div>
        
        <div className="row">

          
            <div className="col-12 col-md-5 dtr-md-mb-30 contact-img">
              
               <img src={require(`../assets/QRcode.jpg`).default} className="w-90" />
               </div>
            
            <div className="col-12 col-md-7">

               
                <div className="dtr-form dtr-form-has-icon w-100 d-flex justify-content-center align-items-center h-100">
                    <form id="contactform" className="w-100" novalidate="novalidate">
                    <div className="col-12 text-center">
                        <h2 className="dtr-mb-5"> {data && data.contact && data.contact.tophead && data.contact.tophead}</h2>
                        <p>{data && data.contact && data.contact.topp && data.contact.topp}</p>
                        <div className="dtr-styled-divider divider-center "></div>
                      </div>
                        <fieldset>
                            <p className="dtr-input">
                                <i className="icon-envelope1 "></i>
                                <input name="email" className="required email" type="text" placeholder="john.doe@example.com" />
                            </p>
                            <p className="antispam">
                                Leave this empty: <br />
                                <input name="url" />
                            </p>
                            <p className="dtr-input">
                                <i className="icon-user-edit "></i>
                                <textarea rows="4" name="message" id="message" className="required" placeholder={data && data.contact && data.contact.placeholder && data.contact.placeholder}></textarea>
                            </p>
                            <p className="dtr-m-0">
                                <button className="dtr-btn btn-dark-blue" type="button">{data && data.contact && data.contact.button && data.contact.button}</button>
                            </p>
                            <div id="result"></div>
                        </fieldset>
                    </form>
                </div>
                

            </div>
           

        </div>
       

    </div>
</section>
  <Footer />
  
     </div> 
</>
  )
}
