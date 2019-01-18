import React from 'react'
import { Heading, Columns, Card, Box } from 'react-bulma-components'
import { Icon } from 'react-icons-kit'
import {ic_grade} from 'react-icons-kit/md/ic_grade'
import {ic_delete_forever} from 'react-icons-kit/md/ic_delete_forever'

export default function TaskCard({ name, description, thoughts, isFocus, deleteTask, updateTask }) {
    const color = isFocus ? 'info' : 'primary'
    return (

        <Columns.Column>
            <Box className="boxforstars">
                {isFocus? <span className='starforfocus' style={{ color: 'hsl(348, 100%, 61%)' }}>
                    <Icon icon={ic_grade} size={40}/>  
                </span>: null}
            <Card className={`taskcard has-background-${color}`} onClick={updateTask}>
                <Card.Header >
                    <Card.Header.Title className="taskcardtitle">{name}</Card.Header.Title>
                </Card.Header>
                <Card.Content>
                    <Heading className="carddescription">{description}</Heading>
                    <Heading className="cardthought"subtitle="cardthoughts">{thoughts}</Heading>
                </Card.Content>
                <Card.Footer className="cardbtn">
                    <Card.Footer.Item  onClick={deleteTask}>
                        Remove
                        <span style={{ color: '#addfe2' }}>
                            <Icon icon={ic_delete_forever} size={30}/>  
                        </span>
                    </Card.Footer.Item>
                   
                </Card.Footer>
            </Card>
            </Box>

        </Columns.Column>

    )
}




