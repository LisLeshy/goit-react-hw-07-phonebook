import { Routes, Route } from 'react-router-dom';
import Container from '../Container';
import Header from '../Header';
import ContactsPage from '../../pages/ContactsPage';
import AddContactPage from '../../pages/AddContactPage';
import ContactInfoPage from '../../pages/ContactInfoPage';

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/contacts/add" element={<AddContactPage />} />
        <Route path="/contacts/:contactId/*" element={<ContactInfoPage />} />
        <Route path="*" element={<ContactsPage />} />
      </Routes>
    </>
  );
}

export default App;