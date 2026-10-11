export type ValidationResult = {
  isValid: boolean;
  error: string;
};

const validResult: ValidationResult = {
  isValid: true,
  error: '',
};

export const validateEmail = (email: string): ValidationResult => {
  if (!email) {
    return {
      isValid: false,
      error: 'Email is required.',
    };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email)
    ? validResult
    : {
        isValid: false,
        error: 'Enter a valid email address.',
      };
};

export const validateUsername = (username: string): ValidationResult => {
  //   const value = username.trim();

  if (!username) {
    return {
      isValid: false,
      error: 'Username is required.',
    };
  }

  if (username.length < 2 || username.length > 30) {
    return {
      isValid: false,
      error: 'Username must be between 2 and 30 characters.',
    };
  }

  if (!/^[A-Z]/.test(username)) {
    return {
      isValid: false,
      error: 'Username must start with an uppercase English letter.',
    };
  }

  return /^[A-Za-z0-9]+$/.test(username)
    ? validResult
    : {
        isValid: false,
        error: 'Username may contain English letters and digits only.',
      };
};

export const validateRegistrationPassword = (password: string): ValidationResult => {
  if (!password) {
    return {
      isValid: false,
      error: 'Password is required.',
    };
  }

  if (password.length < 6) {
    return {
      isValid: false,
      error: 'Password must contain at least 6 characters.',
    };
  }

  if (!/^[\u{21}-\u{7E}]+$/u.test(password)) {
    return {
      isValid: false,
      error: 'Password may contain English letters, digits, and special characters only.',
    };
  }

  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      error: 'Password must contain at least one uppercase English letter.',
    };
  }

  if (!/\d/.test(password)) {
    return {
      isValid: false,
      error: 'Password must contain at least one digit.',
    };
  }

  return /[^A-Za-z0-9]/.test(password)
    ? validResult
    : {
        isValid: false,
        error: 'Password must contain at least one special character.',
      };
};

export const validateLoginPassword = (password: string): ValidationResult => {
  if (!password) {
    return {
      isValid: false,
      error: 'Password is required.',
    };
  }

  return password.length < 6
    ? {
        isValid: false,
        error: 'Password must contain at least 6 characters.',
      }
    : validResult;
};

export const validatePasswordConfirmation = (
  password: string,
  confirmation: string,
): ValidationResult => {
  if (!confirmation) {
    return {
      isValid: false,
      error: 'Password confirmation is required.',
    };
  }

  return confirmation === password
    ? validResult
    : {
        isValid: false,
        error: 'Passwords do not match.',
      };
};
