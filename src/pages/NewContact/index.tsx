import Button from '../../components/Button';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

export default function NewContact(){
  return(
    <>
      <PageHeader title='Novo contato'/>
      <Input type='text' placeholder='nome'/>
      <Select>
        <option>dsdasd</option>
        <option>dsdasd</option>
      </Select>
      <Button type='button' onClick={() => alert('clicado')}>
        Novo contato
      </Button>
      <Button type='button' disabled>
        Novo contato
      </Button>
    </>
  );
}
