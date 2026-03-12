import type { IChipsesProps } from '~/types/types';
import { Chips } from '../chips/chips';

export const Chipses = ({ chipses }: IChipsesProps) => {
  return chipses.map((chip) => <Chips key={chip.id} name={chip.name} />);
};
