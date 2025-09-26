import { account } from './appwrite';
import { ID } from 'appwrite';

export class AuthService {
  // Login user
  async login(email, password) {
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // Register user
  async register(email, password, name) {
    try {
      const user = await account.create(ID.unique(), email, password, name);
      // Auto login after registration
      await this.login(email, password);
      return user;
    } catch (error) {
      throw error;
    }
  }

  // Get current user
  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      return null;
    }
  }

  // Logout user
  async logout() {
    try {
      return await account.deleteSession('current');
    } catch (error) {
      throw error;
    }
  }

  // Password recovery
  async recoverPassword(email) {
    try {
      return await account.createRecovery(
        email,
        `${process.env.NEXT_PUBLIC_APP_URL}/reset-password`
      );
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;