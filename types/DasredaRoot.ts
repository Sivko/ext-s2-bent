export interface DasredaRoot {
  id: number
  number: string
  created_at: string
  company_name: string
  products: Product[]
  partner: Partner
  is_deleted: boolean
  "readed?": boolean
  inn: string
  autocreated: boolean
  partner_incorporation_form: PartnerIncorporationForm
  msp_error: any
  sbercrm_id: any
  unblock_request: any
  with_sms_bearer_lead: boolean
  department: any
  status_reserve_account: string
  required_fields: string[]
  fields: string[]
  merchant: any
  contact_details: ContactDetails
  status_code: any
  events: any
  updated_at: string
  manager: Manager
  eks_date: any
  final_decision: any
  user_channel: string
  status: any
  permissions: Permissions
  online_product_ids: any[]
  special_offer: any
  merchants: Merchant[]
  ogrn: string
  kpp: string
  okopf: string
  okfs: string
  product_order_relations: ProductOrderRelation[]
  okfs_manual: any
  external_form_id: any
  sent_to_kafka: boolean
  lead: any
  files_options: FilesOptions
  last_name: string
  first_name: string
  middle_name: string
  email: string
  phone: string
  add_info: any
  region_id: number
  city_id: any
  merchant_branch_id: any
  notice_number: any
  call_me: any
  msp_token: any
  deal_amount: any
  deal_subject_id: any
  attachments: any[]
  lot_number: any
  customer_inn: any
  guaranteetype: any
  install_date: any
  pos_name: any
  operation_average_sum: any
  turn_over: any
  mcc_code_id: any
  mcc_group_id: any
  install_region_id: any
  questions_contact_phone: any
  posaddress_fias_guid: any
  posaddress_fias_lvl: any
  posaddress: any
  posaddress_kladr_id: any
  posaddress_postal_code: any
  posaddress_street_type_full: any
  posaddress_street: any
  posaddress_house_type_full: any
  posaddress_house: any
  posaddress_flat: any
  decision_maker_phone: any
  decision_maker_person_name: any
  decision_maker_person_first_name: any
  decision_maker_person_middle_name: any
  decision_maker_person_last_name: any
  decision_maker_email: any
  finance_person_email: any
  finance_person_name: any
  orgaddress_fias_guid: any
  orgaddress_fias_lvl: any
  orgaddress: any
  account_number: any
  account_bank_bic: any
  manager_name: any
  manager_first_name: any
  manager_middle_name: any
  manager_last_name: any
  manager_phone: any
  manager_email: any
  equip_type: any
  equip_amount: any
  equip_connect_type: any
  otkritie_bank_city: any
  skip_integration_channels_slugs: any
  equip_type_ru: any
  comments: any[]
  created_by_user: CreatedByUser
  deal_subject: any
  reserve_account: any
  partner_request_order_agreement_answer_required: any
  merchant_branch: any
  city: any
  region: Region
  channel: Channel
  rbidos_request: any
  install_region: any
  mcc_code: any
  bg_request: any
}

export interface Product {
  prod_offer_id: any
  change_status_reason: string
  eks_date: any
  crm_status: any
  payment_status: any
  neo_status: any
  crm_status_visible: boolean
  payment_status_visible: boolean
  updated_at: string
  sber_telecom_auth_url: any
  direction: string
  recommendation_id: number
  external_id: any
  reserve_account: boolean
  merchant_id: number
  client_activity: boolean
  turnover_1: any
  turnover_2: any
  rbidos: any
  turnover_1_period: any
  turnover_2_period: any
  product: Product2
  status: Status
  businessapp?: Businessapp
}

export interface Product2 {
  id: number
  name: string
  abbreviation: string
  slug: string
}

export interface Status {
  id: number
  is_deleted: boolean
  source: string
  name: string
  external_name: string
  sub_status_name: string
  sub_status_external_name: any
  merchant_status_code: string
  source_id: number
  slug: string
  send_sbercrm_status: boolean
  sbercrm_status: string
}

export interface Businessapp {
  id: number
  name: string
  short_description: string
  description: string
  status: string
}

export interface Partner {
  id: number
  name: string
  vat_number: string
  email: string
}

export interface PartnerIncorporationForm {
  id: number
  name: string
}

export interface ContactDetails {
  last_name: string
  first_name: string
  middle_name: string
  email: string
  phone: string
}

export interface Manager {
  id: string
  name: string
  territorial_bank: TerritorialBank
  avatar: Avatar
  email: string
  first_name: string
  last_name: string
  middle_name: string
}

export interface TerritorialBank {
  id: number
  name: string
  short_name: string
  code: string
  is_active: boolean
  sber_mq_regions: SberMqRegion[]
  terr_managers: TerrManager[]
}

export interface SberMqRegion {
  id: number
  name: string
}

export interface TerrManager {
  id: string
  name: string
  email: string
  phone: string
  last_name_with_initials: string
}

export interface Avatar {
  file: string
  size: number
  name: string
}

export interface Permissions {
  comment_allowed: boolean
}

export interface Merchant {
  id: number
  name: string
}

export interface ProductOrderRelation {
  product_id: number
  recommendation_id: number
  events: Event[]
  external_id: any
}

export interface Event {
  created_at: string
  status: string
  sub_status?: string
  status_code: string
  change_status_reason?: string
}

export interface FilesOptions {
  unblock_request: UnblockRequest
}

export interface UnblockRequest {
  max_size: number
  type: string
  max_count: number
}

export interface CreatedByUser {
  id: string
  name: string
}

export interface Region {
  id: number
  name: string
}

export interface Channel {
  id: number
  name: string
}
