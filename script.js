const cameraData = [
  {
    slug: 'sony-a7-iii',
    name: 'Sony A7 III',
    tagline: 'Best-selling',
    price: '₱1,350 / day',
    short: 'A dependable all-around mirrorless camera with excellent autofocus, strong low-light performance, and beautiful 4K video.',
    about: 'The Sony A7 III is a strong choice for almost any kind of shoot. It balances speed, image quality, and flexibility in a body that feels familiar for both stills and video work.',
    image: 'images/sony-a7-iii.png',
    features: [
      '24.2MP full-frame Exmor R CMOS sensor',
      '693-point phase-detection autofocus',
      '5-axis in-body image stabilization',
      'Up to 10 fps continuous shooting',
      '4K UHD video recording',
      'S-Log 2, S-Log 3, and HLG support',
      'Dual SD card slots',
      'Bright 3.0" tilting touchscreen',
      'Excellent battery life for long shoot days',
      'Weather-sealed body for regular field use'
    ],
    gallery: [
      'https://picsum.photos/seed/sony-a7-iii-1/800/600',
      'https://picsum.photos/seed/sony-a7-iii-2/800/600',
      'https://picsum.photos/seed/sony-a7-iii-3/800/600'
    ]
  },
  {
    slug: 'canon-eos-r6',
    name: 'Canon EOS R6',
    tagline: 'Fast and reliable',
    price: '₱1,500 / day',
    short: 'A fast mirrorless camera built for events, portraits, and fast-moving scenes with warm Canon color and excellent autofocus.',
    about: 'The Canon EOS R6 feels quick and confident in the hand. It is a favorite for creators who want a responsive body that performs well in changing light and moving subjects.',
    image: 'images/canon-eos-r6.png',
    features: [
      '20MP full-frame CMOS sensor',
      'Advanced Dual Pixel CMOS AF II',
      'In-body image stabilization',
      'Up to 20 fps electronic shutter',
      '4K video with strong detail',
      'Excellent subject tracking',
      'Dual card slots for workflow safety',
      'Comfortable grip for long sessions',
      'Reliable low-light autofocus',
      'Warm Canon color rendering'
    ],
    gallery: [
      'https://picsum.photos/seed/canon-eos-r6-1/800/600',
      'https://picsum.photos/seed/canon-eos-r6-2/800/600',
      'https://picsum.photos/seed/canon-eos-r6-3/800/600'
    ]
  },
  {
    slug: 'fujifilm-x-t5',
    name: 'Fujifilm X-T5',
    tagline: 'Compact body, rich color',
    price: '₱1,250 / day',
    short: 'A beloved APS-C mirrorless camera with classic styling, outstanding color science, and sharp detail for both photo and video.',
    about: 'The Fujifilm X-T5 is a refined camera for shooters who appreciate tactile controls and a beautiful image straight out of camera. It is compact, stylish, and deeply capable.',
    image: 'images/fujifilm-x-t5.png',
    features: [
      '40.2MP APS-C X-Trans CMOS 5 HR sensor',
      'In-body image stabilization',
      'Classic analog-style control dials',
      '6.2K video recording',
      'Fast autofocus with subject detection',
      'Film Simulation color profiles',
      'Compact and travel-friendly body',
      'High-resolution stills for crop flexibility',
      'Great for portraits and street work',
      'Strong hybrid photo/video performance'
    ],
    gallery: [
      'https://picsum.photos/seed/fujifilm-x-t5-1/800/600',
      'https://picsum.photos/seed/fujifilm-x-t5-2/800/600',
      'https://picsum.photos/seed/fujifilm-x-t5-3/800/600'
    ]
  },
  {
    slug: 'canon-5d-mark-iv',
    name: 'Canon 5D Mark IV',
    tagline: 'A proven pro DSLR',
    price: '₱1,100 / day',
    short: 'A trusted full-frame DSLR known for dependable performance, natural color, and strong results in studio or event work.',
    about: 'The Canon 5D Mark IV remains a steady choice for photographers who appreciate the feel of a DSLR and want a dependable professional body with familiar controls and consistent results.',
    image: 'images/canon-5d-mark-iv.png',
    features: [
      '30.4MP full-frame sensor',
      'Reliable DSLR handling',
      'Natural skin tones',
      '61-point AF system',
      '4K video capture',
      'Built for portraits and events',
      'Strong performance in studio work',
      'A dependable workhorse body',
      'Dual card support',
      'Clear optical viewfinder experience'
    ],
    gallery: [
      'https://picsum.photos/seed/canon-5d-mark-iv-1/800/600',
      'https://picsum.photos/seed/canon-5d-mark-iv-2/800/600',
      'https://picsum.photos/seed/canon-5d-mark-iv-3/800/600'
    ]
  },
  {
    slug: 'nikon-z6-ii',
    name: 'Nikon Z6 II',
    tagline: 'Balanced and versatile',
    price: '₱1,300 / day',
    short: 'A flexible mirrorless body with pleasing color, solid stabilization, and the kind of handling that works for many types of shoots.',
    about: 'The Nikon Z6 II is ideal when you want a camera that feels calm and capable. It is a strong all-rounder for creators who move between stills and video throughout the day.',
    image: 'images/nikon-z6-ii.png',
    features: [
      '24.5MP full-frame sensor',
      'In-body image stabilization',
      'Dual card slots',
      'Comfortable grip and controls',
      'Good low-light performance',
      '4K video recording',
      'Reliable hybrid shooting body',
      'Great choice for mixed photo and video work',
      'Strong battery performance',
      'Clear and flexible manual handling'
    ],
    gallery: [
      'https://picsum.photos/seed/nikon-z6-ii-1/800/600',
      'https://picsum.photos/seed/nikon-z6-ii-2/800/600',
      'https://picsum.photos/seed/nikon-z6-ii-3/800/600'
    ]
  },
  {
    slug: 'sony-zv-e10',
    name: 'Sony ZV-E10',
    tagline: 'A creator-friendly favorite',
    price: '₱900 / day',
    short: 'A lightweight camera designed for vlogging, social media content, and straightforward video creation with clean autofocus.',
    about: 'The Sony ZV-E10 is the camera we recommend when portability matters most. It is simple to use, quick to deploy, and especially convenient for creators building content on the go.',
    image: 'images/sony-zv-e10.png',
    features: [
      '24.2MP APS-C sensor',
      'Product showcase mode',
      'Background defocus button',
      'Lightweight body for travel',
      'Excellent autofocus for video',
      'Easy setup for beginners',
      'Great for vlogs and reels',
      'Flexible creator-focused body',
      'Flip-out screen for self-shooting',
      'Perfect for content creators'
    ],
    gallery: [
      'https://picsum.photos/seed/sony-zv-e10-1/800/600',
      'https://picsum.photos/seed/sony-zv-e10-2/800/600',
      'https://picsum.photos/seed/sony-zv-e10-3/800/600'
    ]
  }
];

