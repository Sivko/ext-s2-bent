export interface IDSRoot {
  data: Data
  meta: Meta
}

export interface Data {
  type: string
  id: string
  attributes: Attributes
}

export interface Attributes {
  ids: number[]
}

export interface Meta {
  "record-count": number
  "page-count": number
}
