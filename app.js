/* ==========================================================================
   🎬 MODULE 1: GSAP ENTRANCE ANIMATIONS & OSCILLATIONS
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
    // Sequence loader tracking global entry transitions
    const entranceTimeline = gsap.timeline();
    
    entranceTimeline.to('header', { opacity: 1, duration: 0.4 })
                    .from('.marjo-portrait-card', { scale: 0.92, rotation: -4, opacity: 0, duration: 0.6, ease: 'back.out(1.2)' }, '-=0.2')
                    .from('.hero-main-title', { y: 25, opacity: 0, duration: 0.4 }, '-=0.3')
                    .from('.hero-description, .action-button-row', { y: 15, opacity: 0, duration: 0.4, stagger: 0.08 }, '-=0.2')
                    .from('.float-element, .float-sticker', { scale: 0, opacity: 0, stagger: 0.05, duration: 0.35, ease: 'back.out(1.5)' }, '-=0.15');

    // Smooth neobrutalist floating oscillations (In-place looping animations)
    gsap.to('.layer-1', { y: '+=8', rotation: '+=1.5', duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.layer-2', { y: '-=10', rotation: '-=2', duration: 3.4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.sticker-game', { rotation: '-=6', x: '+=4', duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
   
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggleBtn = document.getElementById("menuToggleBtn");
    const dropdownMenuSheet = document.getElementById("dropdownMenuSheet");

    if (menuToggleBtn && dropdownMenuSheet) {
        // Handle explicit click interactions
        menuToggleBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Stops immediate document body bubbling closures
            const isOpen = dropdownMenuSheet.classList.contains("is-active");

            if (!isOpen) {
                menuToggleBtn.classList.add("active");
                dropdownMenuSheet.classList.add("is-active");
            } else {
                menuToggleBtn.classList.remove("active");
                dropdownMenuSheet.classList.remove("is-active");
            }
        });

        // Close down layout panel if an option is picked
        dropdownMenuSheet.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menuToggleBtn.classList.remove("active");
                dropdownMenuSheet.classList.remove("is-active");
            });
        });

        // Safe closure fallbacks if user clicks anywhere else on page canvas
        document.addEventListener("click", (e) => {
            if (!dropdownMenuSheet.contains(e.target) && e.target !== menuToggleBtn) {
                menuToggleBtn.classList.remove("active");
                dropdownMenuSheet.classList.remove("is-active");
            }
        });
    }
});

/* ==========================================================================
   🖱️ MODULE 2: MOUSE-TRACKING ENVIRONMENT PARALLAX DRIFT
   ========================================================================== */
document.addEventListener('mousemove', (mouseEvent) => {
    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight;
    
    // Normalize coordinates around zero baseline center point
    const normalizedX = (mouseEvent.clientX - viewWidth / 2) / (viewWidth / 2);
    const normalizedY = (mouseEvent.clientY - viewHeight / 2) / (viewHeight / 2);

    // Multi-layered distance distribution engine (Creates physical depth perception)
    gsap.to('.layer-1', { x: normalizedX * 35, y: normalizedY * 35, duration: 0.7 });
    gsap.to('.layer-2', { x: normalizedX * -25, y: normalizedY * -25, duration: 0.7 });
    gsap.to('.marjo-portrait-card', { x: normalizedX * 8, y: normalizedY * 8, duration: 0.5 });
    
    gsap.to('.sticker-code', { x: normalizedX * -10, y: normalizedY * 10, duration: 0.6 });
    gsap.to('.sticker-game', { x: normalizedX * 14, y: normalizedY * -10, duration: 0.6 });
    gsap.to('.sticker-mountain', { x: normalizedX * -8, y: normalizedY * -14, duration: 0.6 });
});


/* ==========================================================================
   🔊 MODULE 3: UNIFIED AUDIO ENGINE MATRIX (RECOMMEND GRID & BOTTOM BAR)
   ========================================================================== */