function getCameraBySlug(slug) {
  return cameraData.find(camera => camera.slug === slug) || cameraData[0];
}

function checkoutHref(slug) {
  return `checkout.html?camera=${encodeURIComponent(slug)}`;
}

function cameraCard(camera) {
  return `
    <article class="card camera-card">
      <a class="camera-link" href="camera-details.html?camera=${encodeURIComponent(camera.slug)}" aria-label="View details for ${camera.name}">
        <img src="${camera.image}" alt="${camera.name}" loading="lazy">
        <div class="card-copy">
          <p class="eyebrow">${camera.tagline}</p>
          <h3>${camera.name}</h3>
          <p>${camera.short}</p>
          <p class="price">${camera.price}</p>
        </div>
      </a>
      <div class="card-actions">
        <a class="btn btn-outline" href="camera-details.html?camera=${encodeURIComponent(camera.slug)}">View Details</a>
        <a class="btn btn-solid" href="${checkoutHref(camera.slug)}">Check Out</a>
      </div>
    </article>
  `;
}

function renderServicesPage() {
  const list = document.getElementById('camera-list');
  if (!list) return;
  list.innerHTML = cameraData.map(cameraCard).join('');
}

function renderFeaturedCameras() {
  const container = document.getElementById('featured-cameras');
  if (!container) return;
  const topThree = cameraData.slice(0, 3);
  container.innerHTML = topThree.map(camera => `
    <article class="card feature-card">
      <img src="${camera.image}" alt="${camera.name}" loading="lazy">
      <div class="card-copy">
        <p class="eyebrow">${camera.tagline}</p>
        <h3>${camera.name}</h3>
        <p>${camera.short}</p>
        <p class="price">${camera.price}</p>
      </div>
      <div class="card-actions">
        <a class="btn btn-outline" href="camera-details.html?camera=${encodeURIComponent(camera.slug)}">View Details</a>
        <a class="btn btn-solid" href="${checkoutHref(camera.slug)}">Check Out</a>
      </div>
    </article>
  `).join('');
}

