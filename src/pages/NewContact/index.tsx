import { ContactForm } from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

interface TypeBodyRequestAddNewContact {
  name: string,
  email: string,
  telephone: string,
  categories_id?: number
}

export default function NewContact(){
  function handleSubmit(formData: TypeBodyRequestAddNewContact){
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    };

    fetch('http://localhost:2000/api/contact/store', options)
      .then(async (response) => {
        console.log(response);
      });
  }
  return(
    <>
      <PageHeader title='Novo contato'/>
      <ContactForm
        onSubmit={handleSubmit}
        buttonLabel='Cadastrar'
      />
    </>
  );
}
