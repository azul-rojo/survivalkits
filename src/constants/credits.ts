import { LinkListSectionProps } from '../components-app/LinkListSection';
import { sectionsIds } from './contentSections';
 
export const credits: LinkListSectionProps = {
  id: sectionsIds.credits,
  links: [
    ['Icons', 'https://www.autodraw.com', 'Icons come from Auto Draw. Very neat!'],
  ],
  title: 'Credits'
}