import React from 'react'
import {constants} from '../constants'

const GrainContext = React.createContext({})

const GrainContextProvider = ({children}) => {
  const [milletValues, setMilletValues] = React.useState([null, 0])
  const [riceValues, setRiceValues] = React.useState([null, 0])
  const [hulls, setHulls] = React.useState(0)

  const setRiceType = React.useCallback(
    newVal => setRiceValues(oldVal => [newVal, oldVal[1]]),
    [setRiceValues],
  )

  const setMilletType = React.useCallback(
    newVal => setMilletValues(oldVal => [newVal, oldVal[1]]),
    [setMilletValues],
  )

  const setRiceWeight = React.useCallback(
    newVal => setRiceValues(oldVal => [oldVal[0], newVal]),
    [setRiceValues],
  )

  const setMilletWeight = React.useCallback(
    newVal => setMilletValues(oldVal => [oldVal[0], newVal]),
    [setMilletValues],
  )

  const milletMap = milletValues[0] && constants.millet[milletValues[0]]

  const riceMap = riceValues[0] && constants.rice[riceValues[0]]

  const millet = {
    type: milletValues[0],
    weight: milletValues[1],
    setType: setMilletType,
    setWeight: setMilletWeight,
    crush: milletValues[0] && {
      Pan: milletMap['Pan'] * milletValues[1],
      '#60': milletMap['#60'] * milletValues[1],
      '#18': milletMap['#18'] * milletValues[1],
      '#14': milletMap['#14'] * milletValues[1],
    },
  }

  const rice = {
    type: riceValues[0],
    weight: riceValues[1],
    setType: setRiceType,
    setWeight: setRiceWeight,
    crush: riceValues[0] && {
      Pan: riceMap['Pan'] * riceValues[1],
      '#60': riceMap['#60'] * riceValues[1],
      '#18': riceMap['#18'] * riceValues[1],
      '#14': riceMap['#14'] * riceValues[1],
    },
  }

  const hull = {
    weight: hulls,
    setWeight: val => {
      console.log({val})
      setHulls(val ? parseInt(val) : 0)
    },
  }

  const totalPan =
    (millet.type ? millet.crush.Pan : 0) + (rice.type ? rice.crush.Pan : 0)
  const total60 =
    (millet.type ? millet.crush['#60'] : 0) +
    (rice.type ? rice.crush['#60'] : 0)
  const total18 =
    (millet.type ? millet.crush['#18'] : 0) +
    (rice.type ? rice.crush['#18'] : 0)
  const total14 =
    (millet.type ? millet.crush['#14'] : 0) +
    (rice.type ? rice.crush['#14'] : 0) +
    hull.weight
  const totalWeight = millet.weight + rice.weight + hull.weight

  const total = {
    weight: totalWeight,
    totalPan,
    total60,
    total18,
    total14,
  }

  const value = {
    millet,
    rice,
    hull,
    total,
  }

  return <GrainContext.Provider value={value}>{children}</GrainContext.Provider>
}

export {GrainContext}

export default GrainContextProvider
