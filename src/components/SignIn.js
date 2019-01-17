import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Heading, Box, Button, Form, Container } from 'react-bulma-components'
import {connect} from 'react-redux'
import request from '../utils/request'
import {setAuthentication} from '../actions/authentication'
import { bindActionCreators } from 'redux';

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

        request('/login', 'post', {
            username: username.value,
            password: password.value })
        .then(response => {
            this.setState({ showErrorMessage: false })
            localStorage.setItem('token', response.data.token)
            return request('/login')
        })
        .then(response => {
            setAuthentication(response.data)
            this.props.history.push('/toggle')
        })
        .catch(error => {
            console.log(error)
            this.setState({showErrorMessage: true})
        })
    }
    render() {
        return (
            <div className="sign_container">
            <Box>
                <Heading>
                    <div className="title_signin">Sign In Here</div>
                </Heading>
                
                <Container>
                <form onSubmit={this.handleSubmit}>
                    <Field className="sign_forms">
                        <Label className="sign_font">Username</Label>
                        <Control>
                            <Input onChange={this.handleChange} color="success" type="text" name="username" value={this.state.username} />
                        </Control>
                    </Field>
                    <Field className="sign_forms">
                        <Label className="sign_font">Password</Label>
                        <Control>
                            <Input onChange={this.handleChange} color="success" type="password" name="password" value={this.state.password} />
                        </Control>
                    </Field>
                    <div className="btn_group">
                    <Field kind="group" className="sign_group">
                        <Control>
                            <Button className="button is-primary is-medium" color="success" type="primary">Submit</Button>
                        </Control>
                        <Link to={'/landing'}>
                            <Button className="button is-primary is-medium">Cancel</Button>
                        </Link>
                    </Field>
                    </div>
                </form>
                </Container>

            </Box>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({authentication: state.authentication})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setAuthentication: setAuthentication
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)