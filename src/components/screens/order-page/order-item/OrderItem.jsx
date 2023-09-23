import {
    OrderItemAllPrice,
    OrderItemButtons,
    OrderItemContent, OrderItemCounters,
    OrderItemImg,
    OrderItemInfo,
    OrderItemStyled
} from "./OrderItem.styled.js";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import {changeCount} from "../../../../store/features/catalogSlice.js";
import {useSelector} from "react-redux";

const OrderItem = ({order, dispatch}) => {
    const product = useSelector(state => state.catalog.products.find(p => p.id === order.idProduct))
    const handleClickIncrement = () => {
        dispatch(changeCount({id: order.id, type: 'increment'}))
    }

    const handleClickDecrement = () => {
        dispatch(changeCount({id: order.id, type: 'decrement'}))
    }

    return (
        <OrderItemStyled>
            <OrderItemContent>
                <OrderItemImg>
                    <img src={product.img} alt="Order burger image"/>
                </OrderItemImg>
                <OrderItemInfo>
                    <h5>{product.title}</h5>
                    <p>{product.price},00 UAH</p>
                </OrderItemInfo>
            </OrderItemContent>
            <OrderItemButtons>
                <OrderItemAllPrice>
                    <p><span>x{order.count}</span> {order.allPrice},00 UAH</p>
                </OrderItemAllPrice>
                <OrderItemCounters>
                    <button onClick={handleClickDecrement}>
                        <AiOutlineMinusCircle color='#fff' size={22}/>
                    </button>
                    <span>{order.count}</span>
                    <button onClick={handleClickIncrement}>
                        <AiOutlinePlusCircle color='#fff' size={22}/>
                    </button>
                </OrderItemCounters>
            </OrderItemButtons>
        </OrderItemStyled>
    );
};

export default OrderItem;