import { Navigate } from 'react-router-dom';

function decodeJwt(token) {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token || !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  const decoded = decodeJwt(token);
  if (!decoded || (decoded.exp && decoded.exp * 1000 < Date.now())) {
    localStorage.clear();
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;