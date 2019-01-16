import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, Heading, Tile } from 'react-bulma-components'
import TaskCard from './TaskCard'
import { getMemberTasks } from '../actions/tasks'


class MemberDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = null


  }

  componentDidMount() {
    this.props.getMemberTasks(2)
    console.log(this.props.tasks)
  }
  render() {
    return (
      <div>
        <Heading>Task Overview</Heading>
        {/* replace below with actual TaskCards */}

        <Box>
          <Tile kind="ancestor">
            <Tile size={14}>
            {<TaskCard />}
            {<TaskCard />}
            {<TaskCard />}
            </Tile>
          </Tile>
        </Box>
        <Link to={'/membertaskform'}>Add Task</Link>
        <br /><br />
        <Link to={'/toggle'}>Go Back</Link>

      </div>
    )
  }

}






const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMemberTasks: getMemberTasks

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberDashboard);
