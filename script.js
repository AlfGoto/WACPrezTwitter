document.addEventListener('DOMContentLoaded', () => {
    let index = 0

    let func = {
        un: () => {
            document.getElementById('firstH1').style.width = '60svw'
            setTimeout(() => {
                document.getElementById('firstH1').style.top = '1svw'
                document.getElementById('firstH1').style.fontSize = '5svw'
                document.getElementById('firstH1').style.width = '35svw'
            }, 2000)
        },
        deux: () => {
            document.getElementById('alfPhoto').style.right = '76svw'
        },
        trois: () => {
            document.getElementById('rhedPhoto').style.right = '54svw'
        },
        quatre: () => {
            document.getElementById('arnPhoto').style.right = '32svw'
        },
        cinq: () => {
            document.getElementById('ronPhoto').style.right = '10svw'
        },
        six: () => {
            let children = document.getElementById('firstSlide').children;
            for (let i = 0; i < children.length; i++) {
                let c = children[i];
                c.style.top = (Number(c.style.top.replace('svw', '')) - 50) + 'svw'
            }
            setTimeout(() => {
                document.getElementById('firstSlide').style.display = 'none'
                document.getElementById('firstSlide').style.height = '0%'
            }, 1000)
        },
        sept: () => {
            document.getElementById('twitterScreen1').style.opacity = '100%'
        },
        huit: () => {
            document.getElementById('twitterScreen2').style.opacity = '100%'
        },
        neuf: () => {
            document.getElementById('twitterScreen3').style.opacity = '100%'
        }, dix: () => {
            let children = document.getElementById('secondSlide').children;
            for (let i = 0; i < children.length; i++) {
                let c = children[i];
                c.style.top = (Number(c.style.top.replace('svw', '')) - 50) + 'svw'
            }
            setTimeout(() => {
                document.getElementById('secondSlide').style.display = 'none'
                document.getElementById('secondSlide').style.height = '0%'
            }, 1000)
        },
    }











    let arr = Object.keys(func)
    window.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            func[arr[index]]()
            index++
        }
    })
})