export const registerUser = async (formData) => {
  const response = await fetch(
    "https://api.redseam.redberryinternship.ge/api/register",
    {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    }
  );
    return response;
};

export const loginUser = async (email, password) => {
  const response = await fetch(
    "https://api.redseam.redberryinternship.ge/api/login",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
    return response;
};
