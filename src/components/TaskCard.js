import React from 'react'
import { Tile, Heading, Button } from 'react-bulma-components'





export default function TaskCard({name, description, thoughts, deleteTask, updateTask}) {
    return (

        <Tile kind="parent">
            <Tile onClick={updateTask} renderAs="article" kind="child" notification color="success">
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




