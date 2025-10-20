export interface UserData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export const validateUserData = (data: UserData) => {
  const { name, email, phone, password } = data;

  // Name
  if (!name) {
    return "Name is required(signup)";
  }

  const regex = /^[a-z0-9_-]{3,15}$/;
  if (!regex.test(name)) {
    return "Name must be 3-15 characters long and can only contain lowercase letters, numbers, _ or -";
  }

  // Email
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }

  // Phone
  const phoneRegex = /^[0-9]{10,15}$/;
  if (!phoneRegex.test(phone)) {
    return "Invalid phone number format";
  }

  // Password
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return "Password must be at least 8 characters, include uppercase, lowercase, number, and special character";
  }

  //  Passed all
  return null;
};

export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }
  return null;
};

export const validatePassword = (password: string): string | null => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return "Password must be at least 8 chars, include uppercase, lowercase, number, and special char";
  }
  return null;
};