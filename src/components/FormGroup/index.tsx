import { Container } from './styles';

interface TypeFormGroup {
  children?: React.ReactNode
}

export function FormGroup({ children }: TypeFormGroup){
  return(
    <Container>
      { children }
    </Container>
  );
}
