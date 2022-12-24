import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { List, Item } from './ContactList.styled';
import Loader from '../Loader';
import { useGetContactsQuery } from '../../redux/contact-api';
import NotFound from '../NotFound/index';
import { getFilter } from '../../redux/contact-selectors';



function ContactList() {   
  
  const { data: contacts, isFetching, error } = useGetContactsQuery();
  console.log("data: ", contacts);
  console.log("data: ", isFetching);
  console.log("data: ", error );
  const { filter } = useSelector(state => getFilter(state));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      )
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <List>
      {isFetching && <Loader />}
      {error && <NotFound data={error.data} status={error.status} />}
      {contacts &&
        filteredContactList.map(
          ({ id, name, phone, email, city, company, photo }) => {
            return (
              <Item key={id}>
                <Contact
                  id={id}
                  name={name}
                  phone={phone}
                  email={email}
                  city={city}
                  company={company}
                  photo={photo}
                />
              </Item>
            );
          },
        )}
    </List>
  );
}

export default ContactList;