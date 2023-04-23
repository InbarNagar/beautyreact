import { View, Text } from 'react-native'
import React from 'react'
import { Fetch,Axios } from './Fetch'

// התחברות לקוחות
export const LogInF = (ID_number, password) => {
    console.log(`Client/OneClient/${ID_number}/${password}`)
    return Fetch(`Client/OneClient/${ID_number}/${password}`, 'get')
}
// התחברות בעלי עסקים
export const LogInPro = (ID_number, password) => {
    console.log(`Professional/OneProfessional/${ID_number}/${password}`)
    return Fetch(`Professional/OneProfessional`, 'post')
}

//הרשמת בעל עסק - פרטים אישים
export const Professional_Registration = (body) => {

    return Axios(`Professional/NewProfessional`, 'post',body)

}

//הרשמת בעל עסק-פרטי העסק
export const Professional_Business = (body) => {

    return Axios(`Business/NewBusiness`, 'post',body)

}

//הרשמת לקוחות - פרטים אישים
export const Cli_Registration = (body) => {

    return Axios(`Client/NewClient`, 'post',body)

}