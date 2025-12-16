import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo 1 <button> <TimerIcon /> </button>
      </Heading>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
        nibh pulvinar, fringilla nibh eu, ornare metus. Ut venenatis justo mi,
        et iaculis elit iaculis ac. Curabitur posuere lacus felis, a congue est
        volutpat nec. Donec eu lorem dui. In condimentum tempor purus, a
        pellentesque eros commodo sit amet. Quisque venenatis metus at enim
        elementum suscipit. Cras et est vel velit efficitur eleifend. Aliquam
        non iaculis diam, sed bibendum velit. Aliquam non sagittis augue. Nulla
        nec dignissim augue. Mauris non arcu quis ligula ornare faucibus.
        Vivamus ac nibh maximus, accumsan orci ultricies, venenatis libero.
      </p>
    </>
  );
}

// export {App};
