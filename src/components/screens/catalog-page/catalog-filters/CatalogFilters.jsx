import styled from "styled-components";
import FilterItem from "./filter-item/FilterItem.jsx";
import FilterBurgerIcon from 'assets/icons/filter-burger.svg'
import FilterPizzaIcon from 'assets/icons/filter-pizza.svg'
import FilterCocktailsIcon from 'assets/icons/filter-coctails.svg'
import FilterNuggetsIcon from 'assets/icons/filter-nuggets.svg'
import FilterFrenchFriesIcon from 'assets/icons/filter-french-fries.svg'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {filterCatalog} from "../../../../store/features/catalogSlice.js";

const FiltersStyled = styled.div`
  padding: 45px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 35px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.20);

  @media (width <= 768px) {
    justify-content: center;
  }
`

const CatalogFilters = () => {
    const dispatch = useDispatch()
    const [filter, setFilter] = useState('all')

    const handleClickFilter = (e) => {
        const filtered = e.target.id;
        setFilter(filtered);
        dispatch(filterCatalog(filtered))
    }

    return (
        <FiltersStyled>
            <FilterItem
                id='all'
                icon={FilterFrenchFriesIcon}
                title='All'
                isActive={filter}
                onClick={handleClickFilter}
            />
            <FilterItem
                id='burger'
                icon={FilterBurgerIcon}
                title='Burger'
                isActive={filter}
                onClick={handleClickFilter}
            />
            <FilterItem
                id='pizza'
                icon={FilterPizzaIcon}
                title='Pizza'
                isActive={filter}
                onClick={handleClickFilter}
            />
            <FilterItem
                id='cocktails'
                icon={FilterCocktailsIcon}
                title='Cocktails'
                isActive={filter}
                onClick={handleClickFilter}
            />
            <FilterItem
                id='nuggets'
                icon={FilterNuggetsIcon}
                title='Nuggets'
                isActive={filter}
                onClick={handleClickFilter}
            />
        </FiltersStyled>
    );
};

export default CatalogFilters;