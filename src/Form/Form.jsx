import React, {useState } from 'react'
import { useFormik, validateYupSchema } from 'formik'
import '../Form/form.scss'
import *as Yup from 'yup'
import twitter from '../assest/twitter-logo-4 1.svg'
import { Modal } from './Modal'



const initialValues = {
    FirstName: '',
    LastName: '',
    Password:'',
    select:''
}


const  validationSchema = Yup.object().shape({
    FirstName: Yup.string()
    .min(3, 'Must be more than 3 letters')
    .max(8, 'No more than 8 letters')
    .required("Must be filled"),
    LastName: Yup.string()
    .min(3, 'Must be more than 3 letters')
    .max(8, 'No more than 8 letters')
    .required("Must be filled"),
    Password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required("Must be filled"),
    select: Yup.string()
    .required("Enter your gender"),

})

export const Form = () => {
    const [state,setState] = useState('')
    const [modalState,setModalState] = useState(false)

    const formik = useFormik({
        initialValues,
        onSubmit:(values) => {
           setState(values)
           HandleOpen()
        },
        validationSchema,
        validateOnChange:false,
    })


    function HandleOpen(){
        setModalState(true)
    } 


  return (
    <div>
        <Modal  modalState={modalState} setModalState={setModalState} state={state}/>
        <div className="form">
        <img src={twitter} alt="logo" />
        <h1>Twitter Register</h1>

    <form onSubmit={formik.handleSubmit}>
     <div>
     <input className={formik.errors.FirstName ? 'error' : ''} name='FirstName' type="text"  placeholder='FirstName'
        id='FirstName'
        onChange={formik.handleChange}
        value={formik.values.FirstName}
        />
        <p className='text'>{formik.errors.FirstName}</p>
     </div>


      <div>
      <input className={formik.errors.LastName ? 'error' : ''} name='LastName' type="text"  placeholder='LastName'
          id='LastName'
          onChange={formik.handleChange}
          value={formik.values.LastName}
        />
        <p className='text'>{formik.errors.LastName}</p>
      </div>


    <div>
    <input  className={formik.errors.Password ? 'error' : ''} name='Password' type="password" placeholder='Password'
          id='Password'
          onChange={formik.handleChange}
          value={formik.values.Password}
        />
        <p className='text'>{formik.errors.Password}</p>
    </div>

   <div>
   <select className={formik.errors.select ? 'error' : ''} name="select"
            id='select'
            onChange={formik.handleChange}
            value={formik.values.select}
        >
             <option value=''></option>
            <option value='Male'>Male</option>
            <option value='Women'>Female</option>
        </select>
        <p className='text'>{formik.errors.select}</p>
   </div>
        <button type='submit'>Submit</button>
    </form>

        </div>


    </div> 
  )
}

export default Form
