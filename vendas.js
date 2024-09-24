let inventario =[
{ nome: 'GTA', preco: 100, emEstoque: true },
{ nome: 'Mario', preco: 70, emEstoque: false },
{ nome: 'Dragão z', preco: 90, emEstoque: true },
{ nome: 'Minecraft', preco: 100, emEstoque: true },
{ nome: 'Tetris', preco: 50, emEstoque: false },
{ nome: 'Pac-men', preco: 80, emEstoque: true },
{ nome: 'Call of duty', preco: 100, emEstoque: true },
{ nome: 'Fifa 2014', preco: 50, emEstoque: false },
{ nome: 'Sinic', preco: 100, emEstoque: true },
{ nome: 'The witcher 3', preco: 100, emEstoque: true },
{ nome: 'Overwatch', preco: 60, emEstoque: false },
{ nome: 'terraria', preco: 100, emEstoque: true },
{ nome: 'Skirim', preco: 120, emEstoque: true },
{ nome: 'Mario kart 8', preco: 50, emEstoque: false },
{ nome: 'Borderlands', preco: 150, emEstoque: true }
]

inventario.push({ nome: 'Skirim', preco: 120, emEstoque: true });
inventario[0].preco = 120;
inventario[2].emEstoque = false;
for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].emEstoque) {
    console.log(inventario[i].nome + ' está em estoque.');
    }
    }
    let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
console.log(produtosEmEstoque);