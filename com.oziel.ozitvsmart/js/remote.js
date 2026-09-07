// OziTV Smart webOS remote control
window.Remote = {
  init(){
    document.addEventListener('keydown', e => {
      if(e.key === 'Enter'){
        const el=document.activeElement;
        if(el && el.click) el.click();
      }
    });
  }
};
Remote.init();
