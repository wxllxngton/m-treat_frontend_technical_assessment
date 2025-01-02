-- Drop the existing database if it exists
DROP DATABASE IF EXISTS auth_database;

-- Create a new database
CREATE DATABASE auth_database;

-- Connect to the created database (Use this in psql; remove if running in a GUI or external tool)
\c auth_database;

-- Create the users table if it does not already exist
CREATE TABLE IF NOT EXISTS users (
    user_id TEXT PRIMARY KEY,                  -- Unique identifier for the user
    user_name TEXT NOT NULL,                   -- Name of the user
    user_email TEXT NOT NULL UNIQUE,           -- Email must be unique
    user_phone_no NUMERIC(12) NOT NULL,        -- 12-digit phone number
    user_password TEXT NOT NULL,               -- User's password (hashed in practice)
    created_at TIMESTAMP DEFAULT NOW(),        -- Record creation timestamp
    updated_at TIMESTAMP DEFAULT NOW()         -- Last update timestamp
);
