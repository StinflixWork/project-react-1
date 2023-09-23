import styled from "styled-components";
import ProductItem from "components/screens/catalog-page/catalog-products/product-item/ProductItem.jsx";
import {useDispatch, useSelector} from "react-redux";

const ProductsStyled = styled.div`
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 240px);
  column-gap: 80px;
  row-gap: 60px;

  > p {
    font-family: ${props => props.theme.fonts.poppins};
    color: ${props => props.theme.colors.textPrimary};
    font-size: 1rem;
    font-weight: 500;
  }
  
  @media (width < 1230px) {
    justify-content: center;
  }
`

const CatalogProducts = () => {
    const productsData = useSelector(state => state.catalog.filteredProducts)
    const dispatch = useDispatch()

    const productsItems = productsData.map(p => (
        <ProductItem key={p.id} product={p} dispatch={dispatch}/>
    ))

    return (
        <ProductsStyled>
            {productsItems.length ? productsItems : <p>Empty products</p>}
        </ProductsStyled>
    );
};

export default CatalogProducts;