import type { FC, ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { Box, Button, Heading, Select } from '@chakra-ui/react';
import { todo, reactElem, domElem } from 'data/object';
import type { ToDo } from 'data/object';

const dataTypes = {
  normal: '通常のオブジェクト',
  react: 'ReactElements オブジェクト',
  dom: 'DOM オブジェクト',
} as const;
const formats = [`log`, 'dir', `dirxml`, `table`] as const;

interface FormData {
  dataType: keyof typeof dataTypes | undefined;
  format: typeof formats[number] | undefined;
}

const DumpObject: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    dataType: undefined,
    format: undefined,
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    let data: ToDo | JSX.Element | HTMLElement;

    switch (formData.dataType) {
      case 'dom':
        data = domElem as HTMLElement;
        break;
      case 'react':
        data = reactElem;
        break;
      default:
        data = todo;
    }

    switch (formData.format) {
      case 'dir':
        console.dir(data);
        break;
      case 'dirxml':
        console.dirxml(data);
        break;
      case 'table':
        console.table(data);
        break;
      default:
        console.log(data);
    }
  };

  return (
    <Box p={3} w="sm" borderWidth="1px" borderRadius="lg" boxShadow="base">
      <Heading as="h3" size="md" mb={5}>
        オブジェクトをダンプ
      </Heading>
      <form onSubmit={handleSubmit}>
        <Select
          name="dataType"
          my={6}
          placeholder="データの種類を選択…"
          value={formData.dataType}
          onChange={handleChange}
        >
          {Object.entries(dataTypes).map(([code, name]) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </Select>
        <Select
          name="format"
          my={6}
          placeholder="出力フォーマットを選択…"
          value={formData.format}
          onChange={handleChange}
        >
          {formats.map((format) => (
            <option value={format} key={format}>
              {format}
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

export default DumpObject;
