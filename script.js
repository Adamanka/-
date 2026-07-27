// =====================================================
// ДАННЫЕ ТОВАРИЩЕЙ
// =====================================================
const comradesData = {
    ru: [
        { name: "Балсмег Скальный", class: "Варвар (Берсерк) · Полуорк", thought: "«Гроза полей и врагов. Когда Балсмег идёт в атаку — земля дрожит. Я бы не хотел оказаться на его пути. Надёжен, как гранитная скала.»" },
        { name: "Вейл Кр'ант", class: "Друид (Круг спор) · Тифлинг", thought: "«Тихий и задумчивый. Смотрит на мир иначе — как будто слышит то, чего не слышим мы. В бою неожиданно опасен. Доверяю его чутью.»" },
        { name: "Шесть", class: "Жрец (Домен жизни) · Зверолюд-заяц", thought: "«Лечит других, а сама — оружие без права выбора. Слишком похоже на меня. Я был псом Соларнтира, она — рабыня с верой. И это страшит — видеть, как достойный воин служит не по своей воле.»" },
        { name: "Каладан Броувер", class: "Паладин (Клятва Преступник) · Человек", thought: "«Тёмная лошадка. Его клятва — не обычная клятва паладина, в ней чувствуется горечь и утрата. Но держит слово крепко. Я таких уважаю.»" },
        { name: "Биатрис Пакив (Кладрае)", class: "Колдун (Временной маг) · Дроу", thought: "«Эльфы... Ненавижу эльфов. Все эти их ужимки, столетние взгляды и магия из пальца. Но эта... она странная даже для дроу. Время крутит, как пряжу. Бесит, но без неё мы бы уже трижды умерли. Пространственный куб её — единственная вещь, которую я у эльфа не хочу разбить молотом. Ладно, пусть идёт рядом. Пока что.»" },
        { name: "Клэр Фаерфлай", class: "Следопыт (Сумрачный охотник) · Совлин", thought: "«Совлин. Птица, значит. В темноте видит лучше меня, а я не люблю, когда кто-то видит лучше дворфа. Исчезает в тенях так, что сам чёрт ногу сломит. Спрашиваю её — \"ты где?\", а она уже за спиной. Бесит. Но на разведку — лучше не найти.»" },
        { name: "Яроной", class: "Зверочеловек", thought: "«Ничего не знаю. Бомж какой-то. И хвост уёбищный. Из лука пару раз в дерево попал вместо врага — я чуть не поседел. Но дерётся — зверь. Ладно, пусть идёт, пока мух не ловит.»" }
    ],
    en: [
        { name: "Balsmeg Rockborn", class: "Barbarian (Berserker) · Half-Orc", thought: "«A storm of fields and foes. When Balsmeg charges — the earth trembles. I wouldn't want to be in his way. Reliable as granite.»" },
        { name: "Veil Kr'ant", class: "Druid (Circle of Spores) · Tiefling", thought: "«Quiet and thoughtful. Sees the world differently — as if hearing what we can't. Dangerous in battle when least expected. I trust his instincts.»" },
        { name: "Six", class: "Cleric (Life Domain) · Harengon", thought: "«Heals others, yet she's a weapon with no choice. Too similar to me. I was Solarntir's dog, she's a slave with faith. And it frightens me — to see a worthy warrior serve against their will.»" },
        { name: "Khaladan Brower", class: "Paladin (Oathbreaker) · Human", thought: "«A dark horse. His oath isn't a typical paladin's — there's bitterness and loss in it. But he keeps his word. I respect that.»" },
        { name: "Beatrice Pakiv (Kladrae)", class: "Warlock (Chronomancer) · Drow", thought: "«Elves... I hate elves. Their mannerisms, centuries-old stares, magic from a finger. But this one... she's strange even for a drow. Twists time like yarn. Infuriating, but without her we'd be dead thrice over. Her spatial cube is the only elven thing I don't want to smash with a hammer. Fine, she can walk beside me. For now.»" },
        { name: "Claire Firefly", class: "Ranger (Gloom Stalker) · Owlin", thought: "«An owlin. A bird, then. Sees better in darkness than me, and I don't like anyone seeing better than a dwarf. Disappears into shadows like a ghost. I ask 'where are you?' — and she's already behind me. Infuriating. But for scouting — none better.»" },
        { name: "Yaronoy", class: "Beastfolk", thought: "«I know nothing. Some kind of bum. And that tail is hideous. Missed a couple of shots with the bow — hit a tree instead of the enemy. Almost made my beard turn grey. But in melee — a beast. Fine, let him come. As long as he doesn't catch flies.»" }
    ]
};

