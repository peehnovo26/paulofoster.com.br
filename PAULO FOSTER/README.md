# Paulo H Foster — Estrategista de Marcas

Site profissional moderno e responsivo para apresentar serviços de estratégia e construção de marcas.

## 📁 Estrutura do Projeto

```
PAULO FOSTER/
├── index.html           # Arquivo HTML principal (limpo e organizado)
├── styles.css           # Estilos customizados
├── script.js            # Lógica JavaScript (modularizada)
└── README.md            # Este arquivo
```

## 🎯 Características

- ✅ **Design Moderno**: Interface dark/light com animações suaves
- ✅ **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Performance**: Carregamento rápido com otimizações
- ✅ **Animações**: Fade-up com Intersection Observer para scroll
- ✅ **Acessível**: Suporte para redução de movimento (prefers-reduced-motion)
- ✅ **Customizável**: Fácil atualização de textos, cores e conteúdo

## 🚀 Como Usar

### 1. Abrir o Projeto
Simplesmente abra o arquivo `index.html` em seu navegador.

### 2. Customizar Conteúdo
Edite os elementos com IDs no `index.html`:

```html
<!-- Título principal -->
<h1 id="el-hero-title">Seu título aqui</h1>

<!-- Subtítulo -->
<p id="el-hero-subtitle">Seu subtítulo aqui</p>

<!-- Nome -->
<span id="el-about-name">Seu Nome</span>
```

### 3. Atualizar Cores
Modifique o `defaultConfig` em `script.js`:

```javascript
const defaultConfig = {
  background_color: '#000000',
  surface_color: '#111111',
  text_color: '#ffffff',
  primary_action_color: '#ffffff',
  // ... mais cores
};
```

### 4. Adicionar Imagens
Defina URLs no SDK ou diretamente no HTML:

```javascript
// Em script.js (defaultConfig)
hero_image_url: 'https://seu-cdn.com/imagem.jpg',
about_image_url: 'https://seu-cdn.com/foto.jpg',
```

## 📚 Seções do Site

1. **Navegação** - Menu fixo com links
2. **Hero** - Banner principal com CTA
3. **Problema** - Apresentação do problema
4. **Solução** - Solução oferecida
5. **Serviços** - Catálogo de serviços
6. **Estatísticas** - Números e resultados
7. **Casos de Sucesso** - Exemplos de projetos
8. **Reconhecimentos** - Credibilidade
9. **Presença** - Conexões e relacionamentos
10. **Sobre** - Informações do profissional
11. **Depoimentos** - Testimoniais de clientes
12. **Metodologia** - Processo de trabalho
13. **FAQ** - Perguntas frequentes
14. **CTA Final** - Chamada para ação
15. **Footer** - Rodapé

## 🎨 Sistema de Cores

- **Background**: #000000 (preto)
- **Surface**: #111111 (cinza muito escuro)
- **Text**: #ffffff (branco)
- **Primary Action**: #ffffff (branco)
- **Secondary**: #666666 (cinza)

## ⚡ Animações

### Fade-Up
Elementos aparecem com movimento de baixo para cima ao entrar em viewport.

### Stagger
Atraso progressivo para efeito em cascata:
- `.stagger-1`: 0.1s
- `.stagger-2`: 0.2s
- `.stagger-3`: 0.25s
- `.stagger-4`: 0.35s

### Line Reveal
Linhas decorativas aparecem com width animation.

## 🔧 Tecnologias

- **HTML5** - Estrutura semântica
- **Tailwind CSS** - Framework de estilos
- **CSS3** - Animações e transições customizadas
- **JavaScript Vanilla** - Sem dependências externas
- **Lucide Icons** - Ícones SVG

## 🌐 CDNs Utilizadas

- Tailwind CSS v3.4.17
- Lucide Icons v0.263.0
- Google Fonts (DM Sans)

## ✏️ Editando Conteúdo

### Textos Dinâmicos
Todos os textos principais podem ser atualizados via JavaScript:

```javascript
// Em script.js
const defaultConfig = {
  hero_title: 'Seu novo título',
  hero_subtitle: 'Novo subtítulo',
  problem_title: 'Novo problema',
  // ... etc
};
```

### Imagens
Adicione URLs para:
- `hero_image_url` - Imagem de fundo do hero
- `about_image_url` - Foto de perfil

## 🚨 Troubleshooting

### Ícones não aparecem
Verifique se o script do Lucide está carregando corretamente no console.

### Animações não funcionam
Verifique se `.visible` está sendo aplicado ao scroll. Abra DevTools e veja a console.

### Cores não atualizam
Certifique-se de que está usando o `onConfigChange` corretamente ou atualize `defaultConfig`.

## 📱 Responsividade

O site é totalmente responsivo:
- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet**: Layout otimizado com grid responsivo
- **Mobile**: Layout em coluna única com navegação simplificada

## 🔐 Performance

- Imagens lazy-loading
- CSS comprimido
- JavaScript minificado
- Sem dependências pesadas

## 📝 Licença

© 2025 Paulo H Foster. Todos os direitos reservados.

## 👨‍💻 Melhorias Futuras

- [ ] CMS integrado
- [ ] Integração com WhatsApp
- [ ] Blog/Artigos
- [ ] Dashboard de analytics
- [ ] Sistema de reserva de consultas
- [ ] Newsletter
- [ ] Integração de redes sociais
