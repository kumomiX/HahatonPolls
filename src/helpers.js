function getYesterday(d) {
  return new Date(d.setDate(d.getDate() - 1))
}

export const formatDate = (date, fullDate = false) => {
  const dateOptions = fullDate
    ? {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        year: 'numeric',
      }
    : {
        month: '2-digit',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        year: '2-digit',
      }
  const dateObj = new Date(date)
  const isToday = new Date().toDateString() === dateObj.toDateString()
  const isYesterday =
    getYesterday(new Date()).toDateString() === dateObj.toDateString()

  return isToday
    ? `сегодня, ${dateObj.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: 'numeric',
      })}`
    : isYesterday
    ? `вчера, ${dateObj.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: 'numeric',
      })}`
    : dateObj.toLocaleString(undefined, dateOptions)
}
