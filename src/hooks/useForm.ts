import { useState } from "react";
import { ContactFormData, validateContactForm } from "@/lib/utils/validation";

export const useForm = (initialState: ContactFormData) => {
  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (onSubmit: (data: ContactFormData) => Promise<void>) => {
    setIsSubmitting(true);
    const result = validateContactForm(formData);

    if (!result.success) {
      const formattedErrors: Partial<ContactFormData> = {};
      result.error.errors.forEach(error => {
        if (error.path[0]) {
          formattedErrors[error.path[0] as keyof ContactFormData] = error.message;
        }
      });
      setErrors(formattedErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await onSubmit(formData);
      // Reset form on successful submission
      setFormData(initialState);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};