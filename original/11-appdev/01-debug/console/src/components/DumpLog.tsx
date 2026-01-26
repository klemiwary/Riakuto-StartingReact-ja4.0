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

const logLevels = ['log', `info`, `debug`, `warn`, `error`] as const;

interface FormData {
  logContent: string;
  logLevel: typeof logLevels[number] | undefined;
}

const DumpLog: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    logContent: '',
    logLevel: undefined,
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    switch (formData.logLevel) {
      case 'error':
        console.error(formData.logContent);
        console.groupCollapsed('スタック情報');
        console.trace();
        console.groupEnd();
        break;
      case 'warn':
        console.warn(formData.logContent);
        break;
      case 'debug':
        console.debug(formData.logContent);
        break;
      case 'info':
        console.info(formData.logContent);
        break;
      default:
        console.log(formData.logContent);
    }
  };

  return (
    <Box p={3} w="sm" borderWidth="1px" borderRadius="lg" boxShadow="base">
      <Heading as="h3" size="md" mb={5}>
        ログをダンプ
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
          name="logLevel"
          my={6}
          placeholder="ログレベルを選択…"
          value={formData.logLevel}
          onChange={handleChange}
        >
          {logLevels.map((level) => (
            <option value={level} key={level}>
              {level}
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

export default DumpLog;
