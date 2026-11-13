// scenes.js — 14 original pixel-art scenes, drawn in Canvas 2D at 480×288 (16×16 tile base)
// IP-clean: original trainer "Kai", original partner creature "Lumina", original region names

const SCENES = [
  {
    id: 1,
    slug: "willow-hollow",
    region: "Willow Hollow",
    title: "Willow Hollow — The Start",
    caption: "Kai receives their first partner creature, Lumina, from Professor Vale. A bond begins.",
    heroic: true,
    beatLabel: "Heroic Beat #1",
    whyHeroic: "Choosing trust over fear — Kai extends a hand to Lumina despite the unknown, founding a partnership on mutual respect.",
    draw: drawWillowHollow
  },
  {
    id: 2,
    slug: "first-trail",
    region: "Willow Hollow",
    title: "First Trail — The Crossing",
    caption: "Kai and Lumina cross the rickety bridge over Whisper Creek. The first real test of their partnership.",
    heroic: false,
    draw: drawFirstTrail
  },
  {
    id: 3,
    slug: "oakwood-gym",
    region: "Oakwood",
    title: "Oakwood Gym — The First Badge",
    caption: "Kai earns the Acorn Badge after a battle where Lumina's clever strategy outshines raw power.",
    heroic: true,
    beatLabel: "Heroic Beat #2",
    whyHeroic: "Winning through empathy and strategy — Kai refuses to push Lumina past its limits, proving kindness wins.",
    draw: drawOakwoodGym
  },
  {
    id: 4,
    slug: "silver-ridge",
    region: "Silver Ridge",
    title: "Silver Ridge — The Mountain Pass",
    caption: "Kai and Lumina navigate the misty mountain pass, helping a lost traveler find their way home.",
    heroic: false,
    draw: drawSilverRidge
  },
  {
    id: 5,
    slug: "ember-cavern",
    region: "Silver Ridge",
    title: "Ember Cavern — The Rescue",
    caption: "Deep in the cavern, Kai risks everything to save a trapped wild creature, earning a lifelong ally.",
    heroic: true,
    beatLabel: "Heroic Beat #3",
    whyHeroic: "Selfless rescue — Kai endangers themselves for a creature that cannot fight back, proving the bond goes both ways.",
    draw: drawEmberCavern
  },
  {
    id: 6,
    slug: "tidewater-city",
    region: "Tidewater",
    title: "Tidewater City — The Harbor",
    caption: "Kai watches the sunrise over the harbor, reflecting on how far they've come from Willow Hollow.",
    heroic: false,
    draw: drawTidewaterCity
  },
  {
    id: 7,
    slug: "tidewater-gym",
    region: "Tidewater",
    title: "Tidewater Gym — The Wave Badge",
    caption: "A battle on floating platforms tests Kai's adaptability. Lumina learns a new technique mid-fight.",
    heroic: true,
    beatLabel: "Heroic Beat #4",
    whyHeroic: "Growth through adversity — Kai trusts Lumina to improvise, and their bond deepens through shared challenge.",
    draw: drawTidewaterGym
  },
  {
    id: 8,
    slug: "verdant-woods",
    region: "Verdant Woods",
    title: "Verdant Woods — The Ancient Tree",
    caption: "Kai discovers the Ancient Tree and learns the history of the first human-creature bond.",
    heroic: false,
    draw: drawVerdantWoods
  },
  {
    id: 9,
    slug: "storm-peak",
    region: "Storm Peak",
    title: "Storm Peak — The Tempest",
    caption: "A sudden storm traps travelers. Kai and Lumina guide them to safety through lightning and wind.",
    heroic: true,
    beatLabel: "Heroic Beat #5",
    whyHeroic: "Leadership under pressure — Kai becomes the calm in the storm for those who have lost hope.",
    draw: drawStormPeak
  },
  {
    id: 10,
    slug: "crystal-cavern",
    region: "Crystal Peaks",
    title: "Crystal Cavern — The Reflection",
    caption: "In the crystal caves, Kai faces their doubts reflected in the walls. Lumina's steady presence grounds them.",
    heroic: false,
    draw: drawCrystalCavern
  },
  {
    id: 11,
    slug: "crystal-championship",
    region: "Crystal Peaks",
    title: "Crystal Championship — The Summit",
    caption: "The regional tournament. Kai faces their rival in a battle where friendship, not force, decides the victor.",
    heroic: true,
    beatLabel: "Heroic Beat #6",
    whyHeroic: "Victory through understanding — Kai reaches their rival's heart, turning competition into mutual respect.",
    draw: drawCrystalChampionship
  },
  {
    id: 12,
    slug: "eternal-horizon",
    region: "Eternal Horizon",
    title: "Eternal Horizon — New Beginnings",
    caption: "At the edge of the known world, Kai looks toward undiscovered lands. The journey continues.",
    heroic: true,
    beatLabel: "Heroic Beat #7",
    whyHeroic: "The courage to keep walking — Kai chooses the unknown over comfort, inspiring all who follow.",
    draw: drawEternalHorizon
  },
  {
    id: 13,
    slug: "luminas-choice",
    region: "Willow Hollow (Return)",
    title: "Lumina's Choice — The Return",
    caption: "Back where it began, Lumina is offered a place among the legends. It chooses to stay by Kai's side.",
    heroic: true,
    beatLabel: "Heroic Beat #8",
    whyHeroic: "Love over legend — Lumina chooses the quiet bond over eternal glory, the truest heroic act of all.",
    draw: drawLuminasChoice
  },
  {
    id: 14,
    slug: "endless-road",
    region: "Beyond",
    title: "Endless Road — The Journey Continues",
    caption: "New trainers look to Kai and Lumina as their example. The heroic journey becomes a shared story.",
    heroic: false,
    draw: drawEndlessRoad
  }
];

