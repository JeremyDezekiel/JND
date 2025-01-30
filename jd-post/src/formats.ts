export const formatRelativeTime = (dateString: string) => {
    const now = new Date()
    const updatedDate = new Date(dateString)
    const diffInSeconds = Math.floor((now.getTime() - updatedDate.getTime()) / 1000)

    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

    if (diffInSeconds < 60) {
        return rtf.format(-diffInSeconds, 'seconds')
    }
    const diffInMinutes = Math.floor(diffInSeconds / 60)
    if (diffInMinutes < 60) {
        return rtf.format(-diffInMinutes, 'minutes')
    }
    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) {
        return rtf.format(-diffInHours, 'hours')
    }
    const diffInDays = Math.floor(diffInHours / 24)

    if (diffInDays < 2) {
        return '1 day ago'
    }

    if (diffInDays < 30) {
        return rtf.format(-diffInDays, 'days')
    }
    const diffInMonths = Math.floor(diffInDays / 30)
    if (diffInMonths < 12) {
        return rtf.format(-diffInMonths, 'months')
    }
    const diffInYears = Math.floor(diffInMonths / 12)
    return rtf.format(-diffInYears, 'years')
}

export const formatSection = (section: string) => {
    if (section.length === 2) {
        return section.toUpperCase()
    }
    const formattedSection = section.charAt(0).toUpperCase() + section.slice(1).toLowerCase()
    return formattedSection
}