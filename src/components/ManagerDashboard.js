import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, Heading, Tile } from 'react-bulma-components'


const ManagerDashboard = ({ things }) => (
    <div>
        <Heading>Team Activities</Heading>
        {/* replace below with actual ManagerCards */}
        <Box>
      <Tile kind="ancestor">
        <Tile size={8} vertical>
          <Tile>
            <Tile kind="parent" vertical>
              <Tile renderAs="article" kind="child" notification color="primary">
                <Heading>Vertical...</Heading>
                <Heading subtitle>Top tile</Heading>
              </Tile>
              <Tile renderAs="article" kind="child" notification color="warning">
                <Heading>Tiles...</Heading>
                <Heading subtitle>Bottom Tile...</Heading>
              </Tile>
            </Tile>
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="info">
                <Heading>Middle Tile...</Heading>
                <Heading subtitle>With image Tile...</Heading>
              </Tile>
            </Tile>
          </Tile>
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="danger">
              <Heading>Wide tile</Heading>
              <Heading subtitle>Aligned with the right tile</Heading>
              <div className="content" />
            </Tile>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile renderAs="article" kind="child" notification color="success">
            <div className="content">
              <Heading>Tall tile</Heading>
              <Heading subtitle>With even more content</Heading>
              <div className="content" />
            </div>
          </Tile>
        </Tile>
      </Tile>
    </Box>
    <Link to={'/managerselectteam'}>Adjust Team</Link>
    <br/><br/>
    <Link to={'/toggle'}>Go Back</Link>

    </div>

)





const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManagerDashboard);
