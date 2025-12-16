<div align="center">
  <img src="media/logo.png" alt="BE Endless 3D Studio Logo" width="200" />
  <h1>BE Endless 3D Studio</h1>
  <p><strong>Premium 3D Printing & Customization E-Commerce Platform</strong></p>
</div>

---

Overview

**BE Endless 3D Studio** is a modern, high-performance e-commerce web application designed for a premium 3D printing service. It allows users to browse a curated catalog of 3D printed products, request custom designs, and learn about additive manufacturing.

The platform focuses on a sleek, "wow-factor" user experience with smooth animations, interactive elements, and a clean, sophisticated aesthetic.

 Key Features

 E-Commerce Experience
1.  **Product Catalog**: Browse products by category with advanced filtering and sorting.
2.  **Product Details**: Rich product pages with dual-image sliders, detailed descriptions, and related products.
3.  **Cart & Checkout**: Seamless shopping cart management and a streamlined checkout process.
4.  **Wishlist**: Save favorite items for later.

 Advanced Customization
1.  **Upload Model**: Users can upload their own `.stl` or `.obj` files for printing.
2.  **Design Idea**: Submit sketches or reference images for custom modeling services.
3.  **Prebuilt Customization**: Request modifications to existing catalog items.
4.  **Smart Validation**: Real-time validation for required fields to ensure accurate requests.
5.  **Interactive Feedback**: Confirmation modals with context-specific messages upon successful submission.
6.  **Instant Quotes**: (Simulated) Quick cost estimation based on material and volume.

 User Features
1.  **Authentication**: Secure Login and Registration functionality.
2.  **User Dashboard**: Manage profile, view order history, and track customization requests.

Content & Engagement
1.  **Blogs**: Educational articles about 3D printing technology and trends.
2.  **FAQ**: Comprehensive help section with category-based navigation.
3.  **About Us**: Immersive company story with visual storytelling.
4.  **Contact**: Easy-to-use contact form and location information.

 Tech Stack

1.  **Frontend Framework**: [React](https://reactjs.org/) (v18)
2.  **Build Tool**: [Vite](https://vitejs.dev/)
3.  **Language**: [TypeScript](https://www.typescriptlang.org/)
4.  **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS
5.  **Routing**: [React Router DOM](https://reactrouter.com/)
6.  **Icons**: [Lucide React](https://lucide.dev/)
7.  **Animations**: Custom CSS animations & Scroll-triggered effects
8.  **Carousel**: React Slick

 Getting Started

Follow these steps to set up the project locally.

 Prerequisites

1.  **Node.js** (v16 or higher)
2.  **npm** or **yarn**

Installation

1.  **Install dependencies**
    ```bash
    npm install
    ```

2.  **Run the Development Server**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173` (or the port shown in your terminal).

Project Structure

```
be-endless-3d-studio/
├── components/       # Reusable UI components (Header, Footer, ProductCard, etc.)
├── pages/            # Main page views (Home, Shop, Customization, etc.)
├── context/          # React Context for global state (Cart, User, etc.)
├── media/            # Static assets (images, logos)
├── libs/             # Utility functions and helpers
├── constants.ts      # Global constants and mock data
├── App.tsx           # Main application component with routing
└── index.css         # Global styles and Tailwind directives
```

Design System

The project uses a custom design system built on top of Tailwind CSS:
1.  **Typography**: 'Barlow Semi Condensed' for body text, 'EB Garamond' for headings.
2.  **Colors**: A sophisticated palette featuring Charcoal, Teal, and Soft Grays.
3.  **Animations**: Custom `fade-in`, `slide-up`, and `zoom` effects for a dynamic feel.
4.  **Animated Logo**: A custom SVG-based logo with drawing and fading animations that represents the brand identity.

Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

<div align="center">
  <p>Built with ❤️ by the BE Endless Team</p>
</div>
