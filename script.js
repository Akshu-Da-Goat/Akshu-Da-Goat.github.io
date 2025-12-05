<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome to Hurstbourne | Jefferson County Highlights</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Simple CSS for Tabs and Layout -->
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background: #f4f7fc;}
    .nav {
      display: flex;
      background: #4285f4;
      padding: 0;
      margin: 0;
      box-shadow: 0 2px 8px rgba(66,133,244,0.05);
    }
    .nav button {
      background: none;
      border: none;
      color: #fff;
      padding: 18px 24px;
      cursor: pointer;
      transition: background 0.2s;
      font-size: 1.1em;
      outline: none;
    }
    .nav button.active {
      background: #2966b2;
      font-weight: bold;
    }
    .tab-content {
      display: none;
      padding: 32px 20px;
      max-width: 900px;
      margin: auto;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 1px 14px rgba(66,133,244,0.06);
      min-height: 350px;
    }
    .tab-content.active {
      display: block;
    }
    h1, h2 {
      color: #245fae;
    }
    img.hurstbourne-img {
      width: 100%;
      max-width: 500px;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(66,133,244,0.1);
      margin-bottom: 20px;
    }
    .timeline {
      border-left: 3px solid #4285f4;
      padding-left: 35px;
      position: relative;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .timeline-point {
      position: relative;
      margin-bottom: 40px;
    }
    .timeline-point::before {
      content: '';
      position: absolute;
      left: -38px;
      top: 3px;
      width: 16px;
      height: 16px;
      background: #fff;
      border: 3px solid #4285f4;
      border-radius: 50%;
    }
    .timeline-point h3 {
      margin: 0 0 5px 0;
      color: #2966b2;
    }
    .youtube-embed {
      margin-top: 24px;
      margin-bottom: 24px;
      display: block;
      max-width: 480px;
      width: 100%;
      height: 270px;
      border: none;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(66,133,244,0.07);
    }
    .why-section {
      margin-top: 35px;
      background: #e9f1fc;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 1px 6px rgba(66,133,244,0.03);
    }
    @media (max-width:700px) {
      .tab-content { padding: 12px 5px; }
      .nav button { padding: 12px 10px; font-size: 1em; }
      .youtube-embed { height: 180px; }
    }
  </style>
</head>
<body>
  <!-- NAVIGATION -->
  <div class="nav" id="navbar">
    <button class="active" onclick="showTab('home')">Home</button>
    <button onclick="showTab('maps')">Maps</button>
    <button onclick="showTab('timeline')">Timeline</button>
    <button onclick="showTab('hurstbourne')">Hurstbourne</button>
  </div>

  <!-- HOME TAB -->
  <div id="home" class="tab-content active">
    <h1>Welcome to Hurstbourne & Jefferson County!</h1>
    <p>
      This site showcases the wonderful communities and history of Jefferson County, focusing especially on Hurstbourne. Navigate the tabs to explore maps, historic timelines, and multimedia about this great neighborhood.
    </p>
    <img class="hurstbourne-img" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Hurstbourne_KY_aerial.jpg" alt="Aerial view of Hurstbourne, Jefferson County">
    <p>
      Whether you’re a visitor, local resident, or just curious about one of Louisville’s most vibrant communities, this guide will help you discover why Hurstbourne is special!
    </p>
  </div>

  <!-- MAPS TAB -->
  <div id="maps" class="tab-content">
    <h2>Hurstbourne Location Map</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.032128422235!2d-85.59149718469159!3d38.23401467966909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690b2fb887379f%3A0x7273be4278c720eb!2sHurstbourne%2C%20KY%2040222!5e0!3m2!1sen!2sus!4v1702221277516!5m2!1sen!2sus"
      width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <p>Hurstbourne sits in eastern Jefferson County, Kentucky, a bustling suburb of Louisville.</p>
  </div>

  <!-- TIMELINE TAB -->
  <div id="timeline" class="tab-content">
    <h2>Hurstbourne: A Brief Timeline</h2>
    <div class="timeline">
      <div class="timeline-point">
        <h3>1790s</h3>
        <p>Earliest settlement in the Hurstbourne area, characterized by farms and estates.</p>
      </div>
      <div class="timeline-point">
        <h3>1930s</h3>
        <p>Developed as a prominent country club and golf destination.</p>
      </div>
      <div class="timeline-point">
        <h3>1965</h3>
        <p>Officially founded as the City of Hurstbourne. Suburban homes begin to fill the area.</p>
      </div>
      <div class="timeline-point">
        <h3>1980s</h3>
        <p>Boom in residential development, offices, shopping centers, and city amenities.</p>
      </div>
      <div class="timeline-point">
        <h3>Present</h3>
        <p>Modern, diverse, and thriving community with parks, great schools, and active citizens.</p>
      </div>
    </div>
  </div>

  <!-- HURSTBOURNE TAB -->
  <div id="hurstbourne" class="tab-content">
    <h2>Discover Hurstbourne</h2>
    <img class="hurstbourne-img" src="https://upload.wikimedia.org/wikipedia/commons/9/92/Hurstbourne_Louisville_Kentucky.jpg" alt="Hurstbourne neighborhood photo">
    <p>
      <strong>Hurstbourne</strong>, located in Jefferson County near Louisville, Kentucky, combines suburban tranquility with city conveniences. The area is known for its lush parks, quiet streets, and welcoming neighbors. Historically, Hurstbourne was home to old Kentucky estates, and much of its charm is preserved in beautiful landscaping and classic architecture.
    </p>
    <p>
      Residents love Hurstbourne for its top-rated schools, safe environment, and diverse array of restaurants and shops. Its proximity to major highways makes commuting easy, while local parks, golf courses, and recreation centers offer plenty of leisure options.
    </p>
    <p>
      Hurstbourne is more than a neighborhood—it's a close-knit community where friendships last and families thrive. Annual events, festive parades, and the strong local association help create belonging and pride in the area. Many homes blend historic character with modern amenities, reflecting the evolution of Hurstbourne over the centuries.
    </p>

    <h3>See Hurstbourne!</h3>
    <iframe class="youtube-embed"
      src="https://www.youtube.com/embed/heQ8XnxxDkg"
      allowfullscreen
      title="Driving Through Hurstbourne"></iframe>
    <iframe class="youtube-embed"
      src="https://www.youtube.com/embed/XDcTVxjV7Zs"
      allowfullscreen
      title="Explore Hurstbourne Neighborhood"></iframe>

    <div class="why-section">
      <h2>Why Hurstbourne is a Great Community</h2>
      <ul>
        <li><strong>Safety:</strong> Renowned for low crime and friendly neighbors.</li>
        <li><strong>Convenience:</strong> Quick access to shopping, dining, and major highways.</li>
        <li><strong>Beauty:</strong> Tree-lined streets, manicured parks, and classic architecture.</li>
        <li><strong>Community spirit:</strong> Active local association, clubs, and frequent events.</li>
        <li><strong>Education:</strong> Excellent nearby schools and learning centers.</li>
        <li><strong>Quality of life:</strong> Relaxed living with a vibrant local culture.</li>
      </ul>
      <p>Hurstbourne is a shining example of what makes Jefferson County a wonderful place to live!</p>
    </div>
  </div>

  <!-- Tab switching JS -->
  <script>
    function showTab(tab) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      document.getElementById(tab).classList.add('active');
      document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
      var buttons = document.querySelectorAll('.nav button');
      var tabOrder = ['home', 'maps', 'timeline', 'hurstbourne'];
      buttons[tabOrder.indexOf(tab)].classList.add('active');
    }
  </script>
</body>
</html>
