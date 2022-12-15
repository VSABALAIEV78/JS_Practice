'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "249",
    skills: {
        languages: ['ru', 'eng', 'ua'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        let lang = plan.skills.languages.join(' ');
        lang = lang.toUpperCase();
        return `Мне ${plan.age} и я владею языками: ${lang}`;
    }
};


// taks 1
function showExperience(plan) {
    const {
        exp
    } = plan.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));

// task 2

function showProgrammingLangs(plan) {
    let programmingLanguages = '';
    for (let key in plan.skills.programmingLangs) {
        if (typeof ([key]) !== undefined) {
            programmingLanguages += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
        } else {
            programmingLanguages = '4';
        }
    }
    return programmingLanguages;
}

console.log(showProgrammingLangs(personalPlanPeter));

//task 3
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

//solved Task # 35.10 decomposition of {} + functions 