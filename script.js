const btn=document.querySelector('#themeToggle');
const pref=localStorage.getItem('cc-theme')||'dark';
if(pref==='light'){document.body.classList.add('light');}
btn.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('cc-theme',document.body.classList.contains('light')?'light':'dark');});