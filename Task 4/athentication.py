import hashlib

users = {}

def register():
    username = input("Enter your username: ")
    if username in users:
        print("Username already exists. Please choose a different one.")
        return

    password = input("Enter your password: ")
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    users[username] = hashed_password
    print("Registration successful!")

def login():
    username = input("Enter your username: ")
    password = input("Enter your password: ")
    
    if username not in users:
        print("Username not found. Please register.")
        return

    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    if users[username] == hashed_password:
        print("Login successful! Welcome, " + username + "!")
        access_secured_page()
    else:
        print("Incorrect password.")

def access_secured_page():
    print("Welcome to the secured page!")
    print("This is some top-secret content.")

def main():
    while True:
        print("\n1. Register\n2. Login\n3. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            register()
        elif choice == '2':
            login()
        elif choice == '3':
            print("Exiting program. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
