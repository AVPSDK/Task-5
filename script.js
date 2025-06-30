
const songs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
let current = 0;
const audio = document.getElementById('audio');

function loadSong(index) {
  if (audio) {
    audio.src = songs[index];
    audio.play();
  }
}

function nextSong() {
  current = (current + 1) % songs.length;
  loadSong(current);
}

function prevSong() {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
}

function shuffleSong() {
  current = Math.floor(Math.random() * songs.length);
  loadSong(current);
}

function repeatSong() {
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

const lyricsData = {
  'song1.mp3': `Lyrics for Song 1:
We're soaring, flying,
There's not a star in heaven that we can't reach...`,
  'song2.mp3': `Lyrics for Song 2:
Let me tell you a story, about a boy and a girl...
They fell in love in a world of their own.`,
  'song3.mp3': `Lyrics for Song 3:
Shine bright like a diamond,
You're a shooting star I see...`
};

let scrollInterval;

function showLyrics() {
  const lyricsBox = document.getElementById('lyrics');
  const song = songs[current];
  const lyrics = lyricsData[song] || 'Lyrics not available for this song.';
  lyricsBox.textContent = lyrics;

  lyricsBox.scrollTop = 0;
  clearInterval(scrollInterval);
  scrollInterval = setInterval(() => {
    lyricsBox.scrollTop += 1;
    if (lyricsBox.scrollTop >= lyricsBox.scrollHeight - lyricsBox.clientHeight) {
      clearInterval(scrollInterval);
    }
  }, 100);
}
