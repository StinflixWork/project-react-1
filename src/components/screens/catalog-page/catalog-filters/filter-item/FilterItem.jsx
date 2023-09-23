import {FilterItemStyled} from "./FilterItem.styled.js";

const FilterItem = (props) => {

    const isFilterActive = props.isActive === props.id;
    return (
        <FilterItemStyled {...props} isActive={isFilterActive}>
            <img src={props.icon} alt="Filter burger icon"/>
            {props.title}
        </FilterItemStyled>
    );
};

export default FilterItem;