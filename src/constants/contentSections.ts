export const sectionsIds: {[key: string]: string} = {
  about: 'about',
  tablecontent: 'tablecontents',
  foodKit: 'foodkit',
  shelterKit: 'shelterkit',
  firstAidKit: 'firstaidkit',
  hygieneKit: 'hygienekit',
  resources: 'resources',
  contact: 'contact',
  credits: 'credits'
};


export const sectionCopy: {[key: string]: { title: string, description: string }} = {
  about: {
    title: 'About',
    description: 'About this page'
  },

  foodKit: {
    title: 'Food Kit',
    description: 'A visual how to make a food kit to give out.'
  },
  shelterKit: {
    title: 'Shelter Kit',
    description: 'A visual how to make a shelter kit to give out.'
  },
  firstAidKit: {
    title: 'First Aid Kit',
    description: 'A visual how to make a first aid kit to give out.'
  },
  hygieneKit: {
    title: 'Hygiene Kit',
    description: 'A visual how to make a hygiene kit to give out.'
  },
  resources: {
    title: 'Resources',
    description: 'Some links to other resources and inspiration used for this page.'
  },
  contact: {
    title: 'Contact',
    description: 'Different ways you can Contact us!'
  },
  credits: {
    title: 'Credits',
    description: 'A list of our contributers and resources used to make this page'
  }
};

export const contentSectionTitle = 'Table of Contents'

export const sectionList: [string, string, string][] = Object.keys(sectionCopy).map((id) => [sectionCopy[id].title, `#${sectionsIds[id]}`, sectionCopy[id].description]);
