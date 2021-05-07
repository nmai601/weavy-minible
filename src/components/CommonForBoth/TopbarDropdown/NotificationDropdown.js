import React, { useState } from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap"
import SimpleBar from "simplebar-react"
import Weavy from '../../../weavy/Weavy';
import WeavyApp from '../../../weavy/WeavyApp';


//i18n
import { withTranslation } from "react-i18next"

const NotificationDropdown = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)

  var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGF2ZSIsImlzcyI6ImNsaWVudGlkIiwiZXhwIjoyMTIyMTIyMjIzLCJlbWFpbCI6ImRhdmUwQHdlYXZ5LmNvbSIsInN1YiI6ImRhdmUwQHdlYXZ5LmNvbSIsImNsaWVudF9pZCI6ImNsaWVudGlkIn0.q1ecHw6ORxpj9PIYG3FtHv_QLSQ-U7OxZ9-_D-ykpKU";
 

  return (
    <>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="dropdown d-inline-block"
        tag="li"
      >
        <DropdownToggle
          className="btn header-item noti-icon waves-effect"
          tag="button"
          id="page-header-notifications-dropdown"
        >
          <i className="uil-bell"></i>
          {/* <span className="badge bg-danger rounded-pill">3</span> */}
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">

      <Weavy jwt={token}>
        <div className="App" style={{height:"200px!important"}}>
          <WeavyApp
            spaceKey="react-space"
            spaceName="React Space"
            appKey="react-notifications"
            appName="React Notifications"
            appType="notifications"
            height="400px"
            />
        </div>
      </Weavy>
         
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default withTranslation()(NotificationDropdown)

NotificationDropdown.propTypes = {
  t: PropTypes.any
}