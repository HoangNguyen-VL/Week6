import React from 'react';
import { useCart } from '../hooks/useCart';
import { Table, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">Giỏ hàng của bạn</h1>
      {cart.length === 0 ? (
        <Alert variant="info">Giỏ hàng của bạn đang trống.</Alert>
      ) : (
        <>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Tên Điện Thoại</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price.toLocaleString()} USD</td>
                  <td>{item.quantity}</td>
                  <td>{(item.price * item.quantity).toLocaleString()} USD</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                      Xóa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3 className="text-end">Tổng cộng: {totalPrice.toLocaleString()} USD</h3>
        </>
      )}
      <div className="d-flex justify-content-between mt-4">
        <Button variant="secondary" onClick={() => navigate('/')}>Tiếp tục mua sắm</Button>
        <Button variant="primary" disabled={cart.length === 0}>Thanh toán</Button>
      </div>
    </Container>
  );
};

export default Cart;