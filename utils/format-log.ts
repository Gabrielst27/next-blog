import { styleText } from 'util';

export function formatLog(...msg: (string | number)[]) {
  const messages = msg
    .map((message) => styleText(['bgGreen', 'whiteBright'], `${message}`))
    .join(' ');
  console.log(styleText('green', messages));
}
