import React from 'react'
import "./Careers.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {TextField,Button} from '@mui/material'


function Careers() {
  return (
    <div>
        <Header />
            <div className="careers">
                <h1>Careers</h1>
                <TextField className="my-3" fullWidth id="outlined-basic" variant='outlined' label="Name" />
                <TextField className="my-3" fullWidth id="outlined-basic" variant='outlined' label="Email" />
                <TextField className="my-3" fullWidth
                id="filled-multiline-static"
                label="Description"
                multiline
                rows={4}
                // defaultValue="Default Value"
                variant="filled"
                />
                <Button className="my-3" variant="contained" fullWidth>Submit</Button>
            </div>

        <Footer />
    </div>
  )
}

export default Careers