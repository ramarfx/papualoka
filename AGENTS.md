<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Tailwind CSS v4 Policy

Project ini menggunakan **Tailwind CSS v4**.

Saat membuat, mengubah, atau merefactor code, AI **WAJIB** menggunakan syntax dan API Tailwind CSS v4 terbaru.

## Rules

- Jangan menghasilkan utility yang deprecated.
- Jangan menggunakan syntax dari Tailwind CSS v2/v3 jika sudah memiliki pengganti di v4.
- Selalu migrasikan utility lama ke utility v4 saat mengedit file.
- Jangan mencampur syntax lama dan baru dalam satu file.
- Jika ragu, ikuti dokumentasi resmi Tailwind CSS v4 dan Upgrade Guide.

## Required Migrations

### Flex

Use:

- `grow`
- `grow-0`
- `shrink`
- `shrink-0`

Instead of:

- `flex-grow`
- `flex-grow-*`
- `flex-shrink`
- `flex-shrink-*`

---

### Gradient

Gunakan utility gradient v4.

Examples:

- `bg-linear-to-r`
- `bg-linear-to-l`
- `bg-linear-to-t`
- `bg-linear-to-b`
- `bg-linear-to-tr`
- `bg-linear-to-tl`
- `bg-linear-to-br`
- `bg-linear-to-bl`

Jangan gunakan:

- `bg-gradient-to-*`

---

### Shadow

Gunakan nama baru.

| Lama | Baru |
|------|------|
| `shadow-sm` | `shadow-xs` |
| `shadow` | `shadow-sm` |

---

### Drop Shadow

| Lama | Baru |
|------|------|
| `drop-shadow-sm` | `drop-shadow-xs` |
| `drop-shadow` | `drop-shadow-sm` |

---

### Blur

| Lama | Baru |
|------|------|
| `blur-sm` | `blur-xs` |
| `blur` | `blur-sm` |

---

### Backdrop Blur

| Lama | Baru |
|------|------|
| `backdrop-blur-sm` | `backdrop-blur-xs` |
| `backdrop-blur` | `backdrop-blur-sm` |

---

### Border Radius

| Lama | Baru |
|------|------|
| `rounded-sm` | `rounded-xs` |
| `rounded` | `rounded-sm` |

---

### Outline

Gunakan:

- `outline-hidden`

Jangan gunakan:

- `outline-none` (syntax lama)

---

### Ring

Gunakan:

- `ring-3`

Jangan gunakan:

- `ring`

---

### Text Overflow

Gunakan:

- `text-ellipsis`

Jangan gunakan:

- `overflow-ellipsis`

---

### Box Decoration

Gunakan:

- `box-decoration-slice`
- `box-decoration-clone`

Jangan gunakan:

- `decoration-slice`
- `decoration-clone`

---

### Opacity Utilities

Jangan gunakan:

- `bg-opacity-*`
- `text-opacity-*`
- `border-opacity-*`
- `divide-opacity-*`
- `ring-opacity-*`
- `placeholder-opacity-*`

Gunakan opacity modifier modern.

Examples:

```html
bg-black/50
text-white/80
border-red-500/40
ring-blue-500/25
placeholder-gray-400/60
```

---

## Important Modifier

Gunakan format v4.

✅

```html
flex!
bg-red-500!
hover:bg-blue-500!
```

Jangan gunakan format lama.

```html
!flex
!bg-red-500
```

---

## CSS Configuration

Gunakan konfigurasi Tailwind CSS v4.

- Gunakan `@import "tailwindcss";`
- Jangan gunakan:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## General Rule

Selalu prioritaskan syntax, utility, variant, dan API terbaru dari Tailwind CSS v4.

Jika terdapat utility yang berubah nama pada versi terbaru, gunakan nama yang baru dan jangan menghasilkan syntax lama.
<!-- END:nextjs-agent-rules -->
