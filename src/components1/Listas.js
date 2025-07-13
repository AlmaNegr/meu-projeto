function Listas(props) {
  return (
    <>
      <h2>Listas de coisas aleatórias</h2>
      <ul>
        {props.produtos.length > 0 ? (
          props.produtos.map((produto, index) => (
            <li key={index}>
              {produto.nome} - {produto.preco}
            </li>
          ))
        ) : (
          <p>Não há itens na lista</p>
        )}
      </ul>
    </>
  );
}

export default Listas;
