import { useState } from 'react';
import Button from '../Button';
import { FormGroup } from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import { Container } from './styles';

interface TypeContactForm {
  buttonLabel: string,
}

export function ContactForm({ buttonLabel }: TypeContactForm){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    console.log({ name, email, phone, category });
  }

  return(
    <Container onSubmit={handleSubmit}>
      <FormGroup >
        <Input
          placeholder='Nome'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>
      <FormGroup >
        <Input
          placeholder='Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormGroup>
      <FormGroup >
        <Input
          placeholder='Telefone'
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>
      <FormGroup >
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=''>Categoria</option>
          <option value='Instagram'>Instagram</option>
          <option value='Facebook'>Facebook</option>
        </Select>
      </FormGroup>
      <FormGroup >
        <Button type='submit'>
          { buttonLabel }
        </Button>
      </FormGroup>
    </Container>
  );
}
