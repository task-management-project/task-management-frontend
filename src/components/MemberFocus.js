import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box} from 'react-bulma-components'


const MemberFocus = () => (
    <div>
        <Box>
            Insert Task Here
        </Box>
        
      
      <Link to={'./memberdash'}>
        escape from focus
      </Link>

    </div>

)





const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberFocus);
