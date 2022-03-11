import React from 'react'
import "./Home.scss"
import Header from './Header/Header'
import toobalogo from '../assets/toobapharmamain.png'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import strengthimg from '../assets/strength.jpg'
import section3img from '../assets/section3.jpeg'
import purification from '../assets/portfolio/index_img7.png'
import rd from '../assets/portfolio/index_img4.png'
import ahu from '../assets/portfolio/index_img1.png'
import admin from '../assets/portfolio/index_img5.png'
import qanda from '../assets/portfolio/index_img3.png'
import cleanroom from '../assets/portfolio/index_img2.png'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img1 from '../assets/slider1.jpeg'
import img2 from '../assets/slider2.jpeg'
import img3 from '../assets/slider3.jpeg'
import img4 from '../assets/slider4.jpeg'
import img5 from '../assets/slider5.jpeg'
import img6 from '../assets/slider6.jpeg'
import img7 from '../assets/slider7.jpeg'
import gallery from '../assets/gallery.png'
import Footer from './Footer/Footer'
function Home() {
    return (
        <div>
           <section className="section1">
            <Header />
                <div className="namecontainer">
                <img src={toobalogo} alt="toobalogo" />
                <h1 className="gradient-color">Tooba Pharmaceuticals Private Limited</h1>
                <p>In The Business of Human Wellbeing <FormatQuoteRoundedIcon className="icon"/></p>
                <blockquote>
                Tooba Pharmaceuticals Private Limited (TPPL) is a GMP Certified manufacturer of API Bulk Drugs and Intermediates, with state-of-the-art manufacturing facility. TPPL retains its strong roots in R&D to explore and develop generics using newer technologies in an environment­friendly manner. TPPL, headquartered in Aurangabad, Maharashtra is a major urban center and an industrial hub, home to several pharmaceutical industries. Well connected with major metropolitan areas within the state and beyond, there's a ready access to markets and raw materials. The manufacturing plant is situated in the Paithan Industrial area, erected as per the GMP norms laid down by FDA.
                </blockquote>
                </div>
           </section>

           <section className="row m-auto section2 align-items-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 imgdiv">
                    <img src={strengthimg} alt="strengthimg" />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info">
                    <h2>Strength</h2>
                    <p>
                    TPPL is in the process of filing four DMFs in regulated market. Two molecules will be filed by December 2020 and remaining two molecules shall be filed by March 2021.
                    TPPL has developed patentable technologies. Recently we have filed patent for Glycopyrronium Bromide.
                    TPPL has gathered around technocrats with cumulative research experience for almost 90 years and have acclaimed more than 200 patents to their credit. So it is fully poised to meet challenges in developing non- infringing routes for various molecules. As far as regulatory experience is concerned this technical team in past was responsible for filing dozens of DMFs for regulated markets meeting stringent quality requirements. Excellent QA/QC facilities with all required instruments.
                    TPPL believes in developing the product from own methods by using mostly Indian Raw Materials.
                    TPPL endorses the Government of India's vision and mission of developing the products with indigenous sources-'Be vocal about local'.
                    </p>
                </div>
           </section>

           <section className="row gallerysection align-items-center m-auto">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 imgdiv">
                <img src={gallery} alt="gallery" />
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 info">
                    <h2>Gallery</h2>
                    <p>Laboris pariatur proident consectetur nulla eiusmod veniam cupidatat enim aliqua quis. Reprehenderit duis enim laboris ut officia ut ex. Eiusmod veniam duis nulla ex nulla sint ut ullamco ex elit voluptate. Occaecat proident laboris magna qui.</p>
                </div>
            </section>


            <section className="section3">
                <div className="blurcontainer heading">
                <h2 className="gradient-color">Available API Products</h2>
                </div>

                <div className="row m-auto justify-content-between api-product-container">
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Trazadone</p>
                    </div>
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Tamsulosine</p>
                    </div>
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Mexiletine</p>
                    </div>
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Cyclizine</p>
                    </div>
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Glycopyrrolate</p>
                    </div>
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Aripiprazole</p>
                    </div>
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3 mx-auto">
                        <p className="compname">Tolterodine</p>
                    </div>
                </div>


                <div className="blurcontainer heading">
                <h2 className="gradient-color">In Progress API Products</h2>
                </div>

                <div className="row m-auto justify-content-between api-product-container">
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Cinacalcet Hydrochloride</p>
                    </div>
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Nitrofurantoin</p>
                    </div>
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Etoricoxib</p>
                    </div>
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3 mx-auto">
                        <p className="compname">Modafinil</p>
                    </div>
                   
                </div>

            </section>


       



            <section className="section4">
                <h2>Our Portfolio</h2>  
                <div className="row m-auto justify-content-between portcontainer">
                   <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                       <img className='shadow' src={ahu} alt="ahu" />
                       <h3>AHU's</h3>
                       <p>Air Handling Units</p>
                   </div>

                   <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                       <img className='shadow' src={purification} alt="ahu" />
                       <h3>Purification</h3>
                       <p>Water Purification Plant</p>
                   </div>

                   <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                       <img className='shadow' src={rd} alt="ahu" />
                       <h3>R & D</h3>
                       <p>R and D</p>
                   </div>

                   <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                       <img className='shadow' src={qanda} alt="ahu" />
                       <h3>QA / QC</h3>
                       <p>QA / QC</p>
                   </div>

                   <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                       <img className='shadow' src={cleanroom} alt="ahu" />
                       <h3>Cleanroom</h3>
                       <p>cleanroom</p>
                   </div>

                   <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                       <img className='shadow' src={admin} alt="ahu" />
                       <h3>Admin</h3>
                       <p>Admin</p>
                   </div>
                </div>
            </section>

          

        <Footer />
        </div>
    )
}

export default Home