let currentLang = 'ru';
let currentTrackIndex = 0;
let isPlayingRadio = false;
const radioAudio = new Audio();

// =====================================================
// ПЛЕЙЛИСТ (ЗАМЕНИ НА СВОИ ПЕСНИ)
// =====================================================
const playlist = [
    { name: "Wild Side", url: "SpotiDown.App - Wild Side - ALI.mp3" },
    { name: "American Boy", url: "SpotiDown.App - American Boy - Estelle.mp3" },
    { name: "Shut up My Moms Calling", url: "SpotiDown.App - Shut up My Moms Calling - Hotel Ugly.mp3" },
    { name: "The Only Thing They Fear Is You", url: "SpotiDown.App - The Only Thing They Fear Is You - The Last Bear Ender.mp3" },
    { name: "The Pyre", url: "SpotiDown.App - The Pyre - Kevin MacLeod.mp3" },
    { name: "Den of Sky Pirates", url: "SpotiDown.App - Den of Sky Pirates - Realmshifter.mp3" },
    { name: "Tavern of Heroes", url: "SpotiDown.App - Tavern of Heroes - Valkyrion.mp3" },
    { name: "Tom Tom", url: "SpotiDown.App - Tom Tom - Holy Fuck.mp3" },
    { name: "Take A Look Around", url: "SpotiDown.App - Take A Look Around - Limp Bizkit.mp3" },
    { name: "Chop Suey", url: "SpotiDown.App - Chop Suey - System Of A Down.mp3" },
    { name: "Somewhere I Belong", url: "SpotiDown.App - Somewhere I Belong - Linkin Park.mp3" },
    { name: "Monster", url: "SpotiDown.App - Monster - Skillet.mp3" },
    { name: "Decadence", url: "SpotiDown.App - Decadence - Disturbed.mp3" },
    { name: "Hatsune Miku", url: "SpotiDown.App - check Hatsune Miku - bbnogames.mp3" },
    { name: "Holy Steel", url: "SpotiDown.App - Steel Ball Run OP Holy Steel - Nico Bellisario.mp3" },
    { name: "Kuroi Light", url: "SpotiDown.App - Kuroi Light - Hideki Taniuchi.mp3" },
    { name: "the WORLD", url: "SpotiDown.App - the WORLD - NIGHTMARE.mp3" }
];

// =====================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// =====================================================
function getIconForClass(name) {
    if (name.includes('Балсмег') || name.includes('Balsmeg')) return 'fa-fist-raised';
    if (name.includes('Вейл') || name.includes('Veil')) return 'fa-leaf';
    if (name.includes('Шесть') || name.includes('Six')) return 'fa-pray';
    if (name.includes('Каладан') || name.includes('Khaladan')) return 'fa-shield-alt';
    if (name.includes('Биатрис') || name.includes('Beatrice')) return 'fa-hourglass-half';
    if (name.includes('Клэр') || name.includes('Claire')) return 'fa-feather-alt';
    return 'fa-paw';
}

function formatRadioTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
}

function loadRadioTrack(index) {
    const track = playlist[index];
    if (!track) return;
    radioAudio.src = track.url;
    const trackNameSpan = document.getElementById('currentTrackName');
    if (trackNameSpan) trackNameSpan.textContent = track.name;
    radioAudio.load();
    const trackCounter = document.getElementById('trackCounter');
    if (trackCounter) trackCounter.textContent = `${index + 1} / ${playlist.length}`;
    if (isPlayingRadio) radioAudio.play().catch(e => console.log('Автовоспроизведение заблокировано:', e));
}

function toggleRadioPlayPause() {
    if (isPlayingRadio) {
        radioAudio.pause();
        isPlayingRadio = false;
        const icon = document.getElementById('playPauseRadioBtn')?.querySelector('i');
        if (icon) icon.className = 'fas fa-play';
    } else {
        radioAudio.play().then(() => {
            isPlayingRadio = true;
            const icon = document.getElementById('playPauseRadioBtn')?.querySelector('i');
            if (icon) icon.className = 'fas fa-pause';
        }).catch(err => console.log('Ошибка воспроизведения:', err));
    }
}

function nextRadioTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadRadioTrack(currentTrackIndex);
    if (isPlayingRadio) radioAudio.play().catch(e => console.log(e));
}

function prevRadioTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadRadioTrack(currentTrackIndex);
    if (isPlayingRadio) radioAudio.play().catch(e => console.log(e));
}

// =====================================================
// ОБНОВЛЕНИЕ ЯЗЫКА
// =====================================================
function updateLanguage(lang) {
    currentLang = lang;
    const data = comradesData[lang];
    const btn = document.getElementById('langBtn');
    if (btn) btn.innerHTML = lang === 'ru' ? '<i class="fas fa-globe"></i> English' : '<i class="fas fa-globe"></i> Русский';
    
    const comradesBtnText = document.getElementById('comradesBtnText');
    if (comradesBtnText) comradesBtnText.innerText = lang === 'ru' ? 'Товарищи' : 'Comrades';
    
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) modalTitle.innerText = lang === 'ru' ? 'Товарищи' : 'Comrades';
    
    // Обновляем модальное окно
    const comradeList = document.getElementById('comradeList');
    if (comradeList) {
        comradeList.innerHTML = '';
        data.forEach(c => {
            const card = document.createElement('div');
            card.className = 'comrade-card';
            card.innerHTML = `<div class="comrade-icon"><i class="fas ${getIconForClass(c.name)}"></i></div><div class="comrade-info"><div class="comrade-name">${c.name}</div><div class="comrade-class">${c.class}</div><div class="comrade-thought"><i class="fas fa-quote-left"></i> ${c.thought}</div></div>`;
            comradeList.appendChild(card);
        });
    }
    
    // Обновляем вкладку товарищей
    renderComrades(lang);
    
    // Обновляем все тексты (сокращённо, все элементы обновляются)
    if (lang === 'ru') {
        document.getElementById('mainSub').innerText = 'Рунный рыцарь · бывший воин ордена · солдат без веры';
        document.getElementById('badge1').innerText = 'Живая руна · Раздвоенная молния';
        document.getElementById('badge2').innerText = '47 зим · Дельстейн';
        document.getElementById('label1').innerText = 'Пол / Возраст'; document.getElementById('val1').innerText = 'Мужчина, 47 лет';
        document.getElementById('label2').innerText = 'Рождение'; document.getElementById('val2').innerText = 'Дельстейн, род Углич (кузнецы)';
        document.getElementById('label3').innerText = 'Ремесло'; document.getElementById('val3').innerText = 'Бывший воин · солдат Соларнтира';
        document.getElementById('label4').innerText = 'Древняя руна'; document.getElementById('val4').innerHTML = '<i class="fas fa-bolt"></i> Внутрикровная · сила гигантов';
        document.getElementById('label5').innerText = 'Служба'; document.getElementById('val5').innerText = '20 лет в воинском ордене Дельстейна';
        
        document.getElementById('tabHistory').innerText = 'История';
        document.getElementById('tabFear').innerText = 'Страх';
        document.getElementById('tabGoals').innerText = 'Цели';
        document.getElementById('tabComrades').innerText = 'Товарищи';
        document.getElementById('comradesTitle').innerText = 'Товарищи Траина';
        
        document.getElementById('historyTitle').innerText = 'История Траина Углича';
        document.getElementById('fearTitle').innerText = 'Страх, что гложет изнутри';
        document.getElementById('goalsTitle').innerText = 'Цели, что ведут вперёд';
        document.getElementById('footerText').innerText = 'Квента персонажа · архив вольного клинка · Дельстейн — Соларнтир';
    } else {
        document.getElementById('mainSub').innerText = 'Rune Knight · former Order warrior · soldier without faith';
        document.getElementById('badge1').innerText = 'Living Rune · Forked Lightning';
        document.getElementById('badge2').innerText = '47 winters · Delstein';
        document.getElementById('label1').innerText = 'Gender / Age'; document.getElementById('val1').innerText = 'Male, 47 years';
        document.getElementById('label2').innerText = 'Birth'; document.getElementById('val2').innerText = 'Delstein, Uglich family (blacksmiths)';
        document.getElementById('label3').innerText = 'Craft'; document.getElementById('val3').innerText = 'Former warrior · soldier of Solarntir';
        document.getElementById('label4').innerText = 'Ancient Rune'; document.getElementById('val4').innerHTML = '<i class="fas fa-bolt"></i> Bloodborne · Giant\'s strength';
        document.getElementById('label5').innerText = 'Service'; document.getElementById('val5').innerText = '20 years in the military order of Delstein';
        
        document.getElementById('tabHistory').innerText = 'History';
        document.getElementById('tabFear').innerText = 'Fear';
        document.getElementById('tabGoals').innerText = 'Goals';
        document.getElementById('tabComrades').innerText = 'Comrades';
        document.getElementById('comradesTitle').innerText = 'Train\'s Comrades';
        
        document.getElementById('historyTitle').innerText = 'The Story of Train Uglich';
        document.getElementById('fearTitle').innerText = 'The Fear that Gnaws Within';
        document.getElementById('goalsTitle').innerText = 'Goals that Lead Forward';
        document.getElementById('footerText').innerText = 'Character Quest · free blade archive · Delstein — Solarntir';
    }
}

