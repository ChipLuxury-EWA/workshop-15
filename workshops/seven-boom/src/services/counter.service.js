export const checkSeven = (numba, numbaBoom) => {
    console.log(`does ${numba} includes ${numbaBoom} ${includeNumba(numba, numbaBoom)}`)
    console.log(numba % numbaBoom === 0)
    if (
        numba % numbaBoom === 0 || includeNumba(numba, numbaBoom)
    ) {
        return "BOOM"
    } else {
        return numba
    }
};

const includeNumba = (numba, numbaBoom) => {
    return numba.toString().indexOf(numbaBoom.toString()) !== -1
}