// Pixel art drawing functions — all 480×288, 16×16 tile base
// Palette: dark base, lumina cyan, warm gold, forest green, amber, crystal, storm gray, sunset orange

function drawWillowHollow(ctx) {
  ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,480,288);
  // Ground
  ctx.fillStyle = '#2d4a2d'; ctx.fillRect(0, 200, 480, 88);
  // Grass blades
  ctx.fillStyle = '#4a7c59';
  for(let x=0;x<480;x+=12) ctx.fillRect(x+Math.random()*4, 195+Math.random()*6, 2, 8);
  // Professor Vale's lab
  ctx.fillStyle = '#8d6e63'; ctx.fillRect(120, 80, 120, 100);
  ctx.fillStyle = '#6d4c41'; ctx.fillRect(130, 70, 100, 12);
  // Kai
  drawTrainer(ctx, 200, 170, 'down');
  // Lumina
  drawLumina(ctx, 230, 165, 'idle');
  // Title
  ctx.font = '14px "Courier New"'; ctx.fillStyle = '#00f3ff';
  ctx.fillText('WILLOW HOLLOW', 180, 30);
}

function drawFirstTrail(ctx) {
  ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,480,288);
  // Creek
  ctx.fillStyle = '#1e4d8a'; ctx.fillRect(100, 120, 280, 60);
  ctx.fillStyle = '#29b6f6'; ctx.fillRect(110, 130, 260, 40);
  // Bridge
  ctx.fillStyle = '#5d4037'; ctx.fillRect(140, 130, 200, 20);
  ctx.fillStyle = '#4a3228'; for(let x=140;x<340;x+=20) ctx.fillRect(x, 130, 10, 20);
  drawTrainer(ctx, 200, 150, 'right');
  drawLumina(ctx, 240, 155, 'walk');
  ctx.font = '14px "Courier New"'; ctx.fillStyle = '#00f3ff';
  ctx.fillText('FIRST TRAIL', 200, 30);
}

function drawOakwoodGym(ctx) {
  ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,480,288);
  // Gym interior
  ctx.fillStyle = '#3a3a5a'; ctx.fillRect(60, 60, 360, 180);
  ctx.fillStyle = '#5c4033'; ctx.fillRect(80, 80, 320, 140);
  // Badge
  ctx.fillStyle = '#ffd700'; ctx.beginPath(); ctx.arc(240, 120, 30, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#1a1a2e'; ctx.fillRect(225, 105, 30, 30);
  drawTrainer(ctx, 200, 180, 'up');
  drawLumina(ctx, 240, 185, 'cheer');
  ctx.font = '14px "Courier New"'; ctx.fillStyle = '#00f3ff';
  ctx.fillText('OAKWOOD GYM', 185, 30);
}

