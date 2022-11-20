
import { removeContacts } from 'redux/contacts/contactsOperations'
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const removeButton = () => {
    dispatch(removeContacts(id));
    Notiflix.Notify.info('contact deleted');
  }

    return (
      <div className={styles.contacts}>
     <li key={id}>
                  <p>
                    <span>{name} : </span>
            {number}
            
                  </p>
                  <button type='button'
                    onClick={removeButton}>
                     
                    X
                  </button>
            </li>
            </div>
  );
};
  
  
ContactListItem.protoTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  removeButton: PropTypes.func.isRequired,
};

export default ContactListItem;
