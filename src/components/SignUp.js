import React from 'react'
import { Heading, Box, Button, Form } from 'react-bulma-components'
const {Label, Field, Input, Control} = Form


export default function SignUp() {
    return (
        <Box>
            <Heading>Create an Account</Heading>

            <Field>
                <Label>Username</Label>
                <Control>
                    <Input color="success" type="text"  />
                </Control>
            </Field>
            <Field>
                <Label>Password</Label>
                <Control>
                    <Input color="success" type="text"  />
                </Control>
            </Field>
            <Field>
                <Label>Retype Password</Label>
                <Control>
                    <Input color="success" type="text"  />
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

        </Box>
    )
}