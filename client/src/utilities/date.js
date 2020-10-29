const dateConverter = (date) => {
    var dateObj = new Date(date);
    var dateArr = dateObj.toISOString().split('T')[0].split("-")
    return `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`
}

export { dateConverter };