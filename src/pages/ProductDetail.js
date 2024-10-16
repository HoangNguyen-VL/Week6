import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { useCart } from '../hooks/useCart';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          <Alert.Heading>Không tìm thấy sản phẩm</Alert.Heading>
          <p>Sản phẩm bạn đang tìm kiếm không tồn tại.</p>
        </Alert>
        <Button variant="primary" onClick={() => navigate('/')}>Quay lại trang chủ</Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.img} alt={product.name} />
          </Card>
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p className="fs-4 text-primary">Giá: {product.price.toLocaleString()} USD</p>
          <p>Mô tả sản phẩm sẽ được thêm vào đây.</p>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={() => addToCart(product)}>
              Thêm vào giỏ hàng
            </Button>
            <Button variant="outline-secondary" onClick={() => navigate('/')}>
              Quay lại danh sách
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;