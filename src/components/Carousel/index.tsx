import Card, { CardProps } from '../Card';
import styles from './styles.module.scss';
import classname from 'classnames';

export interface CarouselProps {
  cards: CardProps[];
  title: string;
}

const Carousel = ({ cards, title }: CarouselProps) => {
  return (
    <div className={classname(styles.carousel)}>
      <h1 className={classname(styles.title)}>{title}</h1>
      <div className={classname(styles.cardWrapper)}>
        <div className={classname(styles.cards)}>
          {cards.map((cardProps => <Card {...cardProps} className={styles.card} />))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;