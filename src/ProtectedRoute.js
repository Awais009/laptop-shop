import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation(); // Get the current location

  if (!sessionStorage.getItem('token')) {
    // Redirect to the previous page or login
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children; // Render the protected content if token exists
};

export default ProtectedRoute