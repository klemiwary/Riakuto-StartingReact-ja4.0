import type { FC, SyntheticEvent } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { capitalize } from 'utils/string';

export type OrgSuggesterProps = {
  suggestList?: string[];
  currentCode?: string;
  onSelect?: (code: string) => void;
  prefetch?: (code: string) => void;
};

const orgSuggester: FC<OrgSuggesterProps> = ({
  suggestList = [],
  currentCode = '',
  onSelect = () => undefined,
  prefetch = () => undefined,
}) => {
  const handleSelect = (event: SyntheticEvent, code: string) => {
    event.stopPropagation();
    onSelect(code);
  };

  return (
    <Breadcrumb separator="">
      {suggestList.map((code) => (
        <BreadcrumbItem key={code}>
          <BreadcrumbLink
            as="div"
            onClick={(e) => handleSelect(e, code)}
            onMouseOver={() => prefetch(code)}
            fontWeight={code === currentCode ? '600' : 'normal'}
          >
            {capitalize(code)}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default orgSuggester;
