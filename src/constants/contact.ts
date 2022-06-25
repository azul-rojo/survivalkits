import { LinkListSectionProps } from '../components-app/LinkListSection';
import { sectionsIds } from './contentSections';
 
export const contact: LinkListSectionProps = {
  id: sectionsIds.resources,
  links: [
    ['Submit Feedback/Comments', 'https://forms.gle/e6CsGzHtdwA39hvdA', 'Google form to submit feedback or comments.'],
  ],
  title: 'Contact'
}