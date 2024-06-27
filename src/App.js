import ParticlesBg from 'particles-bg'
import ToDo from './containers/ToDo'

function App() {
    return (
        <>
            <ToDo />
            <ParticlesBg type="cobweb" bg={true} color="f6f6f6" num="80" />
        </>
      )
}

export default App;
