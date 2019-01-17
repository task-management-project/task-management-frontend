import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTask } from '../actions/tasks'
import { Icon } from 'react-icons-kit'
import {clipboard} from 'react-icons-kit/fa/clipboard'
import { Heading, Box, Button, Form, Notification } from 'react-bulma-components'
const { Label, Field, Input, Control } = Form


class MemberTaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(!this.state.name.length && !this.state.description.length){
            this.setState({showErrorMessage: true})
        }
        else{
            this.props.addTask(this.props.userId, this.state)
        }
    }

    closeErrorMessage = (e) => {
        e.preventDefault()
        this.setState({showErrorMessage: false})
    }

    render() {
        console.log(this.props.showErrorMessage)
        return (
            <div className="sign_container">
            <Box className="taskboxctr">
                <Heading>
                    <div className="title_signin">
                        <span style={{ color: '#addfe2' }}>
                        <Icon icon={clipboard} size={40}/>  
                        </span>
                        <span> Create New Task </span>
                    </div>
                </Heading>
                <form onSubmit={this.handleSubmit}>
                <Field>
                    <Label className="sign_font">Task Name</Label>
                    <Control>
                        <Input onChange={this.handleChange} color="success" type="text" name="name" value={this.state.name} />
                    </Control>
                </Field>
                <Field>
                    <Label className="sign_font">Description</Label>
                    <Control>
                        <Input onChange={this.handleChange} color="success" type="text" name="description" value={this.state.description} />
                    </Control>
                </Field>
                {this.state.showErrorMessage ? (
                <Notification className="notification">
                    Please input task name and description.
                    <Button remove onClick={this.closeErrorMessage}/>
                </Notification> ) : null}

                <div className="btn_group">
                <Field kind="group" className="taskbtn_group">
                    <Control>
                        <Button className="button is-primary is-medium" color="success" type="primary">Submit</Button>
                    </Control>
                    <Control>
                        <Button className="button is-primary is-medium">Cancel</Button>
                    </Control>
                </Field>
                </div>
                </form>
            
                <div class="breadcrumbs">
                    <Link to={'/toggle'}>Go Back      |      </Link >
                    <Link to={'/memberdash'}>Task Overview      |     </Link >
                    <Link to={'/focus'}>Task Focus</Link >
                </div>
            </Box>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userId: state.authentication.user.id
})

const mapDispatchToProps = dispatch => bindActionCreators({
addTask: addTask
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberTaskForm);

