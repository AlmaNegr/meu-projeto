function Outralista({ itens }) {
  return (
    <>
      <h3>Itens de coisas boas:</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Não há itens na lista!</p>
      )}
    </>
  );
}

export default Outralista;
