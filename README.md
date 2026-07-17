# 🗺️ CamTrip - Cambodia Travel Guide & Planner

CamTrip is a modern, responsive travel guide and trip planner application for exploring Cambodia's provinces, temples, culture, and natural attractions. It features interactive province guides, an automated trip planner, budget estimation tools, and a wishlist system.

**🌐 Live Site:** [camtripfinal.vercel.app](https://camtripfinal.vercel.app/)

---

## 🚀 Key Features

* **Provinces & Attractions Directory:** In-depth detail pages for all major Cambodian provinces (Siem Reap, Phnom Penh, Kampot, etc.) with ratings, entrance fees, coordinates, and cultural notes.
* **Smart Trip Planner:** Design and customize travel itineraries with automatic scheduling, duration estimates, and Google Maps integration.
* **Budget Calculator:** Plan your vacation spending across categories like accommodation, food, transport, and entry tickets.
* **Personal Wishlist:** Save your favorite destinations and plan lists for future visits.
* **Fully Responsive UI:** Optimized layout built with Next.js, Tailwind CSS, and shadcn/ui components.

---

## 🏗️ Project Architecture

The project is designed with a **decoupled architecture**:
1. **Frontend:** Built with Next.js (React) and styled with Tailwind CSS, hosted on Vercel.
2. **Backend Headless CMS:** Built with Strapi CMS (located in the `my-cms/` folder) to manage dynamic collections (Provinces, Attractions, Wishlists).

---

## 🛠️ How to Run Locally

### 1. Run the Frontend (Next.js)

Navigate to the root directory and start the Next.js development server:

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 2. Run the Backend Headless CMS (Strapi)

Navigate to the `my-cms` directory and run the Strapi server:

```bash
cd my-cms

# Install dependencies
pnpm install

# Start in development mode
pnpm dev
```
Open the admin panel at [http://localhost:1337/admin](http://localhost:1337/admin) to manage your content.

> [!NOTE]
> Refer to [STRAPI_SETUP.md](STRAPI_SETUP.md) for full instructions on configuring Strapi collections, adding components, and connecting the backend API to the Next.js frontend.
