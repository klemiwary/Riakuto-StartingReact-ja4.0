import { z } from 'zod';
import { genderCode } from './constants';

const regFormSchema = z.object({
  username: z.string().min(1, { message: '必須項目です' }),
  zipcode: z
    .optional(
      z
        .string()
        .max(7)
        .regex(/\d{7}/, { message: '7桁の数字で入力してください' })
    )
    .or(z.literal('')),
  gender: z.optional(
    z.enum(Object.keys(genderCode) as [string, ...string[]]).or(z.literal(''))
  ),
  isAgreed: z.boolean().refine((val) => val, { message: '同意が必要です' }),
});

type RegFormSchema = z.infer<typeof regFormSchema>;

export { regFormSchema };
export type { RegFormSchema };
