### M-TREAT Full-Stack Developer Takeaway Assessment

**Summary:**
This assessment evaluates your ability to build and integrate a patient registration and authentication system using React, Redux, Django, and PostgreSQL. You will create a simple, full-stack solution demonstrating data flow between the frontend and backend.

**Requirements:**
* Use React for the frontend, powered by Redux for state management.
* Implement a Django backend with a REST API to handle requests.
* Utilize PostgreSQL for database management.
* Ensure React is served by the Django server(No need to use React serve when the Django server is live).

**Tasks:**
1. Patient Registration:
   * Create a frontend form for patient registration (e.g., name, email, phone, password).
   * Send registration data to the Django backend and store it in the PostgreSQL database.
   * Validate input fields on both frontend and backend.
2. User Authentication:
   * Implement login functionality with token-based authentication using Django’s authentication framework.
   * Store and manage authentication tokens in Redux.
   * Ensure proper error handling for invalid credentials.
3. Patient Data Retrieval & Update:
  * After logging in, display patient information (e.g., name, email) on a
dashboard. Users can update other fields except email address.
  * Fetch data from the PostgreSQL database through the Django API.
