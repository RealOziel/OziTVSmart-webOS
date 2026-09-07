const App={
 currentCategory:null,
 async loadCategories(){
  if(typeof Categories==='undefined') return;
  const cats=await Categories.load();
  const box=document.getElementById('categories');
  if(!box)return;
  box.innerHTML='';
  cats.forEach(c=>{const b=document.createElement('button');b.textContent=c.name;b.onclick=()=>App.loadChannels(c.id);box.appendChild(b);});
 },
 async loadChannels(categoryId){
  App.currentCategory=categoryId;
  const list=await Xtream.channels(categoryId);
  const box=document.getElementById('channels');
  if(!box)return;
  box.innerHTML='';
  list.forEach(c=>{
   const card=document.createElement('div');
   card.className='channel-card';
   card.innerHTML=`<img src="${c.stream_icon||''}"><span>${c.name||'Canal'}</span>`;
   card.onclick=()=>{Player.play(c); if(typeof EPG!=='undefined') EPG.load(c.stream_id);};
   box.appendChild(card);
  });
 },
 start(){this.loadCategories();}
};
window.addEventListener('load',()=>App.start());