function drawSilverRidge(ctx) {
  ctx.fillStyle = '#0d1b2a'; ctx.fillRect(0,0,480,288);
  // Mountains
  ctx.fillStyle = '#2d3a4a'; ctx.beginPath(); ctx.moveTo(0,180); ctx.lineTo(150,80); ctx.lineTo(300,160); ctx.lineTo(480,90); ctx.lineTo(480,288); ctx.lineTo(0,288); ctx.fill();
  ctx.fillStyle = '#4a5a6a'; ctx.beginPath(); ctx.moveTo(0,200); ctx.lineTo(200,100); ctx.lineTo(480,140); ctx.lineTo(480,288); ctx.lineTo(0,288); ctx.fill();
  // Mist
  ctx.fillStyle = 'rgba(180,200,220,0.15)'; ctx.fillRect(0, 100, 480, 100);
  drawTrainer(ctx, 240, 200, 'left');
  drawLumina(ctx, 200, 205, 'walk');
  ctx.font = '14px "Courier New"'; ctx.fillStyle = '#00f3ff';
  ctx.fillText('SILVER RIDGE', 190, 30);
}

function drawEmberCavern(ctx) {
  ctx.fillStyle = '#1a0a0a'; ctx.fillRect(0,0,480,288);
  // Cavern walls
  ctx.fillStyle = '#3a2a2a'; ctx.fillRect(0, 0, 480, 80);
  ctx.fillStyle = '#2a1a1a'; ctx.fillRect(0, 200, 480, 88);
  // Glowing crystals
  ctx.fillStyle = '#ff6b6b';
  for(let i=0;i<20;i++) {
    const x = 40 + i*20 + Math.random()*10;
    const y = 100 + Math.random()*80;
    ctx.beginPath(); ctx.arc(x,y, 3+Math.random()*3, 0, Math.PI*2); ctx.fill();
  }
  // Rescued creature
  drawLumina(ctx, 240, 180, 'idle'); // represents rescued
  drawTrainer(ctx, 200, 185, 'up');
  ctx.font = '14px "Courier New"'; ctx.fillStyle = '#ff6b6b';
  ctx.fillText('EMBER CAVERN', 185, 30);
}

function drawTidewaterCity(ctx) {
  ctx.fillStyle = '#0a1a2a'; ctx.fillRect(0,0,480,288);
  // Water
  ctx.fillStyle = '#1e4d8a'; ctx.fillRect(0, 180, 480, 108);
  ctx.fillStyle = '#29b6f6';
  for(let y=185; y<280; y+=8) ctx.fillRect(0, y, 480, 2);
  // Sunrise
  ctx.fillStyle = '#ffd700'; ctx.beginPath(); ctx.arc(240, 170, 50, 0, Math.PI*2); ctx.fill();
  // Harbor buildings
  ctx.fillStyle = '#2a2a4a'; ctx.fillRect(20, 100, 120, 80);
  ctx.fillStyle = '#1a1a3a'; ctx.fillRect(340, 100, 120, 80);
  drawTrainer(ctx, 150, 200, 'right');
  drawLumina(ctx, 180, 205, 'idle');
  ctx.font = '14px "Courier New"'; ctx.fillStyle = '#00f3ff';
  ctx.fillText('TIDEWATER CITY', 170, 30);
}

function drawTidewaterGym(ctx) {
  ctx.fillStyle = '#0a1a2a'; ctx.fillRect(0,0,480,288);
  // Floating platforms
  ctx.fillStyle = '#1a2a3a';
  for(let i=0;i<5;i++) {
    ctx.fillRect(50 + i*80, 120 + i*25, 100, 20);
    ctx.fillStyle = '#29b6f6'; ctx.fillRect(50 + i*80, 120 + i*25, 100, 4);
  }
  drawTrainer(ctx, 180, 100, 'down');
  drawLumina(ctx, 220, 110, 'attack');
  ctx.font = '14px "Courier New"'; ctx.fillStyle = '#00f3ff';
  ctx.fillText('TIDEWATER GYM', 180, 30);
}

function drawVerdantWoods(ctx) {
  ctx.fillStyle = '#0a1a12'; ctx.fillRect(0,0,480,288);
  // Ancient tree
  ctx.fillStyle = '#2a4a2a'; ctx.fillRect(180, 40, 120, 240);
  ctx.fillStyle = '#1a3a1a'; ctx.beginPath(); ctx.arc(240, 80, 80, 0, Math.PI*2); ctx.fill();
  // Light rays
  ctx.fillStyle = 'rgba(255,215,0,0.15)';
  for(let a=0;a<6;a++) ctx.fillRect(240 + Math.cos(a)*100, 80 + Math.sin(a)*100, 200, 10);
  drawTrainer(ctx, 240, 240, 'up');
  drawLumina(ctx, 240, 200, 'cheer');
  ctx.font = '14px "Courier New"'; ctx.fillStyle = '#4a7c59';
  ctx.fillText('VERDANT WOODS', 175, 30);
}

