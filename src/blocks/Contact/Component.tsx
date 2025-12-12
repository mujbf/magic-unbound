'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Text } from '@/app/(frontend)/branding/components/Text'

interface ContactInfo {
  address?: string
  email?: string
  phone?: string
}

interface ContactBlockProps {
  title?: string
  subtitle?: string
  contactInfo?: ContactInfo
}

export const ContactBlock: React.FC<ContactBlockProps> = ({
  title = 'Get in Touch',
  subtitle = 'Lets create something amazing together',
  contactInfo = {
    address: '123 Creative Street, Design City, DC 12345',
    email: 'hello@company.com',
    phone: '+1 (555) 123-4567',
  },
}) => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' })
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }, 1500)
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-shark-950 py-20 md:py-32 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-scooter-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Title Section */}
        <div ref={titleRef} className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Text variant="h1" className="text-white mb-6">
              {title}
            </Text>
            <Text variant="b1" className="text-shark-300 font-light">
              {subtitle}
            </Text>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-12"
          >
            <div>
              <Text variant="h3" className="text-white mb-16">
                Contact Information
              </Text>

              <div className="space-y-8">
                {/* Address */}
                {contactInfo.address && (
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-shark-800 rounded-xl bg-shark-900/50 group-hover:border-scooter-500/50 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-scooter-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <Text variant="b4" className="tracking-[0.2em] uppercase text-shark-500 mb-2 font-medium">
                        Address
                      </Text>
                      <Text variant="b2" className="text-shark-200 leading-relaxed">
                        {contactInfo.address}
                      </Text>
                    </div>
                  </div>
                )}

                {/* Email */}
                {contactInfo.email && (
                  <div className="flex gap-6 group">
                     <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-shark-800 rounded-xl bg-shark-900/50 group-hover:border-scooter-500/50 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-scooter-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <Text variant="b4" className="tracking-[0.2em] uppercase text-shark-500 mb-2 font-medium">
                        Email
                      </Text>
                      <a
                        href={`mailto:${contactInfo.email}`}
                      >
                        <Text variant="b2" className="text-shark-200 hover:text-white transition-colors duration-300">
                          {contactInfo.email}
                        </Text>
                      </a>
                    </div>
                  </div>
                )}

                {/* Phone */}
                {contactInfo.phone && (
                  <div className="flex gap-6 group">
                     <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-shark-800 rounded-xl bg-shark-900/50 group-hover:border-scooter-500/50 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-scooter-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <Text variant="b4" className="tracking-[0.2em] uppercase text-shark-500 mb-2 font-medium">
                        Phone
                      </Text>
                      <a
                        href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      >
                        <Text variant="b2" className="text-shark-200 hover:text-white transition-colors duration-300">
                          {contactInfo.phone}
                        </Text>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="bg-shark-900/40 border border-shark-800/60 p-8 md:p-12 rounded-3xl"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs tracking-[0.2em] uppercase text-shark-500 mb-3 font-medium font-['DM_Sans']"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-shark-950/50 border border-shark-800 focus:border-scooter-500/50 rounded-xl px-6 py-4 text-white font-['DM_Sans'] text-lg transition-colors duration-300 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-[0.2em] uppercase text-shark-500 mb-3 font-medium font-['DM_Sans']"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-shark-950/50 border border-shark-800 focus:border-scooter-500/50 rounded-xl px-6 py-4 text-white font-['DM_Sans'] text-lg transition-colors duration-300 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-[0.2em] uppercase text-shark-500 mb-3 font-medium font-['DM_Sans']"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-shark-950/50 border border-shark-800 focus:border-scooter-500/50 rounded-xl px-6 py-4 text-white font-['DM_Sans'] text-lg transition-colors duration-300 focus:outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full bg-white text-shark-950 px-8 py-4 text-sm tracking-[0.2em] uppercase font-bold rounded-xl transition-all duration-300 font-['DM_Sans'] hover:bg-scooter-400 hover:text-white ${
                  isSubmitting
                    ? 'opacity-50 cursor-not-allowed'
                    : 'active:scale-[0.98]'
                }`}
              >
                {isSubmitting
                  ? 'Sending...'
                  : submitStatus === 'success'
                    ? 'Sent!'
                    : 'Send Message'}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-emerald-400 font-['DM_Sans']"
                >
                  Thank you! We&apos;ll get back to you soon.
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
