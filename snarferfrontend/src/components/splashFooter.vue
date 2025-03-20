<template>
    <footer class="footer">
      <div class="footer-content">
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/terms">Terms</a></li>
        </ul>
        <div class="stamp">🗺️ Explorer’s Seal of Adventure 🏕️</div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background: #4b2a00; /* Deep brown for a rich, adventurous feel */
    color: white;
    text-align: center;
    padding: 20px;
    font-family: "Lora", serif;
  }
  
  .footer ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer ul li {
    display: inline;
    margin: 0 15px;
  }
  
  .footer ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;
  }
  
  .footer ul li a:hover {
    color: #d17a22; /* Warm golden tone on hover */
  }
  
  .stamp {
    margin-top: 10px;
    font-style: italic;
    font-size: 1rem;
    opacity: 0.8;
  }
  </style>
  