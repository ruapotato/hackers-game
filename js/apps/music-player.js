/**
 * Music Player App - Play local music files
 */

class MusicPlayerApp {
    constructor() {
        this.instances = new Map();
        this.tracks = [
            { title: 'Bean Dean Dean the dean the Dean Dean', file: 'Bean Dean Dean the dean the Dean Dean.mp3' },
            { title: 'Brain, brain, brain, brain, brain, brain', file: 'Brain, brain, brain, brain, brain, brain.mp3' },
            { title: 'Can you feel it?', file: 'Can you feel it_.mp3' },
            { title: 'Installing Linux On My Toe', file: 'Installing Linux On My Toe.mp3' },
            { title: 'Intro', file: '(Intro).mp3' },
            { title: 'Molly alley olly olly ally olly olly oll', file: 'Molly alley olly olly ally olly olly oll.mp3' },
            { title: 'Our Never-Ending Love Story', file: 'Our Never-Ending Love Story.mp3' },
            { title: 'r u ok', file: 'r u ok.mp3' },
            { title: 'The future is open... Code is temporary', file: 'The future is open... Code is temporary..mp3' },
            { title: 'The human Beans is walking now', file: 'The human Beans is walking now.mp3' },
            { title: 'The Review is Over', file: 'The Review is Over.mp3' },
            { title: 'Toe bean pressure', file: 'Toe bean pressure.mp3' },
            { title: 'Verse 1 (Take 1)', file: '(Verse 1).mp3' },
            { title: 'Verse 1 (Take 2)', file: '(Verse 1) (1).mp3' },
            { title: 'Verse 1 (Take 3)', file: '(Verse 1) (2).mp3' },
            { title: 'Verse 1 (Take 4)', file: '(Verse 1) (3).mp3' },
            { title: 'Verse 1 (Take 5)', file: '(Verse 1) (4).mp3' },
            { title: 'Your grand ass system', file: 'Your grand ass system..mp3' }
        ];
    }

    open() {
        const { windowId, contentEl } = windowManager.createWindow({
            title: 'Music Player',
            icon: '🎵',
            width: 400,
            height: 500,
            app: 'music-player'
        });

        const instance = {
            windowId,
            audio: new Audio(),
            currentTrack: -1,
            isPlaying: false,
            shuffle: false,
            repeat: false
        };

        this.instances.set(windowId, instance);
        this.render(windowId, contentEl, instance);

        // Clean up audio on window close
        const win = windowManager.getWindow(windowId);
        if (win) {
            const originalClose = win.element.querySelector('.win-btn.close');
            originalClose.addEventListener('click', () => {
                instance.audio.pause();
                instance.audio.src = '';
            });
        }

        return windowId;
    }

