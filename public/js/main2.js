//event listeners.
document.addEventListener('DOMContentLoaded', () => {
    if (typeof fin != 'undefined') {
        fin.desktop.main(onMain);
    } else {
        ofVersion.innerText =
            'OpenFin is not available - you are probably running in a browser.';
    }
});

//once the DOM has loaded and the OpenFin API is ready
function onMain() {
    //get a reference to the current Application.
    const app = fin.desktop.Application.getCurrent();

    //we get the current OpenFin version
    fin.desktop.System.getVersion(version => {
        const ofVersion = document.querySelector('#of-version');
        ofVersion.innerText = version;
    });

    const app3 = new fin.desktop.Application({
        uuid: 'app3-uuid',
        name: 'app3',
        url: 'http://localhost:5555/index3.html',
        autoShow: true
    }, () => {
        app3.run(() => {
            fin.desktop.Application.getCurrent().terminate();
        });
    });
}
