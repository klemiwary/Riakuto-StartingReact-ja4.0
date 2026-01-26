import { Fragment } from 'react';
import type { FC } from 'react';
import { Wrap } from '@chakra-ui/react';
import Circle from 'components/atoms/Circle';

const colors = [
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'blue',
  'cyan',
  'fuchsia',
  'purple',
  'pink',
  'brown',
  'silver',
  'black',
];

const ColorfulBeads: FC<{ count?: number }> = ({ count = 0 }) => (
  <Wrap my={10}>
    {[...Array(count).keys()].map((n) => (
      <Fragment key={n}>
        <Circle size={12} color={colors[n % colors.length]} />
      </Fragment>
    ))}
  </Wrap>
);

export default ColorfulBeads;
