import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar.js"


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
    <Navbar />
    <main className="container mx-auto px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to AMBIDEX</h1>
        <p className="text-xl text-gray-600">Your content goes here...</p>
      </div>
    </main>
  </div>
  );
}

export default App;
