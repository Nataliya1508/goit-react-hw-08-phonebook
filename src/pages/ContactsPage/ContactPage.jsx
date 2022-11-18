import ContactForm from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";

const ContactPage = () => {
    return (
        <div>
            <Filter />
            <ContactForm />
            <ContactList />
        </div>
    );
};

export default ContactPage;