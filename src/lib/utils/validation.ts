import { z } from "zod";
import { ValidationError } from "@/lib/exceptions";

export function validateData<T extends z.ZodType>(
  schema: T,
  data: unknown
): z.infer<T> {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {};
      error.errors.forEach((err) => {
        const path = err.path.join(".");
        if (!errors[path]) {
          errors[path] = [];
        }
        errors[path].push(err.message);
      });
      throw new ValidationError("Validation failed", errors);
    }
    throw error;
  }
}

export function validatePartial<T extends z.ZodType>(
  schema: T,
  data: unknown
): Partial<z.infer<T>> {
  return validateData(schema.partial(), data);
}