'use client'

import { useState } from 'react'
import { Form, Input, Select, Radio, Button, notification } from 'antd'
import { useLanguage } from '@/context/LanguageContext'
import SectionHeader from '@/components/ui/SectionHeader'
import type { LeadFormData } from '@/types'

const { TextArea } = Input

const faqItems = [
  { qKey: 'faq_q1' as const, aKey: 'faq_a1' as const },
  { qKey: 'faq_q2' as const, aKey: 'faq_a2' as const },
  { qKey: 'faq_q3' as const, aKey: 'faq_a3' as const },
  { qKey: 'faq_q4' as const, aKey: 'faq_a4' as const },
]

export default function ContactForm() {
  const { t, language } = useLanguage()
  const [form] = Form.useForm<LeadFormData>()
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  async function handleSubmit(values: LeadFormData) {
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, language }),
      })

      if (!res.ok) throw new Error('Server error')

      notification.success({
        message: t('form_success_title') as string,
        description: t('form_success_desc') as string,
        duration: 8,
      })
      form.resetFields()
    } catch {
      notification.error({
        message: t('form_error_title') as string,
        description: t('form_error_desc') as string,
        duration: 6,
      })
    } finally {
      setLoading(false)
    }
  }

  const required = { required: true, message: t('form_required') as string }

  return (
    <section className="contact-section" id="contact" style={{ background: '#f0efed' }}>
      <div className="contact-container">
        <SectionHeader
          eyebrow={t('contact_eyebrow') as string}
          title={t('contact_title') as string}
          subtitle={t('contact_subtitle') as string}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="contact-info lg:col-span-1 space-y-6">
            <div>
              <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(0,0,0,0.45)' }}>
                {t('contact_info_phone') as string}
              </p>
              <a
                href="tel:+18132793943"
                className="font-body font-semibold text-lg transition-colors"
                style={{ color: '#0a0a0a' }}
              >
                (813) 279-3943
              </a>
            </div>

            <div>
              <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(0,0,0,0.45)' }}>
                {t('contact_info_whatsapp') as string}
              </p>
              <a
                href="https://wa.me/18132793943"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-semibold text-lg transition-colors"
                style={{ color: '#0a0a0a' }}
              >
                +1 (813) 279-3943
              </a>
            </div>

            <div>
              <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(0,0,0,0.45)' }}>
                {t('contact_info_area') as string}
              </p>
              <p className="font-body text-base" style={{ color: '#0a0a0a' }}>
                {t('contact_info_area_val') as string}
              </p>
            </div>

            <div>
              <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(0,0,0,0.45)' }}>
                {t('contact_info_hours') as string}
              </p>
              <p className="font-body text-base" style={{ color: '#5a5752' }}>
                {t('contact_info_hours_val') as string}
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/18132793943"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-body font-semibold text-sm px-5 py-3 rounded transition-colors w-full justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.508 5.836L.057 23.25a.75.75 0 00.918.919l5.454-1.449A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 01-4.95-1.355l-.355-.21-3.677.976.987-3.598-.23-.37A9.694 9.694 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              {t('final_cta_whatsapp') as string}
            </a>
          </div>

          {/* Form */}
          <div className="contact-form-card lg:col-span-2 bg-brand-white rounded-lg p-8 border border-brand-gray-200" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              requiredMark={false}
            >
              {/* Full Name */}
              <Form.Item
                name="fullName"
                label={t('form_full_name') as string}
                rules={[required]}
              >
                <Input
                  placeholder={t('form_full_name_placeholder') as string}
                  size="large"
                />
              </Form.Item>

              {/* Phone + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <Form.Item
                  name="phone"
                  label={t('form_phone') as string}
                  rules={[required]}
                >
                  <Input
                    type="tel"
                    placeholder={t('form_phone_placeholder') as string}
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label={t('form_email') as string}
                  rules={[
                    {
                      type: 'email',
                      message: t('form_email_invalid') as string,
                    },
                  ]}
                >
                  <Input
                    type="email"
                    placeholder={t('form_email_placeholder') as string}
                    size="large"
                  />
                </Form.Item>
              </div>

              {/* Preferred Contact */}
              <Form.Item
                name="preferredContact"
                label={t('form_preferred_contact') as string}
                rules={[required]}
              >
                <Select size="large" placeholder="—">
                  <Select.Option value="call">
                    {t('form_contact_call') as string}
                  </Select.Option>
                  <Select.Option value="whatsapp">
                    {t('form_contact_whatsapp') as string}
                  </Select.Option>
                  <Select.Option value="email">
                    {t('form_contact_email') as string}
                  </Select.Option>
                </Select>
              </Form.Item>

              {/* Service Type + Best Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <Form.Item
                  name="serviceType"
                  label={t('form_service_type') as string}
                  rules={[required]}
                >
                  <Select size="large" placeholder="—">
                    <Select.Option value="zipper_screen">
                      {t('form_service_zipper') as string}
                    </Select.Option>
                    <Select.Option value="shade_screen">
                      {t('form_service_shade') as string}
                    </Select.Option>
                    <Select.Option value="zebra_blinds">
                      {t('form_service_zebra') as string}
                    </Select.Option>
                    <Select.Option value="blackout_blinds">
                      {t('form_service_blackout') as string}
                    </Select.Option>
                    <Select.Option value="motorized">
                      {t('form_service_motorized') as string}
                    </Select.Option>
                    <Select.Option value="commercial">
                      {t('form_service_commercial') as string}
                    </Select.Option>
                    <Select.Option value="not_sure">
                      {t('form_service_not_sure') as string}
                    </Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="bestTime"
                  label={t('form_best_time') as string}
                >
                  <Select size="large" placeholder="—" allowClear>
                    <Select.Option value="morning">
                      {t('form_time_morning') as string}
                    </Select.Option>
                    <Select.Option value="afternoon">
                      {t('form_time_afternoon') as string}
                    </Select.Option>
                    <Select.Option value="evening">
                      {t('form_time_evening') as string}
                    </Select.Option>
                    <Select.Option value="anytime">
                      {t('form_time_anytime') as string}
                    </Select.Option>
                  </Select>
                </Form.Item>
              </div>

              {/* Property Type + City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <Form.Item
                  name="propertyType"
                  label={t('form_property_type') as string}
                >
                  <Radio.Group>
                    <Radio value="residential">
                      {t('form_property_residential') as string}
                    </Radio>
                    <Radio value="commercial">
                      {t('form_property_commercial') as string}
                    </Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  name="city"
                  label={t('form_city') as string}
                  rules={[required]}
                >
                  <Input
                    placeholder={t('form_city_placeholder') as string}
                    size="large"
                  />
                </Form.Item>
              </div>

              {/* Project Description */}
              <Form.Item
                name="projectDescription"
                label={t('form_description') as string}
              >
                <TextArea
                  rows={4}
                  placeholder={t('form_description_placeholder') as string}
                />
              </Form.Item>

              {/* Submit */}
              <Form.Item className="mb-0">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={loading}
                  disabled={loading}
                  className="w-full"
                  style={{
                    backgroundColor: '#d42b2b',
                    borderColor: '#d42b2b',
                    height: '52px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    borderRadius: 2,
                  }}
                >
                  {loading
                    ? (t('form_submitting') as string)
                    : (t('form_submit') as string)}
                </Button>
              </Form.Item>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                color: 'rgba(90,87,82,0.60)',
                textAlign: 'center',
                marginTop: 12,
              }}>
                {t('form_privacy_note') as string}
              </p>
              <p style={{ fontSize: 11, color: 'rgba(90,87,82,0.50)', textAlign: 'center', marginTop: 8 }}>
                By submitting this form you agree to our{' '}
                <a href="/terms" style={{ color: '#d42b2b' }}>
                  Terms
                </a>
                {' '}and{' '}
                <a href="/privacy" style={{ color: '#d42b2b' }}>
                  Privacy Policy
                </a>.
              </p>
            </Form>
          </div>
        </div>

        {/* ── FAQ ACCORDION ── */}
        <div style={{ maxWidth: 720, margin: '64px auto 0' }}>
          {faqItems.map(({ qKey, aKey }, index) => (
            <div
              key={qKey}
              style={{ borderTop: index === 0 ? '1px solid rgba(0,0,0,0.10)' : undefined }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '20px 0',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid rgba(0,0,0,0.10)',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#0a0a0a',
                  lineHeight: 1.4,
                }}>
                  {t(qKey) as string}
                </span>
                <span style={{
                  color: '#d42b2b',
                  fontSize: 18,
                  lineHeight: 1,
                  flexShrink: 0,
                  transition: 'transform 250ms',
                  transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0deg)',
                }}>
                  +
                </span>
              </button>

              <div style={{
                overflow: 'hidden',
                maxHeight: openFaq === index ? 400 : 0,
                transition: 'max-height 300ms ease',
              }}>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  fontWeight: 300,
                  color: '#5a5752',
                  lineHeight: 1.7,
                  padding: '16px 0 24px',
                  margin: 0,
                }}>
                  {t(aKey) as string}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .contact-section { padding: 96px 0; }
        .contact-container { max-width: 1280px; margin: 0 auto; padding: 0 64px; }
        @media (max-width: 1023px) {
          .contact-section { padding: 80px 0 !important; }
          .contact-container { padding: 0 32px !important; }
          .contact-info { order: 2 !important; }
          .contact-form-card { order: 1 !important; }
        }
        @media (max-width: 767px) {
          .contact-section { padding: 64px 0 !important; }
          .contact-container { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
