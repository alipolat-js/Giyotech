import React from 'react';
import { ErrorMessage, useField, Field } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label className='mb-1 font-sans text-gray-700' htmlFor={field.name}>{label}</label>
      <ErrorMessage component="span" name={field.name} className="text-red-500 font-bold ml-2" />
      <input
        className="rounded-md px-3 w-full py-2 border-2 border-gray-300 bg-gray-200"
        {...field} {...props}
        autoComplete="true"
      />
    </div>
  )
}

export const MessageField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label className='mb-1 font-sans text-gray-700' htmlFor={field.name}>{label}</label>
      <ErrorMessage component="span" name={field.name} className="text-red-500 font-bold" />

      <textarea
        className="rounded-md px-3 w-full py-2 border-2 border-gray-300 bg-gray-200"
        rows="4" {...field} {...props} />
    </div>
  )
}

export const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={field.name} className='mb-1 font-sans text-gray-700'>{label}</label>
      <ErrorMessage component="span" name={field.name} className="text-red-500 font-bold" />
      <Field component="select" {...field} {...props} name="subject" className='rounded-md px-3 w-full py-2 border-2 border-gray-300 bg-gray-200 mb-4 text-gray-800'>
        <option className='px-3 py-2 bg-gray-200 text-gray-800'></option>
        <option value="Giyotin Cam (Hareketli Küpeşte) - Silinebilir Sistem" className='px-3 py-2 bg-gray-200 text-gray-800'>Giyotin Cam &#40;Hareketli Küpeşte&#41; - Silinebilir Sistem</option>
        <option value="Giyotin Cam (Hareketli Küpeşte) - Sabit Sistem" className='px-3 py-2 bg-gray-200 text-gray-800'>Giyotin Cam &#40;Hareketli Küpeşte&#41; - Sabit Sistem</option>
        <option value="Rolling Roof" className='px-3 py-2 bg-gray-200 text-gray-800'>Rolling Roof &#40;Bioklimatik&#41;</option>
        <option value="Sürme Cam Sistemleri" className='px-3 py-2 bg-gray-200 text-gray-800'>Sürme Cam Sistemleri</option>
        <option value="Alüminyum Katlanır Kapı" className='px-3 py-2 bg-gray-200 text-gray-800'>Alüminyum Katlanır Kapı</option>
        <option value="Pergole Tente" className='px-3 py-2 bg-gray-200 text-gray-800'>Pergole Tente</option>
        <option value="Açılır Cam Tavan Sistemleri" className='px-3 py-2 bg-gray-200 text-gray-800'>Açılır Cam Tavan Sistemleri</option>
        <option value="Kış Bahçesi Sistemleri" className='px-3 py-2 bg-gray-200 text-gray-800'>Kış Bahçesi Sistemleri</option>
        <option value="Teknik Destek ve Diğer" className='px-3 py-2 bg-gray-200 text-gray-800'>Teknik Destek ve Diğer</option>
      </Field>
    </>
  )
}