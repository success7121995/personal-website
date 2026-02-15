export enum DateFormat {
    MM_DD_YYYY = 'MM/DD/YYYY', // 02/15/2026
    DD_MM_YYYY = 'DD/MM/YYYY', // 15/02/2026
    YYYY_MM_DD = 'YYYY/MM/DD', // 2026/02/15
    DD_MMM_YYYY = 'DD MMM YYYY', // 15 Feb 2026
    MM_YYYY = 'MM YYYY', // 02 2026
    MMM_YYYY = 'MMM YYYY', // Feb 2026
    M_NAME_YYYY = 'Month Name YYYY', // February 2026
    M_NAME_DD_YYYY = 'Month Name DD, YYYY', // February 15, 2026
    YYYY_MM_DD_HH_MM_SS = 'YYYY/MM/DD HH:MM:SS', // 2026/02/15 14:00:00
    YYYY_MM_DD_HH_MM_SS_A = 'YYYY/MM/DD HH:MM:SS A', // 2026/02/15 2:00:00 PM
    HH_MM_SS = 'HH:MM:SS', // 14:00:00
    HH_MM_SS_A = 'HH:MM:SS A', // 2:00:00 PM
    HH_MM = 'HH:MM', // 14:00
}

export const DateToString = (date: Date, format: DateFormat = DateFormat.DD_MM_YYYY) => {
    switch (format) {
        case DateFormat.MM_DD_YYYY:
            return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
        case DateFormat.DD_MM_YYYY:
            return date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })
        case DateFormat.YYYY_MM_DD:
            return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
        case DateFormat.DD_MMM_YYYY:
            return date.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })
        case DateFormat.MM_YYYY:
            return date.toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' })
        case DateFormat.MMM_YYYY:
            return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        case DateFormat.M_NAME_YYYY:
            return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        case DateFormat.M_NAME_DD_YYYY:
            return date.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })
        case DateFormat.YYYY_MM_DD_HH_MM_SS:
            return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
        case DateFormat.YYYY_MM_DD_HH_MM_SS_A:
            return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
        case DateFormat.HH_MM_SS:
            return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        case DateFormat.HH_MM_SS_A:
            return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
        case DateFormat.HH_MM:
            return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        default:
            return date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })
    }
}