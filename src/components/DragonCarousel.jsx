import styles from './dragonCarousel.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

const DragonCarousel = ({ pictures, name }) => {
	return (
		<>
			<Swiper
				navigation={true}
				loop={true}
				modules={[Navigation]}
				className={styles.imageContainer}
			>
				{pictures.map((picture) => {
					return (
						<SwiperSlide key={picture}>
							<img src={picture} alt={name} />
						</SwiperSlide>
					)
				})}
			</Swiper>
		</>
	)
}

export default DragonCarousel
