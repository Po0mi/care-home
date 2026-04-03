import { useState, useRef, useEffect, useCallback } from "react";
import "./MusicPlayer.scss";

const MusicPlayer = ({
  src,
  title = "Ambient Background",
  artist = "Sycamore Cottage",
}) => {
  const audioRef = useRef(null);
  const playerRef = useRef(null);
  const dragRef = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0,
  });

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.18);
  const [visible, setVisible] = useState(true);
  const [pos, setPos] = useState({ x: null, y: null }); // null = CSS default (centered)
  const [dragged, setDragged] = useState(false);

  // Autoplay on mount at low volume
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !src) return;
    audio.volume = 0.18;
    const tryPlay = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          // Autoplay blocked — wait for first interaction
          const unlock = () => {
            audio
              .play()
              .then(() => setPlaying(true))
              .catch(() => {});
            window.removeEventListener("click", unlock);
            window.removeEventListener("keydown", unlock);
          };
          window.addEventListener("click", unlock, { once: true });
          window.addEventListener("keydown", unlock, { once: true });
        });
    };
    tryPlay();
  }, [src]);

  // Sync volume
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying((p) => !p);
  };

  // ── Drag logic ──────────────────────
  const onPointerDown = useCallback((e) => {
    // Don't drag if clicking buttons/inputs
    if (e.target.closest("button") || e.target.closest("input")) return;

    const player = playerRef.current;
    if (!player) return;

    const rect = player.getBoundingClientRect();
    dragRef.current = {
      dragging: true,
      startX: e.clientX,
      startY: e.clientY,
      origX: rect.left,
      origY: rect.top,
    };

    player.setPointerCapture(e.pointerId);
    e.preventDefault();
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!dragRef.current.dragging) return;

    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;

    const player = playerRef.current;
    if (!player) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pw = player.offsetWidth;
    const ph = player.offsetHeight;

    const newX = Math.min(Math.max(dragRef.current.origX + dx, 0), vw - pw);
    const newY = Math.min(Math.max(dragRef.current.origY + dy, 0), vh - ph);

    setPos({ x: newX, y: newY });
    setDragged(true);
  }, []);

  const onPointerUp = useCallback(() => {
    dragRef.current.dragging = false;
  }, []);

  if (!visible) return null;

  const posStyle =
    dragged && pos.x !== null
      ? { left: pos.x, top: pos.y, bottom: "auto", transform: "none" }
      : {};

  return (
    <div
      className={`music-player${dragged ? " dragged" : ""}`}
      ref={playerRef}
      style={posStyle}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {src && <audio ref={audioRef} src={src} loop preload="auto" />}

      {/* Play / Pause */}
      <button
        className="music-player-btn"
        onClick={togglePlay}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? (
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="1"
              width="3"
              height="10"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="7"
              y="1"
              width="3"
              height="10"
              rx="1"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="2,1 11,6 2,11" fill="currentColor" />
          </svg>
        )}
      </button>

      {/* Track info */}
      <div className="music-player-info">
        <span className="music-player-title">{title}</span>
        <span className="music-player-sub">{artist}</span>
      </div>

      {/* Volume */}
      <div className="music-player-vol">
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 6h3.5L10 3v10L5.5 10H2V6zm10 .5a3 3 0 010 3"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          aria-label="Volume"
          className="music-player-range"
          style={{ "--vol": `${volume * 100}%` }}
        />
      </div>

      {/* Dismiss */}
      <button
        className="music-player-close"
        onClick={() => {
          audioRef.current?.pause();
          setVisible(false);
        }}
        aria-label="Close player"
      >
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 2l8 8M10 2l-8 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default MusicPlayer;
