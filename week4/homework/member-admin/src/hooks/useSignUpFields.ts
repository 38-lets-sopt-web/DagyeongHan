import { useState } from "react";

export default function useSignUpFields() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [part, setPart] = useState("");

  return {
    id,
    password,
    passwordConfirm,
    name,
    email,
    age,
    part,
    setId,
    setPassword,
    setPasswordConfirm,
    setName,
    setEmail,
    setAge,
    setPart,
  };
}
