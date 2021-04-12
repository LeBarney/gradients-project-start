import Gradient from "./Gradient"

const GradientsList = (props) => {
  const { gradients } = props
  return (
    <ul className="row list-unstyled">
      {gradients.map((el) => (
        <li className="col-lg-3 col-md-4 col-sm-6" key={el.name}>
          <Gradient
            colorStart={el.start}
            colorEnd={el.end}
            name={el.name}
            tags={el.tags}
          />
        </li>
      ))}
    </ul>
  )
}

export default GradientsList
