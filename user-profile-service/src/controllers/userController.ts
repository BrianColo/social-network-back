import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { User,ResServiceDto } from '../types/index';
import { UserService } from '../services/userService';

export class UserController {
    constructor(private userService: UserService) {}

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const userData = req.body;
            const user: User = await this.userService.createUser(userData);
            const token: string = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
            res.status(201).json({ user, token });
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async getUser(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.params.id;
            const user = await this.userService.findUserById(userId);
            if (!user) {
                res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const userData = req.body;
            const updatedUser = await this.userService.updateUser(userId, userData);
            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const deletedUser = await this.userService.deleteUser(userId);
            if (!deletedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }
}