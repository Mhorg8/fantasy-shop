import bcrypt from "bcryptjs";

export const validatePassword = async (
  password: string,
  confirmPassword: string
): Promise<string | null> => {
  const REGEX = /^(?=.*[a-zA-Z]).{8,}$/;

  // Check if passwords match
  if (password !== confirmPassword) {
    throw new Error("Passwords do not match.");
  }

  // Validate password format
  if (!REGEX.test(password)) {
    throw new Error(
      "Password must be at least 8 characters long and include at least one letter."
    );
  }

  // Hash and return the password
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};
