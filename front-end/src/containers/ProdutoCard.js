import { ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { formatPrice } from "../libs/contextLib";

function ProdutoCard(produto) {
    return (
        <div className="produto-card-container">
            {produto.map(({ produtoId, nome, descricao, preco, imagem }) => (
                <LinkContainer key={produtoId} to={`/produtos/${produtoId}`}>
                    <ListGroup.Item action>
                        <span className="produto-card-imagem">
                            {imagem}
                        </span>
                        <br />
                        <span className="produto-card-nome">
                            {nome}
                        </span>
                        <br />
                        <span className="produto-card-descricao">
                            {descricao}
                        </span>
                        <br />
                        <span className="produto-card-preco">
                        {formatPrice(preco)}
                        </span>
                    </ListGroup.Item>
                </LinkContainer>
            ))}
        </div>
    )
}

// function ProdutoCard({ produto, isSelected, onSelectedProduto }) {

//     return (
//         <div className="produto-card-container">
//             <ListGroup.Item action>
//                 <span className="produto-card-imagem">
//                     imagem
//                 </span>
//                 <br />
//                 <span className="produto-card-nome">
//                     nome
//                 </span>
//                 <br />
//                 <span className="produto-card-descricao">
//                     descricao
//                 </span>
//                 <br />
//                 <span className="produto-card-preco">
//                     preco
//                 </span>
//             </ListGroup.Item>
//         </div>
//     )
// }

export default ProdutoCard;