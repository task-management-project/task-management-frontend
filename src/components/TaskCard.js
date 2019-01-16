import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { Tile, Heading, Button } from 'react-bulma-components'
import { deleteTask } from '../actions/tasks';




function TaskCard() {
    return (

        <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="success">
                <div className="content">
                    <Heading>Task title</Heading>
                    <Heading subtitle>Task description</Heading>
                    <Heading subtitle>Thoughts</Heading>
                    <div className="content" />
                </div>
                <Button>Delete</Button>
            </Tile>
        </Tile >

    )
}


const mapStateToProps = state => ({
    task: state.tasks
})

// const mapDispatchToProps = dispatch => bindActionCreators({
// addTask: addTask
// }, dispatch)

export default connect(
    mapStateToProps,
)(TaskCard);


