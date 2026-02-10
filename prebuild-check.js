// Pre-build checks
const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando requisitos antes do build...\n');

let allChecksPass = true;

// Verificar se logo-optimized.webp existe
const logoOptimized = path.join(__dirname, 'public', 'images', 'logo-optimized.webp');
if (fs.existsSync(logoOptimized)) {
  const stats = fs.statSync(logoOptimized);
  const sizeKB = (stats.size / 1024).toFixed(2);
  console.log(`✅ logo-optimized.webp encontrada (${sizeKB} KB)`);
} else {
  console.log('❌ logo-optimized.webp NÃO encontrada!');
  console.log('   Execute: npm run optimize-images');
  allChecksPass = false;
}

// Verificar se robots.txt existe
const robotsTxt = path.join(__dirname, 'public', 'robots.txt');
if (fs.existsSync(robotsTxt)) {
  console.log('✅ robots.txt encontrado');
} else {
  console.log('⚠️  robots.txt não encontrado (recomendado)');
}

// Verificar se vercel.json existe
const vercelJson = path.join(__dirname, 'vercel.json');
if (fs.existsSync(vercelJson)) {
  console.log('✅ vercel.json encontrado (cache headers)');
} else {
  console.log('⚠️  vercel.json não encontrado');
}

// Verificar index.html
const indexHtml = path.join(__dirname, 'public', 'index.html');
if (fs.existsSync(indexHtml)) {
  const content = fs.readFileSync(indexHtml, 'utf8');
  
  if (content.includes('preconnect')) {
    console.log('✅ Preconnects encontrados no HTML');
  } else {
    console.log('⚠️  Preconnects não encontrados no HTML');
  }
  
  if (content.includes('logo-optimized.webp')) {
    console.log('✅ Preload da logo otimizada encontrado');
  } else {
    console.log('⚠️  Preload da logo não encontrado');
  }
}

// Verificar App.jsx
const appJsx = path.join(__dirname, 'src', 'App.jsx');
if (fs.existsSync(appJsx)) {
  const content = fs.readFileSync(appJsx, 'utf8');
  
  if (content.includes('logo-optimized.webp')) {
    console.log('✅ App.jsx usa logo-optimized.webp');
  } else {
    console.log('❌ App.jsx ainda usa logo.png!');
    console.log('   As imagens devem usar logo-optimized.webp');
    allChecksPass = false;
  }
  
  if (content.includes('<main>')) {
    console.log('✅ Tag <main> encontrada (acessibilidade)');
  } else {
    console.log('⚠️  Tag <main> não encontrada');
  }
}

console.log('\n' + '='.repeat(50));
if (allChecksPass) {
  console.log('✅ Todos os checks obrigatórios passaram!');
  console.log('🚀 Pronto para build e deploy');
  process.exit(0);
} else {
  console.log('❌ Alguns checks falharam!');
  console.log('Por favor, corrija os problemas antes de fazer deploy.');
  process.exit(1);
}
