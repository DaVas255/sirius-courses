import { useRef } from 'react'

import styles from './ChipsControls.module.scss'
import type { IChips } from '~/types/types'

interface IChipsControlsProps {
	setChipses: React.Dispatch<React.SetStateAction<IChips[]>>
}

export const ChipsControls = ({ setChipses }: IChipsControlsProps) => {
	const idRef = useRef(0)

	const addChip = () => {
		idRef.current += 1
		setChipses(prevChipses => [
			...prevChipses,
			{ id: idRef.current, name: `Чипс ${idRef.current}` }
		])
	}

	const removeChip = () => {
		setChipses(prevChipses => prevChipses.slice(0, prevChipses.length - 1))
	}

	return (
		<div className={styles.chipsControls}>
			<button
				className={styles.chipsControl}
				onClick={addChip}
			>
				Добавить
			</button>
			<button
				className={styles.chipsControl}
				onClick={removeChip}
			>
				Удалить
			</button>
		</div>
	)
}
