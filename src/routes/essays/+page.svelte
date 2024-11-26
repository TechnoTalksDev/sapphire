<script>
    import 'ldrs/trefoil'
</script>
<section class="qa-header">
  <h1>Review essays!</h1>
  <p>Earn sapphire shards for expert reviews! 💎</p>
</section>

<div class="search-container">
  <input type="text" class="search-box" placeholder="Search essays...">
</div>

<div class="qa-categories">
  <div class="category-tag">All review requests</div>
  <div class="category-tag">Essay Structure</div>
  <div class="category-tag">Common App</div>
  <div class="category-tag">Personal Statement</div>
  <div class="category-tag">Supplemental Essays</div>
  <div class="category-tag">Writing Tips</div>
</div>

<section class="qa-section">
  <div class="qa-grid">
    <div class="qa-card">
        <h3>What Makes Me Unique?</h3>
        <p>From a young age, I’ve embraced my quirks, whether it was my obsession with solving puzzles or my tendency to ask "why" far more often than anyone else in the room...</p>
        <div class="meta">
            <i class="fas fa-user"></i> Essay by P.K., Class of 2026
        </div>
    </div>
    
    <div class="qa-card">
        <h3>Overcoming Challenges</h3>
        <p>The challenges I’ve faced have not defined me, but instead shaped the person I am today. Growing up, balancing schoolwork with helping my family run a small business taught me resilience...</p>
        <div class="meta">
            <i class="fas fa-user"></i> Essay by A.L., Class of 2025
        </div>
    </div>
    
    <div class="qa-card">
        <h3>A Lesson From Failure</h3>
        <p>When I failed my first debate competition, I was devastated. However, that experience was the turning point that made me realize failure is not the end, but an opportunity to grow...</p>
        <div class="meta">
            <i class="fas fa-user"></i> Essay by T.M., Class of 2024
        </div>
    </div>
    
    <div class="qa-card">
        <h3>The Value of Curiosity</h3>
        <p>For as long as I can remember, I’ve been a curious soul. Whether it was dismantling gadgets or exploring different cultures through books, my curiosity has always driven me to learn...</p>
        <div class="meta">
            <i class="fas fa-user"></i> Essay by J.S., Class of 2026
        </div>
    </div>
    
    <div class="qa-card">
        <h3>Defining Moments</h3>
        <p>Moving to a new country at the age of ten was a defining moment for me. It challenged me to adapt, learn a new language, and find a sense of belonging in a completely new environment...</p>
        <div class="meta">
            <i class="fas fa-user"></i> Essay by R.K., Class of 2025
        </div>
    </div>
    
    <div class="qa-card">
        <h3>Passion for the Arts</h3>
        <p>Art has always been my escape and my passion. Whether sketching in my notebook or performing in school plays, I’ve found a way to express my creativity and connect with others...</p>
        <div class="meta">
            <i class="fas fa-user"></i> Essay by C.M., Class of 2024
        </div>
    </div>

    <div class="qa-card !flex !flex-row !justify-center !items-center">
        <l-trefoil
        size="100"
        stroke="6"
        speed="2" 
        color="black"
        class="hidden lg:inline scale-75 lg:scale-100 place-self-center" 
        ></l-trefoil>	
    </div>
    
  </div>


</section>



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

  /* Previous styles remain the same... */
  /* Adding modal styles */

  .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--modal-overlay);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
  }

  .modal-overlay.active {
      display: flex;
      opacity: 1;
  }

  .modal {
      background-color: var(--background);
      padding: 2rem;
      border-radius: 10px;
      width: 90%;
      max-width: 600px;
      position: relative;
      transform: translateY(20px);
      transition: transform 0.3s ease-in-out;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .modal-overlay.active .modal {
      transform: translateY(0);
  }

  .modal-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: var(--text);
      cursor: pointer;
      transition: color 0.3s;
  }

  .modal-close:hover {
      color: var(--primary);
  }

  .modal-header {
      margin-bottom: 1.5rem;
  }

  .modal-header h2 {
      color: var(--primary);
      font-size: 1.5rem;
  }

  .form-group {
      margin-bottom: 1.5rem;
  }

  .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--text);
  }

  .form-control {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--border);
      border-radius: 5px;
      background-color: var(--card-bg);
      color: var(--text);
      transition: border-color 0.3s;
  }

  .form-control:focus {
      outline: none;
      border-color: var(--primary);
  }

  textarea.form-control {
      min-height: 150px;
      resize: vertical;
  }

  .category-select {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.5rem;
  }

  .category-option {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      background-color: var(--card-bg);
      color: var(--text);
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
  }

  .category-option.selected {
      background-color: var(--primary);
      color: white;
  }

  .submit-btn {
      background-color: var(--primary);
      color: white;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      transition: transform 0.3s, background-color 0.3s;
  }

  .submit-btn:hover {
      transform: translateY(-2px);
      background-color: var(--secondary);
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

  .qa-header {
      padding: 10rem 2rem;
      text-align: center;
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      color: white;
  }

  .qa-header h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
  }

  .search-container {
      max-width: 600px;
      margin: -1.5rem auto 2rem;
      padding: 0 1rem;
      position: relative;
      z-index: 1;
  }

  .search-box {
      width: 100%;
      padding: 1rem;
      border: none;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      font-size: 1rem;
  }

  .qa-categories {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
  }

  .category-tag {
      padding: 0.5rem 1rem;
      background-color: var(--card-bg);
      border-radius: 20px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.3s;
  }

  .category-tag:hover {
      background-color: var(--primary);
      color: white;
      transform: translateY(-2px);
  }

  .qa-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
  }

  .qa-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
  }

  .qa-card {
      background-color: var(--card-bg);
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .qa-card h3 {
      color: var(--primary);
      margin-bottom: 1rem;
  }

  .qa-card .meta {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
      color: var(--text);
      opacity: 0.8;
      font-size: 0.9rem;
  }

  .ask-question {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background-color: var(--primary);
      color: white;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      cursor: pointer;
      transition: transform 0.3s;
  }

  .ask-question:hover {
      transform: translateY(-2px);
  }

  footer {
      background-color: var(--card-bg);
      padding: 2rem;
      text-align: center;
      margin-top: 4rem;
  }

  .footer-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 1rem;
  }

  .footer-links a {
      color: var(--text);
      text-decoration: none;
  }

  @media (max-width: 768px) {
      .nav-links {
          display: none;
      }
      
      .qa-grid {
          grid-template-columns: 1fr;
      }
  }
</style>
