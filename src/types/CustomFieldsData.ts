export interface CustomFieldsData {
  id: string
  type: string
  links: Record<string, string>
  attributes: FieldAttribute
  relationships: Record<"custom-field-category", {
    links: {
      self: string;
      related: string;
    };
  }>;
}

export interface FieldAttribute {
  "created-at": string
  "updated-at": string
  "cached-at": string
  recorded: string,
  name: string
  "field-type": "text" | "date" | "number" | "select" | "tree" | "list" | "file" | "formula" | "rating" | "relation" | "multiple_relation" | "weight" | "exchange_rate"
  required: boolean
  "resource-name": "contacts" | "companies" | "deals" | "diaries" | "orders" | "products" | "telephony-calls" | "users"
  "attribute-name": string,
  "list-options"?: ListOptions[]
  "display-mode"?: "select"
  params: TextParams |  NumberParams | DateParams | SelectParams | ListParams  | FileParams | FormulaParams | RelationParams | WeightParams | ExchangeRateParams
}

interface TextParams {
  multiple: "0" | "1"
  acts_like: "phone" | "region" | "city" | "address" | "text" | "email" | "url"
  beauty_phone: string
  wysiwyg_disabled?: "0" | "1"
}

interface NumberParams {
  extension: string, // что за ед. измерения
  only_integer: "0" | "1"
  extension_type: "unit" | null | "currency" //вкл ед.измерения
}

interface DateParams {
  with_time: boolean, //указывать время
  show_diaries_in_timepicker: boolean
  colorize_render: boolean
  color_lt: null
  color_gt: null
}

interface SelectParams {
  colors: string[]
  values: string[]
  options: string[]
  multiple: "0" | "1"
  display_as: "select" | "checkbox"
}

interface ListParams {
  multiple: boolean,
  display_mode: "select",
  create_options_dynamically: boolean
}

interface ListOptions {
  id: number,
  color: string,
  position: number,
  value: string,
  formula_value: string
}

interface FileParams {
  public_upload: "0" | "1"
}

interface FormulaParams {
  formula: string
  dependencies: Record<string, string[]>
}

interface RelationParams {
  relation_class: "Order" | "Company" | "Deal" | "Contact" | "Product" | "User" | "DiaryTask" | "DiaryEvent" | "Entry" | "DocumentTemplateRender" | "Contract" | "Checkup"
  read_all?: "0" | "1"
}

interface WeightParams {
  multiple: "0" | "1"
  display_as: "select"
}

interface ExchangeRateParams {
  currency: string
}