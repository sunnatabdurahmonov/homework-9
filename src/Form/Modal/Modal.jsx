import React, { useContext } from 'react'
import '../Modal/modal.scss'

 export const Modal = ({state,modalState, setModalState,}) => {

    const handleClose = () => {
        setModalState(false)
    }
  return (
    <div className={`modal ${modalState ? 'open' : ''}`}>
        <div className="modal-menu">
        <i onClick={handleClose}  class="fa-solid fa-xmark icon-1"></i>


        {
              <div className="div">
                  <h2>FirstName: {state.FirstName}</h2>
                <h2>LastName: {state.LastName}</h2>
                <p className='password'> Password : {state.Password}</p>
                <p className='gender'>Gender:  {state.select}</p>
              </div>
            }

        </div>
      
    </div>
  )
}

export default Modal
