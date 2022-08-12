import type { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import orgCodes from 'data/orgCodes';
import Template from 'components/templates/CompanyMembers';

const CompanyMembers: FC = () => {
  const { orgCode = '' } = useParams();

  if (!orgCodes.includes(orgCode)) {
    return <Navigate to="/" replace />;
  }

  return <Template orgCode={orgCode} />;
};

export default CompanyMembers;
