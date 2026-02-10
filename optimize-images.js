// Script para otimizar imagens para Web
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const publicDir = path.join(__dirname, 'public', 'images');
  const logoPath = path.join(publicDir, 'logo.png');
  const logoOptimizedPath = path.join(publicDir, 'logo-optimized.webp');

  try {
    // Verificar se a logo existe
    if (!fs.existsSync(logoPath)) {
      console.error('❌ Arquivo logo.png não encontrado em', logoPath);
      console.log('Por favor, certifique-se de que a logo existe em public/images/logo.png');
      return;
    }

    console.log('🖼️  Otimizando logo.png...');

    // Obter dimensões originais
    const metadata = await sharp(logoPath).metadata();
    console.log(`📏 Dimensões originais: ${metadata.width}x${metadata.height}`);

    // Converter para WebP com qualidade ótima
    // Redimensionar para largura máxima de 400px (mantendo aspect ratio)
    await sharp(logoPath)
      .resize(400, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 85, effort: 6 })
      .toFile(logoOptimizedPath);

    // Obter tamanhos dos arquivos
    const originalSize = fs.statSync(logoPath).size;
    const optimizedSize = fs.statSync(logoOptimizedPath).size;
    const savings = originalSize - optimizedSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

    console.log(`✅ Logo otimizada criada: logo-optimized.webp`);
    console.log(`📊 Tamanho original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`📊 Tamanho otimizado: ${(optimizedSize / 1024).toFixed(2)} KB`);
    console.log(`💾 Economia: ${(savings / 1024).toFixed(2)} KB (${savingsPercent}%)`);

    console.log('\n✨ Otimização concluída com sucesso!');
    console.log('Agora você pode fazer deploy da aplicação com as imagens otimizadas.');
  } catch (error) {
    console.error('❌ Erro ao otimizar imagens:', error.message);
    console.log('\nCaso o erro seja sobre o módulo "sharp", instale-o executando:');
    console.log('npm install --save-dev sharp');
  }
}

optimizeImages();
