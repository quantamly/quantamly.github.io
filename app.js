
  // ---------- Bilingual toggle ----------
  const langButtons = document.querySelectorAll('.lang button');
  function applyLang(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-vi]').forEach(el=>{
      const val = el.getAttribute('data-'+lang);
      if(val !== null) el.innerHTML = val;
    });
    langButtons.forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
    try{ localStorage.setItem('lang', lang); }catch(e){}
  }
  langButtons.forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang)));
  let saved = 'vi';
  try{ saved = localStorage.getItem('lang') || 'vi'; }catch(e){}
  applyLang(saved);

  // ---------- Analytics consent + GA4 (loads only after the visitor accepts) ----------
  const GA_ID = 'G-8Q3WVCF430';
  function loadGA(){
    if(window.gtag) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID);
    const s = document.createElement('script');
    s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }
  (function analyticsConsent(){
    let choice = null;
    try{ choice = localStorage.getItem('analytics-consent'); }catch(e){}
    if(choice === 'granted'){ loadGA(); return; }
    if(choice === 'denied'){ return; }
    const bar = document.createElement('div');
    bar.className = 'consent';
    bar.innerHTML =
      '<p class="consent-txt" data-vi="Trang web dùng cookie phân tích ẩn danh (Google Analytics) để hiểu lượt truy cập và cải thiện nội dung." data-en="This site uses anonymous analytics cookies (Google Analytics) to understand visits and improve the content.">Trang web dùng cookie phân tích ẩn danh (Google Analytics) để hiểu lượt truy cập và cải thiện nội dung.</p>'
      + '<div class="consent-btns">'
      +   '<button type="button" class="consent-accept" data-vi="Đồng ý" data-en="Accept">Đồng ý</button>'
      +   '<button type="button" class="consent-decline" data-vi="Từ chối" data-en="Decline">Từ chối</button>'
      + '</div>';
    document.body.appendChild(bar);
    const lang = document.documentElement.lang || 'vi';
    bar.querySelectorAll('[data-vi]').forEach(function(el){ const v = el.getAttribute('data-'+lang); if(v!==null) el.innerHTML = v; });
    bar.querySelector('.consent-accept').addEventListener('click', function(){
      try{ localStorage.setItem('analytics-consent','granted'); }catch(e){}
      loadGA(); bar.remove();
    });
    bar.querySelector('.consent-decline').addEventListener('click', function(){
      try{ localStorage.setItem('analytics-consent','denied'); }catch(e){}
      bar.remove();
    });
  })();

  // ---------- Conversion events (fire only after GA is loaded) ----------
  document.addEventListener('click', function(e){
    const a = e.target.closest('a');
    if(!a || !window.gtag) return;
    const href = a.getAttribute('href') || '';
    if(href.indexOf('https://zalo.me') === 0) gtag('event','contact_zalo');
    else if(href.indexOf('mailto:') === 0 && href.indexOf('subject=') !== -1) gtag('event','catalogue_request');
    else if(href.indexOf('mailto:') === 0) gtag('event','contact_email');
    else if(/youtube\.com|youtu\.be/.test(href)) gtag('event','youtube_link');
  });

  // ---------- Mobile menu ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

  // ---------- YouTube lite-facade ----------
  document.querySelectorAll('.yt-facade').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const id=btn.dataset.id;
      if(window.gtag) gtag('event','video_play',{ video_id:id });
      const ifr=document.createElement('iframe');
      ifr.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0';
      ifr.title=btn.getAttribute('aria-label')||'YouTube video';
      ifr.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      ifr.allowFullscreen=true;
      btn.replaceWith(ifr);
    });
  });

  // ---------- Accordions (Approach: pillars & modalities) ----------
  document.querySelectorAll('.acc-head').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const item=btn.closest('.acc-item');
      const open=item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
