# Personal Portfolio Website

A modern, responsive portfolio website built with React and deployed on GitHub Pages.

## Features

- 📱 **Fully Responsive**: Works great on desktop, tablet, and mobile
- ⚡ **Fast Performance**: Built with React for optimal speed
- 🎨 **Modern Design**: Clean and professional UI
- 📄 **Multiple Pages**: Home, Projects, About, Contact
- 🚀 **GitHub Pages Ready**: One-command deployment
- ♿ **Accessible**: Semantic HTML and keyboard navigation

## Quick Start

### Prerequisites
- Node.js (v14+) and npm installed
- Git installed
- GitHub account

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build

# Deploy to GitHub Pages
npm run deploy
```

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed setup and deployment instructions.

## Customization

### Update Your Info
1. Edit the pages in `src/pages/` with your information
2. Update social links in `src/App.js`
3. Add your projects to `src/pages/Projects.js`

### Styling
- Main styles in `src/App.css`
- CSS variables for easy theme customization
- Mobile-first responsive design

### Add Sections
Create new pages in `src/pages/` and add routes in `src/App.js`.

## Deployment

1. Create a GitHub repository named `Resume`
2. Push your code to the `main` branch
3. Run `npm run deploy`
4. Enable GitHub Pages in Settings
5. Your site will be live at `https://yourusername.github.io/Resume`

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed deployment steps.

## File Structure

```
src/
├── components/     (Reusable components)
├── pages/         (Page components)
│   ├── Home.js
│   ├── Projects.js
│   ├── About.js
│   └── Contact.js
├── App.js         (Main app component)
├── App.css        (Global styles)
└── index.js       (Entry point)
```

## Technologies Used

- **React 18**: UI library
- **React Router**: Client-side routing
- **CSS3**: Styling with responsive design
- **GitHub Pages**: Hosting

## Features to Add

- [ ] Contact form backend integration
- [ ] Blog/Articles section
- [ ] Dark mode toggle
- [ ] Animated scroll effects
- [ ] Project filtering
- [ ] Resume download button

## License

This project is open source and available under the MIT License.

---

Made with ❤️ by Andru Tjalas
