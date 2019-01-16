import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, Heading } from 'react-bulma-components'
import FocusCard from './FocusCard'
import {getMemberTasks} from '../actions/tasks'

//adjust so displays active task

class MemberFocus extends Component {
    constructor(props) {
        super(props)
        this.state = null
    }

    componentDidMount = () => {
        this.props.getMemberTasks(this.props.userId)
    
       
      }


    render() {

        return (
            <div>
                <Box>
                    <Heading>Task Focus Zone</Heading>
                    {
                        this.props.tasks.filter(task => {
                            return task.isFocus
                        }).map(task => <FocusCard key={task.id} {...task} />)
                    }
                </Box>


                <Link to={'./memberdash'}>
                    return to dashboard
      </Link>

            </div>
        )
    }
}




const mapStateToProps = state => ({
    tasks: state.tasks,
    userId: state.authentication.user.id
})

const mapDispatchToProps = dispatch => bindActionCreators({
getMemberTasks: getMemberTasks
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberFocus);
