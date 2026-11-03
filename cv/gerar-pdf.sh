#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="$ROOT/public/CV-Geovane-Gofredo-2026.pdf"
SRC="$ROOT/cv/CV-Geovane-Gofredo-2026.html"
PROFILE="$(mktemp -d)"

if [ ! -x "$CHROME" ]; then
  echo "Google Chrome não encontrado em: $CHROME" >&2
  exit 1
fi

# O Chrome headless pode não encerrar sozinho após gerar o PDF; o alarme garante o término.
perl -e 'alarm shift; exec @ARGV' 25 "$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-sandbox \
  --user-data-dir="$PROFILE" \
  --no-pdf-header-footer \
  --print-to-pdf="$OUT" \
  "file://$SRC" 2>/dev/null || true

rm -rf "$PROFILE"

if [ ! -s "$OUT" ]; then
  echo "Falha ao gerar o PDF." >&2
  exit 1
fi

echo "PDF gerado em: $OUT"
