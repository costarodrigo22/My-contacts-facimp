import { Overlay } from './styles';
import ReactDOM from 'react-dom';

interface TypeLoadingComponent{
  isLoading: boolean
}

export function Loader({ isLoading }: TypeLoadingComponent){
  if(!isLoading){
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <div className='loader'></div>
    </Overlay>,
    document.getElementById('loader-root') as HTMLElement
  );
}
