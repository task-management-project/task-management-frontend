import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Heading, Box, Button, Form, Container } from 'react-bulma-components'
const { Label, Field, Input, Control } = Form


class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            matchPassword: ''

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    render() {
        return (
            <div className="sign_container">
            <Box>
                <Heading>
                    <div className="title_signin">Sign Up Here</div>
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
                            <Input onChange={this.handleChange} color="success" type="text" name="password" value={this.state.password} />
                        </Control>
                    </Field>
                    <Field className="sign_forms">
                        <Label className="sign_font">Retype Password</Label>
                        <Control>
                            <Input onChange={this.handleChange} color="success" type="text" name="matchPassword" value={this.state.matchPassword} />
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

            </Box >
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
)(SignUp)