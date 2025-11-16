# Z-Index Layering System

This document explains the z-index hierarchy used in the Vetrai application to prevent visual stacking issues.

## Z-Index Hierarchy

The application uses a carefully structured z-index system to ensure proper layering of UI elements:

### Base Layer (z-0 to z-10)
- **Map containers**: z-0 (default)
- **Map overlays** (legends, badges, controls): z-10
  - TomTomTrafficMap overlays
  - InteractiveCityMap overlays
  - Live traffic indicators
  - Control hints

### Navigation Layer (z-50 to z-100)
- **Sticky header**: z-[100]
  - Logo
  - City selector
  - Settings button
  - Navigation tabs

### Modal/Dialog Layer (z-50+)
- **Dialog overlay**: z-50 (from Radix UI)
- **Dialog content**: z-50 (from Radix UI)
- **Settings dialog**: Uses Radix UI defaults

### Toast Layer (z-[9999])
- **Sonner toasts**: z-[9999] (library default)
  - Notifications
  - Success messages
  - Error alerts

## Why This Matters

### Previous Issues
- Map overlays had z-[1000], which placed them above the header
- This caused the TomTom map controls and legends to appear over the navigation
- Settings dialog could potentially be hidden behind map elements

### Fixed Structure
1. **Maps render at the base level** (z-10 for overlays)
2. **Header stays on top** of content but below modals (z-[100])
3. **Dialogs and modals** render above everything in content (z-50 with portal)
4. **Toasts** render at the very top (z-[9999])

## Implementation Examples

### Map Overlays
\`\`\`tsx
<div className="absolute top-4 left-4 ... z-10">
  {/* Map legend or control */}
</div>
\`\`\`

### Sticky Header
\`\`\`tsx
<header className="sticky top-0 z-[100]">
  {/* Navigation content */}
</header>
\`\`\`

### Dialogs
Radix UI handles this automatically with portals, but you can customize:
\`\`\`tsx
<DialogOverlay className="z-50" />
<DialogContent className="z-50" />
\`\`\`

## Best Practices

### DO:
✅ Use low z-index values (0-10) for map-related elements
✅ Keep header at z-[100] for consistent navigation
✅ Let UI libraries (Radix, Sonner) handle their own z-index
✅ Use portals for modals and overlays
✅ Document any new z-index values added

### DON'T:
❌ Use arbitrary high z-index values (like z-[1000])
❌ Override library defaults unless necessary
❌ Create z-index wars by incrementing values
❌ Forget to test with all dialogs/modals open

## Testing Checklist

When modifying z-index values, test:

- [ ] Maps don't overlap header when scrolling
- [ ] Settings dialog appears above all content
- [ ] City selector dropdown is visible
- [ ] Toast notifications appear on top
- [ ] Map controls are clickable
- [ ] No elements are unreachable or hidden

## Troubleshooting

### Element hidden behind another
1. Check the z-index values of both elements
2. Verify parent elements don't have `isolation: isolate`
3. Ensure positioning is set (relative, absolute, fixed)
4. Check if element is in a portal

### Modal not appearing
1. Verify modal has higher z-index than content
2. Check if modal uses a portal
3. Ensure overlay has proper z-index
4. Verify no parent has `overflow: hidden` clipping it

### Sticky header not working
1. Confirm `position: sticky` is set
2. Check that parent allows sticky behavior
3. Verify z-index is high enough
4. Ensure `top` value is set

---

**Last Updated**: Following map overlay z-index fix
**Version**: 1.0
