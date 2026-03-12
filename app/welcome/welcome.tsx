import { Chipses } from '~/components/chipses/shipses';
import { chipsesData } from '~/data/data';

export function Welcome() {
  return <Chipses chipses={chipsesData} />;
}
