/* ============================================
   CONFIGURAÇÃO PADRÃO
   ============================================ */

const defaultConfig = {
  background_color: '#000000',
  surface_color: '#111111',
  text_color: '#ffffff',
  primary_action_color: '#ffffff',
  secondary_action_color: '#666666',
  font_family: 'DM Sans',
  font_size: 16,
  hero_image_url: '',
  hero_title: 'Transformo marcas comuns em marcas que geram lucro.',
  hero_subtitle: 'Estratégia, posicionamento e construção de marca para quem quer crescer de verdade.',
  cta_text: 'Falar comigo',
  problem_title: 'O problema não é o seu produto.',
  solution_title: 'Marca forte vende mais.',
  about_image_url: 'pauloperfil.jpeg',
  about_name: 'Paulo H Foster',
  impact_phrase: 'Design bonito chama atenção.\nMarca estratégica gera dinheiro.',
  methodology_title: 'Como funciona meu processo',
  testimonials_title: 'Transformações que geraram resultado',
  faq_title: 'Dúvidas frequentes'
};

/* ============================================
   FUNÇÕES AUXILIARES
   ============================================ */

function safeGetElement(id) {
  try {
    return document.getElementById(id);
  } catch (e) {
    console.warn(`Erro ao buscar elemento '${id}':`, e);
    return null;
  }
}

function safeUpdateElement(id, value, property = 'textContent') {
  try {
    const element = safeGetElement(id);
    if (!element) return;

    if (property === 'textContent') {
      element.textContent = value;
    } else if (property === 'innerHTML') {
      element.innerHTML = value;
    } else if (property === 'style') {
      Object.assign(element.style, value);
    }
  } catch (e) {
    console.warn(`Erro ao atualizar elemento '${id}':`, e);
  }
}

/* ============================================
   FUNÇÕES DE ATUALIZAÇÃO
   ============================================ */

function updateHeroBackground(imageUrl) {
  try {
    const heroSection = safeGetElement('hero-section');
    if (!heroSection) return;

    if (imageUrl && imageUrl.trim()) {
      heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imageUrl}')`;
    } else {
      heroSection.style.backgroundImage = 'none';
    }
  } catch (e) {
    console.warn('Erro ao atualizar background do hero:', e);
  }
}

function updateAboutImage(imageUrl) {
  try {
    const aboutImg = safeGetElement('about-image');
    const aboutPlaceholder = safeGetElement('about-placeholder');

    if (!aboutImg || !aboutPlaceholder) return;

    if (imageUrl && imageUrl.trim()) {
      aboutImg.src = imageUrl;
      aboutImg.style.display = 'block';
      aboutPlaceholder.style.display = 'none';
    } else {
      aboutImg.style.display = 'none';
      aboutPlaceholder.style.display = 'flex';
    }
  } catch (e) {
    console.warn('Erro ao atualizar imagem sobre:', e);
  }
}

function updateTextContent(c) {
  try {
    safeUpdateElement('el-hero-title', c('hero_title'));
    safeUpdateElement('el-hero-subtitle', c('hero_subtitle'));
    safeUpdateElement('el-cta-hero', c('cta_text'));
    safeUpdateElement('el-cta-final', c('cta_text'));
    safeUpdateElement('el-problem-title', c('problem_title'));
    safeUpdateElement('el-solution-title', c('solution_title'));
    safeUpdateElement('el-about-name', c('about_name'));
    safeUpdateElement('nav-name', c('about_name'));
    safeUpdateElement('footer-name', `© 2025 ${c('about_name')}`);
    safeUpdateElement('el-testimonials-title', c('testimonials_title'));
    safeUpdateElement('el-methodology-title', c('methodology_title') || 'Como funciona meu processo');
    safeUpdateElement('el-faq-title', c('faq_title') || 'Dúvidas frequentes');

    const impactPhrase = c('impact_phrase').split('\n');
    const impactElement = safeGetElement('el-impact');
    if (impactElement) {
      impactElement.innerHTML = `<span class="text-white/40">${impactPhrase[0] || ''}</span><br><span class="text-white">${impactPhrase[1] || ''}</span>`;
    }
  } catch (e) {
    console.warn('Erro ao atualizar textos:', e);
  }
}

function updateFontSizes(baseSize) {
  try {
    document.querySelectorAll('h1').forEach((el) => {
      el.style.fontSize = `${baseSize * 3}px`;
    });

    document.querySelectorAll('h2').forEach((el) => {
      el.style.fontSize = `${baseSize * 2.2}px`;
    });

    document.querySelectorAll('h3').forEach((el) => {
      el.style.fontSize = `${baseSize * 1.15}px`;
    });
  } catch (e) {
    console.warn('Erro ao atualizar tamanhos de fonte:', e);
  }
}

