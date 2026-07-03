function toggleNav(btn){
  const links = document.getElementById('navLinks');
  const open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}

/* generic front-end placeholder handler: hides the form, reveals a thank-you message */
function handleFormSubmit(e, thanksId){
  e.preventDefault();
  e.target.style.display = 'none';
  const thanks = document.getElementById(thanksId);
  if (thanks) thanks.style.display = 'block';
  return false;
}

/* kept for existing markup that calls handleNotes(event) directly */
function handleNotes(e){
  return handleFormSubmit(e, 'thanks');
}

/* gentle scroll reveals */
(function(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
})();
