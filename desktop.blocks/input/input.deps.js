({
    shouldDeps: [
        {
            mods: { type: [ 'text', 'checkbox', 'radio', 'file' ] }
        },
        {
            elems: [ 'input', 'label', 'field-blocker', 'browse-button', 'file-title' ]
        },
        {
            elem:
                'file-title',
            mods: {
                visibility: [ 'hidden', 'visible' ],
                extension: ['doc', 'docx', 'jpg', 'jpeg' , 'rar', 'zip', 'pdf', 'txt']
            }
        }
    ]
})