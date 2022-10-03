import React from 'react'
import "./Footer.scss"
import {TextField,Button} from '@mui/material'
import {Link} from 'react-router-dom'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import toobapharmalogo from '../../web data/tooba new logo 2019.jpg'
import LinkIcon from '@mui/icons-material/Link';
import TelegramIcon from '@mui/icons-material/Telegram';
function Footer() {
  return (
    <footer>
        <div className="row m-auto justify-content-between">
        
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
        <img src={toobapharmalogo} alt="logo" />
        <h1 className="gradient-color-dark">Tooba Pharmaceuticals Private Limited</h1>
        <p className="quote">In The Business of Human Wellbeing</p>
        <p>
        Tooba Pharmaceuticals Private Limited (TPPL) is a GMP Certified manufacturer of API Bulk Drugs and Intermediates, with state-of-the-art manufacturing facility.
        </p>
        </div>

        <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xl-2">
        <h4>Important Links</h4>
        <Link to="/overview" className="link"><p className="mb-3"><LinkIcon sx={{fontSize:15,marginRight:1}} /> About Us</p></Link>
        <Link to="/rdcrams" className="link"><p className="mb-3"><LinkIcon sx={{fontSize:15,marginRight:1}} /> Services</p></Link>
        <Link to="/products" className="link"><p className="mb-3"><LinkIcon sx={{fontSize:15,marginRight:1}} /> Products</p></Link>
        <Link to="/chairman" className="link"><p className="mb-3"><LinkIcon sx={{fontSize:15,marginRight:1}} /> Chairman's Message</p></Link>
        <Link to="/vision" className="link"><p className="mb-3"><LinkIcon sx={{fontSize:15,marginRight:1}} /> Vision</p></Link>
        <Link to="/infrastructure" className="link"><p className="mb-3"><LinkIcon sx={{fontSize:15,marginRight:1}} /> Infrastructure</p></Link>
        <Link to="/multimedia" className="link"><p className="mb-3"><LinkIcon sx={{fontSize:15,marginRight:1}} /> Media</p></Link>
        <Link to="/careers" className="link"><p className="mb-3"><LinkIcon sx={{fontSize:15,marginRight:1}} /> Careers</p></Link>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xl-3">
        <h4>Contact Us</h4>
        <p><LocalPhoneIcon /> +919860581297, +919373680996</p>
        <p><MailOutlineIcon /> info@toobapharma.in</p>
        <p><LocationOnIcon /> Plot No:A-117, A-118 & A-119, Paithan Industrial Area, Aurangabad-431148 (M.S)</p>
        <img src="/makeinindiarmb.png" alt="makeinindia" className="makeinindialogo" />

        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xl-4">
        <h4><TelegramIcon sx={{fontSize:30,marginRight:1}} /> Get In Touch !</h4>
        <TextField className="my-3" fullWidth id="outlined-basic" variant='outlined' label="Name" />
                <TextField className="my-3" fullWidth id="outlined-basic" variant='outlined' label="Email" />
                <TextField className="my-3" fullWidth
                id="filled-multiline-static"
                label="Message"
                multiline
                rows={2}
                // defaultValue="Default Value"
                variant="filled"
                />
                <Button className="my-3" variant="contained" fullWidth>Submit</Button>
        </div>

        </div>
    </footer>
  )
}

export default Footer