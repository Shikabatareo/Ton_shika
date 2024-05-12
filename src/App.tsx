import './App.css'

import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react'

import { useTonAddress, useTonWallet } from '@tonconnect/ui-react'

// export const EntrypointPage = () => {
// 	const connectionRestored = useIsConnectionRestored()

// 	if (!connectionRestored) {
// 		return <Loader>Please wait...</Loader>
// 	}

// 	return <MainPage />
// }

// export const Settings = () => {
// 	const [tonConnectUI, setOptions] = useTonConnectUI()

// 	const onLanguageChange = (lang: string) => {
// 		setOptions({ language: lang as Locales })
// 	}

// 	return (
// 		<div>
// 			<button onClick={() => tonConnectUI.sendTransaction(myTransaction)}>
// 				Send transaction
// 			</button>

// 			<div>
// 				<label>language</label>
// 				<select onChange={e => onLanguageChange(e.target.value)}>
// 					<option value='en'>en</option>
// 					<option value='ru'>ru</option>
// 				</select>
// 			</div>
// 		</div>
// 	)
// }

export const Wallet = () => {
	const wallet = useTonWallet()

	return (
		wallet && (
			<div>
				<span>Connected wallet: {wallet.account.address}</span>
				<span>Device: {wallet.device.appName}</span>
			</div>
		)
	)
}

export const Address = () => {
	const userFriendlyAddress = useTonAddress()
	const rawAddress = useTonAddress(false)

	return (
		userFriendlyAddress && (
			<div>
				<span>User-friendly address: {userFriendlyAddress}</span>
				<span>Raw address: {rawAddress}</span>
			</div>
		)
	)
}

export const Header = () => {
	return (
		<header>
			<span>My App with React UI</span>
			<TonConnectButton
				className='my-button-class'
				style={{ marginTop: '20px' }}
			/>
		</header>
	)
}

function App() {
	return (
		<TonConnectUIProvider
			manifestUrl='https://shikabatareo.github.io/ton_shika/tonconnect-manifest.json'
			actionsConfiguration={{
				twaReturnUrl: 'https://t.me/shikabatareo_bot',
			}}
		>
			<div>
				<Header />
				<Address />
				<Wallet />
				<Settings />
			</div>
		</TonConnectUIProvider>
	)
}

export default App
