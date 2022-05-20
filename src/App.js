import logo from './img/bubble.svg';
import './App.css';

function App() {
  return (
    
  <div className="flex max-w-sm my-0 ms-auto p-6 rounded-lg bg-white shadow-xl">
    <div class="flex-shrink-0 "> 
     <img src={logo} className="w-14 h-14" alt="logo" />
    </div>
  <div class="ml-6 pt-l">
    <h4 class="text-gray-900 text-xl">ChitChat</h4>
    <p class="text-gray-500 text-base">You have a new message!</p>
  </div>
</div>

  );
}

export default App;
