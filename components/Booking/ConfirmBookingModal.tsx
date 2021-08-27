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
        contentLabel="Example Modal"
      >
        <div> Olette varaamassa seuraavaa aikaa </div>
        <div>
          Nimi: {firstName} {lastName}
        </div>
        <div>
          Sähköposti: {email}
        </div>

        <input />
        <button
          type="submit"
          form="form-booking"
          onClick={() => store.setBookingConfirmed(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Varaa aika
        </button>
      </Modal>
    </div>
  );
}))

export default ConfirmBookingModal
export const getServerSideProps = async ({ req, res }: any) => {
  if (res) {
    console.log('res', res)
    res.writeHead(302, { // or 301
      Location: "localized/url/product/categories",
    });
    res.end();
  }
}
