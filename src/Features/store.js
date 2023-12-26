import { configureStore } from "@reduxjs/toolkit";
import recommendationReducer from "./Slices/recommendationSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/index";
import sliderReducer from "./Slices/sliderSlice";
import searchReducer from "./search/searchSlice";
import FirstCardReducer from './Slices/FIrstCardSlice'
import authReducer from "./auth/authSlice";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    recommendedProduct: recommendationReducer,
    slider: sliderReducer,
    FirstCard: FirstCardReducer,
    productWithSearch:searchReducer,
    auth:authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
