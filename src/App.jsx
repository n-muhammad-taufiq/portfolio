import Projects from '../pages/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Education from '../components/Education';
import Resume from '../components/Resume';
import HireMe from '../components/HireMe';
import Introduction from '../components/Introduction';
function App() {

return (
    <div className='flex w-full flex-col px-5 pt-20 gap-y-15 max-md:gap-y-10 montserrat'>
    <Introduction></Introduction>
    <Skills></Skills>
    <About></About>
    <Education></Education>
    <Resume></Resume>
    <Projects></Projects>
    <HireMe></HireMe>
    </div>
)
}

export default App
