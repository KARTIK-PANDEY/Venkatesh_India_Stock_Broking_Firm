const fs = require('fs');
const path = require('path');

const titles = {
  'app/page.tsx': 'Shri Venkatesh Stock Broker Services India Pvt. Ltd. | SEBI Registered Broker Raipur',
  'app/about/company-overview/page.tsx': 'Company Overview | About Us | Shri Venkatesh Stock Broker Services',
  'app/products/equity/page.tsx': 'Equity Trading Services | Products | Shri Venkatesh Stock Broker Services',
  'app/products/derivatives/page.tsx': 'Futures & Options (F&O) Trading | Products | Shri Venkatesh Stock Broker Services',
  'app/products/commodity/page.tsx': 'Commodity Trading | MCX NCDEX | Shri Venkatesh Stock Broker Services',
  'app/products/mutual-funds/page.tsx': 'Mutual Fund Investment Services | Products | Shri Venkatesh Stock Broker Services',
  'app/products/ipo/page.tsx': 'IPO Application Services | Products | Shri Venkatesh Stock Broker Services',
  'app/investor-resources/investor-charter/page.tsx': 'Investor Charter (SEBI 2025) | Investor Resources | Shri Venkatesh Stock Broker Services',
  'app/investor-resources/escalation-matrix/page.tsx': 'Grievance Escalation Matrix | Investor Resources | Shri Venkatesh Stock Broker Services',
  'app/investor-resources/scores/page.tsx': 'Investor Grievances – SEBI SCORES | Shri Venkatesh Stock Broker Services',
  'app/investor-resources/smartodr/page.tsx': 'Online Dispute Resolution – SmartODR | Shri Venkatesh Stock Broker Services',
  'app/investor-resources/complaint-data/page.tsx': 'Monthly Complaint Data Disclosure | Shri Venkatesh Stock Broker Services',
  'app/downloads/page.tsx': 'Download Forms & Documents | Shri Venkatesh Stock Broker Services',
  'app/open-account/page.tsx': 'Open Trading & Demat Account | Shri Venkatesh Stock Broker Services',
  'app/partner-with-us/page.tsx': 'Become a Sub-Broker Partner | Shri Venkatesh Stock Broker Services',
  'app/careers/page.tsx': 'Current Job Openings | Careers | Shri Venkatesh Stock Broker Services',
  'app/contact/page.tsx': 'Contact Us | Locate Our Office | Shri Venkatesh Stock Broker Services',
};

for (const [relPath, title] of Object.entries(titles)) {
  const fullPath = path.join(__dirname, 'src', relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes('export const metadata')) {
      content = content.replace(/title:\s*\"[^\"]+\"/, `title: "${title}"`);
    } else {
      const metadata = `\nexport const metadata = {\n  title: "${title}",\n};\n`;
      const importRegex = /import .+\n/g;
      let lastImportMatch;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        lastImportMatch = match;
      }
      
      if (lastImportMatch) {
        const insertIndex = lastImportMatch.index + lastImportMatch[0].length;
        content = content.slice(0, insertIndex) + metadata + content.slice(insertIndex);
      } else {
        content = metadata + content;
      }
    }
    fs.writeFileSync(fullPath, content);
    console.log('Updated ' + relPath);
  } else {
    console.log('Not found: ' + relPath);
  }
}
