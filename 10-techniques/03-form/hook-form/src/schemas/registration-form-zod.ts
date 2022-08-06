import { z } from 'zod';
import { genderCode } from './constants';

export const regFormSchema = z.object({
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
    z.enum(Object.keys(genderCode) as never).or(z.literal(''))
  ),
  isAgreed: z.boolean().refine((val) => val, { message: '同意が必要です' }),
});

export type RegFormSchema = z.infer<typeof regFormSchema>;
