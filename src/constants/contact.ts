import { LinkListSectionProps } from '../components-app/LinkListSection';
import { sectionsIds } from './contentSections';
 
export const contact: LinkListSectionProps = {
  id: sectionsIds.contact,
  links: [
    ['Submit Feedback/Comments', 'https://forms.gle/e6CsGzHtdwA39hvdA', 'Google form to submit feedback or comments.'],
    ['Instagram', 'https://www.instagram.com/_azulrojo/', 'Follow us on Instagram! Stuff coming soon.'],
    ['Twitter', ' https://twitter.com/_azulrojo_', 'Follow us on Twitter! Stuff coming soon.'],
  ],
  title: 'Contact'
}