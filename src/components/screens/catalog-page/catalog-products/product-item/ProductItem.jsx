import {
	ProductItemBody,
	ProductItemDescription,
	ProductItemImg,
	ProductItemPrice,
	ProductItemStyled
} from './ProductItem.styled.js'
import { addToOrder } from 'store/features/catalogSlice.js'

const ProductItem = ({ product, dispatch }) => {
	return (
		<ProductItemStyled>
			<ProductItemImg>
				<img src={product.img} alt="Product card" />
				<div>
					<h6>Ingredients:</h6>
					<ul>
						<li>2 onion rings</li>
						<li>500 grams of meat</li>
						<li>Cheddar cheese</li>
						<li>BBQ ketchup</li>
						<li>4 cucumber slices</li>
						<li>1 tomato ring</li>
					</ul>
				</div>
			</ProductItemImg>
			<ProductItemBody>
				<ProductItemDescription>
					<h4>{product.title}</h4>
				</ProductItemDescription>
				<ProductItemPrice>
					<p>{product.price},00 UAH</p>
					<button onClick={() => dispatch(addToOrder(product.id))}>
						add to card
					</button>
				</ProductItemPrice>
			</ProductItemBody>
		</ProductItemStyled>
	)
}

export default ProductItem
