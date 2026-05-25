export type Language = 'en' | 'es'

export interface LeadFormData {
  fullName: string
  phone: string
  email?: string
  serviceType:
    | 'zebra_blinds'
    | 'drapery'
    | 'blackout_shades'
    | 'zipper_screens'
    | 'translucent_shades'
    | 'motorized_screens'
    | 'not_sure'
  propertyType?: 'residential' | 'commercial'
  city: string
  projectDescription?: string
  preferredLanguage?: 'en' | 'es'
  language: Language
}

export interface ServiceItem {
  id: string
  icon: string
  titleKey: string
  descriptionKey: string
}

export interface ProcessStep {
  step: number
  titleKey: string
  descriptionKey: string
  icon: string
}

export interface Testimonial {
  id: string
  nameKey: string
  cityKey: string
  reviewKey: string
  stars: number
}

export interface GalleryItem {
  id: string
  src: string
  altKey: string
  locationKey: string
}

export interface TrustItem {
  id: string
  icon: string
  textKey: string
}

export interface FAQItem {
  id: string
  questionKey: string
  answerKey: string
}
