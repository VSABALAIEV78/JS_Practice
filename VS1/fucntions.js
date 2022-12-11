'use sctrict';

//task 29.1

function findVolumeSCube(side) {
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
findVolumeSCube(4);


//task 29.2