const musicDatabase = [
    { title: "I Love You So", artist: "The Walters", file: "https://res.cloudinary.com/dyf5x6iqz/video/upload/v1780631849/I_Love_You_So_spotdown.org_i6l12t.mp3" },
    { title: "Step Into My Life", artist: "Powfu", file: "https://res.cloudinary.com/dyf5x6iqz/video/upload/step_into_my_life_spotdown.org_k10e01.mp3" },
    { title: "Sailor Song", artist: "Gigi Perez", file: "https://res.cloudinary.com/dyf5x6iqz/video/upload/SpotiDown.App_-_Sailor_Song_-_Gigi_Perez_ljjiyw.mp3" },
    { title: "I Thought I Saw Your Face Today", artist: "She & Him", file: "https://res.cloudinary.com/dyf5x6iqz/video/upload/I_Thought_I_Saw_Your_Face_Today_spotdown.org_qxgjg2.mp3" },
    { title: "20 Min", artist: "Lil Uzi Vert", file: "https://res.cloudinary.com/dyf5x6iqz/video/upload/SpotiDown.App_-_20_Min_-_Lil_Uzi_Vert_yyrvux.mp3" },
    { title: "Young Dumb & Broke", artist: "Khalid", file: "https://res.cloudinary.com/dyf5x6iqz/video/upload/SpotiDown.App_-_Young_Dumb___Broke_-_Khalid_lyvtlx.mp3" },
    { title: "Falling Down", artist: "Lil Peep", file: "https://res.cloudinary.com/dyf5x6iqz/video/upload/SpotiDown.App_-_Falling_Down_-_Bonus_Track_-_Lil_Peep_prnrnw.mp3" },
    { title: "Hate Me", artist: "Ellie Goulding, juice WRLD", file: "https://res.cloudinary.com/dyf5x6iqz/video/upload/SpotiDown.App_-_Hate_Me__with_Juice_WRLD__-_Ellie_Goulding_hwn1pa.mp3" },
    { title: "Gods Plan", artist: "Drake", file: "https://res.cloudinary.com/dyf5x6iqz/video/upload/SpotiDown.App_-_God_s_Plan_-_Drake_xt5zor.mp3" },
    { title: "All Eyes On Me", artist: "2 Pac", file: "https://res.cloudinary.com/dyf5x6iqz/video/upload/SpotiDown.App_-_All_Eyez_On_Me__ft._Big_Syke__-_2Pac_d6ceu9.mp3" },
    { title: "Big Poppa-2005 Remaster", artist: "The Notorious B.I.G", file: "https://res.cloudinary.com/dyf5x6iqz/video/upload/SpotiDown.App_-_Big_Poppa_-_2005_Remaster_-_The_Notorious_B.I.G._gjfr7n.mp3" },
    { title: "Timeless", artist: "The Weekend", file: "https://res.cloudinary.com/dyf5x6iqz/video/upload/SpotiDown.App_-_Timeless__feat_Playboi_Carti__-_The_Weeknd_t8pfcj.mp3" }
];

let trackIdx = 0;
let isAudioRunning = false;

// UI Layout Selectors hooking the physical media dock DOM targets
const audioDevice = document.getElementById('html5-audio-engine');
const dockTitle = document.getElementById('dock-title');
const dockArtist = document.getElementById('dock-artist');
const dockPlayBtn = document.getElementById('dock-play-btn');

// Capture row array nodes to synchronize dynamic click highlights
const trackRowsArrangement = Array.from(document.querySelectorAll('.apple-track-row'));
let currentActiveCard = null;

// Initialize track 1 inside player quietly upon initialization
window.addEventListener('DOMContentLoaded', () => {
    if(trackRowsArrangement.length > 0) {
        syncMediaBar(false); 
    }
});

// Primary audio state management engine
function syncMediaBar(shouldPlay = true) {
    if (!audioDevice || trackRowsArrangement.length === 0) return;
    
    // Un-highlight previous track row
    if (currentActiveCard) {
        currentActiveCard.classList.remove('is-playing', 'audio-active');
    }

    // Mount database files directly into the native media element
    audioDevice.src = musicDatabase[trackIdx].file;
    dockTitle.innerText = musicDatabase[trackIdx].title;
    dockArtist.innerText = musicDatabase[trackIdx].artist;
    
    // Bind current card view index selector
    currentActiveCard = trackRowsArrangement[trackIdx];
    if (currentActiveCard) {
        currentActiveCard.classList.add('is-playing');
    }

    // Text jump effect on transition
    gsap.fromTo('#dock-title', { y: 3, opacity: 0.7 }, { y: 0, opacity: 1, duration: 0.2 });

    // Handle play state transitions smoothly while respecting native security protocols
    if (shouldPlay) {
        audioDevice.play().then(() => {
            isAudioRunning = true;
            if (currentActiveCard) currentActiveCard.classList.add('audio-active');
            dockPlayBtn.innerText = "PAUSE";
            dockPlayBtn.style.background = "#ffb7b2";
        }).catch((err) => {
            console.log("Autoplay blocked. Safely waiting for direct user gesture handler.", err);
            isAudioRunning = false;
            if (currentActiveCard) currentActiveCard.classList.remove('audio-active');
        });
    }
}

// Click selection handler tied directly to .apple-track-row components
function selectTrack(rowElement) {
    const requestedIndex = trackRowsArrangement.indexOf(rowElement);
    if(requestedIndex !== -1) {
        trackIdx = requestedIndex;
        syncMediaBar(true);
    }
}

