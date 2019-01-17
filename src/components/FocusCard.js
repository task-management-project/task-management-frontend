import React from 'react'
import { Tile, Heading, } from 'react-bulma-components'





export default function TaskCard({name, description, thoughts,}) {
    return (

        <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="primary">
                <div className="content">
                    <Heading>{name}</Heading>
                    <Heading subtitle>{description}</Heading>
                    <Heading subtitle>{thoughts}</Heading>
                    <div className="content" />
                </div>
            </Tile>
        </Tile >

    )
}

