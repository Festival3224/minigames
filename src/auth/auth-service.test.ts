import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

import {
  loginWithEmailAndPassword,
  loginWithGoogle,
  registerWithEmailAndPassword,
  sendPasswordReset,
} from './auth-service';

vi.mock('./firebase', () => ({
  auth: {
    currentUser: undefined,
  },
}));

vi.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: vi.fn(),
  GoogleAuthProvider: vi.fn(),
  sendPasswordResetEmail: vi.fn(),
  signInWithEmailAndPassword: vi.fn(),
  signInWithPopup: vi.fn(),
  updateProfile: vi.fn(),
}));

describe('auth service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('loginWithEmailAndPassword', () => {
    it('returns the authenticated Firebase user', async () => {
      const user = {
        uid: 'user-1',
        email: 'student@rs.school',
      };

      vi.mocked(signInWithEmailAndPassword).mockResolvedValue({
        user,
      } as never);

      const result = await loginWithEmailAndPassword('student@rs.school', 'secret123');

      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        expect.anything(),
        'student@rs.school',
        'secret123',
      );

      expect(result).toBe(user);
    });

    it('propagates Firebase login errors', async () => {
      vi.mocked(signInWithEmailAndPassword).mockRejectedValue(new Error('Firebase login failed'));

      await expect(
        loginWithEmailAndPassword('student@rs.school', 'wrong-password'),
      ).rejects.toThrow('Firebase login failed');
    });
  });

  describe('registerWithEmailAndPassword', () => {
    it('creates the user, updates displayName, and returns the user', async () => {
      const user = {
        uid: 'user-2',
        email: 'new@rs.school',
      };

      vi.mocked(createUserWithEmailAndPassword).mockResolvedValue({
        user,
      } as never);

      vi.mocked(updateProfile).mockResolvedValue(undefined);

      const result = await registerWithEmailAndPassword('new@rs.school', 'secret123', 'NewPlayer');

      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        expect.anything(),
        'new@rs.school',
        'secret123',
      );

      expect(updateProfile).toHaveBeenCalledWith(user, {
        displayName: 'NewPlayer',
      });

      expect(result).toBe(user);
    });

    it('propagates Firebase registration errors', async () => {
      vi.mocked(createUserWithEmailAndPassword).mockRejectedValue(new Error('Registration failed'));

      await expect(
        registerWithEmailAndPassword('new@rs.school', 'secret123', 'NewPlayer'),
      ).rejects.toThrow('Registration failed');

      expect(updateProfile).not.toHaveBeenCalled();
    });

    it('propagates profile update errors', async () => {
      const user = {
        uid: 'user-3',
        email: 'profile@rs.school',
      };

      vi.mocked(createUserWithEmailAndPassword).mockResolvedValue({
        user,
      } as never);

      vi.mocked(updateProfile).mockRejectedValue(new Error('Profile update failed'));

      await expect(
        registerWithEmailAndPassword('profile@rs.school', 'secret123', 'ProfileUser'),
      ).rejects.toThrow('Profile update failed');
    });
  });

  describe('sendPasswordReset', () => {
    it('calls Firebase password reset with the email', async () => {
      vi.mocked(sendPasswordResetEmail).mockResolvedValue(undefined);

      await sendPasswordReset('student@rs.school');

      expect(sendPasswordResetEmail).toHaveBeenCalledWith(expect.anything(), 'student@rs.school');
    });

    it('propagates password reset errors', async () => {
      vi.mocked(sendPasswordResetEmail).mockRejectedValue(new Error('Reset failed'));

      await expect(sendPasswordReset('student@rs.school')).rejects.toThrow('Reset failed');
    });
  });

  describe('loginWithGoogle', () => {
    it('returns the user from Google sign-in', async () => {
      const user = {
        uid: 'google-user',
        email: 'google@gmail.com',
        displayName: 'Google User',
      };

      vi.mocked(signInWithPopup).mockResolvedValue({
        user,
      } as never);

      const result = await loginWithGoogle();

      expect(signInWithPopup).toHaveBeenCalledWith(
        expect.anything(),
        expect.any(GoogleAuthProvider),
      );

      expect(result).toBe(user);
    });

    it('propagates Google sign-in errors', async () => {
      vi.mocked(signInWithPopup).mockRejectedValue(new Error('Google sign-in failed'));

      await expect(loginWithGoogle()).rejects.toThrow('Google sign-in failed');
    });
  });
});
