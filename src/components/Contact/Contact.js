import React from 'react'
import "./Contact.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
function Contact() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <div>
        <Header />
            <div className="overview">

            <h1>Contact</h1>
            <div style={{ height: '40vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDa3zC3zgOqGZq-yIVdixTmOuB27nNfqgs" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
                />
            </GoogleMapReact>
            </div>

            <div className="address">
                <p><b>Address</b> : Plot No: A-117, A-118 & A-119,
       Paithan Industrial Area,
       Dist. Aurangabad. Maharashtra, India</p>

       <p><b>Tel</b> : +919860581297,
          +919373680996</p>

       <p><b>Registered Office</b> : Plot No. 4/8/65,
    Nawabpura, Aurangabad 431001, India</p>
    <p><b>Email</b> :info@toobapharma.in</p>
            </div>

            </div>

        <Footer />
    </div>
  )
}

export default Contact