import { call, put, debounce, takeLatest } from 'redux-saga/effects';
import {
  searchProductsSuccess,
  searchProductsFailure,
  
} from '../search/searchSlice';

import { fetchProductsWithSearch } from '../api';

function* searchProducts(action) {
  try {
    const { query } = action?.payload;
    const data = yield call(fetchProductsWithSearch, query);
    yield put(searchProductsSuccess(data));
  } catch (error) {
    yield put(searchProductsFailure(error));
  }
}

export function* watchSearchProducts() {
  // Debounce the action to avoid making API calls for every keystroke
  yield debounce(300, "SEARCH_PRODUCTS_REQUEST", searchProducts);
}