// =====================================================
// РЕНДЕР КАРТОЧЕК ТОВАРИЩЕЙ В ВКЛАДКЕ
// =====================================================
function renderComrades(lang) {
    const data = comradesData[lang];
    const grid = document.getElementById('comradeGrid');
    if (!grid) return;
    grid.innerHTML = '';
    data.forEach(c => {
        const card = document.createElement('div');
        card.className = 'comrade-card-tab';
        card.innerHTML = `
            <div class="comrade-name"><i class="fas ${getIconForClass(c.name)}"></i> ${c.name}</div>
            <div class="comrade-class">${c.class}</div>
            <div class="comrade-thought"><i class="fas fa-quote-left"></i> ${c.thought}</div>
        `;
        grid.appendChild(card);
    });
}

// =====================================================
// FULLSCREEN ГАЛЕРЕЯ
// =====================================================
function initFullscreen() {
    const images = document.querySelectorAll('.image-gallery img');
    const modal = document.getElementById('fullscreenModal');
    const modalImg = document.getElementById('fullscreenImage');
    const closeBtn = document.getElementById('fullscreenCloseBtn');
    
    images.forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            if (modalImg) modalImg.src = this.src;
            if (modal) modal.classList.add('active');
        });
    });
    
    function closeFullscreen() {
        if (modal) modal.classList.remove('active');
        if (modalImg) modalImg.src = '';
    }
    
    if (closeBtn) closeBtn.addEventListener('click', closeFullscreen);
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeFullscreen();
        });
    }
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeFullscreen();
        }
    });
}

// =====================================================
// ПАРАЛЛАКС ПРИ СКРОЛЛЕ
// =====================================================
function updateBackgroundOnScroll() {
    const chapter6 = document.querySelector('.history-chapter[data-chapter="6"]');
    if (!chapter6) return;
    const rect = chapter6.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    let opacity = 0;
    if (rect.top <= windowHeight * 0.6) {
        opacity = Math.min(1, Math.max(0, (windowHeight * 0.6 - rect.top) / (windowHeight * 0.3)));
    }
    const bg1 = document.getElementById('parallaxBg1');
    const bg2 = document.getElementById('parallaxBg2');
    if (bg1 && bg2) {
        bg1.style.opacity = 1 - opacity;
        bg2.style.opacity = opacity;
    }
}

// =====================================================
// ВКЛАДКИ
// =====================================================
function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            
            const tabId = this.dataset.tab;
            const targetPane = document.getElementById('tab-' + tabId);
            if (targetPane) {
                targetPane.classList.add('active');
                targetPane.style.animation = 'none';
                requestAnimationFrame(() => {
                    targetPane.style.animation = 'tabFadeIn 0.5s ease forwards';
                });
            }
        });
    });
}

