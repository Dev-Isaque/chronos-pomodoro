import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  return (
    <form className='form' action=''>
      <button type='button'>clicar</button>
      <div className='formRow'>
        <DefaultInput
          labelText='Tarefa'
          id='task'
          type='text'
          placeholder='Digite aqui'
        />
      </div>

      <p>Próximo intervalo é de 25min</p>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
        {/* <DefaultButton icon={<StopCircleIcon />} color='red' /> */}
      </div>
    </form>
  );
}
