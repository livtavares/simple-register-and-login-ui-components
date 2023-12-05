import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const handleLogin = (username: string, password: string) => {
    // Add your login authentication logic here
    console.log('Logging in with:', { username, password });
  };

  const handleRegister = (username: string, email: string, password: string) => {
    // Add your registration logic here
    console.log('Registering with:', { username, email, password });
  };

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="register" element={<Register onRegister={handleRegister} />} />
        </Routes>
    </Router>
  );
}

export default App;
