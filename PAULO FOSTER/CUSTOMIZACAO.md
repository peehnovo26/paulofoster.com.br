# 🎨 Guia Rápido de Customização

Este arquivo contém instruções rápidas para customizar o site.

---

## 1️⃣ MUDAR TEXTOS PRINCIPAIS

### Opção A: Editar no HTML (Mais Rápido)
Abra `index.html` e procure por estes IDs:

```html
<!-- HERO -->
<h1 id="el-hero-title">Seu novo título aqui</h1>
<p id="el-hero-subtitle">Seu novo subtítulo aqui</p>

<!-- PROBLEMA -->
<h2 id="el-problem-title">Seu novo problema aqui</h2>

<!-- SOLUÇÃO -->
<h2 id="el-solution-title">Sua nova solução aqui</h2>

<!-- SOBRE -->
<span id="el-about-name">Seu Nome</span>

<!-- DEPOIMENTOS -->
<h2 id="el-testimonials-title">Seu novo título aqui</h2>

<!-- METODOLOGIA -->
<h2 id="el-methodology-title">Seu novo título aqui</h2>

<!-- FAQ -->
<h2 id="el-faq-title">Seu novo título aqui</h2>

<!-- FRASE DE IMPACTO -->
<p id="el-impact">
  <span class="text-white/40">Primeira linha aqui</span><br>
  <span class="text-white">Segunda linha aqui</span>
</p>
```

### Opção B: Editar em JavaScript
Abra `script.js` e atualize o objeto `defaultConfig`:

```javascript
const defaultConfig = {
  hero_title: 'Seu novo título',
  hero_subtitle: 'Seu novo subtítulo',
  problem_title: 'Seu novo problema',
  solution_title: 'Sua nova solução',
  about_name: 'Seu Nome',
  testimonials_title: 'Seu novo título',
  methodology_title: 'Seu novo título',
  faq_title: 'Seu novo título',
  impact_phrase: 'Primeira linha\nSegunda linha',
  // ... etc
};
```

---

## 2️⃣ MUDAR CORES

Abra `script.js` e edite as cores em `defaultConfig`:

```javascript
const defaultConfig = {
  background_color: '#000000',      // Fundo geral
  surface_color: '#111111',         // Fundo dos cards
  text_color: '#ffffff',            // Cor do texto
  primary_action_color: '#ffffff',  // Cor dos botões
  secondary_action_color: '#666666' // Cor secundária
};
```

### Cores Sugeridas:

**Dark Mode (Padrão)**
- Background: #000000
- Surface: #111111
- Text: #ffffff

**Light Mode**
- Background: #ffffff
- Surface: #f5f5f5
- Text: #000000

**Cores por Setor**

*Tech*: Azul #2563eb
*Criativo*: Roxo #9333ea
*Negócios*: Verde #059669
*Premium*: Ouro #d97706

---

## 3️⃣ ADICIONAR IMAGENS

### Imagem de Hero (Background)
```javascript
hero_image_url: 'https://seu-cdn.com/hero-image.jpg'
```

### Foto de Perfil (Sobre)
```javascript
about_image_url: 'https://seu-cdn.com/foto-perfil.jpg'
```

---

## 4️⃣ EDITAR SEÇÕES

### Serviços
Procure em `index.html` por:
```html
<!-- SERVIÇOS -->
<div class="card-service fade-up stagger-1 p-8 ...">
  <h3>Seu Serviço 1</h3>
  <p>Descrição do serviço 1</p>
</div>
```

### Casos de Sucesso
```html
<!-- CASOS DE SUCESSO -->
<div class="fade-up stagger-1 p-8 ...">
  <h3>Seu Caso de Sucesso</h3>
  <p>Descrição do caso</p>
  <p>Resultado: R$ XXk → R$ XXk</p>
</div>
```

### Depoimentos
```html
<!-- DEPOIMENTOS -->
<div class="fade-up stagger-1 p-8 ...">
  <p class="font-semibold text-white text-sm">Seu Nome</p>
  <p class="text-xs text-white/30">Seu Cargo, Empresa</p>
  <p>Seu depoimento aqui</p>
</div>
```

