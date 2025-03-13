export class UserService {
    private users: Map<string, any> = new Map();

    createUser(userData: any) {
        const id = this.generateId();
        this.users.set(id, { id, ...userData });
        return this.users.get(id);
    }

    findUserById(id: string) {
        return this.users.get(id);
    }

    updateUser(id: string, userData: any) {
        if (this.users.has(id)) {
            const updatedUser = { ...this.users.get(id), ...userData };
            this.users.set(id, updatedUser);
            return updatedUser;
        }
        throw new Error('User not found');
    }

    deleteUser(id: string) {
        if (this.users.has(id)) {
            this.users.delete(id);
            return { message: 'User deleted successfully' };
        }
        throw new Error('User not found');
    }

    private generateId() {
        return Math.random().toString(36).substring(2, 11);
    }
}