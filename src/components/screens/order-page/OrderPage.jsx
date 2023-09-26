import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { setPriceToPay, submitOrderToBD } from 'store/features/catalogSlice.js'
import {
	OrderBody,
	OrderContent,
	OrderHeader,
	OrdersList,
	WrapperOrder
} from './OrderPage.styled.js'
import { Container, ContainerFlexRow } from 'styles/Container.styled.js'
import OrderItem from './order-item/OrderItem.jsx'
import FormOrder from './form/FormOrder.jsx'

const OrderPage = () => {
	const ordersData = useSelector((state) => state.catalog.orders)
	const dispatch = useDispatch()
	const ordersItems = ordersData.ordersList.map((order) => (
		<OrderItem key={order.id} order={order} dispatch={dispatch} />
	))

	dispatch(setPriceToPay())

	const handleSubmitOrder = (clientData) => {
		const finallyOrder = {
			client: { ...clientData },
			order: { ...ordersData }
		}

		dispatch(submitOrderToBD(finallyOrder))
	}

	return (
		<WrapperOrder>
			<OrderHeader>
				<ContainerFlexRow alignItems="center">
					<NavLink to="/">
						<BiArrowBack color="#fff" size={28} />
					</NavLink>
				</ContainerFlexRow>
			</OrderHeader>
			<OrderContent>
				<Container>
					<OrderBody>
						<OrdersList>
							{ordersItems.length ? (
								ordersItems
							) : (
								<p>
									No orders. <NavLink to="/catalog">Check out our menu</NavLink>
								</p>
							)}
						</OrdersList>
						<FormOrder
							price={ordersData.priceToPay}
							handleSubmitOrder={handleSubmitOrder}
						/>
					</OrderBody>
				</Container>
			</OrderContent>
		</WrapperOrder>
	)
}

export default OrderPage
