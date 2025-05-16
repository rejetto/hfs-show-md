'use strict';{
    const {React} = HFS
    HFS.onEvent('fileShow', ({ entry }) => entry.ext === 'md' && ShowMd)

    function ShowMd({ className, src, onError, onLoad }) {
        const [md, setMd] = React.useState()
        React.useEffect(() => {
            fetch(src).then(r => r.text())
                .then(setMd)
                .then(onLoad, onError)
        }, [src])
        return HFS.h('div', {
            className,
            style: { width: 'max(80vw, min(60em, 100% - 15em))', height: '100%', background: 'var(--bg)', padding: '1em', overflow: 'auto' }
        }, md ? HFS.html(marked.parse(md)) : "N/A" )
    }
}
