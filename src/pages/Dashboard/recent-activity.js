import React from "react"
import { Card, CardBody, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from "reactstrap"
import SimpleBar from "simplebar-react"
import Weavy from "../../weavy/Weavy"
import WeavyApp from "../../weavy/WeavyApp"

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGF2ZSIsImlzcyI6ImNsaWVudGlkIiwiZXhwIjoyMTIyMTIyMjIzLCJlbWFpbCI6ImRhdmUwQHdlYXZ5LmNvbSIsInN1YiI6ImRhdmUwQHdlYXZ5LmNvbSIsImNsaWVudF9pZCI6ImNsaWVudGlkIn0.q1ecHw6ORxpj9PIYG3FtHv_QLSQ-U7OxZ9-_D-ykpKU";



const RecentActivity = () => {
    return (
        <Card>
            <CardBody>
                <div className="float-end">
                    <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="text-reset" id="dropdownMenuButton5" caret>
                            <span className="text-muted">Recent<i className="mdi mdi-chevron-down ms-1"></i></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                            <DropdownItem href="#">Recent</DropdownItem>
                            <DropdownItem href="#">By Users</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>

                <h4 className="card-title mb-4">Recent Activity</h4>

                <SimpleBar className="activity-feed mb-0 ps-2" style={{ maxHeight: '336px' }}>
                <Weavy jwt={token}>
                     <div className="App" >
                        <WeavyApp
                          spaceKey="dashboard-space"
                          spaceName="React Space"
                          appKey="react-posts"
                          appName="React posts"
                          appType="posts"
                          height="419px"
                        />
                     </div>
                  </Weavy>  

                </SimpleBar>

            </CardBody>
        </Card>
    )
}

export default RecentActivity