import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Box, Heading, Dropdown } from 'react-bulma-components'
const { Item } = Dropdown


export default class ManagerSelectTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false
        }
    }
    onChange = () => {

    }
    render() {
        return (
            <Box>
                <Heading>Assemble Your Team</Heading>
                <Item value={this.state.selected} onChange={this.onChange} color="info" {...this.props}>
                    <Item value="item">Item item</Item>
                    <Item value="other">Other Item item</Item>
                    <Item value="active">Active Item item</Item>
                    <Item value="other 2">Other Item item</Item>
                    <Item.Divider />
                    <Item value="divider">With divider</Item>
                </Item>
                <Link to={'./toggle'}> Go Back </Link>

            </Box>

        )
    }
} 