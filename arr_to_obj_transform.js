var arr_to_obj_transformer = (inputArr) => {
    return inputArr.reduce((accumulate, current) => {
            let key = current[0];
            let val = current[1];
            accumulate[key] = val;
            return accumulate;
        }
        , {}
    );
};

let my_arr = [
    ['0', 'Shunya'],
    ['1','Ek'],
    ['2', 'Don'],
    ['3', 'Teen'],
    ['4', 'Char'],
    ['5', 'Paach'],
    ['6', 'Saha'],
    ['7', 'Saat'],
    ['8', 'Aath'],
    ['9', 'Nau']
];

let my_obj = arr_to_obj_transformer(my_arr);

console.log('Converted POJO : \n', my_obj);
