import css from './ContactList.module.css'
import Contact from '../Contact/Contact'

function ContactList({contacts, deleteContact}){

    return(
    <>
        <ul className={css.listWrapper}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact Data={contact} deleteContact={deleteContact} />

                </li>
            ))}
        </ul>
        </>
        )
    
}

export default ContactList