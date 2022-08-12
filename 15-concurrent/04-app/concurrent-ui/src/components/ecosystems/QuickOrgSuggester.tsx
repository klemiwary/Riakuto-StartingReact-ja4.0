import type { FC } from 'react';
import { preload } from 'swr';
import { getMembers, getOrganization } from 'domains/github';
import { skimArgs } from 'utils/fn';
import OrgSuggester from 'components/organisms/OrgSuggester';
import type { OrgSuggesterProps } from 'components/organisms/OrgSuggester';

type Props = { enablePrefetch?: boolean } & Omit<OrgSuggesterProps, 'prefetch'>;

const QuickOrgSuggester: FC<Props> = ({
  suggestList = [],
  currentCode = '',
  onSelect = () => undefined,
  enablePrefetch = false,
}) => {
  const prefetch = async (code: string) => {
    await Promise.all([
      preload([code, 'org'], skimArgs(getOrganization)),
      preload([code, 'member'], skimArgs(getMembers)),
    ]);
  };

  return (
    <OrgSuggester
      prefetch={enablePrefetch ? prefetch : undefined}
      {...{ suggestList, currentCode, onSelect }}
    />
  );
};

export default QuickOrgSuggester;
