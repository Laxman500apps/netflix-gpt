import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../utils/userSlice";
import { useEffect } from "react";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  if (!user) {
    return (
      <div className="absolute px-16 py-2 w-80 bg-gradient-to-b from-black z-10">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
    );
  }

  return (
    <header className="fixed top-0 left-0 w-[100vw] bg-gradient-to-b from-black/90 px-16 py-3">
      <div className="flex items-center justify-between">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
          className="h-16"
        />
        <div>
          {user && (
            <span className="text-white font-bold text-xl mx-6">
              {user.displayName}
            </span>
          )}
          <button
            onClick={handleSignOut}
            className="px-2 py-1 text-white bg-red-600 hover:bg-red-700 text-lg font-semibold rounded shadow-md transition"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
