import styles from './styles.module.scss';
import Section from '../../components/Section';

export interface MainSectionProps {
  body: string;
  imageSrc: string;
  title: string;
}

const MainSection = ({ body, title }: MainSectionProps) => {
  return <Section className={styles.section}>
    <div className={styles.text}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  </Section>
};

export default MainSection;