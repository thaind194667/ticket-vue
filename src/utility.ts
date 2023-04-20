import moment from 'moment'

const mergeText = (a: String, b: String) => {
    return `${a}\xa0\xa0\xa0${b}`
}

const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土']

const dateFormatDayOFWeek = (date: string) => {
    var momentDate = moment(date)
    return `${momentDate.format('YYYY/MM/DD')} (${dayOfWeek[momentDate.day()]})`
    // return `${date.toLocaleDateString("ja-JP")}(${dayOfWeek[date.getDay()]})`
}

const dateFormat = (date: string) => {
    var momentDate = moment(date)
    return `${momentDate.format('YYYY/MM/DD HH:mm')}`
}

// const timeFormat = (date: Date) => {
    // const hour = date.getHours();
    // const minute = date.getMinutes();
    // return`${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`
// }



export {mergeText, dateFormatDayOFWeek, dateFormat}