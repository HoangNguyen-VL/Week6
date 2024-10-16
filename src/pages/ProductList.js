import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { products } from '../data/products';

const ProductList = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Cửa Hàng Điện Thoại</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.img}
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-muted">
                  Giá: {product.price.toLocaleString()} USD
                </Card.Text>
                <div className="mt-auto d-grid gap-2">
                  <Button variant="outline-primary" onClick={() => navigate(`/products/${product.id}`)}>
                    Xem chi tiết
                  </Button>
                  <Button variant="primary" onClick={() => addToCart(product)}>
                    Thêm vào giỏ
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;