import React from 'react'
import { useParams } from 'react-router'

function Params() {
    const param = useParams()

  return (
    <div>Params{param.id}</div>
  )
}

export default Params