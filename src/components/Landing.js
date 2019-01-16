import React from 'react'
import { Button, Heading, Box } from 'react-bulma-components'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <Box>
            <Heading className="title_signin">Welcome to Task Manager!</Heading>
            <Box>
                <Link to={`/signin`}>
                    <Button> Sign In</Button>
                </Link>
            </Box>
            <Box>
                <Link to={`/signup`}>
                    <Button> Sign Up</Button>
                </Link>
            </Box>
        </Box >
    )
}