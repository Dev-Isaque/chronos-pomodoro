import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import styles from './styles.module.css';

export function MainForm() {
  return (
    <form className='form' action=''>
      <div className={styles.mainForm}>
        <DefaultInput
          labelText='Tarefa'
          id='task'
          type='text'
          placeholder='Digite aqui'
        />
      </div>

      <p>Lorem ipsum dolor sit, amet consectetur.</p>

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
