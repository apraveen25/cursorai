# Office Plugins Pro - MS Office Add-in Development Company Website

This is a Next.js 15 application for an MS Office Plug-In Development company. The website showcases the company's services, expertise domains, technologies, development process, pricing, and more.

## Features

- Modern, responsive design with animations and transitions
- Mobile-first approach with optimized layouts for all screen sizes
- Interactive UI components with hover effects and smooth animations
- Comprehensive information about MS Office add-in development services
- Detailed pages for Services, Domains, Technologies, Process, Pricing, FAQs, and Contact
- Built with Next.js 15, TypeScript, and Tailwind CSS
- Optimized for performance and SEO

## Pages

- **Home**: Overview of the company and its services
- **Services**: Detailed information about the company's services
- **Domains**: Information about the different Microsoft Office applications the company works with
- **Technologies**: Showcase of the technologies used for Office add-in development
- **Process**: Detailed explanation of the company's development methodology
- **Pricing**: Different pricing plans and options
- **FAQs**: Common questions and answers about Office add-in development
- **Contact**: Contact form and company information

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/office-plugins-pro.git
   cd office-plugins-pro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Responsive Design Features

The website is fully responsive and optimized for all screen sizes:

- **Mobile-first approach**: The site is designed with mobile users in mind first, then enhanced for larger screens
- **Fluid typography**: Text sizes adjust based on screen width for optimal readability
- **Responsive grid layouts**: Using CSS Grid and Flexbox for adaptive layouts
- **Optimized images**: Images are properly sized and loaded with Next.js Image component for performance
- **Touch-friendly navigation**: Mobile menu with smooth animations and touch-friendly targets
- **Conditional rendering**: Some content is conditionally rendered based on screen size
- **Media queries**: Strategic breakpoints ensure the design looks great on all devices
- **Interactive elements**: Hover states and animations enhance the user experience on desktop
- **Performance optimized**: Fast loading times on all devices

## Technologies Used

- **Next.js 15**: React framework for server-rendered applications
- **React 18**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
  - **@tailwindcss/forms**: Plugin for styling form elements
  - **@tailwindcss/typography**: Plugin for styling typography
  - **@tailwindcss/aspect-ratio**: Plugin for handling aspect ratios
- **Framer Motion**: Animation library for React
- **React Icons**: Icon library for React applications
- **PostCSS**: Tool for transforming CSS with JavaScript
  - **Autoprefixer**: Plugin to parse CSS and add vendor prefixes
  - **cssnano**: Plugin to optimize and minify CSS

## Project Structure

- `app/`: Contains all the pages and layouts (Next.js App Router)
- `components/`: Reusable React components
- `public/`: Static assets like images and fonts
- `styles/`: Global CSS styles

## Customization

### Changing Colors

The primary colors can be modified in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: "#0078d4", // Microsoft blue
      secondary: "#2b579a", // Darker blue
      accent: "#107c10", // Microsoft green
    },
  },
},
```

### Adding New Pages

To add a new page, create a new file in the `app` directory with the appropriate route name.

## Performance Optimizations

- CSS optimization with cssnano in production
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Server-side rendering for improved SEO and initial load performance
- Optimized package imports for smaller bundle sizes

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Inspired by [office-addins.in](https://www.office-addins.in)
- Images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/) 