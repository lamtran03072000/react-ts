import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { Button, Image } from 'antd';
import { ProductState } from '../../redux/productReducer/productSlice';

const CartProduct = () => {
  let { arrayProduct }: ProductState = useSelector(
    (state: RootState) => state.productReducer,
  );
  console.log('arrayProduct: ', arrayProduct);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Tên</td>
            <td>Giá</td>
            <td>Số lượng</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {arrayProduct.map((p, i) => (
            <tr>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <Image src={p.img} alt="" width={50} />
              </td>
              <td>
                <Button type="primary" danger>
                  Xoá
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartProduct;
