import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Heading, Box, Button, Form } from 'react-bulma-components'
const { Label, Field, Input, Control } = Form


class MemberTaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: '',
            description: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {

    }
    render() {
        return (
            <Box>
                <Heading>Create New Task</Heading>
            <form>
                <Field>
                    <Label>Task</Label>
                    <Control>
                        <Input onChange={this.handleChange} color="success" type="text" name="task" value={this.state.task} />
                    </Control>
                </Field>
                <Field>
                    <Label>Description</Label>
                    <Control>
                        <Input onChange={this.handleChange} color="success" type="text" name="description" value={this.state.description} />
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
                <br/>
                <Link to={'/toggle'}>Go Back</Link >
                <br/>
                <Link to={'/memberdash'}>Task Overview</Link >
                <br/>
                <Link to={'/focus'}>Task Focus</Link >

            </Box>

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
)(MemberTaskForm);