function updateColors(c) {
  try {
    const bg = c('background_color');
    const surface = c('surface_color');
    const txt = c('text_color');
    const primary = c('primary_action_color');

    const appElement = safeGetElement('app');
    if (appElement) {
      appElement.style.backgroundColor = bg;
      appElement.style.color = txt;
    }

    document.querySelectorAll('.card-service').forEach((el) => {
      el.style.backgroundColor = surface;
      el.style.borderColor = `${txt}10`;
    });

    document.querySelectorAll('.btn-primary').forEach((el) => {
      el.style.borderColor = `${primary}50`;
      el.style.color = primary;
    });
  } catch (e) {
    console.warn('Erro ao atualizar cores:', e);
  }
}

/* ============================================
   FUNÇÕES DE CONFIGURAÇÃO
   ============================================ */

function onConfigChange(config) {
  try {
    const c = (key) => config[key] || defaultConfig[key];
    const font = c('font_family');
    const baseSize = c('font_size');
    const stack = `${font}, 'DM Sans', sans-serif`;

    const appElement = safeGetElement('app');
    if (appElement) {
      appElement.style.fontFamily = stack;
    }

    updateHeroBackground(c('hero_image_url'));
    updateAboutImage(c('about_image_url'));
    updateTextContent(c);
    updateFontSizes(baseSize);
    updateColors(c);
  } catch (e) {
    console.error('Erro na onConfigChange:', e);
  }
}

function mapToCapabilities(config) {
  try {
    const c = (key) => config[key] || defaultConfig[key];

    function mut(key) {
      return {
        get: () => c(key),
        set: (v) => {
          config[key] = v;
          if (window.elementSdk && window.elementSdk.setConfig) {
            window.elementSdk.setConfig({ [key]: v });
          }
        }
      };
    }

    return {
      recolorables: [
        mut('background_color'),
        mut('surface_color'),
        mut('text_color'),
        mut('primary_action_color'),
        mut('secondary_action_color')
      ],
      borderables: [],
      fontEditable: mut('font_family'),
      fontSizeable: mut('font_size')
    };
  } catch (e) {
    console.warn('Erro em mapToCapabilities:', e);
    return {};
  }
}

function mapToEditPanelValues(config) {
  try {
    const c = (key) => config[key] || defaultConfig[key];

    return new Map([
      ['hero_image_url', c('hero_image_url')],
      ['hero_title', c('hero_title')],
      ['hero_subtitle', c('hero_subtitle')],
      ['cta_text', c('cta_text')],
      ['problem_title', c('problem_title')],
      ['solution_title', c('solution_title')],
      ['about_image_url', c('about_image_url')],
      ['about_name', c('about_name')],
      ['impact_phrase', c('impact_phrase')],
      ['methodology_title', c('methodology_title')],
      ['testimonials_title', c('testimonials_title')],
      ['faq_title', c('faq_title')]
    ]);
  } catch (e) {
    console.warn('Erro em mapToEditPanelValues:', e);
    return new Map();
  }
}

/* ============================================
   INICIALIZAÇÃO DO SDK (COM FALLBACK)
   ============================================ */

function initializeSDK() {
  try {
    if (window.elementSdk && typeof window.elementSdk.init === 'function') {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
      console.log('✓ SDK inicializado');
    } else {
      console.log('ℹ SDK não disponível, usando configuração padrão');
      onConfigChange(defaultConfig);
    }
  } catch (e) {
    console.warn('Erro ao inicializar SDK:', e);
    onConfigChange(defaultConfig);
  }
}

/* ============================================
   INICIALIZAÇÃO LUCIDE
   ============================================ */

function initializeLucideIcons() {
  try {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
      console.log('✓ Ícones carregados');
    } else {
      console.log('ℹ Lucide não disponível');
    }
  } catch (e) {
    console.warn('Erro ao carregar Lucide:', e);
  }
}

/* ============================================
   INICIALIZAÇÃO OBSERVER
   ============================================ */

function initializeObserver() {
  try {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.fade-up, .line-reveal').forEach((el) => {
      observer.observe(el);
    });

    console.log('✓ Animações ativadas');
  } catch (e) {
    console.warn('Erro ao inicializar observer:', e);
  }
}

/* ============================================
   INICIALIZAÇÃO PRINCIPAL
   ============================================ */

function initializeApp() {
  try {
    console.log('🚀 Iniciando aplicação...');
    initializeSDK();
    initializeLucideIcons();
    initializeObserver();
    console.log('✓ Aplicação iniciada com sucesso!');
  } catch (e) {
    console.error('✗ Erro ao inicializar:', e);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

window.addEventListener('load', () => {
  try {
    initializeLucideIcons();
  } catch (e) {
    console.warn('Erro no evento load:', e);
  }
});
