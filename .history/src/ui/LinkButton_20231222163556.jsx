import { Link } from 'react-router-dom';

function LinkButton({ children, to }) {
  return (
    <Link
      to="/menu"
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
    >
      &larr; Back to menu
    </Link>
  );
}

export default LinkButton;
