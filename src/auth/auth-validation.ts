export type ValidationResult = {
  isValid: boolean;
  error: string;
};

const validResult: ValidationResult = {
  isValid: true,
  error: '',
};

export const validateEmail = (email: string): ValidationResult => {
  const value = email.trim();

  if (!value) {
    return {
      isValid: false,
      error: 'Email is required.',
    };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(value)
    ? validResult
    : {
        isValid: false,
        error: 'Enter a valid email address.',
      };
};

export const validateUsername = (username: string): ValidationResult => {
  const value = username.trim();

  if (!value) {
    return {
      isValid: false,
      error: 'Username is required.',
    };
  }

  if (value.length < 2 || value.length > 30) {
    return {
      isValid: false,
      error: 'Username must be between 2 and 30 characters.',
    };
  }

  if (!/^[A-Z]/.test(value)) {
    return {
      isValid: false,
      error: 'Username must start with an uppercase English letter.',
    };
  }

  return /^[A-Za-z0-9]+$/.test(value)
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
