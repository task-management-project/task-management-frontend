import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, Heading, Dropdown } from 'react-bulma-components'
const { Item } = Dropdown


const ManagerSelectTeam = ({ things }) => (

    <Box>
        <Heading>Assemble Your Team</Heading>
        {/* change dropdown to map that populates with list of members */}
       <Dropdown>
            <Item value="item">Person 1</Item>
            <Item value="other">Person 2</Item>
            <Item value="active">Person 3</Item>
            <Item value="other 2">Person 4</Item>
            
        </Dropdown>
        <br/> <br/>
        <Link to={'./toggle'}> Go Back </Link>
        <br/> <br/>
        <Link to={'./managerdash'}>Go to Manager Dashboard</Link>
    </Box>


)

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => bindActionCreators({
    
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManagerSelectTeam);



