import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BiSolidShoppingBagAlt } from 'react-icons/bi'
import {
	BurgerIcon,
	LinkStyled,
	NavigationCartStyled,
	NavigationListStyled,
	NavigationStyled,
	NavigationWrapper
} from './Navigation.styled.js'

const Navigation = ({ setLock }) => {
	const price = useSelector((state) => state.catalog.orders.priceToPay)
	const [showMenu, setShowMenu] = useState(false)
	const handleClickBurgerMenu = () => {
		setShowMenu(!showMenu)
		setLock(!showMenu)
	}

	const handleClickMenu = () => {
		if (showMenu) {
			setShowMenu(!showMenu)
			setLock(!showMenu)
		}
	}

	return (
		<NavigationWrapper>
			<NavigationStyled isActiveBurger={showMenu}>
				<NavigationListStyled>
					<li>
						<LinkStyled onClick={handleClickMenu} to="/">
							Home
						</LinkStyled>
					</li>
					<li>
						<LinkStyled onClick={handleClickMenu} to="/catalog">
							Menu
						</LinkStyled>
					</li>
					<li>
						<LinkStyled onClick={handleClickMenu} to="/about">
							About Us
						</LinkStyled>
					</li>
				</NavigationListStyled>
				<NavigationCartStyled>
					<NavLink to="/order">
						<BiSolidShoppingBagAlt size={20} />
					</NavLink>
					<span>{price},00 UAH</span>
				</NavigationCartStyled>
			</NavigationStyled>
			<BurgerIcon isActive={showMenu} onClick={handleClickBurgerMenu}>
				<span></span>
			</BurgerIcon>
		</NavigationWrapper>
	)
}

export default Navigation
