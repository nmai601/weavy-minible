import React from "react"
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// import chartJs
import LineChart from "../AllCharts/chartjs/linechart"
import DountChart from "../AllCharts/chartjs/dountchart"
import PieChart from "../AllCharts/chartjs/piechart"
import BarChart from "../AllCharts/chartjs/barchart"
import RadarChart from "../AllCharts/chartjs/radarchart"
import PolarChart from "../AllCharts/chartjs/polarchart"
import Weavy from "../../weavy/Weavy"
import WeavyApp from "../../weavy/WeavyApp"


const ChartjsChart = () => {
  var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGF2ZSIsImlzcyI6ImNsaWVudGlkIiwiZXhwIjoyMTIyMTIyMjIzLCJlbWFpbCI6ImRhdmUwQHdlYXZ5LmNvbSIsInN1YiI6ImRhdmUwQHdlYXZ5LmNvbSIsImNsaWVudF9pZCI6ImNsaWVudGlkIn0.q1ecHw6ORxpj9PIYG3FtHv_QLSQ-U7OxZ9-_D-ykpKU";
  
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Charts" breadcrumbItem="Chartjs" />
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Line Chart</CardTitle>
                  <LineChart />
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Line Chart Feed</CardTitle>
                  <Weavy jwt={token}>
                     <div className="App" >
                        <WeavyApp
                          spaceKey="react-space-chart"
                          spaceName="Chart Space"
                          appKey="line-chart-feed"
                          appType="posts"
                          height="347px"
                        />
                     </div>
                  </Weavy>  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Bar Chart</CardTitle>
                  <BarChart />
                </CardBody>
              </Card>
            </Col>
          <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Bar Chart Feed</CardTitle>
                  <Weavy jwt={token}>
                     <div className="App" >
                        <WeavyApp
                          spaceKey="react-space-chart"
                          spaceName="Chart Space"
                          appKey="bar-chart-feed"
                          appType="posts"
                          height="347px"
                        />
                     </div>
                  </Weavy>  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Pie Chart</CardTitle>
                  <PieChart />
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Pie Chart Feed</CardTitle>
                  <Weavy jwt={token}>
                     <div className="App" >
                        <WeavyApp
                          spaceKey="react-space-chart"
                          spaceName="Chart Space"
                          appKey="pie-chart-feed"
                          appType="posts"
                          height="301px"
                        />
                     </div>
                  </Weavy>  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Donut Chart</CardTitle>
                  <DountChart />
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Pie Chart Feed</CardTitle>
                  <Weavy jwt={token}>
                     <div className="App" >
                        <WeavyApp
                          spaceKey="react-space-chart"
                          spaceName="Chart Space"
                          appKey="donut-chart-feed"
                          appType="posts"
                          height="301px"
                        />
                     </div>
                  </Weavy>  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Polar Chart</CardTitle>
                  <PolarChart />
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Radar Chart</CardTitle>
                  <RadarChart />
                </CardBody>
              </Card>
            </Col>
          </Row>{" "}
        </Container>
      </div>
    </React.Fragment>
  )
}

export default ChartjsChart
