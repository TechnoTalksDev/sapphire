<div class="container">
  <aside class="sidebar">
      <div class="search-bar">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search resources...">
      </div>

      <div class="category-list">
          <div class="category-item active">
              <i class="fas fa-star"></i>
              Featured Resources
          </div>
          <div class="category-item">
              <i class="fas fa-book"></i>
              Sample Essays
          </div>
          <div class="category-item">
              <i class="fas fa-lightbulb"></i>
              Writing Tips
          </div>
          <div class="category-item">
              <i class="fas fa-graduation-cap"></i>
              Admissions Advice
          </div>
          <div class="category-item">
              <i class="fas fa-check-circle"></i>
              Grammar Guide
          </div>
          <div class="category-item">
              <i class="fas fa-chart-line"></i>
              Success Stories
          </div>
      </div>
  </aside>

  <main class="main-content">
      <section class="featured-essays">
          <h2>Featured College Essays That Worked</h2>
          <p>Learn from successful essays that helped students get into top schools</p>
          
          <div class="essay-grid">
              <div class="essay-card">
                  <span class="resource-type">Harvard</span>
                  <h3>Overcoming Adversity</h3>
                  <p>A personal narrative about resilience and growth...</p>
              </div>
              <div class="essay-card">
                  <span class="resource-type">Stanford</span>
                  <h3>Community Impact</h3>
                  <p>How a local initiative sparked global change...</p>
              </div>
              <div class="essay-card">
                  <span class="resource-type">MIT</span>
                  <h3>Innovation Journey</h3>
                  <p>From curiosity to breakthrough invention...</p>
              </div>
          </div>
      </section>

      <section class="expert-tips">
          <div class="tip-card">
              <h3>Crafting Your Personal Statement</h3>
              <p>Learn the essential elements of a compelling personal statement and how to make yours stand out.</p>
              <div class="tag-list">
                  <span class="tag">Writing Tips</span>
                  <span class="tag">Personal Statement</span>
              </div>
              <div class="resource-stats">
                  <span class="stat"><i class="far fa-clock"></i> 15 min read</span>
                  <span class="stat"><i class="far fa-eye"></i> 2.4k views</span>
              </div>
          </div>

          <div class="tip-card">
              <h3>Common Application Essay Guide</h3>
              <p>A comprehensive guide to tackling each prompt on the Common Application with examples.</p>
              <div class="tag-list">
                  <span class="tag">Common App</span>
                  <span class="tag">Essay Guide</span>
              </div>
              <div class="resource-stats">
                  <span class="stat"><i class="far fa-clock"></i> 20 min read</span>
                  <span class="stat"><i class="far fa-eye"></i> 3.1k views</span>
              </div>
          </div>
      </section>

      <div class="resource-card">
          <div class="resource-header">
              <h3>Writing Workshop: Show, Don't Tell</h3>
              <span class="resource-type">Video Tutorial</span>
          </div>
          <p>Master the art of descriptive writing with practical exercises and examples.</p>
          <div class="tag-list">
              <span class="tag">Writing Skills</span>
              <span class="tag">Tutorial</span>
              <span class="tag">Advanced</span>
          </div>
          <div class="resource-stats">
              <span class="stat"><i class="far fa-clock"></i> 45 min</span>
              <span class="stat"><i class="far fa-eye"></i> 1.8k views</span>
              <span class="stat"><i class="far fa-star"></i> 4.9/5</span>
          </div>
      </div>

      <div class="resource-card">
          <div class="resource-header">
              <h3>Grammar & Style Guide</h3>
              <span class="resource-type">Quick Reference</span>
          </div>
          <p>Essential grammar rules, common mistakes to avoid, and style guidelines for academic writing.</p>
          <div class="tag-list">
              <span class="tag">Grammar</span>
              <span class="tag">Style</span>
              <span class="tag">Reference</span>
          </div>
          <div class="resource-stats">
              <span class="stat"><i class="far fa-clock"></i> 10 min read</span>
              <span class="stat"><i class="far fa-eye"></i> 5.2k views</span>
              <span class="stat"><i class="far fa-star"></i> 4.8/5</span>
          </div>
      </div>
  </main>
</div>

<style>
        :root {
            --primary: #4A90E2;
            --secondary: #6C63FF;
            --success: #2ECC71;
            --background: #ffffff;
            --text: #333333;
            --card-bg: #f8f9fa;
            --border: #e1e4e8;
            --modal-overlay: rgba(0, 0, 0, 0.5);
        }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      transition: background-color 0.3s, color 0.3s;
  }

  body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background-color: var(--background);
      color: var(--text);
      line-height: 1.6;
  }

  nav {
      background-color: var(--card-bg);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
  }

  .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--primary);
      text-decoration: none;
  }

  .nav-links {
      display: flex;
      gap: 2rem;
  }

  .nav-links a {
      color: var(--text);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
  }

  .nav-links a:hover {
      color: var(--primary);
  }

  .theme-toggle {
      background: none;
      border: none;
      color: var(--text);
      cursor: pointer;
      font-size: 1.2rem;
  }

  .container {
      max-width: 1200px;
      margin: auto auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 2rem;
  }

  .sidebar {
      position: sticky;
      top: 5rem;
      height: fit-content;
  }

  .search-bar {
      position: relative;
      margin-bottom: 2rem;
  }

  .search-bar input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.5rem;
      border: 1px solid var(--border);
      border-radius: 5px;
      background-color: var(--card-bg);
      color: var(--text);
  }

  .search-bar i {
      position: absolute;
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text);
      opacity: 0.5;
  }

  .category-list {
      background-color: var(--card-bg);
      border-radius: 10px;
      overflow: hidden;
  }

  .category-item {
      padding: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      border-bottom: 1px solid var(--border);
      transition: background-color 0.3s;
  }

  .category-item:hover {
      background-color: var(--background);
  }

  .category-item.active {
      background-color: var(--primary);
      color: white;
  }

  .main-content {
      margin-top: 5rem;
      display: grid;
      gap: 2rem;
  }

  .resource-card {
      background-color: var(--card-bg);
      border-radius: 10px;
      padding: 1.5rem;
      transition: transform 0.3s;
      cursor: pointer;
  }

  .resource-card:hover {
      transform: translateY(-2px);
  }

  .resource-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
  }

  .resource-type {
      background-color: var(--tag-bg);
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.875rem;
  }

  .tag-list {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-top: 1rem;
  }

  .tag {
      background-color: var(--tag-bg);
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.875rem;
  }

  .featured-essays {
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      color: white;
      padding: 2rem;
      border-radius: 10px;
      margin-bottom: 2rem;
  }

  .essay-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
  }

  .essay-card {
      background-color: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: 5px;
      backdrop-filter: blur(10px);
      transition: transform 0.3s;
  }

  .essay-card:hover {
      transform: translateY(-2px);
  }

  .expert-tips {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
  }

  .tip-card {
      background-color: var(--card-bg);
      padding: 1.5rem;
      border-radius: 10px;
      border-left: 4px solid var(--primary);
  }

  .resource-stats {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      color: var(--text);
      opacity: 0.7;
  }

  .stat {
      display: flex;
      align-items: center;
      gap: 0.5rem;
  }

  footer {
      background-color: var(--card-bg);
      padding: 2rem;
      text-align: center;
      margin-top: 4rem;
  }

  @media (max-width: 768px) {
      .container {
          grid-template-columns: 1fr;
      }

      .nav-links {
          display: none;
      }

      .sidebar {
          position: static;
      }
  }
</style>