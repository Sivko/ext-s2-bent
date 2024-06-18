import { Item } from "@/Components/Combobox";


export const notToHaveInvoceSB = ({ inn, company, lastName, firstName, middleName, phone, email, region, kpp, ogrn }: { inn: string, company: string, lastName: string, firstName: string, middleName: string, phone: string, email: string, region: Item, kpp: string, ogrn: string }) => `data[add_info]: 
data[add_info]: 
data[attachments][]: 
data[autocreated]: false
data[call_me]: 
data[channel][id]: 11
data[channel][name]: Офлайн (бизнес)
data[city_id]: 
data[comments][]: 
data[company_name]: ${company}
data[contact_details][last_name]: 
data[contact_details][first_name]: 
data[contact_details][middle_name]: 
data[contact_details][email]: 
data[contact_details][phone]: 
data[created_at]: 
data[created_by_user][id]: Z6SlqM
data[created_by_user][name]: Леоничева Анжелика Владиславна (lika@szbm.ru)
data[deal_amount]: 
data[deal_subject_id]: 
data[decision_maker_email]: 
data[decision_maker_person_name]: 
data[decision_maker_phone]: 
data[decision_maker_person_first_name]: 
data[decision_maker_person_last_name]: 
data[decision_maker_person_middle_name]: 
data[eks_date]: 
data[equip_amount]: 
data[equip_connect_type]: 
data[equip_type]: 
data[equip_type_ru]: 
data[events]: 
data[fields][]: company_name
data[fields][]: first_name
data[fields][]: last_name
data[fields][]: middle_name
data[fields][]: phone
data[fields][]: region_id
data[final_decision]: 
data[deal_subject]: 
data[finance_person_name]: 
data[finance_person_email]: 
data[id]: 
data[inn]: ${inn}
data[kpp]: ${kpp}
data[ogrn]: ${ogrn}
data[okfs_manual]: 
data[okfs]: 16
data[okopf]: 12300
data[install_region]: 
data[install_region_id]: 
data[install_date]: 
data[is_deleted]: false
data[manager][id]: WES3R0
data[manager][name]: Жариков Сергей Иванович (zharikov.s.iv@sberbank.ru)
data[manager][territorial_bank][id]: 4
data[manager][territorial_bank][name]: Московский
data[manager][territorial_bank][short_name]: МБ
data[manager][territorial_bank][code]: 038
data[manager][territorial_bank][is_active]: true
data[manager][territorial_bank][sber_mq_regions][][id]: 254
data[manager][territorial_bank][sber_mq_regions][][name]: Москва Город
data[manager][territorial_bank][terr_managers][][id]: dQSAwe
data[manager][territorial_bank][terr_managers][][name]: Гулев Олег Викторович
data[manager][territorial_bank][terr_managers][][email]: ovgulev@sberbank.ru
data[manager][territorial_bank][terr_managers][][phone]: +79264813201
data[manager][territorial_bank][terr_managers][][last_name_with_initials]: Гулев О.В.
data[manager][territorial_bank][terr_managers][][id]: zVS9ye
data[manager][territorial_bank][terr_managers][][name]: Паршина Дария Игоревна
data[manager][territorial_bank][terr_managers][][email]: parshina.d.i@sberbank.ru
data[manager][territorial_bank][terr_managers][][phone]: +79160396569
data[manager][territorial_bank][terr_managers][][last_name_with_initials]: Паршина Д.И.
data[manager][territorial_bank][terr_managers][][id]: 1ySYb3
data[manager][territorial_bank][terr_managers][][name]: Мовсесян Армен Аркадьевич
data[manager][territorial_bank][terr_managers][][email]: aamovsesyan@sberbank.ru
data[manager][territorial_bank][terr_managers][][phone]: +79652646232
data[manager][territorial_bank][terr_managers][][last_name_with_initials]: Мовсесян А.А.
data[manager][territorial_bank][terr_managers][][id]: gQjSLy
data[manager][territorial_bank][terr_managers][][name]: Перерва Александр Геннадьевич
data[manager][territorial_bank][terr_managers][][email]: agpererva@sberbank.ru
data[manager][territorial_bank][terr_managers][][phone]: +79136075617
data[manager][territorial_bank][terr_managers][][last_name_with_initials]: Перерва А.Г.
data[manager][avatar][file]: public/shared/users/avatar/63144/img_6324.jpg
data[manager][avatar][size]: 9482925
data[manager][avatar][name]: img_6324.jpg
data[manager][email]: zharikov.s.iv@sberbank.ru
data[manager][first_name]: Сергей
data[manager][last_name]: Жариков
data[manager][middle_name]: Иванович
data[manager_name]: 
data[manager_phone]: 
data[manager_email]: 
data[manager_first_name]: 
data[manager_last_name]: 
data[manager_middle_name]: 
data[mcc_code]: 
data[mcc_code_id]: 
data[merchants][][id]: 39
data[merchants][][name]: ПАО Сбербанк
data[merchant_branch]: 
data[merchant_branch_id]: 
data[notice_number]: 
data[number]: 
data[online_product_ids][]: 
data[online_manager_product_ids][]: 
data[operation_average_sum]: 
data[orgaddress]: 
data[orgaddress_fias_guid]: 
data[orgaddress_fias_lvl]: 
data[partner][id]: 31089
data[partner][name]: Леоничева Анжелика Владиславна
data[partner][vat_number]: 401600950529
data[partner][email]: lika@szbm.ru
data[permissions][comment_allowed]: false
data[pos_name]: 
data[posaddress]: 
data[posaddress_fias_guid]: 
data[posaddress_fias_lvl]: 
data[product_order_relations][][product_id]: 24
data[product_order_relations][][recommendation_id]: 
data[product_order_relations][][events][]: 
data[product_order_relations][][external_id]: 
data[products][][prod_offer_id]: 
data[products][][change_status_reason]: 
data[products][][eks_date]: 
data[products][][crm_status]: 
data[products][][payment_status]: 
data[products][][neo_status]: 
data[products][][crm_status_visible]: false
data[products][][payment_status_visible]: false
data[products][][updated_at]: 
data[products][][sber_telecom_auth_url]: 
data[products][][direction]: Офлайн
data[products][][recommendation_id]: 
data[products][][external_id]: 
data[products][][reserve_account]: false
data[products][][merchant_id]: 39
data[products][][client_activity]: false
data[products][][turnover_1]: 
data[products][][turnover_2]: 
data[products][][rbidos]: 
data[products][][turnover_1_period]: 
data[products][][turnover_2_period]: 
data[products][][product][id]: 24
data[products][][product][name]: Кредиты
data[products][][product][abbreviation]: КР
data[products][][product][slug]: kredity
data[products][][status]: 
data[products][][businessapp]: 
data[questions_contact_phone]: 
data[rbidos_request]: 
data[readed?]: false
data[region]: 
data[region_id]: ${region["attribute-name"]}
data[required_fields][]: first_name
data[required_fields][]: last_name
data[required_fields][]: phone
data[status]: 
data[status_code]: 
data[turn_over]: 
data[unblock_request]: 
data[with_sms_bearer_lead]: false
data[updated_at]: 
data[user_channel]: Офлайн (бизнес)
data[recommendation_product_ids][]: 34
data[recommendation_product_ids][]: 23
data[recommendation_product_ids][]: 14
data[special_offer]: 
data[sbercrm_id]: 
data[lot_number]: 
data[customer_inn]: 
data[guaranteetype]: 
data[partner_request_order_agreement_answer_required]: 
data[reserve_account]: 
data[expect_reserve_account]: false
data[bg_request]: 
data[department]: 
data[status_reserve_account]: empty
data[otkritie_bank_city]: 
data[external_form_id]: 
data[lead]: 
data[phone]: ${phone}
data[email]: ${email}
data[first_name]: ${firstName}
data[last_name]: ${lastName}
data[middle_name]: ${middleName}
data[files_options][unblock_request][max_size]: 5242880
data[files_options][unblock_request][type]: .jpeg, .jpg, .jfif, .png, .pdf, .ai, .tiff, .pdf, .ai, .mpga, .mp2, .mp3, .m2a, .m3a, .mp2a, .txt, .asc, .c, .cc, .h, .hh, .cpp, .hpp, .dat, .hlp, .conf, .def, .doc, .in, .list, .log, .rst, .text, .textile, .oga, .ogg, .spx, .opus, .ogx, .ogg, .ogv
data[files_options][unblock_request][max_count]: 3
data[partner_incorporation_form][id]: 3
data[partner_incorporation_form][name]: ИП
data[msp_error]: 
data[merchant]: 
data[sent_to_kafka]: false
data[juridical_address]: 
data[available_special_offers][]: 
data[msp_token]: 
data[mcc_group_id]: 
data[posaddress_kladr_id]: 
data[posaddress_postal_code]: 
data[posaddress_street_type_full]: 
data[posaddress_street]: 
data[posaddress_house_type_full]: 
data[posaddress_house]: 
data[posaddress_flat]: 
data[skip_integration_channels_slugs]: 
data[product_ids][]: 24
data[confirmed_by_sms]: false`

