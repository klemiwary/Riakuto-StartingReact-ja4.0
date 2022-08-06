import ky, { Options } from 'ky';
import { DEFAULT_KY_OPTIONS } from '../constants';
import { isUsers, User } from '../types/user';

export const getMembers = async (
  orgCode: string,
  options?: Options
): Promise<User[]> => {
  const mergedOptions = {
    ...DEFAULT_KY_OPTIONS,
    ...options,
  };
  const response = await ky.get(`orgs/${orgCode}/members`, mergedOptions);
  const members: unknown[] = await response.json();

  if (!isUsers(members)) {
    throw Error('API type error');
  }

  return members;
};
