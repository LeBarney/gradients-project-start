import GradientsList from "./GradientsList"
import { gradients } from "./../gradients"

const GradientsApp = () => {
  return (

    <main className="container">
      <h1 className="text-center my-4">Alyra Gradients</h1>

      <GradientsList gradients={gradients} />
    </main>
  )
}

export default GradientsApp