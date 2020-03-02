const measures = [
  {
    unit: 'football field',
    property: 'length',
    factor: 109.7
  }, {
    unit: 'swimming pool',
    property: 'volume',
    factor: 2500000
  }, {
    unit: 'football field',
    property: 'area',
    factor: 5351
  }, {
    unit: 'hectare',
    property: 'area',
    factor: 10000
  }, {
    unit: 'paperclip',
    property: 'mass',
    factor: 1
  }, {
    unit: 'troy ounce',
    property: 'mass',
    factor: 31.1034768
  }
]

const lookupFactor = ({ property, unit }) => {
  return measures.find(
    measure => measure.property === property && measure.unit === unit
  )
}

const convert = ({ property, qty, fromUnit, toUnit }) => {
  const fromFactor = lookupFactor({ property, unit: fromUnit }).factor
  const toFactor = lookupFactor({ property, unit: toUnit }).factor

  return qty * fromFactor / toFactor
}

export default convert
