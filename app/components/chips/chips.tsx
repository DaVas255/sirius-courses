import styles from './Chips.module.scss'
import type { IChips } from '~/types/types'

export const Chips = ({ name }: IChips) => {
	return <div className={styles.chips}>{name}</div>
}
