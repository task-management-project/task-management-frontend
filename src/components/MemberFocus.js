import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Icon } from 'react-icons-kit'
import {chart} from 'react-icons-kit/entypo/chart'
import { Box, Heading, Form, Button } from 'react-bulma-components'
import FocusCard from './FocusCard'
import { getMemberTasks, updateTask } from '../actions/tasks'

const { Label, Field, Input, Control } = Form


class MemberFocus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            thoughts: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateTask(this.props.userId, this.props.task.id, {thoughts: this.state.thoughts})
       
    }

    componentDidMount = () => {
        this.props.getMemberTasks(this.props.userId)

    }


    render() {

        return (
            <div className="taskview_container">
                <Box classNAme="taskview_box">
                <Heading>
                    <div className="title_signin">
                        <span style={{ color: '#addfe2' }}>
                        <Icon icon={chart} size={40}/>  
                        </span>
                        <span> Task Focus Zone</span>
                    </div>
                </Heading>
                <Box className="taskfocusbox">
                    {this.props.task ?
                        <FocusCard {...this.props.task} />
                        : null
                    }
                        <form onSubmit={this.handleSubmit}>
                            <Field>
                                <Label>Thoughts:</Label>
                                <Control>
                                    <Input onChange={this.handleChange} color="primary" type="text" name="thoughts" value={this.state.thoughts} />
                                </Control>
                            </Field>
                            <Control>
                                <Button type="primary">Submit</Button>
                            </Control>
                        </form>
                </Box>
                    <div class="breadcrumbs">
                        <Link to={'./toggle'}>Go Back      |      </Link >
                        <Link to={'/membertaskform'}>Add Task      |     </Link >
                        <Link to={'./memberdash'}>Dashboard</Link >
                    </div>
                </Box>
            </div>
        )
    }
}




const mapStateToProps = state => ({
    task: state.tasks.find(task => task.isFocus),
    userId: state.authentication.user.id
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getMemberTasks: getMemberTasks,
    updateTask: updateTask
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberFocus);
