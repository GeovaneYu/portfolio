#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [ ! -x "$CHROME" ]; then
  echo "Google Chrome não encontrado em: $CHROME" >&2
  exit 1
fi

render() {
  local src="$1"
  local out="$2"
  local profile
  profile="$(mktemp -d)"

  # O Chrome headless pode não encerrar sozinho após gerar o PDF; o alarme garante o término.
  perl -e 'alarm shift; exec @ARGV' 30 "$CHROME" \
    --headless=new \
    --disable-gpu \
    --no-sandbox \
    --user-data-dir="$profile" \
    --no-pdf-header-footer \
    --print-to-pdf="$out" \
    "file://$src" 2>/dev/null || true

  rm -rf "$profile"

  if [ ! -s "$out" ]; then
    echo "Falha ao gerar: $out" >&2
    exit 1
  fi

  echo "PDF gerado em: $out"
}

render "$ROOT/cv/CV-Geovane-Gofredo-2026.html" "$ROOT/public/CV-Geovane-Gofredo-2026.pdf"
render "$ROOT/cv/CV-Geovane-Gofredo-2026-EN.html" "$ROOT/public/CV-Geovane-Gofredo-2026-EN.pdf"

python3 - "$ROOT" <<'PY'
import sys
from pathlib import Path
import pymupdf

root = Path(sys.argv[1])
for name in ("CV-Geovane-Gofredo-2026.pdf", "CV-Geovane-Gofredo-2026-EN.pdf"):
    path = root / "public" / name
    doc = pymupdf.open(path)
    print(f"{name}: {len(doc)} página(s)")
    if len(doc) != 1:
        raise SystemExit(f"{name} deveria ter 1 página, mas tem {len(doc)}.")
PY