function renderCameraDetail() {
  const target = document.getElementById('camera-detail');
  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('camera') || cameraData[0].slug;
  const camera = getCameraBySlug(slug);

  const gallery = camera.gallery.map((url, index) => `
    <figure class="gallery-item">
      <img src="${url}" alt="${camera.name} sample ${index + 1}" loading="lazy">
    </figure>
  `).join('');

  target.innerHTML = `
    <a class="back-link" href="services.html">← Back to Cameras</a>
    <section class="detail-hero">
      <div class="detail-copy">
        <p class="eyebrow">Camera detail page</p>
        <h2>${camera.name}</h2>
        <p class="lead">${camera.about}</p>
        <p class="detail-price">${camera.price}</p>
        <div class="card-actions detail-actions">
          <a class="btn" href="${checkoutHref(camera.slug)}">Check Out</a>
        </div>
      </div>
      <img class="detail-image" src="${camera.image}" alt="${camera.name}">
    </section>

    <section class="detail-section">
      <h3>Sample Photos</h3>
      <div class="gallery">
        ${gallery}
      </div>
    </section>

    <section class="detail-section">
      <h3>Camera Features</h3>
      <ul class="feature-list">
        ${camera.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    </section>
  `;
}

function renderAboutSection() {
  const about = document.getElementById('about-copy');
  if (!about) return;
  about.innerHTML = `
    <p>Lente was created for people who need reliable camera gear without the pressure of buying everything upfront. We understand how much a project can depend on the right camera, and we wanted to build a place that makes renting feel simple, honest, and approachable.</p>
    <p>Every booking matters to us. Whether you are preparing for a wedding, a student project, a brand shoot, or your first content session, we want you to feel supported from the moment you browse until the day you return the gear.</p>
    <p>We care about the details that build trust: clean equipment, careful checks, clear communication, and a team that treats your shoot like it matters. At Lente, we want the experience to feel calm, human, and dependable every step of the way.</p>
  `;
}

function renderCheckoutPage() {
  const target = document.getElementById('checkout-content');
  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('camera') || cameraData[0].slug;
  const camera = getCameraBySlug(slug);

  target.innerHTML = `
    <a class="back-link" href="camera-details.html?camera=${encodeURIComponent(camera.slug)}">← Back to Camera Details</a>
    <div class="checkout-layout">
      <section class="detail-section checkout-summary">
        <h3>Order Summary</h3>
        <p class="eyebrow">Ready for checkout</p>
        <h2 style="border-left:none;padding-left:0;margin-bottom:6px">${camera.name}</h2>
        <p class="lead" style="margin-bottom:12px">${camera.short}</p>
        <div class="summary-line"><span>Rental rate</span><strong>${camera.price}</strong></div>
        <div class="summary-total"><span>Total</span><strong>${camera.price}</strong></div>
      </section>

      <section class="detail-section checkout-dates">
        <h3>Choose Rental Dates</h3>
        <div class="booking-panel">
          <div>
            <label for="checkout-start">Rental Start Date</label>
            <input type="date" id="checkout-start">
          </div>
          <div>
            <label for="checkout-end">Rental End Date</label>
            <input type="date" id="checkout-end">
          </div>
        </div>
        <p class="booking-note">Select your preferred dates before you complete payment.</p>
      </section>

      <section class="detail-section">
        <h3>Payment Details</h3>
        <form class="payment-form checkout-grid" id="checkout-form">
          <div class="field field-full">
            <label for="checkout-name">Name on Card</label>
            <input type="text" id="checkout-name" placeholder="Your full name">
          </div>
          <div class="field field-full">
            <label for="checkout-email">Email Address</label>
            <input type="email" id="checkout-email" placeholder="you@example.com">
          </div>
          <div class="field field-full">
            <label for="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="1234 5678 9012 3456">
          </div>
          <div class="field">
            <label for="expiry">Expiry Date</label>
            <input type="text" id="expiry" placeholder="MM/YY">
          </div>
          <div class="field">
            <label for="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="123">
          </div>
          <div class="field field-full">
            <label for="billing-address">Billing Address</label>
            <input type="text" id="billing-address" placeholder="Street, city, province">
          </div>
          <p class="payment-note field field-full">This is a basic checkout form for presentation. Payment is not processed on this demo site.</p>
          <button type="button" class="btn field field-full">Complete Payment</button>
        </form>
      </section>
    </div>
  `;
}

renderServicesPage();
renderFeaturedCameras();
renderCameraDetail();
renderCheckoutPage();
renderAboutSection();

const year = document.querySelector('.year');
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
