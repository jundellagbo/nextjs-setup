export default ( array, exclude, key = null ) => {
    return array.filter( el => {
        const toRemove = key ? el[key] : el
        return exclude.indexOf( toRemove ) < 0
    } )
}