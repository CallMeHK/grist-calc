import React from 'react'
import {GrainContext} from '../context/GrainContext'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'

const Calculator = () => {
  const {millet, rice, hull, total} = React.useContext(GrainContext)

  console.log({hullw: hull.weight})
  const zeroTotal = total.weight === 0
  const percentPan = zeroTotal
    ? 0
    : ((100 * total.totalPan) / total.weight).toFixed(2)

  const percent60 = zeroTotal
    ? 0
    : ((100 * total.total60) / total.weight).toFixed(2)
  const percent18 = zeroTotal
    ? 0
    : ((100 * total.total18) / total.weight).toFixed(2)
  const percent14 = zeroTotal
    ? 0
    : ((100 * total.total14) / total.weight).toFixed(2)
  return (
    <div style={{padding: 8}}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Grain</TableCell>
              <TableCell align="right">Pan</TableCell>
              <TableCell align="right">#60</TableCell>
              <TableCell align="right">#18</TableCell>
              <TableCell align="right">#14</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <>
              {millet.type && (
                <TableRow>
                  <TableCell component="th" scope="row">
                    Millet
                  </TableCell>
                  <TableCell align="right">
                    {millet.crush['Pan'].toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {millet.crush['#60'].toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {millet.crush['#18'].toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {millet.crush['#14'].toFixed(2)}
                  </TableCell>
                </TableRow>
              )}
            </>
            <>
              {rice.type && (
                <TableRow>
                  <TableCell component="th" scope="row">
                    Rice
                  </TableCell>
                  <TableCell align="right">
                    {rice.crush['Pan'].toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {rice.crush['#60'].toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {rice.crush['#18'].toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {rice.crush['#14'].toFixed(2)}
                  </TableCell>
                </TableRow>
              )}
            </>
            <>
              {hull.weight !== 0 && (
                <TableRow>
                  <TableCell component="th" scope="row">
                    Rice hulls
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">{hull.weight.toFixed(2)}</TableCell>
                </TableRow>
              )}
            </>
            <>
              <TableRow>
                <TableCell component="th" scope="row">
                  Combined grist (weight)
                </TableCell>
                <TableCell align="right">{total.totalPan.toFixed(2)}</TableCell>
                <TableCell align="right">{total.total60.toFixed(2)}</TableCell>
                <TableCell align="right">{total.total18.toFixed(2)}</TableCell>
                <TableCell align="right">{total.total14.toFixed(2)}</TableCell>
              </TableRow>
            </>
            <>
              <TableRow>
                <TableCell component="th" scope="row">
                  Combined grist (%)
                </TableCell>
                <TableCell align="right">{percentPan}</TableCell>
                <TableCell align="right">{percent60}</TableCell>
                <TableCell align="right">{percent18}</TableCell>
                <TableCell align="right">{percent14}</TableCell>
              </TableRow>
            </>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Calculator
