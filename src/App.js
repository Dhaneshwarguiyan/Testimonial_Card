

import reviews from './data.js' ;
import Testimonials from './components/Testimonials.js';

function App() {
  return (
    <div className="app">
          <Testimonials details = {reviews}></Testimonials>
    </div>
  );
}

export default App;
