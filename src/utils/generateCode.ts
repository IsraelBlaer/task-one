const codeArray:number[]  = []


export function generateCode():number{
    codeArray.length=0
    for(let i=1; i<=6; i++){
        const randomNumber =  Math.floor(Math.random()*10)
       // console.log(randomNumber,"\n")
        codeArray.push(randomNumber)
    }
   const newCode =  parseInt(codeArray.join(""))
   console.log(codeArray)
   console.log(newCode)
   return newCode
}

