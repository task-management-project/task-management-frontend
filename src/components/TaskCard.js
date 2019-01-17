import React from 'react'
import { Tile, Heading, Button, Columns } from 'react-bulma-components'





export default function TaskCard({ name, description, thoughts, isFocus, deleteTask, updateTask }) {
    const color = isFocus ? 'primary' : 'success'
    return (

        <Columns.Column>

            < Tile onClick={updateTask} renderAs="article" kind="child" notification color={color} >
                <div className="content">
                    <Heading>{name}</Heading>
                    <Heading subtitle>{description}</Heading>
                    <Heading subtitle>{thoughts}</Heading>
                    <div className="content" />
                </div>
                <Button onClick={deleteTask}>Delete</Button>

            </Tile >
        </Columns.Column>

    )
}




