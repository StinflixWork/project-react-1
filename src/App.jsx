import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyled } from 'styles/Global.styled.js'
import Navigation from 'components/screens/navigation/Navigation.jsx'

const WrapperApp = styled.div`
	min-height: 100%;
	overflow: clip;

	display: flex;
	flex-direction: column;

	background-color: ${(props) => props.theme.colors.bgPrimary};

	main {
		flex: auto;
	}
`
const theme = {
	colors: {
		bgPrimary: '#131212',
		bgSecondary: '#111A19',
		textPrimary: '#fff',
		textSecondary: '#F2F2F2',
		textHighlighted: '#F2B63D'
	},
	fonts: {
		poppins: 'Poppins, sans-serif',
		oswald: 'Oswald, sans-serif'
	}
}

function App() {
	const [lock, setLock] = useState(false)
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyled isLockBody={lock} />
			<WrapperApp>
				<Navigation setLock={setLock} />
			</WrapperApp>
		</ThemeProvider>
	)
}

export default App
