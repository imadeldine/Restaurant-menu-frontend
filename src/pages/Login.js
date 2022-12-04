import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/users/login", login);
            localStorage.setItem("token", response.data.token);
            navigate("/items");
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <div
      class="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700"
    >
      <form class="p-10 bg-white rounded-xl drop-shadow-lg space-y-5" action="">
        <h1 class="text-center text-3xl">Delicioz</h1>
        <div class="flex flex-col space-y-2">
          <label class="text-sm font-light" for="email">
            Email
          </label>
          <input
            class="w-96 px-3 py-2 rounded-md border border-slate-400"
            type="email"
            placeholder="Your Email"
            name="email"
            id="email"
            onChange={(e) =>
                setLogin({ ...login, email: e.target.value })
            }
          />
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm font-light" for="password">
            Password
          </label>
          <input
            class="w-96 px-3 py-2 rounded-md border border-slate-400"
            type="password"
            placeholder="Your Password"
            name="password"
            id="password"
            onChange={(e) =>
                setLogin({ ...login, password: e.target.value })
            }
          />
        </div>

        <div></div>

        <button
            class="w-96 px-3 py-2 rounded-md bg-purple-700 text-white"
            onClick={handleLogin}
            >
            Login
        </button>
      </form>
    </div>
  );
};

export default Login;
