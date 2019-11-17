import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const studentValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('No podés dejar el campo vacío').min(3),
    lastName: Yup.string().required('No podés dejar el campo vacío').min(8).max(20),
    age: Yup.number('Solo escribí números')
        .required('No podés dejar el campo vacío')
        .positive('No pongas un - por delante')
        .integer('Solo números enteros')
        .min(18)
        .max(72),
    email: Yup.string().email('Escribí un mail válido').required('No podés dejar el campo vacío'),
    comission: Yup.string()

})

const StudentForm = ({data, submit}) => {
    return (
        <Formik 
        initialValues={data} 
        onSubmit={submit} 
        validationSchema={studentValidationSchema}
        enableReinitialize>
            {(props) => {
                return (
                    <Form>
                        <Field type={'text'} 
                        name={'firstName'} 
                        placeholder={'nombre:'} />
                        <ErrorMessage name={'firstName'} />
                        <Field type={'text'} 
                        name={'lastName'} placeholder={'apellido:'} />
                        <ErrorMessage name={'lastName'} />
                        <Field type={'number'} 
                        name={'age'} placeholder={'edad:'} />
                        <ErrorMessage name={'age'} />
                        <Field type={'text'} name={'email'} placeholder={'correo eléct.:'} />
                        <ErrorMessage name={'email'} />
                        <Field type={'text'} name={'comission'} placeholder={'comisión:'} />
                        <ErrorMessage name={'comission'} />
                        <button type={'submit'}>Enviar</button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default StudentForm