import type { FC, ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Select,
} from '@chakra-ui/react';

const assertions = ['true', `false`] as const;

interface FormData {
  logContent: string;
  assertion: typeof assertions[number] | undefined;
}

const DumpAssert: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    logContent: '',
    assertion: undefined,
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    switch (formData.assertion) {
      case 'false':
        console.assert(false, formData.logContent);
        break;
      default:
        console.assert(true, formData.logContent);
        break;
    }
  };

  return (
    <Box p={3} w="sm" borderWidth="1px" borderRadius="lg" boxShadow="base">
      <Heading as="h3" size="md" mb={5}>
        アサーションでログをダンプ
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="log" mt={2}>
          ログの内容
        </FormLabel>
        <Input
          name="logContent"
          size="md"
          value={formData.logContent}
          onChange={handleChange}
        />
        <Select
          name="assertion"
          my={6}
          placeholder="アサーション結果を選択…"
          value={formData.assertion}
          onChange={handleChange}
        >
          {assertions.map((assertion) => (
            <option value={assertion} key={assertion}>
              {assertion}
            </option>
          ))}
        </Select>
        <Button my={3} w="xs" colorScheme="blue" variant="solid" type="submit">
          出力
        </Button>
      </form>
    </Box>
  );
};

export default DumpAssert;
