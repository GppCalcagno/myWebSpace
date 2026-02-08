# 📬 MyWebSpace

Welcome to the source code of my personal website. This space serves as my digital garden - a place where I share what I learn, think, and build. It's my corner of the internet to document achievements, projects, and brain dumps worth committing to memory.

## 🛠️ Built With

- **Astro** v5.16.16 (Static Site Generator)
- **Tailwind CSS** v4.1.18 (Styling)
- **@tailwindcss/typography** v0.5.19 (Content styling)
- **astro-icon** v1.1.5 (Icon system)
- **Cloudflare Pages** (Deployment with @astrojs/cloudflare adapter)


### 📝 Content Structure

- **Notes**: Markdown files in `src/content/notes/` (managed via Astro Content Collections)
- **Timeline**: Life milestones in `src/content/static_pages/timelineEntry.ts`
- **Projects**: Project data in `src/content/static_pages/projects.ts`
- **About**: Personal info in `src/content/static_pages/abouteMe.ts`

## 🚧 RoadMap & TODO

The core structure is in place. These are the planned improvements and features to be added as time allows:

- [ ] Add newsletter signup \ Add RSS feed
- [ ] Implement SEO optimization
- [ ] Create notes archive page (after 10 blog post)
- [ ] Implement dark mode toggle
- [ ] Add bookshelf
- [ ] Implement Table of Contents for long posts
- [ ] Fix image description in blog post

### 🎨 Inspiration & Credits

This project is inspired and informed by several fantastic resources. Here are some of the main influences:

- My motivation for building this site came from reading [Mr. RIP’s blog](https://retireinprogress.com/) and exploring his "knowledge source."
- Icons sourced from [SVGRepo](https://www.svgrepo.com/)
- For more inspiration and templates, I also refer to the excellent [Portfolio Ideas repository](https://github.com/Evavic44/portfolio-ideas).

# 🚀 Getting Started

To run this project locally:

```bash
git clone https://github.com/GppCalcagno/myWebSpace.git
cd myWebSpace
npm install
npm run dev
```

Visit `http://localhost:4321` in your browser.

## 🤝 Contributing

This is a personal site, but suggestions and ideas are welcome! Feel free to open an issue if you spot something that could be improved.

## 📄 License
TBD
