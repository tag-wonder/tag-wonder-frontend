import { TagHeader } from '@/lib/assets';
import { ColorType } from '@/lib/types/color';

import styles from './index.module.scss';

type Props = {
  title: string;
  position: number;
};

const boardHeadColor: Exclude<ColorType, 'black' | 'white' | 'grey'>[] = ['orange', 'primary', 'brown', 'yellow', 'mint', 'pink'];

function Board({ title, position }: Props) {
  const currentColor = boardHeadColor[position % boardHeadColor.length];

  return (
    <div className={styles.boardWrapper}>
      <div className={styles.headerBar}>
        <TagHeader className={styles[currentColor]} />
      </div>
      <div className={styles.content}>{title}</div>
    </div>
  );
}

export default Board;
