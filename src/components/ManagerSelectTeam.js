import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, Heading, Dropdown, Form, Button, Table } from 'react-bulma-components'
import {buildTeam, createTeam} from '../actions/manager'
import { Icon } from 'react-icons-kit'
import {group} from 'react-icons-kit/fa/group'
import {globe} from 'react-icons-kit/fa/globe'
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
        if(!this.state.teamName.length && !this.state.teamDescription.length){
            this.setState({showErrorMessage: true})
        }
        else{
            this.props.createTeam(
                Array.from(this.state.teamMembers), 
                this.state.teamName,
                this.state.teamDescription,
                this.props.userId,
                () => {this.props.history.push('/managerdash')})
            this.setState({teamMembers: new Set()})
        }   
    }

    closeErrorMessage = (e) => {
        e.preventDefault()
        this.setState({showErrorMessage: false})
    }

    render() {
        return (
            <div className="sign_container">
            <Box className="focustaskboxctr">
            <Heading>
                <div className="title_signin">
                    <span style={{ color: '#addfe2' }}>
                        <Icon icon={group} size={40}/>  
                    </span>
                    <span> Create New Team </span>
                </div>
            </Heading>
                <form onSubmit={null}>
                <Field>
                    <Label className="sign_font">Team Name</Label>
                    <Control>
                        <Input onChange={this.handleChange} color="success" type="text" name="teamName" value={this.state.teamName} />
                    </Control>
                </Field>
                <Field>
                    <Label className="sign_font">Team Description</Label>
                    <Control>
                        <Input onChange={this.handleChange} color="success" type="text" name="teamDescription" value={this.state.teamDescription} />
                    </Control>
                </Field>
                </form>
            
            <div className="team_select_title">
                <span style={{ color: '#addfe2' }}>
                    <Icon icon={globe} size={30}/>  
                </span>
                 Assemble Your Team
            </div>
            <div>
            <Dropdown  value={this.state.selected} onChange={this.onChange}>
                {(this.props.users) ?
                this.props.users.map(ele => <Item className="team_select_dropdown" value={ele.id}>{ele.username}</Item>) :
                <Item value='Loading'>Loading</Item>}

            </Dropdown>
            <Box>
                <Table>
                <tbody className="teamselecttable">
                    {(this.state.teamMembers) ?
                        (Array.from(this.state.teamMembers).map(ele => <tr><td>{this.props.users[ele-1].username}</td></tr>)) :
                        null}
                </tbody>
                </Table>
            </Box>
            
            <Field className="teamselectbtn_group" kind="group">
                <Control>
                    <Button onClick={this.handleSubmit} className="button is-medium" color="success">Submit</Button>
                </Control>
                <Control>
                    <Button renderAs="a" href="/toggle"className="button is-primary is-medium">Cancel</Button>
                </Control>
            </Field>
            
            </div>

            <div class="breadcrumbs">
                <Link to={'/toggle'}>Create Task | </Link >
                <Link to={'./managerdash'}>Manager Dashboard | </Link >
                <Link to={'/focus'}>Focus</Link >
            </div>
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



