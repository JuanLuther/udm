import {
  Card,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Badge,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Products = () => {
  // Sample products data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 99.99,
      stock: 45,
      status: "In Stock",
      image: "https://placehold.co/200x200",
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: 199.99,
      stock: 30,
      status: "In Stock",
      image: "https://placehold.co/200x200",
    },
    {
      id: 3,
      name: "Laptop Bag",
      category: "Accessories",
      price: 49.99,
      stock: 0,
      status: "Out of Stock",
      image: "https://placehold.co/200x200",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 79.99,
      stock: 15,
      status: "Low Stock",
      image: "https://placehold.co/200x200",
    },
    {
      id: 5,
      name: "USB-C Cable",
      category: "Accessories",
      price: 14.99,
      stock: 100,
      status: "In Stock",
      image: "https://placehold.co/200x200",
    },
    {
      id: 6,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 29.99,
      stock: 50,
      status: "In Stock",
      image: "https://placehold.co/200x200",
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusColors = {
      "In Stock": "success",
      "Out of Stock": "danger",
      "Low Stock": "warning",
    };
    return (
      <Badge bg={statusColors[status as keyof typeof statusColors]}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="products-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Products</h2>
        <Button variant="primary">
          <i className="bi bi-plus-lg me-2"></i>
          Add Product
        </Button>
      </div>

      <Card className="shadow-sm mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <InputGroup className="w-50">
              <InputGroup.Text>
                <i className="bi bi-search"></i>
              </InputGroup.Text>
              <Form.Control
                placeholder="Search products..."
                aria-label="Search products"
              />
            </InputGroup>
            <div className="d-flex gap-2">
              <Form.Select className="w-auto">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Accessories</option>
              </Form.Select>
              <Form.Select className="w-auto">
                <option>All Status</option>
                <option>In Stock</option>
                <option>Out of Stock</option>
                <option>Low Stock</option>
              </Form.Select>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm product-card">
              <div className="position-relative">
                <Card.Img variant="top" src={product.image} />
                <Dropdown className="position-absolute top-0 end-0 m-2">
                  <Dropdown.Toggle variant="light" size="sm">
                    <i className="bi bi-three-dots-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">
                      <i className="bi bi-pencil me-2"></i>Edit
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <i className="bi bi-eye me-2"></i>View Details
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#" className="text-danger">
                      <i className="bi bi-trash me-2"></i>Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Card.Body>
                <Card.Title className="h6">{product.name}</Card.Title>
                <Card.Text className="text-muted small mb-2">
                  {product.category}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">${product.price}</h5>
                  {getStatusBadge(product.status)}
                </div>
                <div className="mt-2 small text-muted">
                  Stock: {product.stock} units
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
