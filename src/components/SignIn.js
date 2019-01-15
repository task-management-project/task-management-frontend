import React, { Component } from 'react'
import { Heading, Box, Button, Form } from 'react-bulma-components'
const { Label, Field, Input, Control } = Form


export default class SignIn extends Component {
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
        console.log(e)
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