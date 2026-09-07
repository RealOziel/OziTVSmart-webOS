const Home = {
  render(categories = []) {
    const root = document.getElementById('home');
    if (!root) return;
    root.innerHTML = '';
    categories.forEach(cat => {
      const item = document.createElement('button');
      item.className = 'category';
      item.innerText = cat.category_name || 'Categoria';
      item.onclick = () => App.loadCategory(cat.category_id);
      root.appendChild(item);
    });
  }
};
