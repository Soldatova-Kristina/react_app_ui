import classes from './Loader.module.css'

const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.circle}></div>
      <p className={classes.text}>Загрузка...</p>
    </div>
  )
}

export default Loader