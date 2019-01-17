import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Icon } from 'react-icons-kit'
import { vcard } from 'react-icons-kit/fa/vcard'
import { Heading, Box, Button, Form, Container, Notification } from 'react-bulma-components'
import { createUser } from '../actions/users';
const { Label, Field, Input, Control } = Form


class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            matchPassword: '',
            position: '',
            showErrorMessage: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.username || !this.state.password || !this.state.matchPassword){
            this.setState({showErrorMessage: true})
        }
        else if (this.state.password === this.state.matchPassword) {
            this.props.createUser({ 
                username: this.state.username, password: this.state.password, position: this.state.position 
            }, () => { this.props.history.push('/signin') })
        }
        else if (this.state.password === this.state.matchPassword){
            this.setState({showErrorMessage: true})
        }
    }

    closeErrorMessage = (e) => {
        e.preventDefault()
        this.setState({showErrorMessage: false})
    }

    render() {
        return (
            <div className="sign_container">
                <Box>
                    <Heading>
                        <div className="title_signin">
                            <span style={{ color: '#addfe2' }}>
                                <Icon icon={vcard} size={50} />
                            </span>
                            <span> Sign Up Here</span>
                        </div>
                    </Heading>
                    <Container>
                        <form autocomplete="off" onSubmit={this.handleSubmit}>

                            <Field className="sign_forms">
                                <Label className="sign_font">Username</Label>
                                <Control>
                                    <Input onChange={this.handleChange} color="success" type="text" name="username" value={this.state.username} />
                                </Control>
                            </Field>
                            <Field className="sign_forms">
                                <Label className="sign_font">Password</Label>
                                <Control>
                                    <Input onChange={this.handleChange} color="success" type="text" name="password" value={this.state.password} />
                                </Control>
                            </Field>
                            <Field className="sign_forms">
                                <Label className="sign_font">Retype Password</Label>
                                <Control>
                                    <Input onChange={this.handleChange} color="success" type="password" name="matchPassword" value={this.state.matchPassword} />
                                </Control>
                            </Field>
                            <Field className="sign_forms">
                                <Label className="sign_font">Position (optional)</Label>
                                <Control>
                                    <Input onChange={this.handleChange} color="success" type="text" name="position" value={this.state.position} />
                                </Control>
                            
                            {this.state.showErrorMessage ? (
                                <Notification className="notification">
                                    Password doesn't match or you missed some information.
                                    <Button remove onClick={this.closeErrorMessage}/>
                                </Notification> 
                            ) : null}
                            
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

                </Box >
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
    createUser: createUser

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)