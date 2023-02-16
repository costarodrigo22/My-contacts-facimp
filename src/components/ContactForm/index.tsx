import { useEffect, useState } from 'react';
import Button from '../Button';
import { FormGroup } from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import { Container } from './styles';

interface TypeOnSubmitFunction {
  name: string,
  email: string,
  telephone: string,
  categories_id?: number
}

interface TypeContactForm {
  buttonLabel: string,
  onSubmit: (fomrData: TypeOnSubmitFunction) => void
}

interface TypeListCategory {
  id: number,
  name: string,
  created_at: string,
  updated_at: string,
}

export function ContactForm({ buttonLabel, onSubmit }: TypeContactForm) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState<number>();
  const [categories, setCategories] = useState<TypeListCategory[]>();

  useEffect(() => {
    fetch('http://localhost:2000/api/category/index')
      .then(async (response) => {
        const json = await response.json();
        setCategories(json.data);
      });
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ name, email, telephone: phone, categories_id: category });
  }

  return (
    <Container onSubmit={handleSubmit}>
      <FormGroup >
        <Input
          placeholder='Nome'
          value={name}
          onChange={(event) => setName(event.target.value)}
          data-test="input-name"
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
          onChange={(event) => setCategory(Number(event.target.value))}
        >
          <option value=''>Selecione uma categoria</option>

          {
            categories?.map(item => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))
          }
        </Select>
      </FormGroup>
      <FormGroup >
        <Button type='submit'>
          {buttonLabel}
        </Button>
      </FormGroup>
    </Container>
  );
}
