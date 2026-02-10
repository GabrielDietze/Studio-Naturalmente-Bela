# 🚀 GUIA RÁPIDO DE DEPLOY

## Deploy Completo (Passo a Passo)

### 1️⃣ Preparar e Testar Localmente

```bash
# Instalar dependências (se necessário)
npm install

# Verificar e otimizar imagens
npm run optimize-images

# Verificar se tudo está OK
npm run prebuild-check

# Fazer build local para testar
npm run build
```

### 2️⃣ Commitar Mudanças

```bash
git add .
git commit -m "chore: performance optimizations - WebP images, preconnects, cache headers, accessibility"
git push
```

### 3️⃣ Deploy para Vercel

```bash
# Opção 1: Deploy automático via Git (recomendado)
# - Apenas faça push e a Vercel fará deploy automático

# Opção 2: Deploy manual
vercel --prod

# Opção 3: Deploy forçado (ignorar cache)
vercel --prod --force
```

### 4️⃣ Limpar Cache da Vercel (IMPORTANTE!)

Após o deploy, é crítico limpar o cache para garantir que as mudanças sejam aplicadas:

**Via CLI:**
```bash
vercel deploy --force
```

**Via Dashboard:**
1. Acesse https://vercel.com
2. Abra seu projeto "studio-naturalmente-bela"
3. Vá em Settings → General
4. Role até "Deployment Protection"
5. Clique em "Invalidate Cache" ou "Purge Cache"

### 5️⃣ Verificar Deploy

```bash
# Abrir o site
start https://studio-naturalmente-bela.vercel.app

# Ou testar performance imediatamente
start https://pagespeed.web.dev/analysis?url=https://studio-naturalmente-bela.vercel.app
```

### 6️⃣ Testar no Navegador

1. Abra o site em modo anônimo (Ctrl+Shift+N)
2. Abra DevTools (F12)
3. Vá na aba Network
4. Marque "Disable cache"
5. Recarregue a página (Ctrl+Shift+R)

**Verificar:**
- ✅ `logo-optimized.webp` está sendo carregada
- ✅ Preconnects aparecem no HTML (View Source)
- ✅ CSS e JS têm cache headers (1 ano)
- ✅ Sem erros no console

### 7️⃣ Rodar Lighthouse

1. No DevTools, vá na aba "Lighthouse"
2. Selecione modo "Mobile"
3. Marque: Performance, Accessibility, Best Practices, SEO
4. Clique em "Analyze page load"

**Metas:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

---

## ⚡ Deploy Rápido (Se já testou antes)

```bash
npm run optimize-images && npm run prebuild-check && git add . && git commit -m "perf: optimizations" && git push
```

---

## 🔧 Troubleshooting

### ❌ Logo antiga (logo.png) ainda aparece

**Solução:**
```bash
# 1. Verificar se a logo otimizada foi gerada
ls public/images/logo-optimized.webp

# 2. Rebuild completo
npm run optimize-images
npm run build

# 3. Deploy forçado
vercel --prod --force
```

### ❌ Preconnects não aparecem

**Solução:**
1. View Source (Ctrl+U) no navegador
2. Procure por `<link rel="preconnect"`
3. Se não aparecer, significa que o HTML não está atualizado
4. Limpe cache da Vercel e redeploy

### ❌ Performance Score ainda baixo

**Checklist:**
- [ ] Cache da Vercel foi limpo?
- [ ] Navegador em modo anônimo / cache desabilitado?
- [ ] Teste em 4G simulado (DevTools → Network → Slow 4G)?
- [ ] Logo WebP está sendo usada?
- [ ] Aguardou 2-3 minutos após deploy?

### ❌ Contraste ainda falha

**Solução:**
```bash
# Verificar se o CSS mais recente foi deployado
# Abra DevTools → Sources → main.[hash].css
# Procure por: --color-text-light: #4a4540
```

Se não encontrar, significa que o build pegou CSS antigo:
```bash
rm -rf build node_modules/.cache
npm run build
vercel --prod --force
```

---

## 📊 Resultados Esperados

### Antes das Otimizações
- LCP: ~5s
- FCP: ~3s
- Performance Score: ~60
- Logo: 2,476 KB

### Depois das Otimizações
- LCP: < 2.5s
- FCP: < 1.8s
- Performance Score: > 90
- Logo: 34 KB (98.6% menor!)

---

## 📞 Suporte

**Em caso de problemas:**

1. Verifique o checklist: `DEPLOY-CHECKLIST.md`
2. Leia os detalhes: `PERFORMANCE-IMPROVEMENTS.md`
3. Rode: `npm run prebuild-check` para diagnosticar

**Links Úteis:**
- Dashboard Vercel: https://vercel.com/dashboard
- PageSpeed: https://pagespeed.web.dev/
- Documentação: https://nextjs.org/docs
