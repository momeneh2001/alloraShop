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
      return "Name is required";
    }
    
    const regex = /^[a-z0-9_-]{3,15}$/;
    if (!regex.test(name)) {
      return "Name must be 3-15 characters long and can only contain lowercase letters, numbers, _ or -";
    }
  
    // Email
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return "ایمیل وارد شده معتبر نیست.";
    }
  
    // Phone
    const phoneRegex = /^09\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return "شماره موبایل معتبر نیست.";
    }
  
    // Password
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return "رمز عبور باید حداقل ۸ کاراکتر و شامل حروف بزرگ، کوچک، عدد و کاراکتر خاص باشد.";
    }
  
    //  Passed all
    return null;
  };
  