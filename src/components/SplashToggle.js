import React, { Component } from 'react'
import { Container, Card, Media, Content, Columns } from 'react-bulma-components'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {user} from 'react-icons-kit/fa/user'
import {users} from 'react-icons-kit/fa/users'

export default function SplashToggle() {
    return (
        <div className="columnctr"> 
        <Container  >
            <Columns className="splashboxctr">
            <Columns.Column size={3} className="columnctr2">
            <Link to={'/membertaskform'}>
            <Card className="rolecard has-text-centered">
                <Card.Header>
                    <Media className="iconctr">
                        <div style={{ color: '#ac5289' }}>
                            <Icon icon={user} size={60}/>
                        </div>
                    </Media>
                </Card.Header>
                <Card.Content className="cardtitle">
                    Member
                </Card.Content>
                <Card.Footer>
                    <Content className="cardtext">
                        Create a task and start working with our app!
                    </Content>
                </Card.Footer>
            </Card>
            </Link>
            </Columns.Column>
            
            <Columns.Column size={3}>
            <Link to={'/managerselectteam'}>
            <Card className="rolecard has-text-centered">
                <Card.Header>
                    <Media className="iconctr">
                        <div style={{ color: '#F4A261' }}>
                            <Icon icon={users} size={60}/>
                        </div>
                    </Media>
                </Card.Header>
                <Card.Content className="cardtitle">
                    Manager
                </Card.Content>
                <Card.Footer>
                    <Content className="cardtext">
                        Create a team and manage your team!
                    </Content>
                </Card.Footer>
            </Card> 
            </Link>
            </Columns.Column>
            </Columns>
        </Container>
        </div >
    )
}