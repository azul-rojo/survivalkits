import styles from './styles.module.scss';
import Section from '../../components/Section';

export type LinkListTitle = string;
export type LinkListHref = string;
export type LinkListDescription = string;
export interface LinkListSectionProps {
  id: string;
  links: [LinkListTitle, LinkListTitle, LinkListDescription][]
  title: string;
}

const LinkListSection = ({ id, title, links }: LinkListSectionProps) => {
  return <Section className={styles.section} id={id}>
    <div className={styles.text}>
      <h1>{title}</h1>
      <div className={styles.links}>
        {links.map(([linkTitle, linkHref, linkDescription]) => 
          <div className={styles.linkWrapper}>
            <a className={styles.link} href={linkHref}>{linkTitle}</a>
            <p className={styles.description}>{linkDescription}</p>
          </div>
        )}
      </div>
    </div>
  </Section>
};

export default LinkListSection;