    render(windowId, contentEl, instance) {
        contentEl.innerHTML = `
            <div class="music-player-app">
                <div class="player-visualizer">
                    <div class="visualizer-bars">
                        ${Array(20).fill('<div class="viz-bar"></div>').join('')}
                    </div>
                    <div class="now-playing">
                        <span class="np-title">Select a track</span>
                    </div>
                </div>
                <div class="player-controls">
                    <div class="progress-container">
                        <span class="time-current">0:00</span>
                        <input type="range" class="progress-bar" min="0" max="100" value="0">
                        <span class="time-total">0:00</span>
                    </div>
                    <div class="control-buttons">
                        <button class="ctrl-btn shuffle" title="Shuffle">🔀</button>
                        <button class="ctrl-btn prev" title="Previous">⏮</button>
                        <button class="ctrl-btn play-pause" title="Play">▶️</button>
                        <button class="ctrl-btn next" title="Next">⏭</button>
                        <button class="ctrl-btn repeat" title="Repeat">🔁</button>
                    </div>
                    <div class="volume-control">
                        <span>🔊</span>
                        <input type="range" class="volume-bar" min="0" max="100" value="80">
                    </div>
                </div>
                <div class="playlist">
                    <div class="playlist-header">Playlist</div>
                    <div class="playlist-items">
                        ${this.tracks.map((track, i) => `
                            <div class="playlist-item" data-index="${i}">
                                <span class="track-num">${i + 1}</span>
                                <span class="track-title">${track.title}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            <style>
                .music-player-app {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
                    color: #fff;
                    font-family: 'Ubuntu', sans-serif;
                }
                .player-visualizer {
                    padding: 20px;
                    text-align: center;
                    background: rgba(0,0,0,0.3);
                }
                .visualizer-bars {
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    height: 60px;
                    gap: 3px;
                    margin-bottom: 15px;
                }
                .viz-bar {
                    width: 8px;
                    height: 5px;
                    background: linear-gradient(to top, #87a752, #b8d475);
                    border-radius: 2px;
                    transition: height 0.1s ease;
                }
                .music-player-app.playing .viz-bar {
                    animation: vizPulse 0.5s ease infinite alternate;
                }
                .viz-bar:nth-child(odd) { animation-delay: 0.1s; }
                .viz-bar:nth-child(3n) { animation-delay: 0.2s; }
                .viz-bar:nth-child(4n) { animation-delay: 0.15s; }
                @keyframes vizPulse {
                    0% { height: 5px; }
                    100% { height: ${Math.random() * 40 + 20}px; }
                }
                .now-playing {
                    color: #87a752;
                    font-size: 14px;
                }
                .np-title {
                    font-weight: bold;
                }
                .player-controls {
                    padding: 15px;
                    background: rgba(0,0,0,0.2);
                }
                .progress-container {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 15px;
                }
                .progress-container span {
                    font-size: 11px;
                    color: #888;
                    min-width: 35px;
                }
                .progress-bar, .volume-bar {
                    flex: 1;
                    -webkit-appearance: none;
                    height: 4px;
                    background: #333;
                    border-radius: 2px;
                    cursor: pointer;
                }
                .progress-bar::-webkit-slider-thumb, .volume-bar::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 12px;
                    height: 12px;
                    background: #87a752;
                    border-radius: 50%;
                    cursor: pointer;
                }
                .control-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin-bottom: 15px;
                }
                .ctrl-btn {
                    background: rgba(255,255,255,0.1);
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 16px;
                    transition: all 0.2s;
                }
                .ctrl-btn:hover {
                    background: rgba(135, 167, 82, 0.3);
                }
                .ctrl-btn.play-pause {
                    width: 50px;
                    height: 50px;
                    font-size: 20px;
                    background: #87a752;
                }
                .ctrl-btn.active {
                    background: rgba(135, 167, 82, 0.5);
                }
                .volume-control {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 0 20px;
                }
                .volume-control span {
                    font-size: 14px;
                }
                .volume-bar {
                    flex: 1;
                    max-width: 100px;
                }
                .playlist {
                    flex: 1;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                .playlist-header {
                    padding: 10px 15px;
                    background: rgba(0,0,0,0.3);
                    font-size: 12px;
                    color: #888;
                    text-transform: uppercase;
                }
                .playlist-items {
                    flex: 1;
                    overflow-y: auto;
                }
                .playlist-item {
                    display: flex;
                    align-items: center;
                    padding: 10px 15px;
                    cursor: pointer;
                    transition: background 0.2s;
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                }
                .playlist-item:hover {
                    background: rgba(255,255,255,0.1);
                }
                .playlist-item.active {
                    background: rgba(135, 167, 82, 0.2);
                }
                .playlist-item.active .track-title {
                    color: #87a752;
                }
                .track-num {
                    width: 25px;
                    font-size: 11px;
                    color: #666;
                }
                .track-title {
                    flex: 1;
                    font-size: 13px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            </style>
        `;

        this.setupEvents(windowId, contentEl, instance);
    }

    setupEvents(windowId, contentEl, instance) {
        const audio = instance.audio;
        audio.volume = 0.8;

        // Playlist click
        contentEl.querySelectorAll('.playlist-item').forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.dataset.index);
                this.playTrack(windowId, contentEl, instance, index);
            });
        });

        // Play/Pause
        contentEl.querySelector('.play-pause').addEventListener('click', () => {
            if (instance.currentTrack === -1) {
                this.playTrack(windowId, contentEl, instance, 0);
            } else if (instance.isPlaying) {
                audio.pause();
                instance.isPlaying = false;
                contentEl.querySelector('.play-pause').textContent = '▶️';
                contentEl.querySelector('.music-player-app').classList.remove('playing');
            } else {
                audio.play();
                instance.isPlaying = true;
                contentEl.querySelector('.play-pause').textContent = '⏸️';
                contentEl.querySelector('.music-player-app').classList.add('playing');
            }
        });

        // Previous
        contentEl.querySelector('.prev').addEventListener('click', () => {
            if (instance.currentTrack > 0) {
                this.playTrack(windowId, contentEl, instance, instance.currentTrack - 1);
            } else if (instance.repeat) {
                this.playTrack(windowId, contentEl, instance, this.tracks.length - 1);
            }
        });

        // Next
        contentEl.querySelector('.next').addEventListener('click', () => {
            this.playNext(windowId, contentEl, instance);
        });

        // Shuffle
        contentEl.querySelector('.shuffle').addEventListener('click', function() {
            instance.shuffle = !instance.shuffle;
            this.classList.toggle('active', instance.shuffle);
        });

        // Repeat
        contentEl.querySelector('.repeat').addEventListener('click', function() {
            instance.repeat = !instance.repeat;
            this.classList.toggle('active', instance.repeat);
        });

        // Volume
        contentEl.querySelector('.volume-bar').addEventListener('input', (e) => {
            audio.volume = e.target.value / 100;
        });

        // Progress
        const progressBar = contentEl.querySelector('.progress-bar');
        progressBar.addEventListener('input', (e) => {
            if (audio.duration) {
                audio.currentTime = (e.target.value / 100) * audio.duration;
            }
        });

        // Audio events
        audio.addEventListener('timeupdate', () => {
            if (audio.duration) {
                const percent = (audio.currentTime / audio.duration) * 100;
                progressBar.value = percent;
                contentEl.querySelector('.time-current').textContent = this.formatTime(audio.currentTime);
                contentEl.querySelector('.time-total').textContent = this.formatTime(audio.duration);
            }
        });

        audio.addEventListener('ended', () => {
            this.playNext(windowId, contentEl, instance);
        });

        // Randomize visualizer animation
        this.animateVisualizer(contentEl);
    }

    animateVisualizer(contentEl) {
        const bars = contentEl.querySelectorAll('.viz-bar');
        bars.forEach(bar => {
            const randomHeight = Math.random() * 40 + 10;
            bar.style.setProperty('--random-height', `${randomHeight}px`);
        });

        // Update animation keyframes
        const style = contentEl.querySelector('style');
        if (style) {
            setInterval(() => {
                bars.forEach(bar => {
                    if (contentEl.querySelector('.music-player-app')?.classList.contains('playing')) {
                        bar.style.height = `${Math.random() * 50 + 5}px`;
                    }
                });
            }, 150);
        }
    }

    playTrack(windowId, contentEl, instance, index) {
        const track = this.tracks[index];
        if (!track) return;

        instance.currentTrack = index;
        instance.audio.src = `assets/Music/${encodeURIComponent(track.file)}`;
        instance.audio.play();
        instance.isPlaying = true;

        // Update UI
        contentEl.querySelector('.np-title').textContent = track.title;
        contentEl.querySelector('.play-pause').textContent = '⏸️';
        contentEl.querySelector('.music-player-app').classList.add('playing');

        // Update playlist highlight
        contentEl.querySelectorAll('.playlist-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    playNext(windowId, contentEl, instance) {
        let nextIndex;
        if (instance.shuffle) {
            nextIndex = Math.floor(Math.random() * this.tracks.length);
        } else if (instance.currentTrack < this.tracks.length - 1) {
            nextIndex = instance.currentTrack + 1;
        } else if (instance.repeat) {
            nextIndex = 0;
        } else {
            instance.isPlaying = false;
            contentEl.querySelector('.play-pause').textContent = '▶️';
            contentEl.querySelector('.music-player-app').classList.remove('playing');
            return;
        }
        this.playTrack(windowId, contentEl, instance, nextIndex);
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
}

// Global instance
const musicPlayerApp = new MusicPlayerApp();
