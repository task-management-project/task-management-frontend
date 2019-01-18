import React from 'react'
import { Tile, Heading, } from 'react-bulma-components'


export default function TaskCard({name, description, thoughts,}) {
    return (

        <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="info">
                <div className="focuscard">
                    <Heading className="focuscardname">{name}</Heading>
                    <Heading subtitle className="focuscarddescription">{description}</Heading>
                    <Heading className="focuscardthought">{thoughts}</Heading>
                    <div/>
                </div>
            </Tile>
        </Tile >

    )
}

