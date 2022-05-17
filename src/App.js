import { useEffect, useState } from 'react'

import DragonDetails from './components/DragonDetails'
import Loader from './components/Loader'

import './App.css'

function App() {
	const [dragonData, setDragonData] = useState()

	useEffect(() => {
		const localStorageDragonData = JSON.parse(
			localStorage.getItem('dragonData'),
		)

		setDragonData(localStorageDragonData)
	}, [])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.spacexdata.com/v4/dragons')
			const data = await response.json()

			localStorage.setItem('dragonData', JSON.stringify(data))
			setDragonData(data)
		}

		fetchData()
	}, [])

	return (
		<div>{dragonData ? <DragonDetails data={dragonData} /> : <Loader />}</div>
	)
}

export default App
