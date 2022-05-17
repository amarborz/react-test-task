import styles from './dragonInformation.module.css'

const DragonInformation = ({ data, setIndex }) => {
	const {
		name,
		description,
		wikipedia,
		dry_mass_kg: kg,
		height_w_trunk: height,
		diameter,
		first_flight,
	} = data

	return (
		<div className={styles.container}>
			<h3>{name}</h3>
			<h5>Mass:</h5>
			<p>{kg} kg</p>
			<h5>Height: </h5>
			<p>{height.meters} meters</p>
			<h5>Diameter: </h5>
			<p>{diameter.meters} meters</p>
			<h5>First Flight: </h5>
			<p>{first_flight}</p>
			<h5>Description: </h5>
			<p>{description}</p>
			<h5>More Information: </h5>
			<a href={wikipedia} target="_blank" rel="noreferrer">
				{wikipedia}
			</a>
			<button onClick={() => setIndex(null)}>Back</button>
		</div>
	)
}

export default DragonInformation
