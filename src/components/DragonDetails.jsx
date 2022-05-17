import { useState } from 'react'

import DragonCarousel from './DragonCarousel'
import DragonInformation from './DragonInformation'
import DragonList from './DragonList'

import styles from './dragonDetails.module.css'

const DragonDetails = ({ data }) => {
	const [index, setIndex] = useState(null)

	return (
		<>
			{index === null ? (
				<DragonList data={data} setIndex={setIndex} />
			) : (
				<div className={styles.container}>
					<DragonCarousel
						pictures={data[index].flickr_images}
						name={data[index].name}
					/>
					<DragonInformation data={data[index]} setIndex={setIndex} />
				</div>
			)}
		</>
	)
}

export default DragonDetails
