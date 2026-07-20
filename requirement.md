# REQUIREMENT.md

# Kalender Budaya Section
Version: V1.0

---

# Objective

Implement a premium "Kalender Budaya" section that is visually identical to the provided design reference while keeping the existing website design system.

This section must follow the same visual language used throughout the website:
- Dark luxury appearance
- Gold accent (#CFC154)
- Smooth micro interaction
- Premium hover animation
- Framer Motion entrance animation
- Responsive layout

Do NOT redesign the section.
Replicate the composition as closely as possible.

---

# Overall Layout

Background Color

```
#1F1F1F
```

Container

```
max-width:1200px;
margin:auto;
padding-top:100px;
padding-bottom:120px;
padding-inline:24px;
```

Desktop Layout

```
                TITLE

          Date Filter Button


+----------------------+     +----------------------+
|                      |     |                      |
|      Calendar        |     |    Event Detail      |
|                      |     +----------------------+
|                      |
|                      |     +----------------------+
|                      |     |                      |
|                      |     |      Gallery         |
+----------------------+     +----------------------+
```

Desktop Ratio

```
Calendar      : 58%
Right Column  : 42%
```

Tablet

```
Calendar

Event Detail

Gallery
```

Mobile

Single Column

---

# Heading

Small Title

```
KALENDER BUDAYA
```

Style

Color

```
#CFC154
```

Uppercase

Font Weight

```
600
```

Letter spacing

```
0.08em
```

Main Title

```
Jelajahi Acara
```

Font

Heading Font

Weight

```
700
```

Color

```
#FFFFFF
```

Description

Maximum width

```
640px
```

Centered

Color

```
rgba(255,255,255,.65)
```

---

# Filter Button

Rounded Pill

Contains

```
ⓘ Pilihlah tanggal
```

Hover

Background becomes slightly brighter

```
rgba(255,255,255,.08)
```

Transition

```
300ms
```

---

# Shared Container Style

The Calendar container,
Event Detail container,
and Gallery container
MUST share the same design language.

Background

```
rgba(255,255,255,.03)
```

Border

```
1px solid rgba(255,255,255,.08)
```

Border Radius

```
18px
```

Backdrop Blur

```
18px
```

Padding

```
28px
```

Transition

```
350ms cubic-bezier(.22,1,.36,1)
```

---

# IMPORTANT
# Hover Interaction for ALL Containers

When the user hovers any of the three containers,
the entire container must feel alive.

Effects

Border

```
#CFC154
```

Glow

```
0 0 24px rgba(207,193,84,.15)
```

Background

```
rgba(255,255,255,.045)
```

Container moves

```
translateY(-4px)
```

Transition

```
350ms
```

This interaction must be consistent across

- Calendar
- Event Detail
- Gallery

---

# Calendar

Implement a custom calendar.

Header

Year

```
2026
```

Month

```
September
```

Previous and Next arrows.

Week labels

```
M
S
S
R
K
J
S
```

Numbers aligned exactly like a real calendar.

Spacing must be generous.

---

# Calendar Cell

Each date is an interactive button.

Size

```
42x42
```

Border Radius

```
10px
```

Cursor

Pointer

Transition

```
250ms
```

---

# IMPORTANT
# Premium Hover Effect (Fluent UI Inspired)

This is the most important interaction.

DO NOT implement a simple background hover.

Instead implement a Fluent Design / Windows 11 Reveal hover effect.

Reference behavior:

Imagine the Windows 11 Calendar.

As the cursor approaches a date:

- a glowing square slowly appears
- border softly lights up
- background is illuminated
- glow follows cursor movement
- when cursor exits, glow smoothly fades away

The hover must feel alive.

---

# Mouse Reveal Effect

Every calendar cell should support a cursor reveal effect.

Implementation suggestion

Use CSS Variables

```
--mouse-x
--mouse-y
```

Generate a radial gradient.

Example concept

```
radial-gradient(
160px circle at var(--mouse-x) var(--mouse-y),
rgba(207,193,84,.14),
transparent 70%
)
```

Do NOT copy literally.
Create a production-quality implementation.

---

# Hover State

Background

```
rgba(207,193,84,.08)
```

Border

```
1px solid rgba(207,193,84,.75)
```

Glow

```
0 0 12px rgba(207,193,84,.25)

inset 0 0 8px rgba(207,193,84,.15)
```

Scale

```
1.05
```

Translate

```
-2px
```

Transition

```
250ms
```

---

# Active Date

Selected Date

Background

```
#CFC154
```

Text

```
#1F1F1F
```

Weight

```
700
```

Glow

```
0 0 16px rgba(207,193,84,.4)
```

---

# Event Detail Card

Contains

- Title
- Category Tags

Hover

Outline

```
#CFC154
```

Glow

```
0 0 20px rgba(207,193,84,.18)
```

Lift

```
translateY(-3px)
```

---

# Gallery Card

Contains

Images

Location

Description

Hover

Border

```
#CFC154
```

Glow

```
0 0 20px rgba(207,193,84,.18)
```

Lift

```
translateY(-3px)
```

Images

Scale

```
1.04
```

Brightness

```
105%
```

---

# Motion

Use Framer Motion.

Section

Fade Up

Heading

Fade Up

Calendar

Slide Up

Event Detail

Slide Left

Gallery

Slide Left

Container Stagger

```
0.12
```

Hover Animation

Spring

```
stiffness:260
damping:22
```

---

# Performance

Use

- transform-gpu
- will-change
- requestAnimationFrame
- translate3d
- CSS variables for reveal effect

Avoid unnecessary re-renders.

The reveal effect should remain at 60 FPS.

---

# Responsive

Desktop

Two-column layout.

Tablet

Calendar first.

Cards below.

Mobile

Single column.

Calendar remains fully interactive.

---

# Design Language

The final implementation should feel like:

- Apple
- Windows 11 Fluent Design
- Modern museum website
- Premium dark UI

Avoid:

- Hard transitions
- Instant hover changes
- Bright neon glow
- Flat cards
- Cheap animations

Every interaction should feel soft, premium, elegant, and responsive.

---

# Acceptance Criteria

- Pixel-perfect layout.
- All three containers share identical hover behavior.
- Hover outline color is exactly:

```
#CFC154
```

- Calendar cells use Fluent-style reveal hover.
- Smooth glow animation.
- Premium micro-interactions.
- Fully responsive.
- Uses Framer Motion.
- Performance optimized.
- Consistent with the rest of the website.
