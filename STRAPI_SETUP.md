# Strapi Backend Setup Guide

## Step 1: Create Strapi Backend

1. **Create Strapi project in parent directory:**
```bash
cd c:\Users\User\wctFinal2
npx create-strapi-app@latest camtrip-backend --quickstart
```

2. **Navigate to Strapi admin panel:**
   - After installation, Strapi will open at `http://localhost:1337/admin`
   - Create your admin account

## Step 2: Configure Environment Variables

1. **Create `.env.local` in your Next.js project:**
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

2. **Update Strapi database (optional - for production):**
   - Default SQLite works for development
   - For production, configure PostgreSQL/MySQL in Strapi's `.env`

## Step 3: Create Content Types in Strapi

### A. Create Components First

1. **Go to Content-Types Builder > Components**
2. **Create "visitor" category > "info" component:**
   - `openingHours` (Text)
   - `entryFee` (Text)
   - `bestTime` (Text)
   - `duration` (Text)

3. **Create "location" category > "coordinates" component:**
   - `lat` (Number - Decimal)
   - `lng` (Number - Decimal)

### B. Create Collection Types

1. **Create "Province" collection type:**
   - `name` (Text - Required, Unique)
   - `description` (Rich Text - Required)
   - `featured` (Boolean - Default: false)
   - `image` (Media - Single Image)

2. **Create "Attraction" collection type:**
   - `name` (Text - Required)
   - `description` (Rich Text - Required)
   - `category` (Enumeration: temple, museum, nature, shopping, cultural, adventure)
   - `rating` (Number - Decimal, Min: 0, Max: 5)
   - `featured` (Boolean - Default: false)
   - `culturalInfo` (Rich Text)
   - `image` (Media - Single Image)
   - `visitorInfo` (Component - visitor.info)
   - `coordinates` (Component - location.coordinates)
   - `province` (Relation - Many to One with Province)

3. **Create "Wishlist" collection type:**
   - `user` (Relation - Many to One with User)
   - `attraction` (Relation - Many to One with Attraction)
   - `province` (Relation - Many to One with Province)

## Step 4: Configure Permissions

1. **Go to Settings > Roles > Public:**
   - Enable `find` and `findOne` for Province and Attraction
   - Enable `find` for Media (to serve images)

2. **Go to Settings > Roles > Authenticated:**
   - Enable all permissions for Wishlist
   - Enable `find` and `findOne` for Province and Attraction
   - Enable `find` for Media

## Step 5: Upload Images

1. **Go to Media Library**
2. **Upload all images from `public/images/` folder**
3. **Organize into folders: provinces, attractions**

## Step 6: Import Data

1. **Go to Content Manager**
2. **Create Provinces manually or use import plugin**
3. **Create Attractions and link to provinces**
4. **Assign uploaded images to each entry**

## Step 7: Test API Endpoints

Test these URLs in your browser:
- `http://localhost:1337/api/provinces?populate=*`
- `http://localhost:1337/api/attractions?populate=*`

## Step 8: Update Next.js Frontend

1. **Replace AuthModals component:**
```jsx
// In your component that uses AuthModals
import AuthModals from '../components/AuthModalsStrapi'
```

2. **Update components to use API data instead of static data**

## Production Deployment

1. **Deploy Strapi to:**
   - Railway, Heroku, DigitalOcean, or AWS
   - Configure production database (PostgreSQL recommended)
   - Set up media storage (Cloudinary, AWS S3)

2. **Update environment variables:**
```env
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-domain.com
```

## Troubleshooting

- **CORS Issues:** Configure CORS in Strapi settings
- **Image Loading:** Ensure media permissions are set correctly
- **Authentication:** Check JWT settings in Strapi plugins
