export const checkValidData = ({ email, password, confirmPassword, userName }) => {
  const errors = {};

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  //უნდა იტოს უნიკალური

  if (!email) {
    errors.email = "Email is required";
  } else if (email.trim().length < 3) {
    errors.email = "Email must contain at least 3 characters";
  } else if (!isEmailValid) {
    errors.email = "Invalid email format";
  }

  if(!password){
    errors.password = "Password can't be empty"
  }else if(password.trim().length < 3){
    errors.password = "Password must be at least 3 characters"
  }


  // უნდა იყოს უნიკალური
  if(!userName){
    errors.userName = "Username can't be empty"
  }else if(userName.trim().length < 3){
    errors.userName = "Username must be at least 3 characters";
  }

  if(confirmPassword !== password){
    errors.confirmPassword = "Password is not matching"
  }

  {
    /**
    Username და Email უნიკალურობა მოწმდება ბექენდში, 
    წინასწარ მოცემულ API-ზე. არასწორი ან უკვე გამოყენებული მნიშვნელობის შეყვანის შემთხვევაში
     უნდა აჩვენოთ API-დან წამოსული შესაბამი შეტყობინება.
    
    */
  }

  {
    /**Avatar -ის ატვირთვის შემთხვევაში აპლიკაცია უნდა აჩვენებდეს მის პრევიუს (preview). */
  }

  return Object.keys(errors).length > 0 ? errors : null;
};