### FAQ
```html
<!-- FAQ -->
<details class="fade-up stagger-1 ...">
  <summary>Sua pergunta aqui?</summary>
  <p>Sua resposta aqui</p>
</details>
```

---

## 5️⃣ FONT E TAMANHOS

### Mudar Fonte
Abra `script.js`:
```javascript
const defaultConfig = {
  font_family: 'DM Sans' // Mude para outra fonte
};
```

Fontes disponíveis no Google Fonts:
- DM Sans (padrão)
- Inter
- Poppins
- Roboto
- Playfair Display

### Mudar Tamanho Base
```javascript
const defaultConfig = {
  font_size: 16 // Tamanho em pixels
};
```

---

## 6️⃣ ANIMAÇÕES

### Remover/Desativar Animações
Em `styles.css`, comente ou remova:
```css
/* .fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
} */
```

### Aumentar Velocidade
Mude o tempo em `styles.css`:
```css
.fade-up {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1),  /* Era 0.8s */
              transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 7️⃣ LINKS E BOTÕES

### Mudar Links de Contato
```html
<a href="https://whatsapp.com/seu-numero">Botão WhatsApp</a>
<a href="mailto:seu-email@exemplo.com">Botão Email</a>
<a href="https://seu-site.com">Link Customizado</a>
```

### Estilo dos Botões
Procure por `.btn-primary` em `styles.css`:
```css
.btn-primary {
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 1);
  color: #000;
}
```

---

## 8️⃣ ÍCONES

O site usa Lucide Icons. Veja todos disponíveis em:
https://lucide.dev

Para mudar um ícone:
```html
<i data-lucide="seu-icone"></i>
```

Exemplos:
- chevron-down
- arrow-right
- star
- check-circle
- trophy
- user
- mail
- phone

---

## 9️⃣ SEÇÕES INTEIRAS

### Remover uma Seção
1. Abra `index.html`
2. Procure pelo comentário `<!-- NOME DA SEÇÃO -->`
3. Delete toda a seção `<section>...</section>`

### Adicionar Nova Seção
Copie a estrutura:
```html
<section class="px-6 py-24 sm:py-32 bg-black">
  <div class="max-w-5xl mx-auto">
    <div class="fade-up text-center mb-16">
      <span class="text-xs tracking-widest uppercase text-white/30">Label</span>
      <h2 class="fade-up stagger-1 mt-6 text-3xl sm:text-4xl font-bold">
        Seu Título
      </h2>
    </div>
    <!-- Conteúdo aqui -->
  </div>
</section>
```

---

## 🔟 RESPONSIVIDADE

O site é automático. Mas se precisar customizar:

```css
/* Mobile */
@media (max-width: 640px) {
  /* estilos mobile */
}

/* Tablet */
@media (max-width: 1024px) {
  /* estilos tablet */
}

/* Desktop */
@media (min-width: 1025px) {
  /* estilos desktop */
}
```

---

## 📋 CHECKLIST DE CUSTOMIZAÇÃO

- [ ] Mudar nome
- [ ] Atualizar título e subtítulo
- [ ] Mudar tema de cores
- [ ] Adicionar foto de perfil
- [ ] Editar serviços
- [ ] Atualizar casos de sucesso
- [ ] Adicionar depoimentos reais
- [ ] Editar FAQ
- [ ] Configurar links de contato
- [ ] Testar em mobile
- [ ] Teste no navegador

---

## 🆘 AJUDA RÁPIDA

### O site não está carregando
- Verifique se os CDNs estão acessíveis
- Verifique a console do navegador (F12)

### As animações não funcionam
- Verifique se o JavaScript está carregando
- Tente em outro navegador

### As cores não estão certo
- Verifique se está usando cores hexadecimais válidas
- Tente usar: #000000, #ffffff, #2563eb

### Problemas de layout
- Limpe cache (Ctrl+Shift+R)
- Verifique responsividade (F12 → Toggle device toolbar)

---

## 📚 Mais Informações

Veja `README.md` para documentação completa.

---

**Dúvidas? Consulte o código comentado em `script.js` e `styles.css`**
