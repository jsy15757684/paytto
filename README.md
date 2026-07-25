# PAYTTO — Green Mobility, Vision for Future

Corporate marketing site for PAYTTO Co., Ltd., generated from the company profile deck
(`(KOREA)PAYTTO Profile_2604_EN.pdf`).

- `index.html` — self-contained page (all images inlined as base64), ready to deploy as-is.
- `template.html` — editable source template with `__TOKEN__` placeholders for the images in `assets/`.
- `assets/` — source photos and logo extracted from the company profile deck.

## Rebuilding index.html after editing template.html

```bash
python3 -c "
with open('template.html') as f:
    html = f.read()

mapping = {
    '__LOGO__': 'assets/logo.png',
    '__HERO__': 'assets/hero.jpg',
    '__LOUNGE__': 'assets/lounge.jpg',
    '__VEHICLE_LINEUP__': 'assets/vehicle_lineup.jpg',
    '__SHOWROOM_GRID__': 'assets/showroom_grid.jpg',
    '__CHARGING__': 'assets/charging.jpg',
    '__RAW_MATERIALS__': 'assets/raw_materials.jpg',
    '__BATTERY__': 'assets/battery.jpg',
    '__SOLAR__': 'assets/solar.jpg',
}
import base64, imghdr
for token, path in mapping.items():
    with open(path, 'rb') as fh:
        data = base64.b64encode(fh.read()).decode()
    ext = 'png' if path.endswith('.png') else 'jpeg'
    html = html.replace(token, f'data:image/{ext};base64,{data}')

with open('index.html', 'w') as f:
    f.write(html)
"
```

## Deploy

Static site, no build step. Deployed on Vercel.
