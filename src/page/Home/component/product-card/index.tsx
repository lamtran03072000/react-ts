import { Button, Card, Space } from 'antd';
import { Product } from '../..';
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../../../redux';
import { addProductAction } from '../../../../redux/productReducer/productSlice';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const dispatch: DispatchType = useDispatch();
  return (
    <Card cover={<img src={product.img} />}>
      <p>{product.name}</p>
      <Space>
        <Button
          onClick={() => {
            dispatch(addProductAction(product));
          }}
          type="primary"
        >
          Mua hàng
        </Button>
        <Button type="primary" danger>
          Xem chi tiết
        </Button>
      </Space>
    </Card>
  );
};

export default ProductCard;
