# ✅ Checklist de Deploy - Performance

## Antes do Deploy

- [ ] Executar `npm install` para garantir todas as dependências
- [ ] Executar `npm run optimize-images` para gerar logo-optimized.webp
- [ ] Verificar que `public/images/logo-optimized.webp` existe
- [ ] Verificar que `public/robots.txt` existe
- [ ] Executar `npm run build` localmente para testar

## Após o Deploy

- [ ] Limpar cache da Vercel
- [ ] Abrir site com DevTools (F12)
- [ ] Verificar Network tab:
  - [ ] `logo-optimized.webp` está sendo carregada (não logo.png)
  - [ ] Preconnects para fonts.googleapis.com e images.unsplash.com aparecem
  - [ ] CSS e JS têm headers de cache (1 ano)
  - [ ] Fontes são carregadas com font-display: swap

## Testar Performance

- [ ] Executar Google PageSpeed Insights
- [ ] Verificar LCP < 2.5s
- [ ] Verificar FCP < 1.8s
- [ ] Verificar CLS < 0.1
- [ ] Score de Performance > 90
- [ ] Score de Acessibilidade > 95

## Verificar Acessibilidade

- [ ] Contraste de cores passa nos testes
- [ ] Tag `<main>` está presente no HTML
- [ ] Todas as imagens têm width/height
- [ ] robots.txt retorna arquivo correto (não HTML)

## Em Caso de Problemas

### Se logo.png ainda aparece:
1. Verifique se o build foi feito após rodar optimize-images
2. Limpe o cache do navegador (Ctrl+Shift+Del)
3. Force deploy: `vercel --force`

### Se preconnects não aparecem:
1. Verifique o HTML source (View Source)
2. Confirme que as tags estão antes do </head>
3. Limpe o cache da Vercel

### Se contraste falha:
1. Verifique se o CSS mais recente foi deployado
2. Use DevTools para inspecionar cores
3. Confirme que --color-text-light: #4a4540

### Se cache headers não funcionam:
1. Verifique se vercel.json existe na raiz
2. Redeploy o projeto
3. Aguarde alguns minutos para propagação do CDN

## Comandos Úteis

```bash
# Rebuild completo
npm run optimize-images && npm run build

# Deploy forçado
vercel --prod --force

# Testar build localmente
npx serve -s build

# Ver tamanho dos arquivos
ls -lh build/static/**/*
```

## URLs de Teste

- PageSpeed: https://pagespeed.web.dev/analysis?url=https://studio-naturalmente-bela.vercel.app
- WebPageTest: https://www.webpagetest.org/
- Lighthouse CI: Chrome DevTools > Lighthouse tab
