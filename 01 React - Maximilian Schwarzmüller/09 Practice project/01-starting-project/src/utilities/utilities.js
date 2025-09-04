const dateFormatOptions = {
    localization: 'en-US',
    year: "numeric",
    month: "short",
    day: "numeric"
}

export const dateConversion = (dateString) => {
    const date = new Date(dateString)
    const { localization, year, month, day } = dateFormatOptions
    return date.toLocaleDateString(localization, {
        year, month, day
    })
}

