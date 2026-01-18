import { useState } from "react";
import { scheduleFormSchema } from "@/lib/validations/schedule";
import { scheduleConsultation } from "@/lib/api/schedule";
import type { ScheduleFormData } from "@/lib/api/schedule";

export function useScheduleForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initialState: ScheduleFormData = {
    name: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    message: "",
    date: "",
    time: ""
  };

  const [formData, setFormData] = useState<ScheduleFormData>(initialState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await scheduleConsultation(formData);
      if (result.error) {
        throw new Error(result.error);
      }
      setFormData(initialState);
      // TODO: Show success message or redirect
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to schedule consultation");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return {
    formData,
    isLoading,
    error,
    handleSubmit,
    handleChange,
    setFormData
  };
}