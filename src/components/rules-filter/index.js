import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const RulesFilter = ({onFilter}) => {

  const [id, setId] = useState(undefined)
  const [name, setName] = useState('')

  // const [state, setState] = useState({
  //   id: undefined,
  //   name: '',
  //   ruleType: [],
  //   description
  // })

  return (
    <form>
      <input type="text"
        onChange={(e) => setId(e.target.value)}
      />

      <input type="text"
        onChange={(e) => setName(e.target.value)}
      />


      <button onClick={onFilter({id, name})}></button>
    </form>
  )
}

RulesFilter.props = {
  onFilter: PropTypes.func
}

export default RulesFilter