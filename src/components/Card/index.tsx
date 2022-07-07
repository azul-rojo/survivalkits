import { forwardRef } from 'react';
import styles from './styles.module.scss';
import clasname from 'classnames';

export interface CardProps {
  className?: string;
  heading: string;
  id?: string;
  imageAlt?: string;
  imageSrc: string;
  text: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, heading, id, imageAlt, imageSrc, text }: CardProps, ref) => {
  return (
    <div className={clasname(className, styles.card)} id={id} ref={ref} >
      <img className={styles.image}  src={imageSrc} alt={imageAlt}></img>
      <h1>{heading}</h1>
      <p>{text}</p>
    </div>
  );
});

export default Card;
