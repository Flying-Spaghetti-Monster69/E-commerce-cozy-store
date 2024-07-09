import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/userStore";
import { useCartStore } from "../stores/cartStore";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useUserStore();
  const { clearCart } = useCartStore();

  const handleLogout = () => {
    navigate("/");
    clearCart();
    logoutUser();
    toast.success("successfully logged out");
  };

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              type="button"
              className="btn btn-xs btn-outline btn-primary"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest account
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Create account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
