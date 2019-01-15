import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, Heading, Dropdown } from 'react-bulma-components'
const { Item } = Dropdown


class ManagerSelectTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamName: 'placeholder team name',
            teamDescription: 'placeholder team description',
            teamMembers: ["person three", "person four", "person seven"]
        }
    }


    render() {
        return (
            <div>
            <Box>
                <Heading>{this.state.teamName}</Heading>
                <Heading>{this.state.teamDescription}</Heading>
            </Box>
        <Box>
            <Heading>Assemble Your Team</Heading>
            {/* change dropdown to map that populates with list of members */}
            <Dropdown>
                <Item value="item">Person 1</Item>
                <Item value="other">Person 2</Item>
                <Item value="active">Person 3</Item>
                <Item value="other 2">Person 4</Item>

            </Dropdown>
            <br /> <br />
            <Link to={'./toggle'}> Go Back </Link>
            <br /> <br />
            <Link to={'./managerdash'}>Go to Manager Dashboard</Link>
        </Box>
        
        </div>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManagerSelectTeam);



