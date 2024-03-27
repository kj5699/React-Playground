export const checkRows = (values) => {
    let result = [false, '']
    for( let i = 0 ; i< 3 ; i++){
        if (values[3*i] ===values[ 3*i +1 ] && values[ 3*i +1 ]===values[3*i + 2] && values[3*i] !=='' ){
            return [true, values[3*i]]
        }
    }
    return result
}
export const checkColumns = (values) => {
    console.log('checking');
    let result = [false, '']
    for( let i = 0 ; i< 3 ; i++){
        console.log('checking', values[3*0 + i], values[ 3*1 + i ] , values[3*2 + i]);
        if (values [3*0 + i] ===values[ 3*1 + i ] && values[ 3*1 +i ]===values[3*2 + i] && values[3*0 + i] !==''){
            console.log('lerrvjkh', [true, values[3*0 + i]])
            return [true, values[3*0 + i]]
        }
    }
    return result
}
export const checkDiagnols = (values) => {
    let result = [false, '']
    if (values[0] === values[4] && values[4] === values[8] && values[0] !== ''){
        return [true, values[0]]
    }else if (values[2] === values[4] && values[4] === values[6] && values[2] !== ''){
        return [true, values[2]]
    }
    return result;
}
export const checkAllFilled = (values) => {
    if (values.findIndex(item =>  item === '') === -1){
        return true
    }else{
        return false
    }
}
export const Players = {
    0: {value: '0', name: 'Player 1', id : 0},
    1: {value: 'X', name: 'Player 2', id : 1}
}
export const ResultType = {
    0: 'Match Won',
    1: 'Match tied'
}

export const getWinner = (value) => {
    if (value === Players[0].value){
        return Players[0];
    }else{
        return Players[1];
    }
}
export const InitalBoardValue = Array(9).fill("");