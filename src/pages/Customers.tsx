import { Card, Table, Button, Form, InputGroup, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Customers = () => {
  // Sample customers data
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 234-567-8901",
      orders: 15,
      totalSpent: 2499.99,
      status: "Active",
      lastOrder: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1 234-567-8902",
      orders: 8,
      totalSpent: 1299.99,
      status: "Active",
      lastOrder: "2024-01-14",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      phone: "+1 234-567-8903",
      orders: 3,
      totalSpent: 499.99,
      status: "Inactive",
      lastOrder: "2023-12-20",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      phone: "+1 234-567-8904",
      orders: 12,
      totalSpent: 1899.99,
      status: "Active",
      lastOrder: "2024-01-13",
    },
    {
      id: 5,
      name: "Tom Brown",
      email: "tom.brown@example.com",
      phone: "+1 234-567-8905",
      orders: 0,
      totalSpent: 0,
      status: "New",
      lastOrder: "-",
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusColors = {
      Active: "success",
      Inactive: "secondary",
      New: "info",
    };
    return (
      <Badge bg={statusColors[status as keyof typeof statusColors]}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="customers-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Customers</h2>
        <Button variant="primary">
          <i className="bi bi-plus-lg me-2"></i>
          Add Customer
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
                placeholder="Search customers..."
                aria-label="Search customers"
              />
            </InputGroup>
            <div className="d-flex gap-2">
              <Form.Select className="w-auto">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>New</option>
              </Form.Select>
              <Button variant="outline-primary">
                <i className="bi bi-download me-2"></i>
                Export
              </Button>
            </div>
          </div>

          <Table responsive hover>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Contact</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Status</th>
                <th>Last Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div
                        className="avatar-placeholder me-2 rounded-circle bg-primary d-flex align-items-center justify-content-center"
                        style={{ width: "32px", height: "32px" }}
                      >
                        <span className="text-white">
                          {customer.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div>{customer.name}</div>
                        <small className="text-muted">{customer.email}</small>
                      </div>
                    </div>
                  </td>
                  <td>{customer.phone}</td>
                  <td>{customer.orders}</td>
                  <td>${customer.totalSpent.toFixed(2)}</td>
                  <td>{getStatusBadge(customer.status)}</td>
                  <td>{customer.lastOrder}</td>
                  <td>
                    <Button
                      variant="link"
                      className="p-0 me-2"
                      title="View Profile"
                    >
                      <i className="bi bi-person"></i>
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

export default Customers;
