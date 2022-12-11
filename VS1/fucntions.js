'use sctrict';

//task 29.1

function calculateVolumeAndArea(side) {
    let volume,
        sCube;

    for (let i = 0; i < 1; i++) {

        if (typeof (side) == 'string' || side <= 0 || side == '' || side == null ||
            !Number.isInteger(side)) {

            console.log(`При вычислении произошла ошибка`);

        } else {
            volume = side * side * side;
            sCube = (side * side) * 6;
            console.log(`Объем куба: ${volume}, площадь всей поверхности = ${sCube}`);
        }
        return volume, sCube;
    }

}
calculateVolumeAndArea(4);

//task 29.2

function getCoupeNumber(seatNum) {
    for (let i = 0; i < 1; i++) {
        let coupe;

        if (typeof (seatNum) === 'string' || seatNum < 0 || !Number.isInteger(seatNum)) {
            console.log('Ошибка. Проверьте правильность введенного номера места');
        } else if (seatNum == 0 || seatNum > 37) {
            console.log('Таких мест в вагоне не существует');
        } else {
            coupe = parseInt((seatNum - 1) / 4 + 1);
            console.log(coupe);
        }
    }
}

getCoupeNumber(33);

// solved with small hint with formula >>> (seatNum -1) / 4 + 1