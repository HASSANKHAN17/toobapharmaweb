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
                {/* <img src={toobalogo} alt="toobalogo" /> */}
                <h1 className="gradient-color">Tooba Pharmaceuticals Private Limited</h1>
                <p>In The Business of Human Wellbeing <FormatQuoteRoundedIcon className="icon"/></p>
                <blockquote>
                Tooba Pharmaceuticals Private Limited (TPPL) is a GMP Certified manufacturer of API Bulk Drugs and Intermediates, with state-of-the-art manufacturing facility. TPPL retains its strong roots in R&D to explore and develop generics using newer technologies in an environment­friendly manner. TPPL, headquartered in Aurangabad, Maharashtra is a major urban center and an industrial hub, home to several pharmaceutical industries. Well connected with major metropolitan areas within the state and beyond, there's a ready access to markets and raw materials. The manufacturing plant is situated in the Paithan Industrial area, erected as per the GMP norms laid down by FDA.
                </blockquote>
                </div>
           </section>

           <section className="row m-auto section2 align-items-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 imgdiv">
                    <img src="/strength.jpg" alt="strengthimg" />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info">
                    <h2>Strength</h2>
                    <p>
                    TPPL is in the process of filing four DMFs in regulated market.
                    TPPL has developed patentable technologies. Recently we have filed patent for Glycopyrronium Bromide.
                    TPPL has gathered around technocrats with cumulative research experience for almost 90 years and have acclaimed more than 200 patents to their credit. So it is fully poised to meet challenges in developing non- infringing routes for various molecules. As far as regulatory experience is concerned this technical team in past was responsible for filing dozens of DMFs for regulated markets meeting stringent quality requirements. Excellent QA/QC facilities with all required instruments.
                    TPPL believes in developing the product from own methods by using mostly Indian Raw Materials.
                    TPPL endorses the Government of India's vision and mission of developing the products with indigenous sources-'Be vocal about local'.
                    </p>
                </div>
           </section>

           <section className="row gallerysection align-items-center m-auto">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 imgdiv">
                <img src={'/gallery.png'} alt="gallery" />
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 info">
                    <h2>Gallery</h2>
                    <p>
                    TPPL focus tirelessly on developing novel processes applying contemporary know-how, Inculcating culture of innovation in its technical team, focus will be maintain on consistency and integrity of processes through continuous development, validation and documentation..