// Main Play/Pause Button Switch Handler
function triggerPlaybackToggle() {
    if (!audioDevice || !currentActiveCard) return;
    
    if (audioDevice.paused) {
        audioDevice.play().then(() => {
            isAudioRunning = true;
            currentActiveCard.classList.add('audio-active');
            dockPlayBtn.innerText = "PAUSE";
            dockPlayBtn.style.background = "#ffb7b2"; 
        }).catch(() => alert("Audio engine configuration ready. Mount local files or Cloudinary URLs to initialize live streams."));
    } else {
        audioDevice.pause();
        isAudioRunning = false;
        currentActiveCard.classList.remove('audio-active');
        dockPlayBtn.innerText = "PLAY";
        dockPlayBtn.style.background = "var(--mint-block)";
    }
}

// Media track incremental next loop pipeline
function triggerNextTrack() {
    trackIdx = (trackIdx + 1) % musicDatabase.length;
    syncMediaBar(true);
}

// Media track decremental previous loop pipeline
function triggerPrevTrack() {
    trackIdx = (trackIdx - 1 + musicDatabase.length) % musicDatabase.length;
    syncMediaBar(true);
}

// Automated listener executing a next-track hook immediately upon audio stream completion
if (audioDevice) {
    audioDevice.addEventListener('ended', () => {
        triggerNextTrack();
    });
}


/* ==========================================================================
   🧭 MODULE 4: GEOGRAPHIC INTERACTIVE RADAR (LEAFLET MAP INTEGRATION)
   ========================================================================== */
const regionalDatabase = {
    indore: {
        title: "Indore Urban Core",
        coords: [22.7196, 75.8577], // GPS: Rajwada Center Core Area
        desc: "Base coordinates / Central Hub. Reference operational point for trail sorties heading into surrounding wilderness sanctuaries and gorges.",
        track: "🎵 Station Ambient: Baseline Traffic",
        img: "https://res.cloudinary.com/dyf5x6iqz/image/upload/IMG_3256_qz4gt7.jpg",
        isAnchor: true
    },
    patalpani: {
        title: "Patalpani Falls",
        coords: [22.4968, 75.8647], // GPS: Gorge Overlook Edge Point
        desc: "A legendary valley gorge waterfall site south of the city, framed by active forest tracks and railway canyon curves. Ideal for intense day rucks.",
        track: "🎵 Track Vibe: Lost in the Woods",
        img: "https://res.cloudinary.com/dyf5x6iqz/image/upload/IMG_0778_oticxm.jpg",
        isAnchor: false
    },
    ralamandal: {
        title: "Ralamandal Sanctuary",
        coords: [22.647159, 75.918861], // GPS: Ridge Gate Line
        desc: "High-incline switchback trails running through protected habitat lanes straight to an old heritage hunting fortress watchtower summit.",
        track: "🎵 Track Vibe: Summit Velocity",
        img: "https://res.cloudinary.com/dyf5x6iqz/image/upload/IMG_6726_z2422n.jpg",
        isAnchor: false
    },
    bamniya: {
        title: "Bamniya Kund",
        coords: [22.4634, 75.8812], // GPS: Hidden Basin Floor
        desc: "Deep wilderness trek routing through isolated pool basins and raw stone structural cliffs. Highly technical paths hidden inside deep growth.",
        track: "🎵 Track Vibe: Canyon Echos",
        img: "https://res.cloudinary.com/dyf5x6iqz/image/upload/IMG_8103_fbvve4.jpg",
        isAnchor: false
    },
    mohadi: {
        title: "Mohadi Waterfall",
        coords: [22.569444, 76.005402], // GPS: Crest Lip Breakway
        desc: "A wide, dramatic vertical canyon wall plunge waterfall area. The surrounding valley tracks fill completely with thick mist systems during weather shifts.",
        track: "🎵 Track Vibe: Alpine Horizon",
        img: "https://res.cloudinary.com/dyf5x6iqz/image/upload/IMG_7756_nnohjq.jpg",
        isAnchor: false
    }
};

