import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, Heading, Dropdown, Form } from 'react-bulma-components'
const { Item } = Dropdown
const { Label, Field, Input, Control } = Form

class ManagerSelectTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamName: '',
            teamDescription: '',
            teamMembers: ["person three", "person four", "person seven"]
        }
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    render() {
        return (
            <div>
            <Box>
                <form onSubmit={null}>
                    <Field>
                        <Label>Team Name</Label>
                        <Control>
                            <Input onChange={this.handleChange} color="success" type="text" name="teamName" value={this.state.teamName} />
                        </Control>
                    </Field>
                    <Field>
                        <Label>Team Description</Label>
                        <Control>
                            <Input onChange={this.handleChange} color="success" type="text" name="teamDescription" value={this.state.teamDescription} />
                        </Control>
                    </Field>
                </form>
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



