/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Ryff( Oursourced by Winux software solutions private limited)',
    position: 'Software Engineer(Frontend)',
    url: 'https://ryff.com',
    startDate: '2022-02-01',
    summary: `Ryff is a visual computing company that 
    uses AI and ML to integrate brands and products into visual media at scale. 
    I was working there as a frontend software engineer and worked on there customer
    and internal tool website. In last 8 month of my tenure managed team of 4 people.`,
    highlights: [
      'Use React-js with storybook to created component based libaray to use in different projects ',
      'Write complex Elastic search queries to get data for frontend',
      'Lead team of 4 and done code reviews',
      'Created Timeline component from sctrach which allow switching between week, month and year view',
      'Configure theming to support multiple themes',
    ],
  },
  {
    name: 'Chicmic',
    position: 'Associate Software Engineer',
    url: 'https://chicmic.in',
    startDate: '2019-01-1',
    endDate: '2021-10-05',
    summary: `Skeptical Investments is a micro-vc fund focused on Angel, Seed, and Series-A
    YC companies.`,
    highlights: [
      'Created the InstaSafe. Fast, automated investment docs for YC companies.',
      'Advise several startups in the fund.',
    ],
  },

];

export default work;