function drawStormPeak(ctx) {
  ctx.fillStyle = '#1a1a2a'; ctx.fillRect(0,0,480,288);
  // Dark storm clouds
  ctx.fillStyle = '#2a2a3a'; ctx.fillRect(0, 0, 480, 140);
  // Lightning
  ctx.strokeStyle = '#ffd700'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(200, 0); ctx.lineTo(220, 80); ctx.lineTo(190, 140); ctx.stroke();
  // Ground
  ctx.fillStyle = '#2a2a3a'; ctx.fillRect(0, 200, 480, 88);
  drawTrainer(ctx, 240, 210, 'left');
  drawLumina(ctx, 200, 215, 'protect');
  ctx.font = '14px "Courier New"'; ctx.fillStyle = '#ffd700';
  ctx.fillText('STORM PEAK', 190, 30);
}

function drawCrystalCavern(ctx) {
  ctx.fillStyle = '#0a0a1a'; ctx.fillRect(0,0,480,288);
  // Crystals
  ctx.fillStyle = '#00f3ff'; ctx.globalAlpha = 0.3;
  for(let i=0;i<15;i++) {
    const x = 50 + i*28; const y = 60 + (i%2)*120;
    ctx.beginPath(); ctx.moveTo(x, y);
    ctx.lineTo(x+20, y-40); ctx.lineTo(x+40, y); ctx.lineTo(x+20, y+40); ctx.closePath(); ctx.fill();
  }
  ctx.globalAlpha = 1.0;
  // Reflections
  ctx.fillStyle = 'rgba(0,243,255,0.08)'; ctx.fillRect(0, 200, 480, 88);
  drawTrainer(ctx, 240, 220, 'up');
  drawLumina(ctx, 240, 180, 'idle');
  ctx.font = '14px "Courier New"'; ctx.fillStyle = '#00f3ff';
  ctx.fillText('CRYSTAL CAVERN', 170, 30);
}

function drawCrystalChampionship(ctx) {
  ctx.fillStyle = '#0a0a1a'; ctx.fillRect(0,0,480,288);
  // Arena
  ctx.fillStyle = '#1a1a2a'; ctx.fillRect(40, 60, 400, 180);
  // Crystal pillars
  ctx.fillStyle = '#00f3ff'; ctx.globalAlpha = 0.4;
  for(let i=0;i<8;i++) ctx.fillRect(60+i*50, 70, 15, 160);
  ctx.globalAlpha = 1.0;
  // Rival trainer (silhouette)
  ctx.fillStyle = '#ff6b6b'; drawSilhouetteTrainer(ctx, 350, 180, 'up');
  drawTrainer(ctx, 180, 180, 'right');
  drawLumina(ctx, 220, 185, 'cheer');
  ctx.font = '14px "Courier New"'; ctx.fillStyle = '#00f3ff';
  ctx.fillText('CRYSTAL CHAMPIONSHIP', 150, 30);
}

function drawEternalHorizon(ctx) {
  ctx.fillStyle = '#0a0a12'; ctx.fillRect(0,0,480,288);
  // Horizon gradient
  const grad = ctx.createLinearGradient(0, 100, 0, 288);
  grad.addColorStop(0, '#1a0a2a'); grad.addColorStop(0.5, '#0a1a2a'); grad.addColorStop(1, '#0a0a12');
  ctx.fillStyle = grad; ctx.fillRect(0, 100, 480, 188);
  // Stars
  ctx.fillStyle = '#fff'; for(let i=0;i<80;i++) ctx.fillRect(Math.random()*480, Math.random()*100, 1, 1);
  // Distant lands
  ctx.fillStyle = '#1a1a2a'; ctx.fillRect(100, 120, 80, 80); ctx.fillRect(300, 130, 60, 70);
  drawTrainer(ctx, 240, 220, 'right');
  drawLumina(ctx, 280, 225, 'idle');
  ctx.font = '14px "Courier New"'; ctx.fillStyle = '#ffd700';
  ctx.fillText('ETERNAL HORIZON', 160, 30);
}

function drawLuminasChoice(ctx) {
  ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,480,288);
  // Willow Hollow lab again, but glowing
  ctx.fillStyle = '#8d6e63'; ctx.fillRect(120, 80, 120, 100);
  ctx.fillStyle = '#6d4c41'; ctx.fillRect(130, 70, 100, 12);
  // Glowing choice effect
  ctx.fillStyle = 'rgba(0,243,255,0.3)'; ctx.beginPath(); ctx.arc(240, 140, 60, 0, Math.PI*2); ctx.fill();
  drawTrainer(ctx, 200, 180, 'down');
  drawLumina(ctx, 240, 175, 'cheer'); // glowing
  ctx.font = '14px "Courier New"'; ctx.fillStyle = '#00f3ff';
  ctx.fillText('LUMINA\'S CHOICE', 160, 30);
}

