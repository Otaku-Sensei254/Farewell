import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';

async function extractDocxContent() {
  try {
    // Extract the main eulogy
    const eulogyResult = await mammoth.extractRawText({path: './src/assets/JOHN KUKA NYIKULI SHIKANGA EULOGY.docx'});
    console.log('EULOGY CONTENT:');
    console.log('================');
    console.log(eulogyResult.value);
    
    // Extract the tribute
    const tributeResult = await mammoth.extractRawText({path: './src/assets/TRIBUTE TO MY FATHER.docx'});
    console.log('\n\nTRIBUTE CONTENT:');
    console.log('================');
    console.log(tributeResult.value);
    
    // Save to JSON for use in React app
    const content = {
      eulogy: eulogyResult.value,
      tribute: tributeResult.value
    };
    
    fs.writeFileSync('./src/content/eulogy-content.json', JSON.stringify(content, null, 2));
    console.log('\nContent saved to src/content/eulogy-content.json');
    
  } catch (error) {
    console.error('Error extracting DOCX content:', error);
  }
}

extractDocxContent();
