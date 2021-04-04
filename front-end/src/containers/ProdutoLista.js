import ProdutoCard from "./ProdutoCard";


function ProdutoLista(produtos) {
    return (
        <div className="produto-lista-container">
            <div className="produto-lista-itens">
                {produtos.map(({ produtoId, imagem, nome, descricao, preco }) => (
                    <ProdutoCard
                        key={produtoId}
                        imagem={imagem}
                        nome={nome}
                        descricao={descricao}
                        preco={preco}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProdutoLista;