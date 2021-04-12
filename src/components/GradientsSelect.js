import {uniqueTags} from "../gradients.js"

const GradientsSelect = () => {
  return (<div className="input-group mb-3">
  <label className="input-group-text" htmlFor="select">Filtrer par Tag</label>
  <select className="form-select" id="select">
  <option value="Tous">Tous</option>
  {uniqueTags.map((el) => {
    return (<option value={el}>{el}</option>)
  })}
  </select>
  </div>
  )
}

export default GradientsSelect