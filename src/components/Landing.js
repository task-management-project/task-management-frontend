import React from 'react'
import { Button, Heading, Box } from 'react-bulma-components'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <Box className="box coverbox">
            <Heading>
                <div className="title_signin">Welcome to Task Manager!</div>
            </Heading>
            <Box className="box medium">
                <Link to={`/signin`}>
                    <Button className="button is-primary is-large"> Sign In</Button>
                </Link>
                <Link to={`/signup`}>
                    <Button className="button is-primary is-large"> Sign Up</Button>
                </Link>
            </Box>
        </Box >
    )
}