export const validateUserName = (name: string): string | null => {
    if (!name) return "Name is required";
    const regex = /^[a-z0-9_-]{3,15}$/;
    if (!regex.test(name)) return "Name must be 3-15 chars, lowercase letters, numbers, _ or -";
    return null;
  };
  
  export const validateUserEmail = (email: string): string | null => {
    if (!email) return "Email is required";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return "Invalid email format";
    return null;
  };
  
  export const validateUserPhone = (phone: string): string | null => {
    if (!phone) return "Phone is required";
    const regex = /^[0-9]{10,15}$/;
    if (!regex.test(phone)) return "Phone must be 10-15 digits";
    return null;
  };
  
  export const validateUserPassword = (password: string): string | null => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return null;
  };
  

  export const validateUserData  = (data: { name: string, email: string, phone: string, password: string }): string | null => {
    return (
      validateUserName(data.name) ||
      validateUserEmail(data.email) ||
      validateUserPhone(data.phone) ||
      validateUserPassword(data.password)
    );
  };
  