import React from 'react'
import {GrainContext} from '../context/GrainContext'
import {constants} from '../constants'
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core'

const entryStyles = {
  display: 'flex',
  justifyContent: 'space-between',
}

const grainHeader = {
  padding: 8,
}

const GrainEntry = () => {
  const {millet, rice, hull} = React.useContext(GrainContext)
  return (
    <div style={{padding: 8}}>
      <Card>
        <CardContent>
          <div>
            <div style={grainHeader}>
              <Typography>Millet</Typography>
            </div>
            <div style={entryStyles}>
              <Select
                style={{width: '60%'}}
                onChange={e => millet.setType(e.target.value)}>
                {Object.keys(constants.millet).map((elt, i) => (
                  <MenuItem value={elt} key={elt + i}>
                    {elt}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                style={{width: '30%'}}
                label="Weight"
                onChange={e => millet.setWeight(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <Typography style={grainHeader}>Rice</Typography>
            </div>
            <div style={entryStyles}>
              <Select
                style={{width: '60%'}}
                onChange={e => rice.setType(e.target.value)}>
                {Object.keys(constants.rice).map((elt, i) => (
                  <MenuItem value={elt} key={elt + i}>
                    {elt}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                style={{width: '30%'}}
                label="Weight"
                onChange={e => rice.setWeight(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <Typography style={grainHeader}>Rice hulls</Typography>
            </div>
            <div style={entryStyles}>
              <TextField
                style={{width: '30%'}}
                label="Weight"
                onChange={e => hull.setWeight(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default GrainEntry
