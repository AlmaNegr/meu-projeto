function Outralista({ lista }) {
  return(
    <div>
      {lista.length > 0 ? (
        lista.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Não há intens na lista</p>
      )}
    </div>
  )
}

export default Outralista