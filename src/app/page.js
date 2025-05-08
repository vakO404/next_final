"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLoginChange = () => {
    return setLogin(!login);
  };

  const checkIfUserExists = async () => {
    const result = await JSON.parse(localStorage.getItem("user"));

    if (result !== null) {
      router.replace("/products", { path: "products" });
    }
    // else{
    //   router.replace("/cart", {path : "cart"})
    // }
  };

  useEffect(() => {
    checkIfUserExists();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: "m38rmF$",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            localStorage.setItem("user", JSON.stringify(res.token));
            router.replace("/products", { path: "products" });
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignup = () => {
    try {
      fetch("https://fakestoreapi.com/users/1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          username,
          password,
          name: {
            firstname: "john",
            lastname: "doe",
          },
          address: {
            city: "kilcoole",
            street: "new road",
            number: 7682,
            zipcode: "12926-3874",
            geolocation: {
              lat: "-37.3159",
              long: "81.1496",
            },
          },
          phone: "1-570-236-7033",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.id) {
            localStorage.setItem("user", JSON.stringify(res.id)); 
            router.replace("/products");
          } else {
            alert("Signup failed");
          }
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.container} onSubmit={handleSubmit}>
        {login ? (
          <>
            <h3 className={styles.signin}>Sign In</h3>
            <p className={styles.desc}>please sign in to access market.</p>
            <input
              onChange={(event) => setUsername(event.target.value)}
              className={styles.input}
              placeholder="username"
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
              className={styles.input}
              type="password"
              placeholder="password"
            />
            <button className={styles.button} type="submit">
              Sign In
            </button>
            <button
              onClick={handleLoginChange}
              className={styles.notRegistered}
              type="button"
            >
              Not Registered? Sign up
            </button>
          </>
        ) : (
          <>
            <h3 className={styles.signin}>Sign Up</h3>
            <p className={styles.desc}>Create an account to join the market.</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="email"
            />
            <input
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              placeholder="username"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              type="password"
              placeholder="password"
            />
            <button className={styles.button} type="button" onClick={handleSignup}>
              Sign Up
            </button>
            <button
              onClick={handleLoginChange}
              className={styles.notRegistered}
              type="button"
            >
              Already have an account? Sign in
            </button>
          </>
        )}
      </form>
    </main>
  );
}
