import css from './Contact.module.css'
function Contact({ Data,deleteContact,}) {
      
  function btnClick() {
    deleteContact(Data.id);
  }
    return(
    <div className={css.wrapper}>
        <div className={css.item}>
            <p>{Data.name}
            </p>
            <p>{Data.number}
            </p>

        </div>
        <button className={css.dBtn} onClick={btnClick}>Delete</button>
    </div>
)}

export default Contact