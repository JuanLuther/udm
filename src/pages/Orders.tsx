import { Card, Table, Button, Badge, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Orders = () => {
  // Sample orders data
  const orders = [
    {
      id: "#ORD001",
      customer: "John Doe",
      date: "2024-01-15",
      total: "$299.99",
      status: "Completed",
    },
    {
      id: "#ORD002",
      customer: "Jane Smith",
      date: "2024-01-14",
      total: "$149.50",
      status: "Processing",
    },
    {
      id: "#ORD003",
      customer: "Mike Johnson",
      date: "2024-01-14",
      total: "$599.99",
      status: "Pending",
    },
    {
      id: "#ORD004",
      customer: "Sarah Williams",
      date: "2024-01-13",
      total: "$89.99",
      status: "Completed",
    },
    {
      id: "#ORD005",
      customer: "Tom Brown",
      date: "2024-01-13",
      total: "$199.99",
      status: "Processing",
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusColors = {
      Completed: "success",
      Processing: "warning",
      Pending: "info",
      Cancelled: "danger",
    };
    return (
      <Badge bg={statusColors[status as keyof typeof statusColors]}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="orders-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Orders</h2>
        <Button variant="primary">
          <i className="bi bi-plus-lg me-2"></i>
          New Order
        </Button>
      </div>

      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <InputGroup className="w-50">
              <InputGroup.Text>
                <i className="bi bi-search"></i>
              </InputGroup.Text>
              <Form.Control
                placeholder="Search orders..."
                aria-label="Search orders"
              />
            </InputGroup>
            <div className="d-flex gap-2">
              <Form.Select className="w-auto">
                <option>All Status</option>
                <option>Completed</option>
                <option>Processing</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </Form.Select>
              <Form.Select className="w-auto">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>All time</option>
              </Form.Select>
            </div>
          </div>

          <Table responsive hover>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>{getStatusBadge(order.status)}</td>
                  <td>
                    <Button variant="link" className="p-0 me-2" title="View">
                      <i className="bi bi-eye"></i>
                    </Button>
                    <Button variant="link" className="p-0 me-2" title="Edit">
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button
                      variant="link"
                      className="p-0 text-danger"
                      title="Delete"
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="text-muted">Showing 1 to 5 of 5 entries</div>
            <div className="d-flex gap-2">
              <Button variant="outline-primary" disabled>
                <i className="bi bi-chevron-left"></i>
              </Button>
              <Button variant="primary">1</Button>
              <Button variant="outline-primary" disabled>
                <i className="bi bi-chevron-right"></i>
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Orders;
