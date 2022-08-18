import { SCHOOL_CODE } from './constants';

export interface School {
  id: typeof SCHOOL_CODE[number];
  name: string;
  color: string;
}

export interface Player {
  id: string;
  name: string;
  schoolID: typeof SCHOOL_CODE[number];
  grade: number;
  height?: number;
}
