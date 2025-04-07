import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  // Sample data for dashboard metrics
  const metrics = [
    {
      title: "Total Sales",
      value: "$15,890",
      icon: "bi-graph-up-arrow",
      trend: "+12%",
    },
    { title: "Orders", value: "145", icon: "bi-cart", trend: "+5%" },
    { title: "Customers", value: "1,240", icon: "bi-people", trend: "+8%" },
    {
      title: "Revenue",
      value: "$21,359",
      icon: "bi-currency-dollar",
      trend: "+15%",
    },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="mb-4">Dashboard Overview</h2>

      <Row className="g-4">
        {metrics.map((metric, index) => (
          <Col key={index} md={6} lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="text-muted mb-2">{metric.title}</h6>
                    <h3 className="mb-0">{metric.value}</h3>
                  </div>
                  <div>
                    <i className={`bi ${metric.icon} fs-1 text-primary`}></i>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="badge bg-success">{metric.trend}</span>
                  <span className="text-muted ms-2">vs last month</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-4">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="card-title">Sales Analytics</h5>
              <div
                className="placeholder-chart"
                style={{
                  height: "300px",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="text-muted">Chart placeholder</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <h5 className="card-title">Recent Activities</h5>
              <div className="activity-list">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="activity-item d-flex align-items-center py-2"
                  >
                    <div className="activity-icon bg-light rounded-circle p-2 me-3">
                      <i className="bi bi-clock text-primary"></i>
                    </div>
                    <div>
                      <p className="mb-0">New order received</p>
                      <small className="text-muted">30 minutes ago</small>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
