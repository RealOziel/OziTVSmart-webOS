const Categories = {
 async load(){
  return await Xtream.api('get_live_categories');
 },
 filter(channels, categoryId){
  return channels.filter(c => String(c.category_id) === String(categoryId));
 }
};
