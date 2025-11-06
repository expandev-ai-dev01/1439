import { z } from 'zod';

/**
 * @summary
 * Common Zod validation schemas for reuse across the application
 *
 * @module utils/validation
 */

export const zString = z.string().min(1);
export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

export const zNumber = z.number();
export const zPositiveNumber = z.number().positive();
export const zNonNegativeNumber = z.number().min(0);

export const zBoolean = z.boolean();
export const zBit = z.union([z.literal(0), z.literal(1)]);

export const zDate = z.date();
export const zDateString = z.string().datetime();

export const zEmail = z.string().email();

export const zId = z.number().int().positive();
export const zNullableId = z.number().int().positive().nullable();
