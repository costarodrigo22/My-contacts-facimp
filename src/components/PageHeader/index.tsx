import { Link } from 'react-router-dom';
import { Container } from './styles';

import arrow from '../../assets/images/arrow.svg';

interface TitleProps {
  title: string
}

export default function PageHeader({ title }: TitleProps){
  return(
    <Container>
      <Link to="/">
        <img src={arrow} alt='back'/>
        <span>Voltar</span>
      </Link>

      <h1>{ title }</h1>
    </Container>
  );
}
