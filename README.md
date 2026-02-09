# Studio Naturalmente Bela

Site institucional para o Studio Naturalmente Bela - Salão de Beleza & Estética.

## 🌿 Sobre o Projeto

Site desenvolvido em React seguindo os princípios de:
- Design minimalista e espaçado
- Paleta de cores elegante (dourado, branco e cinza)
- Acessibilidade (WCAG AA)
- Experiência humanizada e acolhedora
- Menu de navegação suave
- Imagens responsivas

## 🎨 Cores

- **Branco**: `#FFFFFF` - Fundo principal
- **Dourado**: `#C9A24D` - Destaques, títulos e botões
- **Cinza Escuro**: `#333333` - Texto principal

## 📸 Adicionando Imagens Reais

O site atualmente usa imagens de alta qualidade do Unsplash como placeholder. Para substituir por suas próprias imagens:

### Opção 1: Usar suas próprias fotos

1. **Adicione as imagens na pasta `public/images/`:**
```
public/
  images/
    header.jpg          (Imagem principal do hero - 1200x800px)
    beleza.jpg          (Pilar Beleza - 800x600px)
    bem-estar.jpg       (Pilar Bem-estar - 800x600px)
    andreia.jpg         (Profissional Andreia - 600x800px)
    maria.jpg           (Profissional Maria - 600x800px)
```

2. **Atualize o CSS em `src/App.css`:**

**Hero Section:**
```css
.hero-image {
  background-image: url('/images/header.jpg');
}

/* Mobile background */
@media (max-width: 767px) {
  .hero::before {
    background-image: url('/images/header.jpg');
  }
}
```

**Pilares:**
```css
.pillar-image-beauty {
  background-image: url('/images/beleza.jpg');
}

.pillar-image-wellness {
  background-image: url('/images/bem-estar.jpg');
}
```

**Profissionais:**
```css
.professional-image-andreia {
  background-image: url('/images/andreia.jpg');
}

.professional-image-maria {
  background-image: url('/images/maria.jpg');
}
```

### Opção 2: Usar outras imagens do Unsplash

Acesse [unsplash.com](https://unsplash.com) e procure por imagens relacionadas a:
- Salão de beleza
- Spa e massagem
- Cuidados com cabelo
- Bem-estar

Copie a URL da imagem no formato `?w=1200&q=80` para otimização.

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

3. **Acessar no navegador:**
   ```
   http://localhost:3000
   ```

## 📱 WhatsApp e Instagram

Antes de publicar o site, atualize os links de contato no arquivo `src/App.jsx`:

**WhatsApp:**
```javascript
const phoneNumber = '5511999999999'; // Substitua pelo número real
```

Formato: código do país + DDD + número (sem espaços, traços ou parênteses)

**Instagram:**
```javascript
const instagramHandle = 'naturalmente.bela'; // Substitua pelo seu @
```

## 🎯 Botões de CTA

O site inclui botões de Call-to-Action estrategicamente posicionados:
- **Hero Section**: WhatsApp e Instagram em destaque
- **Seção Pilares**: Link para Instagram
- **Seção Serviços**: Botões WhatsApp e Instagram
- **Seção Contato**: Botão principal de agendamento

## 🧭 Menu de Navegação

O site inclui um menu de navegação responsivo com:
- Logo clicável (volta ao topo)
- Links para todas as seções
- Botão de agendamento destacado
- Menu hambúrguer para mobile
- Navegação suave (smooth scroll)

## 🏗️ Estrutura do Site

1. **Hero Section** - Layout moderno com texto à esquerda e imagem à direita (desktop), imagem de fundo no mobile, com CTAs de WhatsApp e Instagram
2. **Frase Institucional** - Apresentação do studio
3. **Pilares** - Beleza e Bem-estar com imagens reais e CTA para Instagram
4. **Profissionais** - Andreia e Maria do Socorro com fotos profissionais em layout alternado
5. **Serviços** - Lista de procedimentos com CTAs de contato
6. **Diferenciais** - O que torna o studio único
7. **Contato** - Botão WhatsApp destacado para agendamento

## 📦 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `build/`.

## 🌐 Deploy

Você pode fazer deploy em:
- **Vercel** (recomendado para React)
- **Netlify**
- **GitHub Pages**
- Qualquer servidor com suporte a SPA

---

**Beleza com propósito. Cuidado com verdade. Bem-estar de forma natural.**
