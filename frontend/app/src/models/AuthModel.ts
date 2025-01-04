interface Credentials {
    username: string;
    email: string;
    phone_no: string;
    password: string;
}

interface APIResponse {
    result: any | null; // The actual response data or null
    error: string | null; // The error message (if any)
}

export class AuthModel {
    private baseUrl: string;
    private signUpUrl: string;
    private signInUrl: string;

    constructor() {
        this.baseUrl = 'http://localhost:8000/api/v1/auth';
        this.signUpUrl = `${this.baseUrl}/register/`;
        this.signInUrl = `${this.baseUrl}/login/`;
    }

    async signUp(credentials: Credentials): Promise<APIResponse> {
        try {
            // Validate mandatory fields before sending the request
            if (!credentials.username || !credentials.phone_no) {
                throw new Error(
                    'Username and phone number are required for sign-up.'
                );
            }

            // Parse phone_no to its correct format
            credentials.phone_no = credentials.phone_no.replace(/-/g, '');

            console.log('Credentials: ', credentials);

            const response = await fetch(this.signUpUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (response.status === 201) {
                const result = await response.json();
                return { result, error: null };
            } else if (response.status === 400) {
                const errorData = await response.json();
                return {
                    result: null,
                    error: this.parseValidationErrors(errorData),
                };
            }

            return { result: null, error: 'An unknown error occurred.' };
        } catch (error: any) {
            return { result: null, error: error.message };
        }
    }

    async signIn(
        credentials: Pick<Credentials, 'email' | 'password'>
    ): Promise<APIResponse> {
        try {
            // Validate mandatory fields before sending the request
            if (!credentials.email || !credentials.password) {
                throw new Error('Email and password are required for sign-in.');
            }

            const response = await fetch(this.signInUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (response.status === 200) {
                const result = await response.json();
                return { result, error: null }; // Contains refresh and access tokens
            } else if (response.status === 400) {
                const errorData = await response.json();
                return {
                    result: null,
                    error: this.parseValidationErrors(errorData),
                };
            } else if (response.status === 401) {
                const errorData = await response.json();
                return {
                    result: null,
                    error: errorData.detail || 'Invalid credentials',
                };
            }

            return { result: null, error: 'An unknown error occurred.' };
        } catch (error: any) {
            return { result: null, error: error.message };
        }
    }

    /**
     * Parses field-specific validation errors returned by the API
     * Example response:
     * {
     *   "email": ["This field is required."],
     *   "password": ["This password is too short."]
     * }
     */
    private parseValidationErrors(errors: Record<string, string[]>): string {
        if (typeof errors === 'object' && errors !== null) {
            return Object.entries(errors)
                .map(([field, messages]) => {
                    // Ensure messages is an array of strings
                    if (Array.isArray(messages)) {
                        return `${field}: ${messages.join(', ')}`;
                    }
                    return `${field}: Invalid error format`;
                })
                .join('; ');
        }
        return 'Validation error occurred.';
    }
}
