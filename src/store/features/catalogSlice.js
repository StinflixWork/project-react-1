import {createSlice} from "@reduxjs/toolkit";
import ProductBurgerImage from 'assets/images/product-burger.png'
import ProductPizzaImage from 'assets/images/pizza.png'
import ProductColaImage from 'assets/images/coca-cola.png'

const initialProductsState = [
    {
        id: 1,
        title: 'Patty Buns Burgers',
        price: 120,
        category: 'burger',
        img: ProductBurgerImage
    },
    {
        id: 2,
        title: 'Pizza 4 cheese',
        price: 90,
        category: 'pizza',
        img: ProductPizzaImage
    },
    {
        id: 3,
        title: 'Coca-Cola',
        price: 35,
        category: 'cocktails',
        img: ProductColaImage
    },
]
export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        products: initialProductsState,
        filteredProducts: initialProductsState,
        orders: {
            ordersList: [
                {
                    id: 1,
                    idProduct: 3,
                    count: 3,
                    allPrice: 105
                },
                {
                    id: 2,
                    idProduct: 2,
                    count: 1,
                    allPrice: 90
                },
            ],
            priceToPay: 0
        },
        finallyOrders: []
    },
    reducers: {
        addToOrder: (state, {payload: productId}) => {
            if (state.orders.ordersList.some(p => p.idProduct === productId)) return;
            const product = state.products.find(p => p.id === productId)

            const createNewOrder = {
                id: state.orders.ordersList.length + 1,
                idProduct: productId,
                count: 1,
                allPrice: product.price
            }
            state.orders.ordersList.push(createNewOrder);
        },
        setPriceToPay: (state) => {
            const orders = state.orders.ordersList;

            let sumPrice = 0
            orders.forEach(o => sumPrice += o.allPrice)

            state.orders.priceToPay = sumPrice
        },
        changeCount: (state, action) => {
            const {id, type} = action.payload;

            const order = state.orders.ordersList.find(o => o.id === id);
            const product = state.products.find(p => p.id === id);
            switch (type) {
                case 'increment':
                    order.count += 1;
                    break;
                case 'decrement':
                    if (order.count <= 1) return;
                    order.count -= 1;
                    break;
                default:
                    break;
            }

            order.allPrice = product.price * order.count;
        },
        submitOrderToBD: (state, {payload}) => {
            state.finallyOrders.push(payload)
            state.orders.ordersList = []
        },
        filterCatalog(state, {payload: category}) {
            state.filteredProducts = category === 'all'
                ? state.products
                : state.products.filter(product => category === product.category)
        }
    }
})

export const {addToOrder, setPriceToPay, changeCount, submitOrderToBD, filterCatalog} = catalogSlice.actions;
export default catalogSlice.reducer;