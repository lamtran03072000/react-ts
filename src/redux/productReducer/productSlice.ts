//  rxslice

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../page/Home';

interface ProductCart extends Product {
  soLuong: number;
}

export type ProductState = {
  arrayProduct: ProductCart[];
};

const initialState: ProductState = {
  arrayProduct: [],
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    addProductAction: (
      state: ProductState,
      // PayloadAction<type> thì action.payload phải là type đó
      action: PayloadAction<Product>,
    ) => {
      console.log(action.payload); // {}
      // check xem đã có trong giỏ hàng chưa

      let index = state.arrayProduct.findIndex(
        (product) => product.id === action.payload.id,
      );

      // Nếu có rồi thì tăng số lượng lên 1
      if (index !== -1) {
        state.arrayProduct[index].soLuong += 1;
      } else {
        // còn chưa có thì thêm vào giỏ hàng và thêm key số lượng
        state.arrayProduct.push({ ...action.payload, soLuong: 1 });
      }
    },
  },
});

export const { addProductAction } = productSlice.actions;

export default productSlice.reducer;