This shall be achieved by inculcating a culture of innovation in its technical teams.
Human resource development and honing their competencies through training and inclusiveness.
Environment friendliness and safety shall be part of TPPL culture.
                    </p>
                </div>
            </section>


            <section className="section3">
                <div className="blurcontainer heading">
                <h2 className="gradient-color">Available API Products</h2>
                </div>

                <div className="row m-auto justify-content-around api-product-container">
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Glycopyrronium Bromide
                        <br />
                        (CAS No.: 51186-83-5)
                        <br />
                        <span>Glycopyrronium Bromide Ph.Eur</span>
                        </p>
                    </div>
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Trazodone Hydrochloride
                        <br />
                        (CAS No.: 25332-39-2)
                        <br />
                        <span>Trazodone Hydrochloride USP</span>
                        <br />
                        <span>Trazodone Hydrochloride BP</span>
                        </p>
                    </div>
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Glycopyrrolate
                        <br />
                        (CAS No.: 596-51-0)
                        <br />
                        <span>Glycopyrrolate IP</span>
                        <br />
                        <span>Glycopyrrolate USP</span>
                        </p>
                    </div>
                    <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Mexiletine Hydrochloride
                        <br />
                        (CAS No.: 5370-01-4)
                        <br />
                        <span>Glycopyrronium Bromide Ph.Eur</span>
                        <br />
                        <span>Mexiletine Hydrochloride USP</span>
                        </p>
                    </div>
                </div>


                {/* <div className="blurcontainer heading">
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
                   
                </div> */}

            </section>

            <h1 className="gradient-color-dark incom-api">Incoming API Products</h1>
            <section className="incoming-api row m-auto justify-content-around api-product-container">
                
                <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Nitrofurantoin
                        <br />
                        (CAS No.: 67-20-9)
                        <br />
                        </p>
                </div>
                <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Tamsulosin Hydrochloride
                        <br />
                        (CAS No.: 106463-17-3)
                        <br />
                        </p>
                </div>
                <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Tolterodine Tartrate
                        <br />
                        (CAS No.: 124937-52-6)
                        <br />
                        </p>
                </div>
                <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Rivaroxaban
                        <br />
                        (CAS No.: 366789-02-8)
                        <br />
                        </p>
                </div>
                <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Aripiprazole
                        <br />
                        (CAS No.: 129722-12-9)
                        <br />
                        </p>
                </div>
                <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Modafinil
                        <br />
                        (CAS No.: 68693-11-8)
                        <br />
                        </p>
                </div>
                <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Cinacalcet Hydrochloride
                        <br />
                        (CAS No.: 364782-34-3)
                        <br />
                        </p>
                </div>
                <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Metronidazole Benzoate
                        <br />
                        (CAS No.: 13182-89-3)
                        <br />
                        </p>
                </div>
                <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Cyclizine Hydrochloride
                        <br />
                        (CAS No.: 5897-18-7)
                        <br />
                        </p>
                </div>
                <div className="blurcontainer col-5 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <p className="compname">Methylcobalamin
                        <br />
                        (CAS No.: 13422-55-4)
                        <br />
                        </p>
                </div>
            </section>


       



            <section className="section4">
                <h2>Our Portfolio</h2>  
                <h1>Admin</h1>
                <div className="row m-auto justify-content-between portcontainer">
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/admin1.JPG" alt="ahu" />
                        <h3>Admin Office</h3>
                        <p>Admin</p>
                    </div>
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/admin2.JPG" alt="ahu" />
                        <h3>Conference Hall</h3>
                        <p>Admin</p>
                    </div>
                    {/* <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/admin3.JPG" alt="ahu" />
                        <h3>AHU's</h3>
                        <p>Admin</p>
                    </div> */}
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/admin4.JPG" alt="ahu" />
                        <h3>Admin Corridor</h3>
                        <p>Admin</p>
                    </div>
                </div>

                <h1>Finish Block</h1>
                <div className="row m-auto justify-content-between portcontainer">
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/finishblock1.JPG" alt="ahu" />
                        <h3>FB 1</h3>
                        <p>Finish Block 1</p>
                    </div>
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/finishblock2.JPG" alt="ahu" />
                        <h3>FB 2</h3>
                        <p>Finish Block 2</p>
                    </div>
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/finishblock3.JPG" alt="ahu" />
                        <h3>FB 3</h3>
                        <p>Finish Block 3</p>
                    </div>
                </div>

                <h1>Others</h1>
                <div className="row m-auto justify-content-between portcontainer">
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/R&D.JPG" alt="ahu" />
                        <h3>R & D</h3>
                        <p>Research and Development</p>
                    </div>
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/QA&QC.JPG" alt="ahu" />
                        <h3>QA & QC</h3>
                        <p>QA and QC</p>
                    </div>
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/SOLVENTYARD.JPG" alt="ahu" />
                        <h3>Solvent Yard</h3>
                        <p>Solvent Yard</p>
                    </div>

                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                       <img className='shadow' src={cleanroom} alt="ahu" />
                       <h3>Cleanroom</h3>
                       <p>cleanroom</p>
                   </div>

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
                </div>


                <h1>Reactor</h1>
                <div className="row m-auto justify-content-between portcontainer">
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/reactor1.JPG" alt="ahu" />
                        <h3>Reactor 1</h3>
                        <p>Reactor 1</p>
                    </div>
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/reactor2.JPG" alt="ahu" />
                        <h3>Reactor 2</h3>
                        <p>Reactor 2</p>
                    </div>
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/reactor3.JPG" alt="ahu" />
                        <h3>Reactor 3</h3>
                        <p>Reactor 3</p>
                    </div>
                </div>

                <h1>Stores</h1>
                <div className="row m-auto justify-content-between portcontainer">
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/stores1.JPG" alt="ahu" />
                        <h3>Store 1</h3>
                        <p>Store 1</p>
                    </div>
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/stores2.JPG" alt="ahu" />
                        <h3>Store 2</h3>
                        <p>Store 2</p>
                    </div>
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/stores3.JPG" alt="ahu" />
                        <h3>Store 3</h3>
                        <p>Store 3</p>
                    </div>
                </div>

                <h1>Stability Room</h1>
                <div className="row m-auto justify-content-center portcontainer">
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/stabilityroom1.JPG" alt="ahu" />
                        <h3>Stability Room 1</h3>
                        <p>Stability Room 1</p>
                    </div>
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 item">
                        <img className='shadow' src="/stabilityroom2.JPG" alt="ahu" />
                        <h3>Stability Room 2</h3>
                        <p>Stability Room 2</p>
                    </div>

                </div>
                {/* <div className="row m-auto justify-content-between portcontainer">
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
                </div> */}
            </section>

          

        <Footer />
        </div>
    )
}

export default Home
