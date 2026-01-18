import { scheduleFormSchema } from "@/lib/validations/schedule";

export interface ScheduleFormData {
  name: string;
  email: string;
  company: string;
  role: string;
  teamSize: string;
  message: string;
  date: string;
  time: string;
}

interface ScheduleResponse {
  success: boolean;
  message: string;
  error?: string;
}

export async function scheduleConsultation(data: ScheduleFormData): Promise<ScheduleResponse> {
  try {
    const validatedData = scheduleFormSchema.parse(data);

    const response = await fetch('/api/schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedData),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to schedule consultation',
        error: result.message || 'Failed to schedule consultation'
      };
    }

    return result;
  } catch (error) {
    return {
      success: false,
      message: 'Failed to schedule consultation',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}