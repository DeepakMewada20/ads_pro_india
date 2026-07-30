"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/common/glass-card"
import { AnimatedButton } from "@/components/common/animated-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContactFormField } from "./contact-form-field"
import { ContactFormSelect } from "./contact-form-select"
import { contactConfig, budgetOptions } from "@/data/contact"
import { MessageCircle } from "lucide-react"
import type { ContactFormData } from "@/types/contact"

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Please enter a valid WhatsApp number"),
  business: z.string().optional(),
  budget: z.string().optional(),
  goal: z.string().optional(),
})

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    const message = [
      `*New Lead from AdsProIndia*`,
      ``,
      `*Name:* ${data.name}`,
      `*WhatsApp:* ${data.phone}`,
      data.business ? `*Business:* ${data.business}` : "",
      data.budget ? `*Budget:* ${data.budget}` : "",
      data.goal ? `*Goal:* ${data.goal}` : "",
    ]
      .filter(Boolean)
      .join("\n")

    window.open(`https://wa.me/916268665115?text=${encodeURIComponent(message)}`, "_blank")
    reset()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <GlassCard variant="light" hover="none" className="p-6 sm:p-8 lg:p-10">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <ContactFormField label="Your Name" error={errors.name?.message} required>
              <Input
                id="f_name"
                placeholder="Rahul Sharma"
                hasError={!!errors.name}
                {...register("name")}
              />
            </ContactFormField>

            <ContactFormField label="WhatsApp Number" error={errors.phone?.message} required>
              <Input
                id="f_phone"
                type="tel"
                placeholder="+91 XXXXXXXXXX"
                hasError={!!errors.phone}
                {...register("phone")}
              />
            </ContactFormField>

            <ContactFormField label="Business Name">
              <Input
                id="f_biz"
                placeholder="Your Business"
                {...register("business")}
              />
            </ContactFormField>

            <ContactFormField label="Monthly Ad Budget">
              <ContactFormSelect
                id="f_budget"
                options={budgetOptions.map((o) => o.label)}
                placeholder="Select Budget Range"
                {...register("budget")}
              />
            </ContactFormField>
          </div>

          <ContactFormField label="Main Goal" className="mt-5">
            <Textarea
              id="f_goal"
              placeholder="Tell us what you want to achieve with paid ads..."
              rows={4}
              {...register("goal")}
            />
          </ContactFormField>

          <AnimatedButton
            type="submit"
            variant="whatsapp"
            className="mt-6 w-full justify-center"
            disabled={isSubmitting}
          >
            <MessageCircle className="h-5 w-5" />
            {contactConfig.submitLabel}
          </AnimatedButton>
        </form>
      </GlassCard>
    </motion.div>
  )
}
