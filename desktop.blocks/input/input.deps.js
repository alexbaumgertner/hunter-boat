({
    shouldDeps: [
        {
            mods: { type: [ 'text', 'checkbox', 'radio', 'file' ] }
        },
        {
            elems: [ 'input', 'label', 'field-blocker', 'browse-button', 'file-icon' ]
        },
        {
            elem: 'file-icon', mods: { visibility: [ 'hidden', 'visible' ] }
        }
    ]
})