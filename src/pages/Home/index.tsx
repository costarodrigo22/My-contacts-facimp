import { Container, Header, ListContainer, Card, InputSearchContainer } from '../../pages/Home/styles';
import { Loader } from '../../components/Loader';

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface TypeCategoryKeyFromContacts {
  id: number,
  name: string,
  created_at: string,
  updated_at: string
}

interface TypeObjectFromContacts {
  id: number,
  name: string,
  email: string,
  telephone: string,
  categories_id: number,
  created_at: string,
  updated_at: string,
  category: TypeCategoryKeyFromContacts
}

export default function Home() {
  const [contacts, setContacts] = useState<TypeObjectFromContacts[] | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:2000/api/contact/index')
      .then(async (response) => {
        const json = await response.json();
        setContacts(json.data);
        setIsLoading(false);
      });
  }, []);

  console.log(contacts);

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          type='text'
          placeholder='Pesquise pelo nome...'
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts?.length}
          {contacts?.length === 1 ? ' Contato' : ' Contatos'}
        </strong>
        <Link to='/new' data-test="button-new">
          Novo contato
        </Link>
      </Header>

      <ListContainer>
        {
          contacts?.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  <small>{contact.category.name}</small>
                </div>

                <span>{contact.email}</span>
                <span>{contact.telephone}</span>
              </div>

              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt='edit' />
                </Link>
                <button>
                  <img src={trash} alt='delete' />
                </button>
              </div>
            </Card>
          ))
        }
      </ListContainer>
    </Container>
  );
}
