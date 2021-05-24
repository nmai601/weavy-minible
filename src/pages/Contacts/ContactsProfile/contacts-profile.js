import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import Weavy from "../../../weavy/Weavy"
import WeavyApp from "../../../weavy/WeavyApp"
import { map } from "lodash"
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import classnames from 'classnames';

import Reviews from "./Reviews"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

// import charts
import { getUserProfile } from "../../../store/actions"
import ToolkitProvider from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"
import projectColumns from "./projectColumns"
import SimpleBar from "simplebar-react"

const ContactsProfile = props => {
  const { userProfile, onGetUserProfile } = props
  // eslint-disable-next-line no-unused-vars
  const [miniCards, setMiniCards] = useState([
    {
      title: "Completed Projects",
      iconClass: "bx-check-circle",
      text: "125",
    },
    { title: "Pending Projects", iconClass: "bx-hourglass", text: "12" },
    { title: "Total Revenue", iconClass: "bx-package", text: "$36,524" },
  ])

  const [activeTab, setActiveTab] = useState('1');

  const profiletoggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGF2ZSIsImlzcyI6ImNsaWVudGlkIiwiZXhwIjoyMTIyMTIyMjIzLCJlbWFpbCI6ImRhdmUwQHdlYXZ5LmNvbSIsInN1YiI6ImRhdmUwQHdlYXZ5LmNvbSIsImNsaWVudF9pZCI6ImNsaWVudGlkIn0.q1ecHw6ORxpj9PIYG3FtHv_QLSQ-U7OxZ9-_D-ykpKU";

  useEffect(() => {
    onGetUserProfile()
  }, [onGetUserProfile])

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="Profile" />

          <Row>
            <Col xl="4">
              <Card className="card h-100">
                <CardBody>
                  <div className="text-center">
                    <UncontrolledDropdown className="float-end">
                      <DropdownToggle tag="a" className="text-body font-size-16" caret>
                        <i className="uil uil-ellipsis-h"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem href="#">Edit</DropdownItem>
                        <DropdownItem href="#">Action</DropdownItem>
                        <DropdownItem href="#">Remove</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <div className="clearfix"></div>
                    <div>
                      <img
                        src={userProfile.img}
                        alt=""
                        className="avatar-lg rounded-circle img-thumbnail"
                      />
                    </div>
                    <h5 className="mt-3 mb-1">{userProfile.name}</h5>
                    <p className="text-muted">{userProfile.designation}</p>

                    <div className="mt-4">
                      <button type="button" className="btn btn-light btn-sm"><i className="uil uil-envelope-alt me-2"></i> Message</button>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="text-muted">
                    <h5 className="font-size-16">About</h5>
                    <p>Hi I'm Marcus,has been the industry's standard dummy text To an English person, it will seem like simplified English, as a skeptical Cambridge.</p>
                    <div className="table-responsive mt-4">
                      <div>
                        <p className="mb-1">Name :</p>
                        <h5 className="font-size-16">Marcus</h5>
                      </div>
                      <div className="mt-4">
                        <p className="mb-1">Mobile :</p>
                        <h5 className="font-size-16">012-234-5678</h5>
                      </div>
                      <div className="mt-4">
                        <p className="mb-1">E-mail :</p>
                        <h5 className="font-size-16">marcus@minible.com</h5>
                      </div>
                      <div className="mt-4">
                        <p className="mb-1">Location :</p>
                        <h5 className="font-size-16">California, United States</h5>
                      </div>

                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl="8">
              <Card className="mb-0">
                <Nav tabs className="nav-tabs-custom nav-justified">
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => { profiletoggle('1'); }}
                    >
                      <i className="uil uil-user-circle font-size-20"></i>
                      <span className="d-none d-sm-block">About</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => { profiletoggle('2'); }}
                    >
                      <i className="uil uil-clipboard-notes font-size-20"></i>
                      <span className="d-none d-sm-block">Tasks</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '3' })}
                      onClick={() => { profiletoggle('3'); }}
                    >
                      <i className="uil uil-file-alt font-size-20"></i>
                      <span className="d-none d-sm-block">Files</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="p-4">
                  <TabPane tabId="1">
                    <div>
                      <div>
                        <h5 className="font-size-16 mb-4">Experience</h5>

                        <ul className="activity-feed mb-0 ps-2">
                          {map(userProfile.experiences, (experience, i) => (
                            <li className="feed-item" key={"_exp_" + i}>
                              <div className="feed-item-list">
                                <p className="text-muted mb-1">{experience.timeDuration}</p>
                                <h5 className="font-size-16">{experience.designation}</h5>
                                <p>{experience.company}</p>
                                <p className="text-muted">{experience.description}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-size-16 mb-4">Projects</h5>

                        <ToolkitProvider
                          keyField="id"
                          data={userProfile.projects || []}
                          columns={projectColumns()}
                          bootstrap4
                        >
                          {toolkitProps => (
                            <React.Fragment>

                              <div className="table-responsive">
                                <BootstrapTable
                                  responsive
                                  remote
                                  bordered={false}
                                  striped={false}
                                  classes={
                                    "table table-nowrap table-hover mb-0"
                                  }
                                  {...toolkitProps.baseProps}
                                />
                              </div>
                            </React.Fragment>
                          )}
                        </ToolkitProvider>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                  <Weavy jwt={token}>
                     <div className="App" >
                        <WeavyApp
                          spaceKey="react-space"
                          spaceName="React Space"
                          appKey="react-tasks"
                          appName="React tasks"
                          appType="tasks"
                          height="600px"
                        />
                     </div>
                  </Weavy>  

               
                  </TabPane>
                  <TabPane tabId="3">
                  <Weavy jwt={token}>
                     <div className="App" >
                        <WeavyApp
                          spaceKey="react-space-contact"
                          spaceName="React Space"
                          appKey="contact-files"
                          appName="Contact files"
                          appType="files"
                          height="600px"
                        />
                     </div>
                  </Weavy>  
                  </TabPane>
                </TabContent>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

ContactsProfile.propTypes = {
  userProfile: PropTypes.any,
  onGetUserProfile: PropTypes.func,
}

const mapStateToProps = ({ contacts }) => ({
  userProfile: contacts.userProfile,
})

const mapDispatchToProps = dispatch => ({
  onGetUserProfile: () => dispatch(getUserProfile()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactsProfile))
