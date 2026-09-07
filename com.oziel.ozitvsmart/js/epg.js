const EPG = {
 async load(streamId){
  return await Xtream.api('get_short_epg','&stream_id='+streamId);
 },
 show(items){
  const box=document.getElementById('epg');
  if(!box) return;
  box.innerHTML='';
  (items||[]).forEach(i=>{
   const div=document.createElement('div');
   div.textContent=(i.title||'')+' '+(i.start||'');
   box.appendChild(div);
  });
 }
};