// Global control method to dynamically pivot map views over tracking stations
function flyToTrek(locKey) {
    const item = regionalDatabase[locKey];
    if (item) {
        map.flyTo(item.coords, 13, {
            animate: true,
            duration: 1.5
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Structural instantiation configuring boundaries for Leaflet engine
    const map = L.map('liveEngineMap', {
        center: [22.5800, 75.8900], 
        zoom: 11,
        minZoom: 10,
        maxZoom: 15,
        zoomControl: true, 
        scrollWheelZoom: false
    });

    // Mount the minimal dark-matter map tile overlay layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);

    // Hardware lock parameters constraining tracking limits to regional vectors
    const stateBoundaries = L.latLngBounds(L.latLng(22.20, 75.35), L.latLng(23.10, 76.35));
    map.setMaxBounds(stateBoundaries);

    // Connect display variables directly to layout card elements
    const sidebarTitle = document.getElementById('sidebar-title');
    const sidebarDesc = document.getElementById('sidebar-desc');
    const sidebarTrack = document.getElementById('sidebar-track');
    const sidebarImg = document.getElementById('sidebar-img');

    let createdPins = [];

    // Parse information tree array to dynamically draw customized vectors
    Object.keys(regionalDatabase).forEach(key => {
        const item = regionalDatabase[key];
        
        const htmlContent = item.isAnchor 
            ? `<div class="anchor-node" data-loc="${key}"></div>`
            : `<div class="pin-node ${key === 'mohadi' ? 'active-pin' : ''}" data-loc="${key}"></div>`;

        const customIcon = L.divIcon({
            html: htmlContent,
            className: 'custom-map-wrapper',
            iconSize: item.isAnchor ? [24, 24] : [32, 32], 
            iconAnchor: item.isAnchor ? [12, 12] : [16, 32] 
        });

        const marker = L.marker(item.coords, { icon: customIcon }).addTo(map);

        setTimeout(() => {
            const el = marker.getElement().querySelector('[data-loc]');
            if (el && !item.isAnchor) createdPins.push(el);
            
            // Interaction pipeline rendering details into sidebar UI on node click
            marker.on('click', () => {
                if (!item.isAnchor) {
                    createdPins.forEach(p => p.classList.remove('active-pin'));
                    el.classList.add('active-pin');
                }

                if (sidebarTitle) {
                    sidebarTitle.innerText = item.title;
                    sidebarDesc.innerText = item.desc;
                    sidebarTrack.innerText = item.track;
                    sidebarImg.src = item.img;

                    if (typeof gsap !== "undefined") {
                        gsap.fromTo('#sidebar-panel', { x: 10, opacity: 0.8 }, { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' });
                    }
                }
            });
        }, 50);
    });
});


/* ==========================================================================
   💻 MODULE 6: COMMAND INTERACTION ROUTINE (TERMINAL INFRASTRUCTURE)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("terminalInputField");
    const logDisplay = document.getElementById("terminalLog");

    // Dynamic router handling external redirection URLs
    const warpCodes = {
        "school": "https://yuvrajchouhan09.github.io/me/school.html",
        "yuvraj": "https://yuvrajchouhan09.github.io/Yuvraj/"
    };

    // Text outputs responding directly onto console screens
    const textCommands = {
        "hello": "Console: Greet_Protocol initiated. Welcome back, agent.",
        "status": "Console: All server arrays running within optimal temperature parameters.",
        "clear": "SYSTEM_COMMAND_CLEAR",
        "help": "SYSTEM: Available commands -> 'hello', 'status', 'school', 'clear'."
    };

    // Formatter engine drawing stream text loops dynamically into view track
    function printLog(text, typeClass = "log-info") {
        const p = document.createElement("p");
        p.className = typeClass;
        p.textContent = text;
        logDisplay.appendChild(p);
        logDisplay.scrollTop = logDisplay.scrollHeight; 
    }

    if (inputField) {
        inputField.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const rawInput = inputField.value.trim();
                const cleanInput = rawInput.toLowerCase();
                inputField.value = ""; 

                if (rawInput === "") return;

                // Print the prompt trace log back on screen display layout
                printLog(`$> ${rawInput}`, "log-user");

                // Route Match Area 1: Text Strings Map
                if (textCommands.hasOwnProperty(cleanInput)) {
                    if (cleanInput === "clear") {
                        logDisplay.innerHTML = "";
                    } else {
                        printLog(textCommands[cleanInput], "log-init");
                    }
                } 
                // Route Match Area 2: Anchor Redirection Matrices
                else if (warpCodes.hasOwnProperty(cleanInput)) {
                    printLog("[DECRYPTING] Match confirmed. Bypassing proxy walls...", "log-success");
                    printLog(`[WARPING] Redirecting external browser path to remote matrix host...`, "log-init");
                    
                    setTimeout(() => {
                        window.location.href = warpCodes[cleanInput];
                    }, 1200);
                } 
                // Error Exception Handler Exception
                else {
                    printLog(`[ERROR] Secure validation handshake broken.`, "log-error");
                    printLog(`'${rawInput}' is not a recognized operational script protocol sequence or system keyword.`, "log-error");
                }
            }
        });
    }
});


/* ==========================================================================
   🌐 MODULE 7: SCROLLTRIGGER NETWORK INTEGRATION FOR DIGITAL SOCIAL FOOTPRINT
   ========================================================================== */
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    // Dynamic execution parser managing entry transitions for Social cards
    gsap.from(".matrix-card", {
        scrollTrigger: {
            trigger: "#social-matrix",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out"
    });
}
