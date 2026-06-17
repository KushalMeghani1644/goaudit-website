const fs = require('fs');

function fixIndex() {
  let content = fs.readFileSync('src/routes/index.tsx', 'utf8');
  
  content = content.replace(
    /<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">/,
    '<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 break-words">'
  );
  
  content = content.replace(
    /<code className="font-mono text-sm text-gray-800 dark:text-gray-300">\s*go install github\.com\/KushalMeghani1644\/GoAudit-CLI\/cmd\/goaudit@latest\s*<\/code>/,
    '<code className="font-mono text-xs sm:text-sm text-gray-800 dark:text-gray-300 break-all mr-3">\n                go install github.com/KushalMeghani1644/GoAudit-CLI/cmd/goaudit@latest\n              </code>'
  );

  content = content.replace(
    /<div className="p-6 md:p-8 text-gray-300 font-mono text-sm md:text-base leading-loose overflow-x-auto">/,
    '<div className="p-4 md:p-8 text-gray-300 font-mono text-xs md:text-sm leading-loose overflow-x-auto">'
  );

  fs.writeFileSync('src/routes/index.tsx', content);
}

function fixDocs() {
  let content = fs.readFileSync('src/routes/docs.tsx', 'utf8');

  content = content.replace(
    /<code className="font-mono text-sm text-gray-800 dark:text-gray-300">\s*go install github\.com\/KushalMeghani1644\/GoAudit-CLI\/cmd\/goaudit@latest\s*<\/code>/,
    '<code className="font-mono text-xs sm:text-sm text-gray-800 dark:text-gray-300 break-all mr-3">\n              go install github.com/KushalMeghani1644/GoAudit-CLI/cmd/goaudit@latest\n            </code>'
  );

  content = content.replace(
    /<div className="p-6 text-gray-300 font-mono text-sm leading-loose">/,
    '<div className="p-4 md:p-6 text-gray-300 font-mono text-xs md:text-sm leading-loose overflow-x-auto">'
  );

  fs.writeFileSync('src/routes/docs.tsx', content);
}

fixIndex();
fixDocs();
console.log("Fixed files");
