import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, Heading} from 'react-bulma-components'
import TaskCard from './TaskCard'

//adjust so displays active task

const MemberFocus = () => (
    <div>
        <Box>
            <Heading>Task Focus Zone</Heading>
            <TaskCard/>
        </Box>
        
      
      <Link to={'./memberdash'}>
        return to dashboard
      </Link>

    </div>

)





const mapStateToProps = state => ({
    userId: state.authentication.user.id
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberFocus);
