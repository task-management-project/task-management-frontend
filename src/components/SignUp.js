import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Heading, Box, Button, Form } from 'react-bulma-components'
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
            <Box>
                <Heading>
                    <div className="title_signin">Sign Up Here</div>
                </Heading>
                <form onSubmit={this.handleSubmit}>
                    <Field >
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
                    <Field>
                        <Label>Retype Password</Label>
                        <Control>
                            <Input onChange={this.handleChange} color="success" type="text" name="matchPassword" value={this.state.matchPassword} />
                        </Control>
                    </Field>
                    <Field kind="group">
                        <Control>
                            <Button type="primary">Submit</Button>
                        </Control>

                        <Link to={'/landing'}>
                            <Button color="link">Back</Button>
                        </Link>
                    </Field>
                </form>

            </Box >
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