export const haveInvoceSB = ({ inn, company, lastName, firstName, middleName, phone, email, region, kpp, ogrn }: { inn: string, company: string, lastName: string, firstName: string, middleName: string, phone: string, email: string, region: Item, kpp: string, ogrn: string }) => `data[add_info]: 
data[attachments][]: 
data[autocreated]: false
data[call_me]: 
data[channel][id]: 11
data[channel][name]: Офлайн (бизнес)
data[city_id]: 
data[comments][]: 
data[company_name]: ${company}
data[contact_details][last_name]: 
data[contact_details][first_name]: 
data[contact_details][middle_name]: 
data[contact_details][email]: 
data[contact_details][phone]: 
data[created_at]: 
data[created_by_user][id]: Z6SlqM
data[created_by_user][name]: Леоничева Анжелика Владиславна (lika@szbm.ru)
data[deal_amount]: 
data[deal_subject_id]: 
data[decision_maker_email]: 
data[decision_maker_person_name]: 
data[decision_maker_phone]: 
data[decision_maker_person_first_name]: 
data[decision_maker_person_last_name]: 
data[decision_maker_person_middle_name]: 
data[eks_date]: 
data[equip_amount]: 
data[equip_connect_type]: 
data[equip_type]: 
data[equip_type_ru]: 
data[events]: 
data[fields][]: company_name
data[fields][]: first_name
data[fields][]: last_name
data[fields][]: middle_name
data[fields][]: phone
data[fields][]: region_id
data[final_decision]: 
data[deal_subject]: 
data[finance_person_name]: 
data[finance_person_email]: 
data[id]: 
data[inn]: ${inn}
data[kpp]: ${kpp}
data[ogrn]: ${ogrn}
data[okfs_manual]: 
data[okfs]: 16
data[okopf]: 12300
data[install_region]: 
data[install_region_id]: 
data[install_date]: 
data[is_deleted]: false
data[manager][id]: WES3R0
data[manager][name]: Жариков Сергей Иванович (zharikov.s.iv@sberbank.ru)
data[manager][territorial_bank][id]: 4
data[manager][territorial_bank][name]: Московский
data[manager][territorial_bank][short_name]: МБ
data[manager][territorial_bank][code]: 038
data[manager][territorial_bank][is_active]: true
data[manager][territorial_bank][sber_mq_regions][][id]: 254
data[manager][territorial_bank][sber_mq_regions][][name]: Москва Город
data[manager][territorial_bank][terr_managers][][id]: dQSAwe
data[manager][territorial_bank][terr_managers][][name]: Гулев Олег Викторович
data[manager][territorial_bank][terr_managers][][email]: ovgulev@sberbank.ru
data[manager][territorial_bank][terr_managers][][phone]: +79264813201
data[manager][territorial_bank][terr_managers][][last_name_with_initials]: Гулев О.В.
data[manager][territorial_bank][terr_managers][][id]: 1ySYb3
data[manager][territorial_bank][terr_managers][][name]: Мовсесян Армен Аркадьевич
data[manager][territorial_bank][terr_managers][][email]: aamovsesyan@sberbank.ru
data[manager][territorial_bank][terr_managers][][phone]: +79652646232
data[manager][territorial_bank][terr_managers][][last_name_with_initials]: Мовсесян А.А.
data[manager][territorial_bank][terr_managers][][id]: gQjSLy
data[manager][territorial_bank][terr_managers][][name]: Перерва Александр Геннадьевич
data[manager][territorial_bank][terr_managers][][email]: agpererva@sberbank.ru
data[manager][territorial_bank][terr_managers][][phone]: +79136075617
data[manager][territorial_bank][terr_managers][][last_name_with_initials]: Перерва А.Г.
data[manager][territorial_bank][terr_managers][][id]: zVS9ye
data[manager][territorial_bank][terr_managers][][name]: Паршина Дария Игоревна
data[manager][territorial_bank][terr_managers][][email]: parshina.d.i@sberbank.ru
data[manager][territorial_bank][terr_managers][][phone]: +79160396569
data[manager][territorial_bank][terr_managers][][last_name_with_initials]: Паршина Д.И.
data[manager][avatar][file]: public/shared/users/avatar/63144/img_6324.jpg
data[manager][avatar][size]: 9482925
data[manager][avatar][name]: img_6324.jpg
data[manager][email]: zharikov.s.iv@sberbank.ru
data[manager][first_name]: Сергей
data[manager][last_name]: Жариков
data[manager][middle_name]: Иванович
data[manager_name]: 
data[manager_phone]: 
data[manager_email]: 
data[manager_first_name]: 
data[manager_last_name]: 
data[manager_middle_name]: 
data[mcc_code]: 
data[mcc_code_id]: 
data[merchants][][id]: 39
data[merchants][][name]: ПАО Сбербанк
data[merchant_branch]: 
data[merchant_branch_id]: 
data[notice_number]: 
data[number]: 
data[online_product_ids][]: 
data[online_manager_product_ids][]: 
data[operation_average_sum]: 
data[orgaddress]: 
data[orgaddress_fias_guid]: 
data[orgaddress_fias_lvl]: 
data[partner][id]: 31089
data[partner][name]: Леоничева Анжелика Владиславна
data[partner][vat_number]: 401600950529
data[partner][email]: lika@szbm.ru
data[permissions][comment_allowed]: false
data[pos_name]: 
data[posaddress]: 
data[posaddress_fias_guid]: 
data[posaddress_fias_lvl]: 
data[product_order_relations][][product_id]: 24
data[product_order_relations][][recommendation_id]: 
data[product_order_relations][][events][]: 
data[product_order_relations][][external_id]: 
data[products][][prod_offer_id]: 
data[products][][change_status_reason]: 
data[products][][eks_date]: 
data[products][][crm_status]: 
data[products][][payment_status]: 
data[products][][neo_status]: 
data[products][][crm_status_visible]: false
data[products][][payment_status_visible]: false
data[products][][updated_at]: 
data[products][][sber_telecom_auth_url]: 
data[products][][direction]: Офлайн
data[products][][recommendation_id]: 
data[products][][external_id]: 
data[products][][reserve_account]: false
data[products][][merchant_id]: 39
data[products][][client_activity]: false
data[products][][turnover_1]: 
data[products][][turnover_2]: 
data[products][][rbidos]: 
data[products][][turnover_1_period]: 
data[products][][turnover_2_period]: 
data[products][][product][id]: 24
data[products][][product][name]: Кредиты
data[products][][product][abbreviation]: КР
data[products][][product][slug]: kredity
data[products][][status]: 
data[products][][businessapp]: 
data[questions_contact_phone]: 
data[rbidos_request]: 
data[readed?]: false
data[region]: 
data[region_id]: ${region["attribute-name"]}
data[required_fields][]: first_name
data[required_fields][]: last_name
data[required_fields][]: phone
data[status]: 
data[status_code]: 
data[turn_over]: 
data[unblock_request]: 
data[with_sms_bearer_lead]: false
data[updated_at]: 
data[user_channel]: Офлайн (бизнес)
data[product_order_relation_recommendations][24]: 4
data[product_order_relation_latent_recommendations][24]: 4
data[recommendation_product_ids][]: 34
data[recommendation_product_ids][]: 24
data[recommendation_product_ids][]: 20
data[special_offer]: 
data[sbercrm_id]: 
data[lot_number]: 
data[customer_inn]: 
data[guaranteetype]: 
data[partner_request_order_agreement_answer_required]: 
data[reserve_account]: 
data[expect_reserve_account]: false
data[bg_request]: 
data[department]: 
data[status_reserve_account]: empty
data[otkritie_bank_city]: 
data[external_form_id]: 
data[lead]: 
data[phone]: ${phone}
data[email]: ${email}
data[first_name]: ${firstName}
data[last_name]: ${lastName}
data[middle_name]: ${middleName}
data[files_options][unblock_request][max_size]: 5242880
data[files_options][unblock_request][type]: .jpeg, .jpg, .jfif, .png, .pdf, .ai, .tiff, .pdf, .ai, .mpga, .mp2, .mp3, .m2a, .m3a, .mp2a, .txt, .asc, .c, .cc, .h, .hh, .cpp, .hpp, .dat, .hlp, .conf, .def, .doc, .in, .list, .log, .rst, .text, .textile, .oga, .ogg, .spx, .opus, .ogx, .ogg, .ogv
data[files_options][unblock_request][max_count]: 3
data[partner_incorporation_form][id]: 3
data[partner_incorporation_form][name]: ИП
data[msp_error]: 
data[merchant]: 
data[sent_to_kafka]: false
data[juridical_address]: 
data[available_special_offers][]: 
data[msp_token]: 
data[mcc_group_id]: 
data[posaddress_kladr_id]: 
data[posaddress_postal_code]: 
data[posaddress_street_type_full]: 
data[posaddress_street]: 
data[posaddress_house_type_full]: 
data[posaddress_house]: 
data[posaddress_flat]: 
data[skip_integration_channels_slugs]: 
data[product_ids][]: 24
data[confirmed_by_sms]: false`