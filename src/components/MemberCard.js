import React from 'react'
import { Tile, Heading, Button } from 'react-bulma-components'





export default function MemberCard({member, name, description, deleteUserFromTeam}) {
    return (

        <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="success">
                <div className="content">
                    <Heading>{member}</Heading>
                    <Heading subtitle>{name}</Heading>
                    <Heading subtitle>{description}</Heading>
                   
                    <div className="content" />
                </div>
                <Button onClick={deleteUserFromTeam}>Remove</Button>
            </Tile>
        </Tile >

    )
}


