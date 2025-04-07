import { Card, Row, Col, Form, Button } from "react-bootstrap";

const Settings = () => {
  return (
    <div className="settings-page">
      <h2 className="mb-4">Settings</h2>
      <Row className="g-4">
        {/* Account Settings */}
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <i className="bi bi-person me-2"></i>
                Account Settings
              </h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Current password"
                  />
                </Form.Group>
                <Button variant="primary">Update Account</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Notifications */}
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <i className="bi bi-bell me-2"></i>
                Notifications
              </h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Check
                  type="switch"
                  id="email-notifications"
                  label="Email Notifications"
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="order-updates"
                  label="Order Updates"
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="product-alerts"
                  label="Product Alerts"
                  className="mb-3"
                />
                <Button variant="primary">Save Preferences</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* System Preferences */}
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <i className="bi bi-gear me-2"></i>
                System Preferences
              </h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Language</Form.Label>
                  <Form.Select>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Time Zone</Form.Label>
                  <Form.Select>
                    <option>UTC (GMT+0)</option>
                    <option>EST (GMT-5)</option>
                    <option>PST (GMT-8)</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="primary">Save Settings</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Display Settings */}
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <i className="bi bi-display me-2"></i>
                Display Settings
              </h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Theme</Form.Label>
                  <Form.Select>
                    <option>Light</option>
                    <option>Dark</option>
                    <option>System Default</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Font Size</Form.Label>
                  <Form.Range min="12" max="24" />
                </Form.Group>
                <Button variant="primary">Apply Changes</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
