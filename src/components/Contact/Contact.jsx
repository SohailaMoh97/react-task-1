// import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Contact() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be more than 3 characters')
      .max(25, 'Name must be less than 25 characters'),
    age: Yup.number()
      .required('Age is required')
      .min(15, 'Minimum age is 15'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is not valid'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('Form Submitted:', values);
      // alert('Form submitted successfully!');
      resetForm(); 
    },
  });

  return (
    <>
      <div className=' p-10 m-11'>
        <div className='text-center text-slate-700 p-7'>
          <h2 className='uppercase text-4xl font-bold p-3'>Contact Section</h2>
          <div className='flex  justify-center items-center '>
                <div className='h-[4px] w-[80px] bg-slate-700 '></div>
                <i className=" fa-solid fa-star px-4  "></i>
                <div className='h-[4px] w-[80px] bg-slate-700 '></div>
            </div>
        </div>
        <form
          className='flex flex-col w-1/2 m-auto gap-10'
          onSubmit={formik.handleSubmit}
        >
          <input
            className=' p-2 border-b-2 rounded-lg focus:outline-none'
            type='name'
            id='name'
            placeholder='name'
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <p className='text-red-500 font-medium'>*{formik.errors.name}</p>
          )}
        

          <input
            className='p-2 border-b-2 rounded-lg focus:outline-none'
            type='number'
            id='age'
            placeholder='Your Age'
            name='age'
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.age && formik.touched.age && (
            <p className='text-red-500 font-medium'>*{formik.errors.age}</p>
          )}

          <input
            className='p-2 border-b-2 rounded-lg focus:outline-none'
            type='email'
            id='email'
            placeholder='Your Email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <p className='text-red-500 font-medium'>*{formik.errors.email}</p>
          )}

          <input
            className='p-2 border-b-2 rounded-lg focus:outline-none'
            type='password'
            id='password'
            placeholder='Your Password'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <p className='text-red-500 font-medium'>*{formik.errors.password}</p>
          )}

          <button
            type='submit'
            className='flex justify-start p-2 bg-teal-500 w-fit rounded-lg text-white'
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
