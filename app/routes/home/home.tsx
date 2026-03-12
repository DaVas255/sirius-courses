import { useState } from 'react'

import styles from './home.module.scss'
import { ChipsControls, ChipsList } from '~/components/'
import type { IChips } from '~/types/types'

export default function Home() {
	const [chipses, setChipses] = useState<IChips[]>([])

	return (
		<div className={styles.home}>
			<ChipsControls setChipses={setChipses} />
			<ChipsList chipses={chipses} />
		</div>
	)
}
