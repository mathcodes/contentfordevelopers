import React, { useState } from "react";
import ReactPlayer from "react-player";

function youTubeId(url) {
  const m = /(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/.exec(url || "");
  return m ? m[1] : null;
}

/**
 * Click-to-load video. Shows a lightweight thumbnail button until the visitor
 * chooses to play, so the third-party player (and its markup, cookies and
 * ~1 MB of script) only loads on demand.
 */
export default function VideoFacade({ url, title }) {
  const [playing, setPlaying] = useState(false);
  const id = youTubeId(url);

  if (playing || !id) {
    return (
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <ReactPlayer url={url} width="100%" height="100%" playing={playing} controls />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative block w-full overflow-hidden rounded-xl bg-black focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-accent2"
      style={{ aspectRatio: "16 / 9" }}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/75 text-white shadow-lg">
          <svg aria-hidden="true" focusable="false" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <span className="sr-only">Play video: {title}</span>
    </button>
  );
}
