import logo from './img/bubble.svg';
import './App.css';

function App() {
  return (
  <div className="flex max-w-sm my-0 ms-auto p-6 rounded-lg bg-white shadow-xl">
    <div class="chat-notification-logo-wrapper">
     <img src={logo} className="w-14 h-14" alt="logo" />
    </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>
  );
}

export default App;
