const dateMethods = {
    theYear(date){
        return new Date(date).getFullYear();
    },
    theMonth(date){
        const fulldate = new Date(date)
        const month = (fulldate.getMonth() + 1).toString().padStart(2,"0")
        return month
    },
    theDay(date){
        const fulldate = new Date(date)
        const day = (fulldate.getDay()+1).toString().padStart(2,"0")
        return day
    }
}

export {dateMethods}