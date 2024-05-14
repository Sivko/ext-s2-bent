export interface FiltersRoot {
  data: Daum[]
  meta: Meta
  links: Links2
}

export interface Daum {
  id: string
  type: string
  links: Links
  attributes: Attributes
}

export interface Links {
  self: string
}

export interface Attributes {
  "created-at": string
  "updated-at": string
  "cached-at": string
  "class-name": string
  name?: string
  key: string
  temp: boolean
  data: Data
  color: string
}

export interface Data {
  fields: string[]
  group_conditions?: GroupConditions
  order_conditions: OrderConditions
  search_conditions?: SearchConditions
}

export interface GroupConditions {}

export interface OrderConditions {
  id?: string
  created_at?: string
  product?: string
  stage_duration?: string
}

export interface SearchConditions {
  archived_at?: string
}

export interface Meta {
  "record-count": number
  "page-count": number
}

export interface Links2 {
  first: string
  last: string
}
