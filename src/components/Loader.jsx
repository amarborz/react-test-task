import styles from './loader.module.css'

const Loader = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.hourglass}></div>
		</div>
	)
}

export default Loader
