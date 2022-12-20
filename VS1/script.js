'use strict';

//Task # 37. 13

const shoppingMallData = {
    shops: [{
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let vShops = 0;
    // получили значения из всех {} в []shops;
    for (let i = 0; i < data.shops.length; i++) {
        if (typeof (data.shops[i]) === 'object') {

            let {
                width,
                length
            } = data.shops[i];

            vShops += width * length;
            //console.log(vShops);
        }
    }

    const totalCost = vShops * data.height * data.moneyPer1m3;
    //console.log(totalCost);

    if (totalCost <= data.budget) {
        return `Бюджета достаточно`;
    } else {
        return `Бюджета недостаточно`;
    }

}

isBudgetEnough(shoppingMallData);
//solved