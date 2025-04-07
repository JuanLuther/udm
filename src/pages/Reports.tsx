import { Card, Row, Col, Form, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Reports = () => {
  // Sample report data
  const salesData = [
    { period: "Jan 2024", orders: 145, revenue: 15890, customers: 89 },
    { period: "Dec 2023", orders: 132, revenue: 14250, customers: 76 },
    { period: "Nov 2023", orders: 128, revenue: 13780, customers: 82 },
    { period: "Oct 2023", orders: 118, revenue: 12450, customers: 71 },
    { period: "Sep 2023", orders: 125, revenue: 13200, customers: 79 },
  ];

  return (
    <div className="reports-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Reports & Analytics</h2>
        <div className="d-flex gap-2">
          <Button variant="outline-primary">
            <i className="bi bi-download me-2"></i>
            Export Report
          </Button>
          <Button variant="outline-primary">
            <i className="bi bi-printer me-2"></i>
            Print
          </Button>
        </div>
      </div>

      <Row className="mb-4">
        <Col md={3}>
          <Form.Select className="mb-3">
            <option>Last 30 Days</option>
            <option>Last Quarter</option>
            <option>Last Year</option>
            <option>Custom Range</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="g-4 mb-4">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="card-title">Revenue Overview</h5>
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
                <span className="text-muted">Revenue chart placeholder</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <h5 className="card-title">Top Products</h5>
              <div className="mt-4">
                {["Product A", "Product B", "Product C"].map(
                  (product, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex justify-content-between mb-1">
                        <span>{product}</span>
                        <span className="text-primary">
                          ${(Math.random() * 1000).toFixed(2)}
                        </span>
                      </div>
                      <div className="progress" style={{ height: "6px" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${Math.random() * 100}%` }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mb-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="card-title">Customer Growth</h5>
              <div
                className="placeholder-chart"
                style={{
                  height: "250px",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="text-muted">
                  Customer growth chart placeholder
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="card-title">Order Statistics</h5>
              <div
                className="placeholder-chart"
                style={{
                  height: "250px",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="text-muted">
                  Order statistics chart placeholder
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="shadow-sm">
        <Card.Body>
          <h5 className="card-title mb-4">Sales History</h5>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Period</th>
                <th>Orders</th>
                <th>Revenue</th>
                <th>New Customers</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((data, index) => (
                <tr key={index}>
                  <td>{data.period}</td>
                  <td>{data.orders}</td>
                  <td>${data.revenue.toLocaleString()}</td>
                  <td>{data.customers}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Reports;
