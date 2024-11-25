<div class="flex flex-col w-screen h-screen items-center justify-center"> 
<div class="container">

  

  <div class="submission-form">
    
      <form id="essayForm">
          <div class="form-group">
              <label for="essayTitle">Essay Title</label>
              <input type="text" id="essayTitle" class="form-control" required>
          </div>

          <div class="form-group">
              <label>Essay Type</label>
              <div class="checkbox-group">
                  <label class="checkbox-item">
                      <input type="radio" name="essayType" value="college" checked>
                      College Application
                  </label>
                  <label class="checkbox-item">
                      <input type="radio" name="essayType" value="scholarship">
                      Scholarship
                  </label>
                  <label class="checkbox-item">
                      <input type="radio" name="essayType" value="academic">
                      Academic
                  </label>
              </div>
          </div>

          <div class="form-group">
              <label>Upload Method</label>
              <div class="review-options">
                  <div class="review-option selected" >
                      <i class="fas fa-upload"></i>
                      <h4>Upload Document</h4>
                      <p>Upload your essay as a document</p>
                  </div>
                  <div class="review-option" >
                      <i class="fas fa-paste"></i>
                      <h4>Paste Text</h4>
                      <p>Copy and paste your essay text</p>
                  </div>
                  <div class="review-option" >
                      <i class="fas fa-pencil-alt"></i>
                      <h4>Write Online</h4>
                      <p>Use our online editor</p>
                  </div>
              </div>
          </div>

          <div id="uploadSection" class="form-group">
              <div class="drag-drop-area" id="dropZone">
                  <i class="fas fa-cloud-upload-alt fa-3x"></i>
                  <p>Drag and drop your file here or click to browse</p>
                  <input type="file" id="fileInput" hidden accept=".doc,.docx,.pdf,.txt">
              </div>
              <div class="progress-bar">
                  <div class="progress-fill" id="uploadProgress"></div>
              </div>
          </div>

          <div id="editorSection" class="form-group" style="display: none;">
              <textarea id="editor"></textarea>
          </div>

          <div class="form-group">
              <label>Review Preferences</label>
              <div class="checkbox-group">
                  <label class="checkbox-item">
                      <input type="checkbox" checked> Grammar & Style
                  </label>
                  <label class="checkbox-item">
                      <input type="checkbox" checked> Content & Structure
                  </label>
                  <label class="checkbox-item">
                      <input type="checkbox" checked> Plagiarism Check
                  </label>
                  <!--
                  <label class="checkbox-item">
                      <input type="checkbox"> Peer Review
                  </label>
                  
                  <label class="checkbox-item">
                      <input type="checkbox"> Expert Review
                  </label>
                  -->
              </div>
          </div>

          <div class="form-group">
              <label for="notes">Additional Notes (optional)</label>
              <textarea id="notes" class="form-control" rows="3" placeholder="Any specific areas you'd like reviewers to focus on?"></textarea>
          </div>

          <div style="display: flex; gap: 1rem;">
              <button type="submit" class="btn btn-primary">Submit Essay</button>
              <button type="button" class="btn btn-secondary">Save Draft</button>
          </div>
      </form>
  </div>
</div>

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
      margin: 2rem auto;
      padding: 0 2rem;
  }

  .submission-form {
      background-color: var(--card-bg);
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .form-group {
      margin-bottom: 1.5rem;
  }

  .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
  }

  .form-control {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--border);
      border-radius: 5px;
      background-color: var(--background);
      color: var(--text);
      font-size: 1rem;
  }

  .form-control:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }

  .checkbox-group {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 0.5rem;
  }

  .checkbox-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
  }

  .progress-bar {
      width: 100%;
      height: 0.5rem;
      background-color: var(--border);
      border-radius: 0.25rem;
      overflow: hidden;
      margin-top: 0.5rem;
  }

  .progress-fill {
      height: 100%;
      background-color: var(--primary);
      width: 0%;
      transition: width 0.3s ease;
  }

  .btn {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: transform 0.3s, background-color 0.3s;
  }

  .btn-primary {
      background-color: var(--primary);
      color: white;
  }

  .btn-secondary {
      background-color: var(--background);
      color: var(--text);
      border: 1px solid var(--border);
  }

  .btn:hover {
      transform: translateY(-2px);
  }

  .drag-drop-area {
      border: 2px dashed var(--border);
      padding: 2rem;
      text-align: center;
      border-radius: 10px;
      margin-bottom: 1rem;
      cursor: pointer;
      transition: border-color 0.3s;
  }

  .drag-drop-area.dragging {
      border-color: var(--primary);
      background-color: rgba(74, 144, 226, 0.1);
  }

  .review-options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
  }

  .review-option {
      background-color: var(--background);
      padding: 1rem;
      border-radius: 5px;
      border: 1px solid var(--border);
      cursor: pointer;
      transition: transform 0.3s, border-color 0.3s;
  }

  .review-option:hover {
      transform: translateY(-2px);
      border-color: var(--primary);
  }

  .review-option.selected {
      border-color: var(--primary);
      box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }

  .word-count {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      font-size: 0.875rem;
      color: var(--text);
      opacity: 0.7;
  }

  footer {
      background-color: var(--card-bg);
      padding: 2rem;
      text-align: center;
      margin-top: 4rem;
  }

  @media (max-width: 768px) {
      .nav-links {
          display: none;
      }
      
      .review-options {
          grid-template-columns: 1fr;
      }
  }
</style>