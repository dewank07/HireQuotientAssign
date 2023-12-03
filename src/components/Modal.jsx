import React from "react";

const Modal = ({ back, id, setBack } = props) => {
  //   const indexToUpdate = back?.findIndex((obj) => obj.id === id);

  return (
    <dialog id='my_modal_1' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Change Data</h3>

        <input
          type='text'
          placeholder='Search Here'
          className='input input-bordered w-full'
          onChange={(e) => {
            const updatedArray = [...back]; // Create a copy of the array
            updatedArray[0].name = e.target.value;
            setBack(updatedArray);
          }}
        />
        <input
          type='text'
          placeholder='Search Here'
          className='input input-bordered w-full'
          onChange={(e) => {
            setBack((p) => {
              p[indexToUpdate].email = e.target.value;
            });
          }}
        />
        <input
          type='text'
          placeholder='Search Here'
          className='input input-bordered w-full'
          onChange={(e) => {
            setBack((p) => {
              p[indexToUpdate].role = e.target.value;
            });
          }}
        />
        <div className='modal-action'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn'>Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
