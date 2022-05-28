import styles from './styles.module.scss';
import clasname from 'classnames';

export interface CardProps {
  className?: string;
  heading: string;
  imageAlt?: string;
  imageSrc: string;
  text: string;
}

const Card = ({ className, heading, imageAlt, imageSrc, text }: CardProps) => { 
  return (
    <div className={clasname(className, styles.card)}>
      <img className="image" src={imageSrc} alt={imageAlt}></img>
      <h1>{heading}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Card;
