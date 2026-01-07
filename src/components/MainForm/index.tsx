import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import type { HomeProps } from '../../pages/Home';

export function MainForm({ state }: HomeProps) {
  return (
    <form className='form' action=''>
      <div>
        <button>clicar</button>
      </div>
      
      <div className='formRow'>
        <DefaultInput
          labelText='Tarefa'
          id='task'
          type='text'
          placeholder='Digite aqui'
        />
      </div>

      <p>Próximo intervalo é de {state.config.workTime}min</p>

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
