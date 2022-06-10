import classNames from 'classnames';
import styles from './styles.module.scss';

interface SectionProps {
  children: JSX.Element;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return <section className={classNames(styles.section, className)}>
    {children}
  </section>
};

export default Section;