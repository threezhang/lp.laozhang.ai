document.addEventListener('DOMContentLoaded', function () {
  // FAQ 功能
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      question.classList.toggle("active");
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

      // 关闭其他打开的问题
      faqQuestions.forEach((q) => {
        if (q !== question) {
          q.classList.remove("active");
          q.nextElementSibling.style.display = 'none';
        }
      });
    });
  });

  // 导航高亮功能
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // 平滑滚动到锚点功能
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // 修改代码切换功能
  const dropdownBtn = document.querySelector('.code-dropdown-btn');
  const dropdownMenu = document.querySelector('.code-dropdown-menu');
  const selectedLanguage = document.querySelector('.selected-language');
  const codeOptions = document.querySelectorAll('.code-option');
  
  // 切换下拉菜单
  dropdownBtn.addEventListener('click', () => {
    dropdownBtn.classList.toggle('active');
    dropdownMenu.classList.toggle('show');
  });
  
  // 点击外部关闭下拉菜单
  document.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target)) {
      dropdownBtn.classList.remove('active');
      dropdownMenu.classList.remove('show');
    }
  });
  
  // 选择代码语言
  codeOptions.forEach(option => {
    option.addEventListener('click', () => {
      // 更新按钮文本
      selectedLanguage.textContent = option.textContent;
      
      // 移除所有活动状态
      codeOptions.forEach(opt => opt.classList.remove('active'));
      document.querySelectorAll('.code-content').forEach(content => {
        content.classList.remove('active');
      });
      
      // 添加新的活动状态
      option.classList.add('active');
      const codeId = `${option.dataset.tab}-code`;
      const targetCode = document.getElementById(codeId);
      targetCode.classList.add('active');
      
      // 更新复制按钮的目标
      const copyButton = document.querySelector('.copy-button');
      if (copyButton) {
        copyButton.setAttribute('data-clipboard-target', `#${codeId} code`);
      }
      
      // 关闭下拉菜单
      dropdownBtn.classList.remove('active');
      dropdownMenu.classList.remove('show');
    });
  });

  // 添加代码复制功能
  const copyButtons = document.querySelectorAll('.copy-button');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      // 获取当前激活的代码内容
      const activeCode = document.querySelector('.code-content.active code');
      if (!activeCode) return;
      
      try {
        // 复制到剪贴板
        await navigator.clipboard.writeText(activeCode.textContent);
        
        // 更新按钮状态
        const originalText = button.querySelector('span').textContent;
        button.classList.add('copied');
        button.querySelector('span').textContent = '已复制!';
        
        // 3秒后恢复原状
        setTimeout(() => {
          button.classList.remove('copied');
          button.querySelector('span').textContent = originalText;
        }, 3000);
      } catch (err) {
        console.error('复制失败:', err);
        button.querySelector('span').textContent = '复制失败';
      }
    });
  });
});

// 加载动画
window.addEventListener('load', function () {
  var loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.opacity = '0';
  loadingOverlay.style.transition = 'opacity 0.5s ease';
  setTimeout(function () {
    loadingOverlay.style.display = 'none';
  }, 500);
});

// 关闭推广横幅
function closePromoBanner() {
  const banner = document.getElementById('promo-banner');
  if (banner) {
    banner.classList.add('hidden');
    sessionStorage.setItem('promoBannerClosed', 'true');
  }
}

// 页面加载时检查横幅状态
document.addEventListener('DOMContentLoaded', function() {
  const banner = document.getElementById('promo-banner');
  if (banner && sessionStorage.getItem('promoBannerClosed') === 'true') {
    banner.classList.add('hidden');
  }
});