# Thermopresh design-system rebalance

This implementation keeps the existing editorial identity and changes its pressure, pacing, and allocation rather than replacing it.

## Typography roles

- **Declaration — Encode Sans Condensed:** reserved for one major statement per page. On the homepage this is `WORK THAT MATTERS TO YOU.` Later headings are smaller and no longer default to uppercase.
- **Essay — Newsreader:** questions, project situations, observations, invitations, and reflective passages use a warm sentence-case reading voice.
- **Notation — Azeret Mono:** section numbers, sources, dates, proof boundaries, filter states, and figure notes.
- **Utility/body — Encode Sans:** navigation, controls, compact explanations, and supporting copy.

## Color allocation

- Foundation: cream `#F7F0E5`, light paper `#FBF7F0`, ink `#242321`, and navy `#123042`.
- Saturated marigold, clay, and sage are punctuation rather than the continuous page climate.
- Larger warm surfaces use butter `#F3D88B`, soft clay `#DE806B`, pale sage `#A9C3B7`, mist `#DDE7E8`, and warm stone `#C8C0B2`.
- Large neutral page fields use a cool room-paper tint with faint navy rectangular rules. Warm stone remains available for artifacts and evidence, but no longer carries the whole page background.
- Proof states always use text labels and never rely on color alone.

## Spacing and rhythm

- Page bands use a wider vertical rhythm and a stable `1180px` reading frame.
- Essay copy stays near 65–72 characters per line.
- Dense bordered grids give way to alternating open passages, ruled rows, figures, and marginal notes.
- Mobile keeps at least `20px` page gutters, `16px` body text, and approximately `44px` interactive targets.

## Motion principle

- Homepage material follows one restrained physical grammar: float, gather, align, connect, slow, settle, resolve. It is carried by project and evidence objects rather than decorative spectacle.
- Selected situations gather related fragments into a readable project; How I Think resolves material from four projects into evidence-controlled transformations; nothing continuously animates.
- `prefers-reduced-motion` removes smooth scrolling, staged reveal delays, and transforms.

## Reusable figure system

- Every figure includes a number, sentence-case title, primary observation, source, proof status, optional method note, and adjacent text summary.
- Figures use direct labels and a restricted navy/clay/sage/stone palette. One finding is emphasized while supporting values recede.
- Quantitative display is used only where values are explicit in the existing evidence. Cross-sectional distributions are not described as individual transitions.
- Responsive figures fit the viewport without horizontal scrolling and remain understandable without color or the visual chart.

## Responsive composition

- The invariant is the editorial experience, not desktop geometry.
- Desktop navigation belongs to the opening frame and does not follow the reader through the document. At tablet and mobile sizes it becomes a temporary full-height Index.
- Narrow layouts reduce simultaneous choices: method steps, trails, and peer filters become clearly partial horizontal rails; their active content receives the full width below.
- Large declarations become headings rather than environmental objects on small screens. Essay text keeps comfortable reading sizes.
- Dense desktop groups recompose by purpose: proof becomes a compact two-column ledger, writing becomes a ruled editorial list, and state models become sequential touch explorers.
- Homepage sections `03 / HOW I THINK` and `04 / A QUESTION I AM THINKING ABOUT` lead with their section identities; their question and reflection remain secondary editorial material.
