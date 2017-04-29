# tinytoggle
Toggles classes you like on elements you like on events you like. Include and forget!

## Markup
### 1) Add `data-toggle-class` to the things you like to toggle with (required)
One or more comma separated class names that will be toggled on the toggle target, e.g.:

`data-toggle-class="foo"`

`data-toggle-class="foo, bar, boz"`

### 2) Add 'data-toggle-target' (recommended)
One or more comma separated CSS selectors on which classes will be toggled, e.g.:

`data-toggle-target=".main-nav"`

`data-toggle-target=".actually, #you-could .do-this [but-please='dont']"`

If omitted, classes will be toggled on the toggler itself.

### 3) Add 'data-toggle-event' (optional)
One or more comma separated events on which toggling should take place, defaults to `click`.

`data-toggle-event="change"`

`data-toggle-event="mouseover, mouseout"`

## Example
```
<body>
    <header class="header">
        <button type="button" class="main-menu__toggle" data-toggle-class="menu-open" data-toggle-target="body">
            <span class="main-menu__hamburger"></span>
        </button>
    </header>
    <!-- awesome stuff goes here -->
</body>
```
