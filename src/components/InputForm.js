import React, { useState } from 'react'
import './styles.css'


const InputForm = ({data}) => {
    const [label, setLabel] = useState('')
    const [dataset, setDataset] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        data.labels.push(label)
        data.datasets[0].data.push(dataset)
        setLabel('')
        setDataset(0)
    }

    const deleteData = (e) => {
        e.preventDefault();
        data.labels.pop(label)
        data.datasets[0].data.pop(dataset)
        setLabel('')
        setDataset(0)
    }
    

    return (
        <>

    <form className="form" onSubmit={handleSubmit}>
        <div className="subtitle">Shto Nje Pik</div>
        <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " required value={label} onChange={(e) => setLabel(e.target.value)} />
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder">Emri i Pikes</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="number" placeholder=" " required value={dataset} onChange={(e) => setDataset(e.target.value)} />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">Te Dhenat</label>
      </div>
      <button type="text" className="submit">Shto</button>
      <button type='text' className='submit' onClick={deleteData}>Hiq</button>
    </form>

    </>
  )
}

export default InputForm