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
import { WhatsAppIcon } from "@/components/common/whatsapp-icon"
import type { ContactFormData } from "@/types/contact"

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Please enter a valid WhatsApp number"),
  business: z.string().optional(),
  budget: z.string().optional(),
  goal: z.string().optional(),
})

const FIELD_IDS = {
  name: "f_name",
  phone: "f_phone",
  business: "f_biz",
  budget: "f_budget",
  goal: "f_goal",
} as const

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
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <GlassCard variant="light" hover="none" className="p-6 sm:p-8 lg:p-10">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <ContactFormField
              label="Your Name"
              error={errors.name?.message}
              required
              htmlFor={FIELD_IDS.name}
              errorId={`${FIELD_IDS.name}-error`}
            >
              <Input
                id={FIELD_IDS.name}
                placeholder="Rahul Sharma"
                hasError={!!errors.name}
                aria-required="true"
                aria-describedby={errors.name ? `${FIELD_IDS.name}-error` : undefined}
                {...register("name")}
              />
            </ContactFormField>

            <ContactFormField
              label="WhatsApp Number"
              error={errors.phone?.message}
              required
              htmlFor={FIELD_IDS.phone}
              errorId={`${FIELD_IDS.phone}-error`}
            >
              <Input
                id={FIELD_IDS.phone}
                type="tel"
                placeholder="+91 XXXXXXXXXX"
                hasError={!!errors.phone}
                aria-required="true"
                aria-describedby={errors.phone ? `${FIELD_IDS.phone}-error` : undefined}
                {...register("phone")}
              />
            </ContactFormField>

            <ContactFormField label="Business Name" htmlFor={FIELD_IDS.business}>
              <Input
                id={FIELD_IDS.business}
                placeholder="Your Business"
                {...register("business")}
              />
            </ContactFormField>

            <ContactFormField label="Monthly Ad Budget" htmlFor={FIELD_IDS.budget}>
              <ContactFormSelect
                id={FIELD_IDS.budget}
                options={budgetOptions.map((o) => o.label)}
                placeholder="Select Budget Range"
                {...register("budget")}
              />
            </ContactFormField>
          </div>

          <ContactFormField label="Main Goal" className="mt-5" htmlFor={FIELD_IDS.goal}>
            <Textarea
              id={FIELD_IDS.goal}
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
            <WhatsAppIcon className="h-5 w-5" fill="#ffffff" />
            {contactConfig.submitLabel}
          </AnimatedButton>
        </form>
      </GlassCard>
    </motion.div>
  )
}
