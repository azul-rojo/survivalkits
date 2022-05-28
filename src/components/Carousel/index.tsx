import { useState, useEffect, useRef } from 'react';
import Card, { CardProps } from '../Card';
import styles from './styles.module.scss';
import classname from 'classnames';

export interface CarouselProps {
  cards: CardProps[];
  title: string;
}

const Carousel = ({ cards, title }: CarouselProps) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  // const [prevRatio, setPrevRatio] = useState(0.0);
  const carouselRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (carouselRef.current && cardsRef.current.length) {
      let options = {
        root: carouselRef.current,
        rootMargin: "0px",
        threshold: [ .6, .9]
      };
    
      const observer = new IntersectionObserver(handleIntersect, options);
      
      cardsRef.current.forEach((el, i) => {
        if (el) {
          observer.observe(el);
        }
      })

      return () => observer.disconnect();
    }
  }, []);

  const handleIntersect: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void  => {
    entries.forEach((entry) => {
      if (!!entry.intersectionRatio) {
        const targetNumberStr = entry.target.id.split('-')[1]
        const targetNumber = parseInt(targetNumberStr, 10);
        setActiveCardIndex(targetNumber);
      }

      // setPrevRatio(entry.intersectionRatio
    });
  }

  const createDots = (total: number) => {
    let dots = [];
    for(let i = 0; i < total; i++){
      dots.push(
        <div
          key={`dot${i}`}
          onClick={()=> scrollCardToView(i)}
          className={classname(styles.dot, { [styles.active]: activeCardIndex === i })}>
        </div>
      )
    }

    return dots;
  }

  const scrollCardToView = (index: number) => {
    document.getElementById(`card-${index}`)?.scrollIntoView({ behavior: "smooth" });
    setActiveCardIndex(index);
  }
  
  return (
    <div className={classname(styles.carousel)}>
      <h1 className={classname(styles.title)}>{title}</h1>
      <div className={classname(styles.cardWrapper)}
        ref={carouselRef}>
        <div className={classname(styles.cards)}>
          {cards.map(((cardProps, index) =>
            <Card
              ref={el => cardsRef.current[index] = el} 
              key={`card-${index}`}
              className={styles.card}
              id={`card-${index}`}
              {...cardProps}
            />))}
        </div>
      </div>
      <div>{createDots(cards.length)}</div>
    </div>
  );
};

export default Carousel;