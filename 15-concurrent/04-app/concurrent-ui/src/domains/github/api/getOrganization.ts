import ky, { Options as KyOptions } from 'ky';
import { DEFAULT_KY_OPTIONS } from '../constants';
import { isOrganization, Organization } from '../types/organization';

export const getOrganization = async (
  orgCode: string,
  options?: KyOptions
): Promise<Organization> => {
  const mergedOptions = {
    ...DEFAULT_KY_OPTIONS,
    ...options,
  };
  const response = await ky.get(`orgs/${orgCode}`, mergedOptions);
  const organization = await response.json();
  console.log('*** request GitHub organization API:', orgCode);

  if (!isOrganization(organization)) {
    throw Error('API type error');
  }

  return organization;
};
