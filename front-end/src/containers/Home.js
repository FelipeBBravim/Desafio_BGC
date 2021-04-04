import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Image, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { formatPrice, useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import "./Home.css";

export default function Home() {
    const [produtos, setProdutos] = useState([]);
    const { isAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(true);  

    useEffect(() => {
        async function onLoad() {
            if (!isAuthenticated) {
                return;
            }
            try {
                const produto = await loadProdutos();
                setProdutos(produto.Items);
            } catch (e) {
                onError(e);
            }

            setIsLoading(false);
        }

        onLoad();
    }, [isAuthenticated]);


    function loadProdutos() {
        return API.get("MinionsBGC", "/produtos");
    }

    function renderListaProdutos(produtos) {
        return (
            <div className="produto-lista-container">
                <div className="produto-lista-itens">
                    {produtos.map(({ produtoId, imagem, nome, descricao, preco }) => (
                        <LinkContainer key={produtoId} to={`/produtos/${produtoId}`}>
                            <ListGroup.Item action>
                                <span className="produto-card-nome">
                                    {nome}
                                </span>
                                <br />
                                <Image
                                    uri={imagem}
                                    className="produto-card-imagem"
                                    alt="#Error"
                                />
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
            </div>
        );
        // return (
        //     <>
        //         <LinkContainer to="/notes/new">
        //             <ListGroup.Item action className="py-3 text-nowrap text-truncate">
        //                 <BsPencilSquare size={17} />
        //                 <span className="ml-2 font-weight-bold">Create a new note</span>
        //             </ListGroup.Item>
        //         </LinkContainer>
        //         {produtos.map(({ produtoId, nome, preco }) => (
        //             <LinkContainer key={produtoId} to={`/notes/${produtoId}`}>
        //                 <ListGroup.Item action>
        //                     <span className="font-weight-bold">
        //                         {nome.trim().split("\n")[0]}
        //                     </span>
        //                     <br />
        //                     <span className="text-muted">
        //                         {formatPrice(preco)}
        //                     </span>
        //                 </ListGroup.Item>
        //             </LinkContainer>
        //         ))}
        //     </>
        // );
    }

    function renderLander() {
        return (
            <div className="lander">
                <h1>Desafio BGC</h1>
                <p className="text-muted">Uma loja simples de venda de Minions <br /> Por favor, faça login.</p>
            </div>
        );
    }

    function renderProdutos() {
        console.log("PRODUTOS", produtos);
        return (
            <div className="notes">
                <h2 className="pb-3 mt-4 mb-3 border-bottom">Your Notes</h2>
                <ListGroup>{!isLoading && renderListaProdutos(produtos)}</ListGroup>
            </div>
        );
    }

    return (
        <div className="Home">
            {isAuthenticated ? renderProdutos() : renderLander()}
        </div>
    );
}
