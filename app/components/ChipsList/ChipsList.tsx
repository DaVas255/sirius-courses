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
				chipses.map(chips => (
					<Chips
						key={chips.id}
						{...chips}
					/>
				))
			) : (
				<div>Нет чипсов</div>
			)}
		</div>
	)
}
