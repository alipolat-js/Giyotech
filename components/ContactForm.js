import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import { MessageField, TextField, SelectField } from '../components/TextField';
import * as Yup from 'yup';

const ContactForm = ({ defaultSubject }) => {
  let validate;
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  defaultSubject ?
    validate = Yup.object({
      name: Yup.string()
        .required('*zorunlu'),
      email: Yup.string()
        .tel('Geçerli bir email adresi girin.')
        .required('*zorunlu'),
      tel: Yup.string()
        .matches(phoneRegExp, 'Geçerli Bir Telefon Numarası Girin')
        .required('*zorunlu'),
      message: Yup.string()
        .required('*zorunlu'),
    })
    :
    validate = Yup.object({
      name: Yup.string()
        .required('*zorunlu'),
      email: Yup.string()
        .email('Geçerli bir email adresi girin.')
        .required('*zorunlu'),
      tel: Yup.string()
        .matches(phoneRegExp, 'Geçerli Bir Telefon Numarası Girin')
        .required('*zorunlu'),
      subject: Yup.string()
        .required('*zorunlu'),
      message: Yup.string()
        .required('*zorunlu'),
    })

  const [submitting, setsubmitting] = useState(false)
  const [submissionSuccessful, setsubmissionSuccessful] = useState(false)

  const handleSubmit = async (values, { resetForm }) => {

    setsubmitting(true)

    setTimeout(() => {
      setsubmitting(false)
      resetForm()
      setsubmissionSuccessful(true)

      setTimeout(() => {
        setsubmissionSuccessful(false)
      }, 5000);
    }, 2000);

    // Contact api request
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
  }

  return (
    <div className='w-full max-w-xl'>
      <Formik
        // initial values
        initialValues={{
          name: '',
          email: '',
          tel: '',
          subject: defaultSubject ? defaultSubject : "",
          message: ''
        }}

        validationSchema={validate}

        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, { resetForm })
        }}
      >
        {formik => (
          <div>
            <Form>
              <TextField label="Ad Soyad" name="name" type="text" />
              <TextField label="Email" name="email" type="email" />
              <TextField label="Telefon" name="tel" type="tel" />
              {
                !defaultSubject && <SelectField label="Almak İstediğiniz Hizmet veya İletişim Konusu" name="subject" />
              }
              <MessageField label="Almak İstediğiniz Hizmete Dair Detaylı Açıklama (ölçüler ile birlikte)" name="message" />
              <button className={`mt-4 font-bold py-2 px-4 duration-300 rounded-md border-2
                    ${submitting ? "border-gray-500 text-gray-500" : "border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-primary-light"}
                  `} type="submit" disabled={(submissionSuccessful || submitting) ? true : false}>Fiyat Teklifi Al</button>
            </Form>
          </div>
        )}
      </Formik>
      <div className={`z-50 fixed bottom-8 left-8 bg-green-600 text-primary-light p-4 font-bold rounded-md duration-300 ${submissionSuccessful ? "opacity-1" : "opacity-0"}`} >
        Mesajınız Gönderildi
      </div>
    </div>
  )
}

export default ContactForm