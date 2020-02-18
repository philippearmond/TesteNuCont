
exports.getData = input => (
    input.map(value => {
      const values = value.split(" ")
      
      const isDoubleName = isNaN(values[2]) ? values[1] + values[2] : values[1]
      
      const positionTest = (valueOne, valueTwo) => isNaN(values[2]) ? values[valueOne] : values[valueTwo]
      
      return {
        classifier: parseInt(values[0]),
        description: isDoubleName,
        openingBalance: parseInt(positionTest(3, 2)),
        debit: parseInt(positionTest(4, 3)),
        credit: parseInt(positionTest(5, 4)),
        finalBalance: parseInt(positionTest(6, 5)),
        parent: positionTest(7, 6) || null
      }
      
    })
  )
