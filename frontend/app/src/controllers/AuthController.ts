import { AuthModel } from '../models/AuthModel';
import { toast } from 'react-hot-toast';

interface Credentials {
    username: string;
    email: string;
    phone_no: string;
    password: string;
}

export class AuthController {
    private authModel: AuthModel;

    constructor() {
        this.authModel = new AuthModel();
    }

    async handleSignUpSubmit(credentials: Credentials) {
        try {
            const { result, error } = await this.authModel.signUp(credentials);
            console.log('Result: ', result);
            console.log('Error: ', error);

            if (error) {
                console.error('Error occurred during sign-up:', error);
                this.renderToast('error', `Sign-up failed: ${String(error)}`);
                return;
            }

            if (result) {
                console.log('User registered successfully!', result);
                this.renderToast('success', 'Sign-up successful!');
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(
                    'Unexpected error during sign-up:',
                    error.message
                );
                this.renderToast(
                    'error',
                    `An unexpected error occurred: ${error.message}`
                );
            } else {
                console.error('Unexpected non-Error during sign-up:', error);
                this.renderToast('error', 'An unexpected error occurred.');
            }
        }
    }

    async handleSignInSubmit(
        credentials: Pick<Credentials, 'email' | 'password'>
    ) {
        try {
            const { result, error } = await this.authModel.signIn(credentials);
            console.log('Result SIGNIN: ', result);
            console.log('Error SIGNIN: ', error);

            if (error) {
                console.error('Error occurred during sign-in:', error);
                this.renderToast('error', `Sign-in failed: ${String(error)}`);
                return false;
            }

            if (result) {
                console.log('User signed in successfully!', result);
                this.renderToast('success', 'Sign-in successful!');
                return true;
            }
        } catch (error: any) {
            console.error('Unexpected error during sign-in:', error.message);
            this.renderToast('error', 'An unexpected error occurred.');
        }
    }

    private renderToast(type: 'success' | 'error', message: string) {
        if (type === 'success') {
            toast.success(`${type.toUpperCase()}: ${message}`);
        } else if (type === 'error') {
            toast.error(`${type.toUpperCase()}: ${message}`);
        }
    }
}
