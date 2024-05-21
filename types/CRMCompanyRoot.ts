export interface CRMCompanyRoot {
  data?: Data | null
}

export interface Data {
  id: string
  type: string
  links: Links
  attributes: Attributes
  relationships: Relationships
}

export interface Links {
  self: string
}

export interface Attributes {
  "created-at": string
  "updated-at": string
  "cached-at": string
  name: string
  "general-phone": any
  "work-phone": any
  "work-phone-postfix": any
  "mobile-phone": any
  "other-phone": any
  "other-phone-postfix": any
  fax: any
  country: any
  city: string
  region: string
  address: string
  "zip-code": string
  email: any
  "other-email": any
  website: any
  "juristic-country": any
  "juristic-region": any
  "juristic-city": any
  "juristic-zip-code": any
  "juristic-street": any
  "juristic-house": any
  "juristic-build": any
  "juristic-office": any
  "actual-country": any
  "actual-region": any
  "actual-city": any
  "actual-zip-code": any
  "actual-street": any
  "actual-house": any
  "actual-build": any
  "actual-office": any
  "mailing-country": any
  "mailing-region": any
  "mailing-city": any
  "mailing-zip-code": any
  "mailing-street": any
  "mailing-house": any
  "mailing-build": any
  "mailing-office": any
  inn: string
  description: any
  note: any
  "full-name": any
  "short-name": any
  ogrn: any
  kpp: any
  okved: any
  okpo: any
  "manager-name": any
  "manager-position": any
  "lawfulness-base": any
  accountant: any
  customs: Customs
  "initial-balance": any
  "archived-at": any
  "discarded-at": any
  "previous-responsible-id": any
  "utm-source": any
  "utm-medium": any
  "utm-campaign": any
  "utm-term": any
  "utm-content": any
  "utm-landing-page": any
  "utm-city": any
  "utm-search-query": any
  "as-string": string
}

export interface Customs {
  "custom-111050": string
  "custom-111077": number
  "custom-111119": number
  "custom-111120": number
  "custom-111121": string
  "custom-111122": string
}

export interface Relationships {
  source: Source
  status: Status
  "company-type": CompanyType
  responsible: Responsible
  user: User
  deals: Deals
  orders: Orders
  contacts: Contacts
  companies: Companies
  tasks: Tasks
  events: Events
  contracts: Contracts
  checkups: Checkups
  segments: Segments
  "segment-process-statuses": SegmentProcessStatuses
  products: Products
  "entities-products": EntitiesProducts
  "business-profiles": BusinessProfiles
  "bank-details": BankDetails
  performers: Performers
  invoices: Invoices
  "invoice-payments": InvoicePayments
  documents: Documents
  "document-template-renders": DocumentTemplateRenders
}

export interface Source {
  links: Links2
}

export interface Links2 {
  self: string
  related: string
}

export interface Status {
  links: Links3
}

export interface Links3 {
  self: string
  related: string
}

export interface CompanyType {
  links: Links4
}

export interface Links4 {
  self: string
  related: string
}

export interface Responsible {
  links: Links5
}

export interface Links5 {
  self: string
  related: string
}

export interface User {
  links: Links6
}

export interface Links6 {
  self: string
  related: string
}

export interface Deals {
  links: Links7
}

export interface Links7 {
  self: string
  related: string
}

export interface Orders {
  links: Links8
}

export interface Links8 {
  self: string
  related: string
}

export interface Contacts {
  links: Links9
}

export interface Links9 {
  self: string
  related: string
}

export interface Companies {
  links: Links10
}

export interface Links10 {
  self: string
  related: string
}

export interface Tasks {
  links: Links11
}

export interface Links11 {
  self: string
  related: string
}

export interface Events {
  links: Links12
}

export interface Links12 {
  self: string
  related: string
}

export interface Contracts {
  links: Links13
}

export interface Links13 {
  self: string
  related: string
}

export interface Checkups {
  links: Links14
}

export interface Links14 {
  self: string
  related: string
}

export interface Segments {
  links: Links15
}

export interface Links15 {
  self: string
  related: string
}

export interface SegmentProcessStatuses {
  links: Links16
}

export interface Links16 {
  self: string
  related: string
}

export interface Products {
  links: Links17
}

export interface Links17 {
  self: string
  related: string
}

export interface EntitiesProducts {
  links: Links18
}

export interface Links18 {
  self: string
  related: string
}

export interface BusinessProfiles {
  links: Links19
}

export interface Links19 {
  self: string
  related: string
}

export interface BankDetails {
  links: Links20
}

export interface Links20 {
  self: string
  related: string
}

export interface Performers {
  links: Links21
}

export interface Links21 {
  self: string
  related: string
}

export interface Invoices {
  links: Links22
}

export interface Links22 {
  self: string
  related: string
}

export interface InvoicePayments {
  links: Links23
}

export interface Links23 {
  self: string
  related: string
}

export interface Documents {
  links: Links24
}

export interface Links24 {
  self: string
  related: string
}

export interface DocumentTemplateRenders {
  links: Links25
}

export interface Links25 {
  self: string
  related: string
}
