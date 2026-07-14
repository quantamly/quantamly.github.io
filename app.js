
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

  // ---------- Mobile menu ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

  // ---------- YouTube lite-facade ----------
  document.querySelectorAll('.yt-facade').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const id=btn.dataset.id;
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
