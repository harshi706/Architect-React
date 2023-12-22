import { configureStore } from "@reduxjs/toolkit";
import recommendationReducer from "./recommendation/recommendationSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/index";
import sliderReducer from "./slider/sliderSlice";
import { sliderApi } from "./slider/sliderApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    [sliderApi.reducerPath]: sliderApi.reducer,
    recommendedProduct: recommendationReducer,
    slider: sliderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware,sliderApi.middleware),
});

sagaMiddleware.run(rootSaga);
