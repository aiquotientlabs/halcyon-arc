// Halcyon Arc — small progressive enhancements
(function(){
  var burger=document.querySelector('.burger'),links=document.querySelector('.nav-links');
  if(burger&&links){burger.addEventListener('click',function(){var o=links.classList.toggle('open');burger.setAttribute('aria-expanded',o)})}
  document.querySelectorAll('.has-menu>button').forEach(function(b){
    b.addEventListener('click',function(e){e.stopPropagation();var p=b.parentElement,o=p.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  });
  document.addEventListener('click',function(){document.querySelectorAll('.has-menu.open').forEach(function(m){m.classList.remove('open')})});

  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  } else {document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')})}

  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  // Contact form: static site, so compose an email to the contact address.
  var f=document.getElementById('contact-form');
  if(f){
    var pre=new URLSearchParams(location.search).get('interest');
    if(pre&&f.interest){f.interest.value=pre}
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var to=f.getAttribute('data-to'),d=new FormData(f);
      var body='Name: '+d.get('name')+'\nOrganization: '+d.get('org')+'\nRole: '+d.get('role')+'\nInterest: '+d.get('interest')+'\n\n'+d.get('message');
      var href='mailto:'+to+'?subject='+encodeURIComponent('Halcyon Arc enquiry — '+d.get('interest'))+'&body='+encodeURIComponent(body);
      var s=document.getElementById('form-status');
      s.innerHTML='Your email app should open with this message ready to send. If it does not, write to us directly at <strong>'+to+'</strong>.';
      s.classList.add('show');
      try{window.location.href=href}catch(err){}
    });
  }
})();
