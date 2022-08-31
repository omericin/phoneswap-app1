import { configureStore } from '@reduxjs/toolkit'
import amountOfPrice from '../Components/Redux/totalAmount';

export default configureStore({
  reducer: {
    amountOfPrice: amountOfPrice,
  },
})