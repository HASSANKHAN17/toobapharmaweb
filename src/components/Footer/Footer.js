import React from 'react'
import "./Footer.scss"
import {TextField,Button} from '@mui/material'
function Footer() {
  return (
    <footer>
        <div className="row m-auto justify-content-between">
        
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
        <h1>Tooba Pharmaceuticals Private Limited</h1>
        <p>In The Business of Human Wellbeing</p>
        </div>

        <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xl-2">
        <h4>Important Links</h4>
        <p>About Us</p>
        <p>R & D Crams</p>
        <p>Products</p>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xl-3">
        <h4>Contact Us</h4>
        <p>+919860581297, +919373680996</p>
        <p>info@toobapharma.in</p>
        <p>Plot No:A-117, A-118 & A-119, Paithan Industrial Area, Aurangabad-431148 (M.S)</p>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xl-4">
        <TextField className="my-3" fullWidth id="outlined-basic" variant='outlined' label="Name" />
                <TextField className="my-3" fullWidth id="outlined-basic" variant='outlined' label="Email" />
                <TextField className="my-3" fullWidth
                id="filled-multiline-static"
                label="Message"
                multiline
                rows={4}
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