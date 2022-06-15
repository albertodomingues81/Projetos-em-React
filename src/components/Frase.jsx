import styles from './Frase.module.css'
function Frase() {

  return(
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>Este é um componente com uma frase!</p>
      <Frase />
    <h1>Este é um componente com uma frase</h1>
      <Frase />
      <Frase />
      
    </div>
  )
}

export default Frase