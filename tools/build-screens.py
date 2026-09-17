#!/usr/bin/env python3
"""Turn raw app captures into the web-sized WebP screenshots the page uses.

Source of truth for the screens on the landing page is the app repo's
`screenshots/` folder (1179x2556 iPhone captures). This script downsizes them
to 760px wide WebP — 2x the largest on-page render — and writes them to
`public/screens/`.

Usage:
    python3 tools/build-screens.py [path-to-readpace_v2/screenshots]

Requires Pillow:  pip install Pillow

If you re-shoot the app, keep the output names stable — `content/site.ts`
references them by name, with the intrinsic height baked in to prevent layout
shift. If an aspect ratio changes, update the `h` value there too (this script
prints the new heights).
"""

import os
import sys

from PIL import Image

DEFAULT_SRC = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "screenshots"
)
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public/screens")
WIDTH = 760

# (source file, output name, pixels to crop off the bottom of the original)
#
# `scan.webp` has no counterpart in the current capture set — the camera
# permission screen is a static prompt with no data on it, so the older export
# is kept as-is. Everything else comes from `screenshots/`.
JOBS = [
    ("03-home-all-time.png", "home", 0),
    ("04-reading-sweet-spot.png", "sweet-spot", 0),
    ("08-reading-session-timer.png", "timer", 0),
    ("06-book-detail.png", "book", 0),
    ("13-stats-overview.png", "stats", 0),
    ("14-stats-by-category.png", "category", 0),
    ("05-library.png", "library", 0),
    ("07-book-session-history.png", "sessions", 0),
    ("10-comprehension-question.png", "quiz", 0),
    ("11-comprehension-score.png", "score", 0),
    ("12-comprehension-review.png", "review", 0),
    ("15-profile-you.png", "you", 0),
]


def main() -> int:
    src = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SRC
    if not os.path.isdir(src):
        print(f"source folder not found: {src}", file=sys.stderr)
        return 1

    os.makedirs(OUT, exist_ok=True)
    for filename, name, crop_bottom in JOBS:
        path = os.path.join(src, filename)
        if not os.path.exists(path):
            print(f"  skip {filename} (missing)")
            continue
        image = Image.open(path).convert("RGB")
        if crop_bottom:
            image = image.crop((0, 0, image.width, image.height - crop_bottom))
        height = round(image.height * WIDTH / image.width)
        image = image.resize((WIDTH, height), Image.LANCZOS)
        out_path = os.path.join(OUT, f"{name}.webp")
        image.save(out_path, "WEBP", quality=84, method=6)
        size_kb = os.path.getsize(out_path) / 1024
        print(f"  {name:<11} {WIDTH}x{height}  {size_kb:5.1f} kB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
