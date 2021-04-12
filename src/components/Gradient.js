import GradientTitle from "./GradientTitle"
import GradientCode from "./GradientCode"
import GradientPill from "./GradientPill"

const Gradient = ({ colorStart, colorEnd, name, tags }) => {
  return (
    <div className="card p-3 mb-4 shadow">
      <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
      <GradientTitle>{name}</GradientTitle>
      <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
    </div>

  )
}

export default Gradient