function drawEndlessRoad(ctx) {
  ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,480,288);
  // Road stretching to horizon
  ctx.fillStyle = '#2a2a3a';
  ctx.beginPath(); ctx.moveTo(200, 100); ctx.lineTo(100, 288); ctx.lineTo(380, 288); ctx.lineTo(280, 100); ctx.fill();
  // New trainers
  for(let i=0;i<4;i++) {
    drawSmallTrainer(ctx, 140 + i*80, 220, 'up');
    drawSmallTrainer(ctx, 160 + i*80, 220, 'up');
  }
  drawTrainer(ctx, 240, 180, 'right');
  drawLumina(ctx, 280, 185, 'idle');
  ctx.font = '14px "Courier New"'; ctx.fillStyle = '#ffd700';
  ctx.fillText('ENDLESS ROAD', 165, 30);
}

// Helper drawing functions
function drawTrainer(ctx, x, y, dir) {
  // Original trainer "Kai" - simple pixel sprite
  const b = 3;
  ctx.fillStyle = '#e8eaf6'; // skin
  ctx.fillRect(x-4, y-20, 8, 10); // head
  ctx.fillStyle = '#2a2a4a'; // dark hair
  ctx.fillRect(x-5, y-22, 10, 8);
  // Outfit
  ctx.fillStyle = '#1a1a3a'; // dark jacket
  ctx.fillRect(x-5, y-10, 10, 16);
  ctx.fillStyle = '#00f3ff'; // cyan accent
  ctx.fillRect(x-2, y-6, 4, 4);
  // Arms
  ctx.fillStyle = '#e8eaf6';
  ctx.fillRect(x-8, y-8, 6, 10);
  ctx.fillRect(x+2, y-8, 6, 10);
  // Legs
  ctx.fillStyle = '#1a1a2a'; // dark pants
  ctx.fillRect(x-3, y+6, 5, 12);
  ctx.fillRect(x, y+6, 5, 12);
  // Direction offsets
  if(dir === 'left') { ctx.fillStyle = '#e8eaf6'; ctx.fillRect(x-10, y-5, 4, 8); }
  if(dir === 'right') { ctx.fillStyle = '#e8eaf6'; ctx.fillRect(x+6, y-5, 4, 8); }
  if(dir === 'up') { ctx.fillRect(x-3, y-22, 8, 6); }
}

function drawLumina(ctx, x, y, state) {
  // Original partner "Lumina" - cyan glowing creature
  const glow = state === 'cheer' || state === 'protect' || state === 'attack';
  ctx.fillStyle = glow ? 'rgba(0,243,255,0.5)' : 'rgba(0,243,255,0.3)';
  ctx.beginPath(); ctx.arc(x, y, glow ? 28 : 22, 0, Math.PI*2); ctx.fill();
  // Body
  ctx.fillStyle = '#00f3ff';
  ctx.beginPath(); ctx.arc(x, y, 16, 0, Math.PI*2); ctx.fill();
  // Eyes
  ctx.fillStyle = '#fff';
  ctx.beginPath(); ctx.arc(x-5, y-4, 4, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(x+5, y-4, 4, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#00f3ff';
  ctx.beginPath(); ctx.arc(x-4, y-5, 2, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(x+6, y-5, 2, 0, Math.PI*2); ctx.fill();
  // Glow particles
  if(state === 'cheer' || state === 'attack' || state === 'protect') {
    ctx.fillStyle = '#fff';
    for(let i=0;i<8;i++) {
      const angle = (i/8)*Math.PI*2;
      ctx.beginPath(); ctx.arc(x+Math.cos(angle)*20, y+Math.sin(angle)*20, 2, 0, Math.PI*2); ctx.fill();
    }
  }
}

function drawSilhouetteTrainer(ctx, x, y, dir) {
  ctx.fillStyle = '#ff6b6b';
  drawTrainer(ctx, x, y, dir);
}

function drawSmallTrainer(ctx, x, y, dir) {
  ctx.fillStyle = '#e8eaf6';
  ctx.fillRect(x-2, y-12, 4, 6);
  ctx.fillStyle = '#1a1a3a';
  ctx.fillRect(x-2, y-6, 4, 10);
  ctx.fillStyle = '#1a1a2a';
  ctx.fillRect(x-1, y+4, 2, 6);
  ctx.fillRect(x+1, y+4, 2, 6);
}