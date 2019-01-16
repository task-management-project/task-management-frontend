import React, { Component } from 'react'
import { Heading, Box, Button, Form } from 'react-bulma-components'
import {connect} from 'react-redux'
import axios from 'axios'
const { Label, Field, Input, Control } = Form


class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        const {username, password} = e.target

        axios.post('http://localhost:5000/login', {
            username: username.value,
            password: password.value })
        .then(response => {
            this.setState({ showErrorMessage: false })
            
            localStorage.setItem('token', response.data.token)
        })
        .then(response => {
            this.props.setAuthentication(response.data)
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({showErrorMessage: true})
        })
    }
    render() {
        return (
            <Box>
                <Heading>Sign In Here</Heading>
                <form onSubmit={this.handleSubmit}>
                    <Field>
                        <Label>Username</Label>
                        <Control>
                            <Input onChange={this.handleChange} color="success" type="text" name="username" value={this.state.username} />
                        </Control>
                    </Field>
                    <Field>
                        <Label>Password</Label>
                        <Control>
                            <Input onChange={this.handleChange} color="success" type="text" name="password" value={this.state.password} />
                        </Control>
                    </Field>
                    <Field kind="group">
                        <Control>
                            <Button type="primary">Submit</Button>
                        </Control>
                        <Control>
                            <Button color="link">Cancel</Button>
                        </Control>
                    </Field>
                </form>
            </Box>
        )
    }
}

const mapStateToProps = (state) => ({authentication: state.authentication})

const mapDispatchToProps = (dispatch) => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)