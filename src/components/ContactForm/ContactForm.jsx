import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import MaskedInput from 'react-text-mask';

const formSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});


function ContactForm({ onAddContact }) {
    
    const initialValues = {
        name: "",
        number: ""
    };

    const userNameId = useId();
    const userNumberId = useId();
 


   const handleSubmit=(values, actions)=>{
        const newContact = { ...values, id: nanoid() };
        onAddContact(newContact);
        actions.resetForm();
    }
    

    
    
        return (
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={formSchema}>
                <Form className={css.form}>
                    <label htmlFor={userNameId}>Number</label>
                    <Field className={css.field} type="text" name="name" id={userNameId} />
                    <ErrorMessage name="name" component="span" />
                    <label htmlFor={userNumberId}>Number</label>
                    <Field as={MaskedInput}
                        mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} className={css.field} type="tel" name="number" id={userNumberId} />
                    <ErrorMessage name="number" component="span" />
                    <button className={css.btn} type="submit"> Add Contact</button>
                </Form>
            </Formik>
        )
    }


export default ContactForm