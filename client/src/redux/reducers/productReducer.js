import _default from '@emotion/styled';
import * as  actionType from '../constants/productConstant';

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS_SUCCESS:
      // ✅ Correct: Copies the old state and updates 'products'
      return { ...state, products: action.payload };

    case actionType.GET_PRODUCTS_FAIL:
      // ✅ Correct: Copies the old state and adds 'error'
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
export const getProductDetailsReducer=(state={product:{}},action)=>
{
switch(action.type){
case actionType.GET_PRODUCT_DETAILS_REQUEST:
  return {loading:true}
  case actionType.GET_PRODUCT_DETAILS_SUCCESS:
    return {loading:false,product:action.payload}
    case actionType.GET_PRODUCT_DETAILS_FAIL:
      return {loading:false,error:action.payload}
      case actionType.GET_PRODUCT_DETAILS_RESET:
        return {product :{}}
        default:
        return state
}
}