const inputTag = process.argv[2];

if (!inputTag) throw new Error('No input');
if (!inputTag.startsWith('v')) throw new Error('Invalid input tag');

const majorTag = inputTag.split('.')[0];

console.log(majorTag);
