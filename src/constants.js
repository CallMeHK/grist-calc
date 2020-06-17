const millet = {
  '0.5mm, single pass': {
    Pan: 0.0375,
    '#60': 0.1871,
    '#18': 0.2882,
    '#14': 0.4871,
  },
  '0.6mm, double pass': {
    Pan: 0.0466,
    '#60': 0.248,
    '#18': 0.3585,
    '#14': 0.3468,
  },
}

const rice = {
  '0.7mm, single pass': {
    Pan: 0.019,
    '#60': 0.0739,
    '#18': 0.0963,
    '#14': 0.8113,
  },
  '0.6mm, double pass': {
    Pan: 0.0447,
    '#60': 0.2097,
    '#18': 0.2661,
    '#14': 0.4796,
  },
}

const constants = {
  millet,
  rice,
}

export {constants}
