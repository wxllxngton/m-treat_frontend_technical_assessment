import asyncio
from user_service import UserService

# Example usage
async def main():
    user_service = UserService()
    await user_service.connect()

    # Create a new user
    new_user = await user_service.create_user(
        user_name="Robert",
        user_email="robert@craigie.dev",
        user_phone_no="123456789012",
        user_password="hashedpassword123",
    )
    print("Created User:", new_user)

    # Retrieve the user by ID
    user = await user_service.get_user_by_id(new_user.user_id)
    print("Retrieved User:", user)

    # Update the user's name
    updated_user = await user_service.update_user(new_user.user_id, user_name="Robert Craigie")
    print("Updated User:", updated_user)

    # Delete the user
    deleted_user = await user_service.delete_user(new_user.user_id)
    print("Deleted User:", deleted_user)

    await user_service.disconnect()


if __name__ == '__main__':
    asyncio.run(main())
