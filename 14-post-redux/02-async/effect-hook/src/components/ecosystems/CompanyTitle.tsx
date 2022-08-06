import type { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import orgCodes from 'data/orgCodes';
import { Helmet } from 'react-helmet-async';
import { capitalize } from 'utils/string';

type Props = {
  setOrgCode?: (orgCode: string) => void;
};

const CompanyTitle: FC<Props> = ({ setOrgCode = () => undefined }) => {
  const { orgCode = '' } = useParams();

  if (!orgCodes.includes(orgCode)) {
    return <Navigate to="/" replace />;
  }

  setOrgCode(orgCode);
  const pageTitle = `${capitalize(orgCode) || '****'} の開発メンバー`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <header>
        <Heading as="h1">{pageTitle}</Heading>
      </header>
    </>
  );
};

export default CompanyTitle;
