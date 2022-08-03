import type { FC } from 'react';

type Props = {
  size: number;
  color: string;
};

const Circle: FC<Props> = ({ size, color }) => (
  <svg height={size * 2} width={size * 2} xmlns="http://www.w3.org/2000/svg">
    <circle cx={size} cy={size} r={size} fill={color} />
  </svg>
);

export default Circle;