// =====================================================
// ИНИЦИАЛИЗАЦИЯ
// =====================================================
document.addEventListener('DOMContentLoaded', function() {
    // Вкладки
    initTabs();
    
    // Fullscreen
    initFullscreen();
    
    // Язык
    updateLanguage('ru');
    
    // Параллакс
    updateBackgroundOnScroll();
    window.addEventListener('scroll', updateBackgroundOnScroll);
    window.addEventListener('resize', updateBackgroundOnScroll);
    
    // Кнопки: язык, товарищи
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            updateLanguage(currentLang === 'ru' ? 'en' : 'ru');
        });
    }
    
    const comradesBtn = document.getElementById('comradesBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalEl = document.getElementById('comradesModal');
    
    if (comradesBtn && modalEl) {
        comradesBtn.addEventListener('click', () => {
            modalEl.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    if (closeModalBtn && modalEl) {
        closeModalBtn.addEventListener('click', () => {
            modalEl.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    if (modalEl) {
        modalEl.addEventListener('click', (e) => {
            if (e.target === modalEl) {
                modalEl.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // РАДИО: инициализация
    const playPauseBtn = document.getElementById('playPauseRadioBtn');
    const nextBtn = document.getElementById('nextTrackBtn');
    const prevBtn = document.getElementById('prevTrackBtn');
    const volumeSlider = document.getElementById('radioVolume');
    const progressBar = document.getElementById('progressBar');
    const progressFill = document.getElementById('progressFill');
    const currentTimeSpan = document.getElementById('currentTime');
    const durationSpan = document.getElementById('duration');
    
    if (playPauseBtn) playPauseBtn.addEventListener('click', toggleRadioPlayPause);
    if (nextBtn) nextBtn.addEventListener('click', nextRadioTrack);
    if (prevBtn) prevBtn.addEventListener('click', prevRadioTrack);
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            radioAudio.volume = parseFloat(e.target.value);
        });
    }
    
    radioAudio.addEventListener('timeupdate', () => {
        if (radioAudio.duration && progressFill && currentTimeSpan) {
            const percent = (radioAudio.currentTime / radioAudio.duration) * 100;
            progressFill.style.width = percent + '%';
            currentTimeSpan.textContent = formatRadioTime(radioAudio.currentTime);
        }
    });
    
    radioAudio.addEventListener('loadedmetadata', () => {
        if (durationSpan) durationSpan.textContent = formatRadioTime(radioAudio.duration);
    });
    
    radioAudio.addEventListener('ended', () => nextRadioTrack());
    
    if (progressBar) {
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            if (radioAudio.duration) radioAudio.currentTime = percent * radioAudio.duration;
        });
    }
    
    // Сворачивание радио
    const radio = document.getElementById('dndRadio');
    const radioToggle = document.getElementById('radioToggle');
    const radioHeader = document.getElementById('radioHeader');
    let isCollapsed = false;
    
    if (radioToggle) {
        radioToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            isCollapsed = !isCollapsed;
            if (radio) {
                if (isCollapsed) {
                    radio.classList.add('collapsed');
                    radioToggle.textContent = '+';
                } else {
                    radio.classList.remove('collapsed');
                    radioToggle.textContent = '−';
                }
            }
        });
    }
    
    if (radioHeader) {
        radioHeader.addEventListener('click', (e) => {
            if (e.target !== radioToggle) {
                isCollapsed = !isCollapsed;
                if (radio) {
                    if (isCollapsed) {
                        radio.classList.add('collapsed');
                        if (radioToggle) radioToggle.textContent = '+';
                    } else {
                        radio.classList.remove('collapsed');
                        if (radioToggle) radioToggle.textContent = '−';
                    }
                }
            }
        });
    }
    
    if (playlist.length > 0) {
        loadRadioTrack(0);
        radioAudio.volume = 0.4;
        if (volumeSlider) volumeSlider.value = 0.4;
    }
    
    // Пульсация руны
    const runeSymbol = document.querySelector('.rune-symbol i');
    if (runeSymbol) {
        setInterval(() => {
            runeSymbol.style.textShadow = '0 0 8px #d47f58';
            setTimeout(() => { runeSymbol.style.textShadow = 'none'; }, 200);
        }, 3000);
    }
});
