import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, Heading, Dropdown, Form, Button, Table } from 'react-bulma-components'
import {buildTeam, createTeam} from '../actions/manager'
const { Item } = Dropdown
const { Label, Field, Input, Control } = Form

class ManagerSelectTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamName: '',
            teamDescription: '',
            teamMembers: new Set(),
            selected: 'active'
        }
    }
    componentDidMount(){
        this.props.buildTeam()
    }
    onChange = selected => {
        let result = new Set(Array.from(this.state.teamMembers))
        result.has(selected) ? 
            result.delete(selected) :
            result.add(selected)
        return this.setState({teamMembers: result, selected: {selected}})}

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createTeam(
            Array.from(this.state.teamMembers), 
            this.state.teamName,
            this.state.teamDescription,
            this.props.userId)
        this.setState({teamMembers: new Set()})
        this.props.history.push('/managerdash')
    }

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
            <Dropdown value={this.state.selected} onChange={this.onChange}>
                {(this.props.users) ?
                this.props.users.map(ele => <Item value={ele.id}>{ele.username}</Item>) :
                <Item value='Loading'>Loading</Item>}

            </Dropdown>
            <Box>
                <Table>
                    <tbody>
                        {(this.state.teamMembers) ?
                            (Array.from(this.state.teamMembers).map(ele => <tr><td>{this.props.users[ele-1].username}</td></tr>)) :
                            null}
                    </tbody>
                </Table>
            </Box>
            <br /> <br />
            <Link to={'./toggle'}> Go Back </Link>
            <br /> <br />
            <Link to={'./managerdash'}>Go to Manager Dashboard</Link>
            <Field kind="group">
                <Control>
                    <Button  type="primary" onClick={this.handleSubmit}>Submit</Button>
                </Control>
                <Control>
                    <Button color="link" renderAs="a">Cancel</Button>
                </Control>
            </Field>
        </Box>
        
        </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.manager.data,
    userId: state.authentication.user.id
})

const mapDispatchToProps = dispatch => bindActionCreators({
buildTeam: buildTeam,
createTeam: createTeam
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManagerSelectTeam);



