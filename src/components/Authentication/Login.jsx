import React, { useRef, useState } from "react";
import { validate } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import Header from "../Header/Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    email.current.value = "";
    password.current.value = "";
  };
  const handleSignSubmit = () => {
    const enteredName = !isSignIn ? name.current.value : undefined;
    const error = validate(
      email.current.value,
      password.current.value,
      enteredName
    );
    setErrorMsg(error);
    if (error) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              email.current.value = "";
              password.current.value = "";
              name.current.value = "";
            })
            .catch((error) => {
              setErrorMsg(error);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          email.current.value = "";
          password.current.value = "";
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  };
  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-center items-center h-full">
        <div className="w-3/12 bg-black opacity-90 p-12 rounded-md">
          <form onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-white text-2xl font-bold mb-6">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h2>
            {!isSignIn && (
              <input
                type="text"
                ref={name}
                placeholder="Full Name"
                className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-white"
              />
            )}
            <input
              type="text"
              ref={email}
              placeholder="Email"
              className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-white"
            />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="w-full p-3 mb-3 rounded bg-gray-700 text-white placeholder-white"
            />
            {errorMsg && (
              <p className="font-bold text-red-800 text-xs py-3">{errorMsg}</p>
            )}
            <button
              onClick={handleSignSubmit}
              className="bg-red-700 w-full text-white py-3 mb-6 rounded cursor-pointer"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <h3
              className="mb-6 text-[16px] text-gray-400 cursor-pointer"
              onClick={toggleSignIn}
            >
              {isSignIn ? (
                <>
                  <span>New to Netflix?</span>
                  <span className="text-white">Sign Up now.</span>
                </>
              ) : (
                <>
                  <span>Already Registered?</span>
                  <span className="text-white">Sign In.</span>
                </>
              )}
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
