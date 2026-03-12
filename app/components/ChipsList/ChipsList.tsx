import { Chips } from '../Chips/Chips'

import styles from './ChipsList.module.scss'
import type { IChips } from '~/types/types'

interface IChipsListProps {
	chipses: IChips[]
}

export const ChipsList = ({ chipses }: IChipsListProps) => {
	return (
		<div className={styles.chipsList}>
			{chipses.length > 0 ? (
				chipses.map(chip => (
					<Chips
						key={chip.id}
						{...chip}
					/>
				))
			) : (
				<div>Нет чипсов</div>
			)}
		</div>
	)
}
