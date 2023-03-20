const h1 = '# Heading\n';
const h2 = '## Subheading\n';
const h3 = '### Subsubheading\n';
const inlineCode = 'This is some \`<p>inline code</p>\`\n';
const blockCode = "\`\`\` \n//This is some block code\nfunction sayHello() {\n\tconsole.log('Hello!');\n}\n \`\`\` \n";
const it = 'This is some _italic_ text\n';
const b = 'This is some **bold** text\n';
const itB = 'This is some _**bold italics**_ text\n';
const crossed = 'This is some ~~crossed~~ text\n';
const link = `There's also [links](https://www.freecodecamp.org), and
> Block Quotes!\n`;
const table = `And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
`;

const uList = `- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
  `;

const oList = `1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
\n`;

const img = `![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

export const sampleMd = [h1, h2, h3, inlineCode, blockCode, it, b, itB, crossed, link, table, uList, oList, img];
