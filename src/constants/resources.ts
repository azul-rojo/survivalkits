import { LinkListSectionProps } from '../components-app/LinkListSection';
import { sectionsIds } from './contentSections';
 
export const resources: LinkListSectionProps = {
  id: sectionsIds.resources,
  links: [
    ['Silver City Gospel', 'http://silvercitygospelmission.org/services/support/survival/', 'A list of survival kits, a source for what we used here.'],
    ['Our Father\'s House Soup Kitchen', 'https://ofhsoupkitchen.org/diy-homeless-survival-kits', 'Similar list, also used as a source for this site.'],
    ['True Prepper', 'https://www.trueprepper.com/homeless-survival-kits/', 'Kits with a little more info compared to the others.']
  ],
  title: 'Resources'
}