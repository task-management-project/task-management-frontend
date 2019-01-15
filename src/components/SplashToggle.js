import React from 'react'
import { Button, Heading, Box } from 'react-bulma-components'
import { Link } from 'react-router-dom'

export default function SplashToggle() {
    return (
        <div>
            <Heading>****Choose your Role****</Heading>
            <Box>
                <Link to={'/memberdash'}>
                    <Button>Member</Button>
                </Link>
            </Box>
            <Box>
                <Link to={'/managerselectteam'}>
                    <Button>Manager</Button>
                </Link>
            </Box >
        </div >
    )
}