import { Container, Header, ListContainer, Card, InputSearchContainer } from '../../pages/Home/styles';

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import { Link } from 'react-router-dom';

export default function Home(){
  return(
    <Container>
      <InputSearchContainer>
        <input
          type='text'
          placeholder='Pesquise pelo nome...'
        />
      </InputSearchContainer>

      <Header>
        <strong>2 contatos</strong>
        <Link to='/new'>
          Novo contato
        </Link>
      </Header>

      <ListContainer>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Rodrigo Costa</strong>
              <small>Instagram</small>
            </div>

            <span>rodrigo@mail.com</span>
            <span>(99)9 9193-0243</span>
          </div>

          <div className="actions">
            <Link to='/edit/123'>
              <img src={edit} alt='edit'/>
            </Link>
            <button>
              <img src={trash} alt='delete'/>
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
