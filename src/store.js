import { configureStore } from '@reduxjs/toolkit';
import { formReducer } from './features/Steps/formSlice';

const store = configureStore({
    reducer: {
        formState: formReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['form/addThirdStepData'],
      },
    }),
});

export default store;
