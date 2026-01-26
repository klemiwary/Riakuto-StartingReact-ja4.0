import type { FC, ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { Box, Button, FormLabel, Heading, Input } from '@chakra-ui/react';

interface FormData {
  logLabel: string;
  count: number | '';
}

const DumpLog: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    logLabel: '',
    count: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const value = Number(event.target.value) || event.target.value;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    console.time('Done ' + formData.logLabel);
    [...Array(formData.count).keys()].forEach(() =>
      console.count(formData.logLabel)
    );
    window.alert('Stop!');
    console.timeEnd('Done ' + formData.logLabel);
  };

  return (
    <Box p={3} w="sm" borderWidth="1px" borderRadius="lg" boxShadow="base">
      <Heading as="h3" size="md" mb={5}>
        ログを複数回ダンプ
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="log" mt={2}>
          ログのラベル
        </FormLabel>
        <Input
          name="logLabel"
          size="md"
          value={formData.logLabel}
          onChange={handleChange}
        />
        <Input
          name="count"
          my={6}
          size="md"
          type="number"
          placeholder="出力する回数を入力…"
          value={formData.count}
          onChange={handleChange}
        />
        <Button my={3} w="xs" colorScheme="blue" variant="solid" type="submit">
          出力
        </Button>
      </form>
    </Box>
  );
};

export default DumpLog;
