import type { FC, SyntheticEvent } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { genderCode } from 'schemas';

interface FormData {
  username: string;
  zipcode?: string;
  gender?: keyof typeof genderCode;
  isAgreed: boolean;
}

const RegistrationForm: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      username: '',
      isAgreed: false,
    },
  });
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  const onReset = (e: SyntheticEvent) => {
    e.stopPropagation();
    reset();
  };

  return (
    <Box p={3} w="md" borderWidth="1px" borderRadius="lg" boxShadow="base">
      <form onSubmit={handleSubmit(onSubmit)} action="/hoge">
        <FormLabel htmlFor="username" mt={2}>
          ユーザー名
        </FormLabel>
        <Input size="md" {...register('username')} />
        <FormLabel htmlFor="zipcode" mt={4}>
          郵便番号
        </FormLabel>
        <Input size="md" maxLength={7} {...register('zipcode')} />
        <Select my={6} placeholder="性別を選択…" {...register('gender')}>
          {Object.entries(genderCode).map(([code, name]) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </Select>
        <Checkbox {...register('isAgreed')}>規約に同意する</Checkbox>
        <ButtonGroup my={3} w="xs">
          <Button
            w="30%"
            colorScheme="orange"
            variant="solid"
            onClick={onReset}
          >
            リセット
          </Button>
          <Button w="70%" colorScheme="blue" variant="solid" type="submit">
            送信
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
};

export default RegistrationForm;
