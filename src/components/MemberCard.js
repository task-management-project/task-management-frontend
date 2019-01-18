import React from 'react'
import { Heading, Columns, Card, Box } from 'react-bulma-components'
import { Icon } from 'react-icons-kit'
import {ic_grade} from 'react-icons-kit/md/ic_grade'
import {userMinus} from 'react-icons-kit/icomoon/userMinus'
import {ic_delete_forever} from 'react-icons-kit/md/ic_delete_forever'


export default function MemberCard({username, name, description, thoughts, deleteUserFromTeam}) {
    return (

        <Columns.Column>
            <Box className="boxforstars">
            <Card className="taskcard has-background-link">
                <Card.Header >
                    <Card.Header.Title className="taskcardtitle">{username}</Card.Header.Title>
                </Card.Header>
                <Card.Content>
                    <Heading className="carddescription">{name}</Heading>
                    <Heading className="cardthought"subtitle="cardthoughts">{description}</Heading>
                    <Heading className="cardthought"subtitle="cardthoughts">{thoughts}</Heading>
                </Card.Content>
                <Card.Footer className="cardbtn">
                    <Card.Footer.Item  onClick={deleteUserFromTeam}>
                        <span style={{ color: '#addfe2' }}>
                            <Icon icon={userMinus} size={30}/>  
                        </span>Remove User From Team 
                        
                    </Card.Footer.Item>
                </Card.Footer>
            </Card>
            </Box>

        </Columns.Column>

        // <Tile kind="parent">
        //     <Tile renderAs="article" kind="child" notification color="success">
        //         <div className="content">
        //             <Heading>{username}</Heading>
        //             <Heading subtitle>{name}</Heading>
        //             <Heading subtitle>{description}</Heading>
                   
        //             <div className="content" />
        //         </div>
        //     </Tile>
        // </Tile >

    )
}


