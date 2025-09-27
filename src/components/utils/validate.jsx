export const checkValidData = (email, password, userName) => {
  const validateEmail = String(email || "").trim();
  const validatePassword = String(password || "").trim();
  const validateUserName = String(userName || "").trim();

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  if (!validateEmail) return "Email is required";
  if (validateEmail.length < 3)
    return "Email must contain at least 3 characters";
  if (!isEmailValid) return "Email is not valid";

  if (!validatePassword) return "Password is required";
  if (validatePassword.length < 3)
    return "Password must contain at least 3 characters";

  {
    /**
    Username და Email უნიკალურობა მოწმდება ბექენდში, 
    წინასწარ მოცემულ API-ზე. არასწორი ან უკვე გამოყენებული მნიშვნელობის შეყვანის შემთხვევაში
     უნდა აჩვენოთ API-დან წამოსული შესაბამი შეტყობინება.
    
    */
  }

  {/**Avatar -ის ატვირთვის შემთხვევაში აპლიკაცია უნდა აჩვენებდეს მის პრევიუს (preview). */}

  return null;
};
