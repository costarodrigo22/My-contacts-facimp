import { Container, Header, ListContainer, Card, InputSearchContainer } from '../../pages/Home/styles';

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

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
        <a href='/'>Novo contato</a>
      </Header>

      <ListContainer>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Rodrigo Costa</strong>
              <small>Instalgram</small>
            </div>

            <span>rodrigo@mail.com</span>
            <span>(99)9 9193-0243</span>
          </div>

          <div className="actions">
            <a href='/'>
              <img src={edit} alt='edit'/>
            </a>
            <button>
              <img src={trash} alt='delete'/>
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Rodrigo Costa</strong>
              <small>Instalgram</small>
            </div>

            <span>rodrigo@mail.com</span>
            <span>(99)9 9193-0243</span>
          </div>

          <div className="actions">
            <a href='/'>
              <img src={edit} alt='edit'/>
            </a>
            <button>
              <img src={trash} alt='delete'/>
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
