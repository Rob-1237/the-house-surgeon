import { Pip } from "./Pip";
import styles from "./PipBadge.module.css";

/**
 * Home hero backdrop: a large circle with a faint pipework pattern and Pip (full standing figure,
 * facing left toward the copy). Pip runs past the bottom of the circle and is clipped by it, so his
 * body fills the circle down to its edge with no cut-off line.
 * Sized by its container (Hero `.backdrop`).
 */
export function PipBadge({ preload }: { preload?: boolean }) {
  return (
    <div className={styles.badge}>
      <div className={styles.circle}>
        <PipeField className={styles.pipes} />
        <Pip
          pose="standing"
          preload={preload}
          className={styles.img}
          sizes="(max-width: 60em) 62vw, 420px"
        />
      </div>
    </div>
  );
}

/*
 * Original pipework line-art in the style of floyds-assets/pipe-example.webp (not traced): thick runs
 * with tight elbows, square union collars, tapered reducers into a cross, a ball valve with a
 * T-handle, and an inverted U loop. Drawn as one seamless 420-unit tile (pipes leave each edge at
 * the same points they enter the opposite one) and repeated ~2.5× across the circle. Everything is
 * one flat color; the badge sets the faintness with group opacity so overlaps don't darken.
 */
const PIPE = 34; // pipe width in tile units
const TILE = 420;
const VIEW = 1050; // tiles across the circle = VIEW / TILE; raise VIEW for smaller, denser pipework

/** Union collar across a run. "h" = on a horizontal run, "v" = on a vertical run. */
function Union({ x, y, o }: { x: number; y: number; o: "h" | "v" }) {
  const along = 22;
  const across = PIPE + 22;
  return o === "h" ? (
    <rect x={x - along / 2} y={y - across / 2} width={along} height={across} rx="2" />
  ) : (
    <rect x={x - across / 2} y={y - along / 2} width={across} height={along} rx="2" />
  );
}

/** Reducer on a horizontal run feeding a cross at (cx, cy): collar, then a taper down to the pipe. */
function Reducer({ cx, cy, side }: { cx: number; cy: number; side: "l" | "r" }) {
  const k = side === "l" ? -1 : 1;
  const edge = cx + k * (PIPE / 2); // where the taper meets the crossing pipe
  const taperEnd = edge + k * 28;
  const collarEnd = taperEnd + k * 20;
  const half = PIPE / 2;
  return (
    <>
      <polygon points={`${edge},${cy - half} ${taperEnd},${cy - half - 9} ${taperEnd},${cy + half + 9} ${edge},${cy + half}`} />
      <rect x={Math.min(taperEnd, collarEnd)} y={cy - half - 12} width="20" height={PIPE + 24} rx="2" />
    </>
  );
}

/*
 * Tile ports (where runs cross the tile edge): left/right at y 105 and 315, top/bottom at x 145 and 330.
 * Each run below starts on one port and ends on another, so neighbouring tiles join up.
 */
function PipeTile() {
  return (
    <>
      <g fill="none" stroke="currentColor" strokeWidth={PIPE} strokeLinejoin="round">
        <path d="M0 105H115a30 30 0 0 0 30-30V0" />
        <path d="M145 420V345a30 30 0 0 1 30-30H420" />
        <path d="M0 315H50a30 30 0 0 1 30 30V355a30 30 0 0 0 30 30H300a30 30 0 0 1 30 30V420" />
        <path d="M330 0V75a30 30 0 0 0 30 30H420" />
        {/* valve riser: crosses the y=315 run and tees into the y=385 run */}
        <path d="M240 150V385" />
        {/* inverted U loop off the y=315 run */}
        <path d="M340 315V230a30 30 0 0 1 60 0V315" />
      </g>
      <g fill="currentColor">
        {/* ball valve with T-handle */}
        <rect x="194" y="136" width="92" height="14" rx="3" />
        <Union x={240} y={186} o="v" />
        <circle cx="240" cy="242" r="27" />
        {/* cross: reducers on the run either side of the riser */}
        <Reducer cx={240} cy={315} side="l" />
        <Reducer cx={240} cy={315} side="r" />
        {/* unions along the runs */}
        <Union x={58} y={105} o="h" />
        <Union x={145} y={36} o="v" />
        <Union x={330} y={36} o="v" />
        <Union x={392} y={105} o="h" />
        <Union x={20} y={315} o="h" />
        <Union x={200} y={385} o="h" />
        <Union x={370} y={200} o="h" />
      </g>
    </>
  );
}

function PipeField({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox={`0 0 ${VIEW} ${VIEW}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        {/* single instance per page (home hero), so a fixed id is safe */}
        <pattern id="pip-pipe-tile" width={TILE} height={TILE} patternUnits="userSpaceOnUse">
          <PipeTile />
        </pattern>
      </defs>
      <rect width={VIEW} height={VIEW} fill="url(#pip-pipe-tile)" />
    </svg>
  );
}
