import { CRMCompanyRoot } from "./CRMCompanyRoot"

export interface CRMDealsRoot {
  data?: Data
  included?: CRMCompanyRoot[]
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
  "nearest-diary": any
  name: string
  description: any
  note: any
  "loss-comment": any
  amount: string
  number: number
  "finished-at": any
  "planned-at": any
  "archived-at": any
  cost: string
  profit: string
  customs: Customs
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
}

export interface Customs {
  [key: string]: string | number
}

export interface Relationships {
  area: Area
  "loss-competitor": LossCompetitor
  "loss-reason": LossReason
  status: Status
  source: Source
  stage: Stage
  "stage-category": StageCategory
  contact: Contact
  company: Company
  responsible: Responsible
  user: User
  contacts: Contacts
  companies: Companies
  entries: Entries
  deals: Deals
  orders: Orders
  products: Products
  "entities-products": EntitiesProducts
  performers: Performers
  tasks: Tasks
  contracts: Contracts
  segments: Segments
  "segment-process-statuses": SegmentProcessStatuses
  documents: Documents
  invoices: Invoices
  "invoice-payments": InvoicePayments
  "document-template-renders": DocumentTemplateRenders
  "estate-properties": EstateProperties
}

export interface Area {
  links: Links2
}

export interface Links2 {
  self: string
  related: string
}

export interface LossCompetitor {
  links: Links3
}

export interface Links3 {
  self: string
  related: string
}

export interface LossReason {
  links: Links4
}

export interface Links4 {
  self: string
  related: string
}

export interface Status {
  links: Links5
}

export interface Links5 {
  self: string
  related: string
}

export interface Source {
  links: Links6
}

export interface Links6 {
  self: string
  related: string
}

export interface Stage {
  links: Links7
}

export interface Links7 {
  self: string
  related: string
}

export interface StageCategory {
  links: Links8
}

export interface Links8 {
  self: string
  related: string
}

export interface Contact {
  links: Links9
}

export interface Links9 {
  self: string
  related: string
}

export interface Company {
  links: Links10
}

export interface Links10 {
  self: string
  related: string
}

export interface Responsible {
  links: Links11
}

export interface Links11 {
  self: string
  related: string
}

export interface User {
  links: Links12
}

export interface Links12 {
  self: string
  related: string
}

export interface Contacts {
  links: Links13
}

export interface Links13 {
  self: string
  related: string
}

export interface Companies {
  links: Links14
}

export interface Links14 {
  self: string
  related: string
}

export interface Entries {
  links: Links15
}

export interface Links15 {
  self: string
  related: string
}

export interface Deals {
  links: Links16
}

export interface Links16 {
  self: string
  related: string
}

export interface Orders {
  links: Links17
}

export interface Links17 {
  self: string
  related: string
}

export interface Products {
  links: Links18
}

export interface Links18 {
  self: string
  related: string
}

export interface EntitiesProducts {
  links: Links19
}

export interface Links19 {
  self: string
  related: string
}

export interface Performers {
  links: Links20
}

export interface Links20 {
  self: string
  related: string
}

export interface Tasks {
  links: Links21
}

export interface Links21 {
  self: string
  related: string
}

export interface Contracts {
  links: Links22
}

export interface Links22 {
  self: string
  related: string
}

export interface Segments {
  links: Links23
}

export interface Links23 {
  self: string
  related: string
}

export interface SegmentProcessStatuses {
  links: Links24
}

export interface Links24 {
  self: string
  related: string
}

export interface Documents {
  links: Links25
}

export interface Links25 {
  self: string
  related: string
}

export interface Invoices {
  links: Links26
}

export interface Links26 {
  self: string
  related: string
}

export interface InvoicePayments {
  links: Links27
}

export interface Links27 {
  self: string
  related: string
}

export interface DocumentTemplateRenders {
  links: Links28
}

export interface Links28 {
  self: string
  related: string
}

export interface EstateProperties {
  links: Links29
}

export interface Links29 {
  self: string
  related: string
}
