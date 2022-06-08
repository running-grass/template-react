import { Button } from "@material-tailwind/react"
import Icon from "@mdi/react"
import { mdiPlus } from "@mdi/js";

function App() {

  return (
    <div className="App">
      <header className="text-3xl font-bold underline">
        hello, this is a react app.

        <Button>
          <Icon path={mdiPlus}></Icon>
          ok!
        </Button>

        <i className="fas fa-heart"></i>
      </header>
    </div>
  )
}

export default App
