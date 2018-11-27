// This is used to export dispatch commands to BurgerBuilder
export { addIngredient,
    removeIngredient,
    initIngredients
} from './burgerBuilder';
export {
  purchaseBurger,
  purchaseInit,
  fetchOrders
} from './order';
export {
    auth,
    logout,
    setAuthRedirectPath,
    authCheckState
} from './auth';
