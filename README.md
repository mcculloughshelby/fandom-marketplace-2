# Fan Trove — C2C Fandom Merch Marketplace

A full-stack Consumer-to-Consumer (C2C) web app for buying and selling fandom merchandise, built with **Next.js (App Router)** and **Neon Postgres** database.

---

## Features

- User authentication and profile creation
- Buy/sell posts (listings) with images, prices, and descriptions
- Shopping cart and checkout system
- Admin panel for managing users and posts
- View all user profiles
- Themed for movie, TV, and pop culture fandoms
- Built-in chatbot (Ryan Atwood sarcasm included)
- Custom OC color palette (California vibes!)

---

## Tech Stack

- **Frontend:** Next.js 14+, Tailwind CSS, FontAwesome icons
- **Backend:** Node.js/Express.js (if using API endpoints)
- **Database:** Neon (hosted PostgreSQL)
- **Image Storage:** External image URLs (can be extended for file upload)
- **Chatbot:** Google Gemini API (optional)

---

## Getting Started

### 1. **Clone the Repository**

```sh
git clone https://github.com/your-username/fan-trove.git
cd fan-trove

```
----
## 2. Install dependencies 

npm install

----

## 3. Set Up Environment Variables

create an .env file in the root directory with 
DATABASE_URL="postgresql://neondb_owner:npg_OW6V9eJqQlLT@ep-hidden-voice-a4geuyqd-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"
GEMINI_API_KEY="AIzaSyCme3Bngh2_o0rH2Xa_nwIRaR4NZGe9qDM"

----
## 4: Run the development server
npm run dev
http://localhost:3000 will pull it up

----
Project Structure

/app                # Next.js app directory (pages, components)
/app/admin          # Admin panel
/app/cart           # Cart page
/app/createlisting  # Create a listing
/app/createprofile  # Create a user profile
/app/otherprofiles  # View all user profiles
/app/posts          # View all posts (listings)
...
/lib/db.js          # Postgres pool config


----
Database Schema

users: id, username, email, passsword
posts: id, title, price, descriptin, image_url, user_id
cart: id, user_id, post_id


----
Customization 

Colors/Themes: The O.C. inspired using Tailwind
Fandom Icons: FontAwesome
Image Hosting: Any image URLs - unless they're amazon. then it gets a little janky

-----
Notes

Admin Features are protected by user role - admin
Cart and listing pages query Neon directly for the most up to date info.

-----
Credits
Coded by Shelby Marie McCullough
For CIS 498 - Dr. Farha Ali
Special thanks to the shows that i watched while coding this project.


