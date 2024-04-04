/* eslint-disable react/prop-types */
import styles from './styles.module.scss';

export const Card = (props) => {
  const status = props.status === "true" ? styles.True : styles.False;
  
  
  return(
    <div className={styles.Card}>
          <h1 className={status}></h1>
          <h1 className={styles.Title}>{props.name}</h1>
          <h2 className={styles.Title}>{props.desc}</h2>
          <h3 className={styles.Title}>{props.categoria}</h3>
          <p className={styles.Title}>{props.value}</p>
          <img src={props.image} alt={props.name} width={150} height={"auto"}/>
      </div>
  )
}