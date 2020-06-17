import React from 'react'
import {Container, CssBaseline} from '@material-ui/core'
import Calculator from './components/Calculator'
import GrainEntry from './components/GrainEntry'
import GrainContextProvider from './context/GrainContext'
import './styles.css'

export default function App() {
  return (
    <>
      <CssBaseline />
      <GrainContextProvider>
        <Container maxWidth="sm">
          <GrainEntry />
          <Calculator />
        </Container>
      </GrainContextProvider>
    </>
  )
}
