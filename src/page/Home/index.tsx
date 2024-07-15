import { useEffect, useState } from 'react';

import { Card, Col, Row } from 'antd';
import ProductCard from './component/product-card';
import axios from 'axios';
import CartProduct from '../../components/cart-product';
// type , interface

export interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
}

type HttpResponse<T> = {
  data: T;
};

// let arrProduct: Product[] = [
//   {
//     id: '1',
//     name: 'samsung',
//     price: 3000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNj4cQ37IlgJl8VOH44nXgbzk5qNlxtIfeDA&s',
//   },
//   {
//     id: '2',
//     name: 'samsung',
//     price: 3000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNj4cQ37IlgJl8VOH44nXgbzk5qNlxtIfeDA&s',
//   },
//   {
//     id: '3',
//     name: 'samsung',
//     price: 3000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNj4cQ37IlgJl8VOH44nXgbzk5qNlxtIfeDA&s',
//   },
//   {
//     id: '4',
//     name: 'samsung',
//     price: 3000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNj4cQ37IlgJl8VOH44nXgbzk5qNlxtIfeDA&s',
//   },
// ];

const HomePage = () => {
  //   const [number, setNumber] = useState<number>(2);

  const [listProduct, setListProduct] = useState<Product[]>([]);
  const fetchListProduct = async () => {
    try {
      let promise: HttpResponse<Product[]> = await axios.get(
        'https://662b9f7bde35f91de158ec9b.mockapi.io/product',
      );

      setListProduct(promise.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchListProduct();
  }, []);

  return (
    <div
      style={{
        width: '80%',
        margin: '0 auto',
      }}
    >
      <CartProduct />

      <Row gutter={[20, 20]}>
        {listProduct.map((p, i) => {
          return (
            <Col key={p.id} span={6}>
              <ProductCard product={p} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HomePage;
