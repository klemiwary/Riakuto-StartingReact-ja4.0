import { useState } from 'react';
import type {
  FC,
  ChangeEvent,
  SyntheticEvent,
  TransitionStartFunction,
} from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';
// import OrgSuggester from 'components/organisms/OrgSuggester';
import OrgSuggester from 'components/ecosystems/QuickOrgSuggester';

type Props = {
  suggestList?: string[];
  setOrgCode?: (orgCode: string) => void;
  startTransition?: TransitionStartFunction;
  isPending?: boolean;
};

const OrgSearchForm: FC<Props> = ({
  setOrgCode = () => undefined,
  startTransition = () => undefined,
  suggestList = [],
  isPending = false,
}) => {
  const [input, setInput] = useState('');
  const onSelect = (code: string) => {
    setInput(code);
    startTransition(() => setOrgCode(code));
  };
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    startTransition(() => setOrgCode(input.toLowerCase().trim()));
  };

  return (
    <Stack direction="column" spacing="1rem" mb="0.5rem">
      <Stack direction="row" as="form" spacing="0.5rem" onSubmit={handleSubmit}>
        <Input
          value={input}
          placeholder="会社コードを入力..."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <Button
          w="5rem"
          colorScheme="blue"
          variant="solid"
          type="submit"
          isLoading={isPending}
        >
          検索
        </Button>
      </Stack>
      <OrgSuggester
        suggestList={suggestList}
        currentCode={input}
        onSelect={onSelect}
        // enablePrefetch={true}
      />
    </Stack>
  );
};

export default OrgSearchForm;
