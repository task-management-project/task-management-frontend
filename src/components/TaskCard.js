import React from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { Tile, Heading, Button } from 'react-bulma-components'
// import { deleteTask } from '../actions/tasks';




export default function TaskCard({name, description, thoughts, deleteTask}) {
    return (

        <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="success">
                <div className="content">
                    <Heading>{name}</Heading>
                    <Heading subtitle>{description}</Heading>
                    <Heading subtitle>{thoughts}</Heading>
                    <div className="content" />
                </div>
                <Button onClick={deleteTask}>Delete</Button>
            </Tile>
        </Tile >

    )
}


// const mapStateToProps = state => ({
//     task: state.tasks
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
// deleteTask: deleteTask
// }, dispatch)

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TaskCard);


