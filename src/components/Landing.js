import React from 'react'
import { Button, Heading, Box } from 'react-bulma-components'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <Box className="box coverbox">
            <Heading>
                <div className="title_signin">Welcome to Singular Focus!</div>
            </Heading>
            <div className='btnctr2'>
                <Link to={`/signin`} className="btnctr">
                    <Button className="landingbtn button is-primary is-medium"> Sign In</Button>
                </Link>
                <Link to={`/signup`} className="btnctr">
                    <Button className="landingbtn button is-primary is-medium"> Sign Up</Button>
                </Link>
            </div>
        </Box >
    )
}