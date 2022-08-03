import { createAction } from '@reduxjs/toolkit';

const FEATURE = 'counter';
export const decremented = createAction(`${FEATURE}/decremented`);
export const incremented = createAction(`${FEATURE}/incremented`);
export const added = createAction<number>(`${FEATURE}/added`);
