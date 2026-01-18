"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Users, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScheduleForm } from "@/hooks/useScheduleForm";
import { Alert } from "@/components/ui/alert";

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
] as const;

const benefits = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "30-Minute Session",
    description: "Brief but comprehensive overview of our services"
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Virtual Meeting",
    description: "Convenient online consultation via video call"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Consultation",
    description: "Meet with our senior technical consultants"
  }
] as const;

export default function ScheduleConsultationPage() {
  const {
    formData,
    isLoading,
    error,
    handleSubmit,
    handleChange,
    setFormData
  } = useScheduleForm();

  return (
    <div className="min-h-screen bg-background pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {error && (
          <Alert variant="destructive" className="mb-6">
            {error}
          </Alert>
        )}

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Form */}
          <div>
            <h1 className="text-4xl font-bold mb-6">Schedule a Consultation</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Book a 30-minute consultation with our experts to discuss your project and explore how we can help transform your digital vision into reality.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-2">Role</label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.role}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium mb-2">Team Size</label>
                <select
                  id="teamSize"
                  name="teamSize"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.teamSize}
                  onChange={handleChange}
                >
                  <option value="">Select team size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              <Button type="submit" className="w-full group" disabled={isLoading}>
                {isLoading ? "Scheduling..." : "Schedule Consultation"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

          {/* Right Column - Calendar & Benefits */}
          <div className="space-y-8">
            {/* Calendar Section */}
            <div className="bg-secondary/30 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Select Date & Time</h3>
              </div>
              <input
                type="date"
                name="date"
                className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                value={formData.date}
                onChange={handleChange}
              />
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, time }))}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      formData.time === time
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">What to Expect</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}