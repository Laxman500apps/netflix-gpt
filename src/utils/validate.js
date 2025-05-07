export const validate = (email, password, name) => {
  const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/.test(
      password
    );

  if (!validateEmail) return "Email is not valid";
  if (!validatePassword)
    return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character ";
  if (name !== undefined && !/^.{4,}$/.test(name.trim())) {
    return "Name must be longer than 3 characters";
  }
  return null;
};
