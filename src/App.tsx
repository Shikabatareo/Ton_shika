import { useState } from 'react'
import './App.css'

import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react'

export const Header = () => {
	return (
		<header>
			<span>My App with React UI</span>
			<TonConnectButton
				className='my-button-class'
				style={{ float: 'right' }}
			/>
		</header>
	)
}

function App() {
	const [count, setCount] = useState(0)

	return (
		<TonConnectUIProvider manifestUrl='https://shikabatareo.github.io/ton_shika/tonconnect-manifest.json'>
			<div>
				<Header />
			</div>
		</TonConnectUIProvider>
	)
}

export default App
