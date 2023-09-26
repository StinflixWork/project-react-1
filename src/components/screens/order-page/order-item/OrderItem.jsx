import { useSelector } from 'react-redux'
import { changeCount, removeOrder } from 'store/features/catalogSlice.js'
import { CiCircleRemove } from 'react-icons/ci'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import {
	OrderItemAllPrice,
	OrderItemButtons,
	OrderItemContent,
	OrderItemCounters,
	OrderItemImg,
	OrderItemInfo,
	OrderItemRemoveButton,
	OrderItemStyled
} from './OrderItem.styled.js'

const OrderItem = ({ order, dispatch }) => {
	const product = useSelector((state) =>
		state.catalog.products.find((product) => product.id === order.idProduct)
	)
	const handleClickIncrement = () => {
		dispatch(changeCount({ id: order.id, type: 'increment' }))
	}

	const handleClickDecrement = () => {
		dispatch(changeCount({ id: order.id, type: 'decrement' }))
	}

	const handleRemoveOrder = () => {
		dispatch(removeOrder(order.id))
	}

	return (
		<OrderItemStyled>
			<OrderItemContent>
				<OrderItemImg>
					<img src={product.img} alt="Order burger image" />
				</OrderItemImg>
				<OrderItemInfo>
					<h5>{product.title}</h5>
					<p>{product.price},00 UAH</p>
				</OrderItemInfo>
			</OrderItemContent>
			<OrderItemButtons>
				<OrderItemAllPrice>
					<p>
						<span>x{order.count}</span> {order.allPrice},00 UAH
					</p>
				</OrderItemAllPrice>
				<OrderItemCounters>
					<button onClick={handleClickDecrement}>
						<AiOutlineMinusCircle color="#fff" size={22} />
					</button>
					<span>{order.count}</span>
					<button onClick={handleClickIncrement}>
						<AiOutlinePlusCircle color="#fff" size={22} />
					</button>
				</OrderItemCounters>
			</OrderItemButtons>
			<OrderItemRemoveButton onClick={handleRemoveOrder}>
				<CiCircleRemove color="#fff" size={32} />
			</OrderItemRemoveButton>
		</OrderItemStyled>
	)
}

export default OrderItem
