

function randomNumber(ran){
    return Math.floor(Math.random()* ran)
}
// generate random number 

const wordsDiff = {
    youAre :[ 'smart','pretty','happy','powerfull','lucky'],
    folow:['never give up','all the good thingh come with sacrifice','be good for nothing','what you think is what u get'],
    todayYouWill:[ 'meet new friends','enjoy the day','go out and have fun','read a book']
}
//store words in an array


let words = []




for(let pop in wordsDiff){

    let option = randomNumber(wordsDiff[pop].length)


// add text to wordsDiff

switch (pop){
    case 'youAre':
        words.push(`Today you will be "${wordsDiff[pop][option]}`)
        break
        case 'folow':
        words.push(`Just folow this quotes "${wordsDiff[pop][option]}`)
        break
        case 'todayYouWill':
            words.push(`Today you will "${wordsDiff[pop][option]}`)
            break
            default:
                words.push("give more info please")
 }
}

function executeQuote(diff){

    const executedQ = words.join('\n')
    console.log(executedQ)
}
 executeQuote(words);
