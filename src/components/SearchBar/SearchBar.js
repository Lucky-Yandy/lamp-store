import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function SearchBar() {
  return (
    <Container className="mt-3">
      <Row>
        <Col xs={12} sm={6} md={4} >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
           
            />
            <Button className="rounded-pill" variant="outline-orange" style={{ backgroundColor: 'orange' }}>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}



