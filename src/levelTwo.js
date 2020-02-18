
exports.getData = input => (
    input.map(value => {
      
      const values = value.split(' ')
       
      const convertValueTwo = values[2].replace(/[.,DC]/g, '')
      const convertValueThree = values[3].replace(/[.,DC]/g,'')
      const convertValueFour = values[4].replace(/[.,DC]/g,'')
      const convertValueFive = values[5].replace(/[.,DC]/g,'')
          
      
      const isDoubleName = isNaN(convertValueTwo) ? values[1] + values[2] : values[1]
      const isTripleName = isNaN(convertValueThree) ? values[1] + values[2] + values[3] : convertValueThree
      const isQuadrupleName = isNaN(convertValueFour) ? values[1] + values[2] + values[3] + values[4] : convertValueFour
      const isFifthName = isNaN(convertValueFive) ? values[1] + values[2] + values[3] + values[4] + values[5] : convertValueFive
      
      
      const nameTest = isNaN(convertValueFive) && isNaN(convertValueTwo) 
        ? isFifthName : isNaN(convertValueFour) && isNaN(convertValueTwo) 
        ? isQuadrupleName : isNaN(convertValueThree) && isNaN(convertValueTwo) 
        ? isTripleName : isNaN(convertValueTwo) 
        ? isDoubleName : values[1]
      
      const positionTest = (v1, v2, v3, v4, v5) => isNaN(convertValueFive)
        ? values[v5] : isNaN(convertValueFour) 
        ? values[v4] : isNaN(convertValueThree) 
        ? values[v3] : isNaN(convertValueTwo) 
        ? values[v2] : values[v1]
      
      const checkNull = value => (
        isNaN(convertValueFive) && isNaN(convertValueTwo) && isNaN(convertValueThree) &&
        isNaN(convertValueFour) && isNaN(convertValueFive) ? null : values[value])
      
        //o teste abaixo -> "positionTest != null ..." Foi utilizado p/ que eu conseguisse parsear o resultado e aplicar o replace"
       return {
        id: values[0].replace(/[.]/g,''),
        description: nameTest,
        classifier: positionTest(2, 3, 4, 5, 6) != null ? parseFloat(positionTest(2, 3, 4, 5, 6).replace(/[.,D]/g,'')) : checkNull(2),
        openingBalance: positionTest(3, 4, 5, 6, 7) != null ? parseFloat(positionTest(3, 4, 5, 6, 7).replace(/[.,D]/g,'')) : checkNull(3),
        debit: positionTest(4, 5, 6, 7, 8) != null ? parseFloat(positionTest(4, 5, 6, 7, 8).replace(/[.,D]/g,'')) : checkNull(4),
        credit: positionTest(5, 6, 7, 8, 9) != null ? parseFloat(positionTest(5, 6, 7, 8, 9).replace(/[.,D]/g,'')) : checkNull(5),  
       }
       
    })
  )