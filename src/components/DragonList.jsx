import styles from './dragonList.module.css'

const DragonList = ({ data, setIndex }) => {
	return (
		<>
			<h2 className={styles.headerText}> Choose your SpaceX Dragon:</h2>
			<div className={styles.container}>
				{data.map((dragon, index) => {
					return (
						<div key={dragon.name}>
							<img
								src={dragon.flickr_images[0]}
								alt={dragon.name}
								onClick={() => setIndex(index)}
							/>
							<h3>{dragon.name}</h3>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default DragonList
