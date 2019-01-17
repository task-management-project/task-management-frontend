import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, Heading, Tile } from 'react-bulma-components'
import TaskCard from './TaskCard'
import { getMemberTasks, deleteTask } from '../actions/tasks'


class MemberDashboard extends Component {
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
        <Heading>Task Overview</Heading>
        { console.log("my log here:", this.props.tasks)}
        
        <Box>
          <Tile kind="ancestor">
            <Tile size={12}>

              {
                this.props.tasks.map(task => {
                  return <TaskCard key={task.id} {...task} deleteTask={() => this.props.deleteTask(this.props.userId, task.id)} />
                })
              }
            </Tile>
          </Tile>
        </Box>
        <Link to={'/membertaskform'}>Add Task</Link>
        <br /><br />
        <Link to={'/focus'}>Focus</Link>

      </div>
    )
  }

}






const mapStateToProps = state => ({
  tasks: state.tasks,
  userId: state.authentication.user.id
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMemberTasks: getMemberTasks,
  deleteTask: deleteTask

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberDashboard);
