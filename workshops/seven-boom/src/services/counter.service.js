export const checkSeven = (numba, numbaBoom) => {
    const includeCheck = includeNumba(numba, numbaBoom);
    const dividedCheck = dividedByNumba(numba, numbaBoom);

    console.log(
        `does ${numba} includes ${numbaBoom} ${includeCheck ? "yes" : "no"}`
    );
    console.log(
        `does ${numba} Divided by ${numbaBoom} ${dividedCheck ? "yes" : "no"}`
    );

    if (includeCheck && dividedCheck) {
        return "SUPA-BOOM";
    } else if (includeCheck || dividedCheck) {
        return "BOOM";
    } else {
        return numba;
    }
};

const includeNumba = (numba, numbaBoom) => {
    return numba.toString().indexOf(numbaBoom.toString()) !== -1;
};

const dividedByNumba = (numba, numbaBoom) => {
    return numba % numbaBoom === 0;
};
