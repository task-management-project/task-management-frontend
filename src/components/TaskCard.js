import React from 'react'
import { Tile, Heading, Button } from 'react-bulma-components'





export default function TaskCard({name, description, thoughts, deleteTask}) {
    return (

        <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="primary">
                <div className="content">
                    <Heading>{name}</Heading>
                    <Heading subtitle>{description}</Heading>
                    <Heading subtitle>{thoughts}</Heading>
                    <div className="content" />
                </div>
                <Button onClick={deleteTask}>Delete</Button>
            </Tile>
        </Tile >

    )
}




