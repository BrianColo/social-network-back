export class PostService {
    private posts: any[] = []; // This will hold the posts in memory for demonstration purposes

    createPost(postData: any) {
        const newPost = { id: this.posts.length + 1, ...postData };
        this.posts.push(newPost);
        return newPost;
    }

    findPostById(postId: number) {
        return this.posts.find(post => post.id === postId);
    }

    updatePost(postId: number, updatedData: any) {
        const postIndex = this.posts.findIndex(post => post.id === postId);
        if (postIndex === -1) {
            throw new Error('Post not found');
        }
        this.posts[postIndex] = { ...this.posts[postIndex], ...updatedData };
        return this.posts[postIndex];
    }

    deletePost(postId: number) {
        const postIndex = this.posts.findIndex(post => post.id === postId);
        if (postIndex === -1) {
            throw new Error('Post not found');
        }
        const deletedPost = this.posts.splice(postIndex, 1);
        return deletedPost[0];
    }
}