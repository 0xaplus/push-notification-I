const button = document.querySelector('button');

button.addEventListener('click', () => {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
            const notification = new Notification("Example notification", {
                body: "Hey",
                data: { hello: "world"},
                icon: "",
                tag: "Welcome Message"
            })

            notification.addEventListener('error', e => {
                alert("error")
            })
        }
    })
});

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        new Notification('Come back please', {
            body: 'PLEASE!',
            tag: 'Come back message'
        })
    } else {
        notification.close();
    }
})