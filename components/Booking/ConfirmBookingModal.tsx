import Modal from 'react-modal';
import { observer, inject } from 'mobx-react'
import { useFormContext } from 'react-hook-form';

const customStyles = {
  content: {
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('body');

const ConfirmBookingModal = inject('store')(observer((props: any) => {
  const { getValues } = useFormContext()
  const formValues = getValues()
  const { firstName, lastName, email } = formValues

  const { store } = props

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    store.setModalIsOpen(false);
  }

  return (
    <div>

      <Modal
        isOpen={store.modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Confirm booking modal"
      >
        <div className="mb-8"><h2> Olette varaamassa seuraavaa aikaa</h2> </div>
        <div>
          <b>Nimi:</b> {firstName} {lastName}
        </div>
        <div>
          <b> Sähköposti: </b>{email}
        </div>
        <div><b> Aika:</b> {store.selectedDate.toLocaleDateString('fi-FI')} klo {store.selectedTime} </div>

        <input />
        <button
          type="button"
          onClick={() => closeModal()}
          form="form-booking"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
          Peruuta
        </button>
        <button
          type="submit"
          form="form-booking"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Varaa aika
        </button>

      </Modal>
    </div>
  );
}))

export default ConfirmBookingModal

