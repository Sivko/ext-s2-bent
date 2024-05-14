import { FieldAttribute } from "@/types/CustomFieldsData"

interface systemFieldDeal {
  name: string,
  "field-type": string,
  recorded: string,
  example?: string | number,
  description: string,
  "attribute-name"?: string
}

export const systemFieldsDeals: systemFieldDeal[] = [
  {
    "attribute-name": "name",
    "name": "Название",
    "field-type": "text",
    "example": "Моя сделка",
    "recorded": "true",
    "description": "Имя сделки"
  },
  {
    "attribute-name": "description",
    "name": "Описание",
    "field-type": "text",
    "example": "Описание сделки",
    "recorded": "true",
    "description": "Подробное описание сделки"
  },
  {
    "attribute-name": "loss-comment",
    "name": "Причина поражения",
    "field-type": "text",
    "example": "Причина поражения",
    "recorded": "true",
    "description": "Причина поражения в свободной форме"
  },
  {
    "attribute-name": "amount",
    "name": "Сумма",
    "field-type": "decimal",
    "example": 123.0,
    "recorded": "true",
    "description": "Сумма сделки"
  },
  {
    "attribute-name": "cost",
    "name": "Себестоимость сделки",
    "field-type": "decimal",
    "example": 123.0,
    "recorded": "true",
    "description": "Себестоимость сделки"
  },
  {
    "attribute-name": "profit",
    "name": "Прибыль сделки",
    "field-type": "decimal",
    "example": 123.0,
    "recorded": "нет",
    "description": "Прибыль сделки"
  },
  {
    "attribute-name": "number",
    "name": "Номер сделки",
    "field-type": "number",
    "example": 16,
    "recorded": "true",
    "description": "Номер сделки"
  },
  {
    "attribute-name": "planned-at",
    "name": "Планируемая дата закрытия",
    "field-type": "date",
    "example": "2016-01-29",
    "recorded": "true",
    "description": "Планируемая дата закрытия"
  },
  {
    "attribute-name": "finished-at",
    "name": "Фактическая дата закрытия",
    "field-type": "date",
    "example": "2016-01-30",
    "recorded": "true",
    "description": "Фактическая дата закрытия"
  },
  {
    "attribute-name": "created-at",
    "name": "Дата создания",
    "field-type": "datetime",
    "example": "2016-11-26T12:07:51.572+03:00",
    "recorded": "true",
    "description": "Дата создания"
  },
  {
    "attribute-name": "updated-at",
    "name": "Обновление",
    "field-type": "datetime",
    "example": "",
    "recorded": "",
    "description": ""
  },
  {
    "attribute-name": "archived-at",
    "name": "Архивирование",
    "field-type": "datetime",
    "example": "",
    "recorded": "",
    "description": ""
  },
  {
    "attribute-name": "previous-responsible-id",
    "name": "Прошлый ответственный",
    "field-type": "number",
    "example": 100,
    "recorded": "",
    "description": ""
  }
]