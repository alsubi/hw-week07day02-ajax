let res = {}

function memes() {
    axios.get("https://api.imgflip.com/get_memes")
        .then(result => {
            res = result.data
            console.log(res)
            res.data.memes.forEach(element => {
                document.getElementById("div1").innerHTML += `
            <div id="memesName${element.id}">${element.name } </div>
            <div id="memesImg${element.id}"><img src=${element.url} width=${element.width} height=${element.height} > </div>
            `
                res.data.memes.forEach(element => {
                    $("#memesName" + element.id).click(function () {
                        $("#memesImg" + element.id).toggle()
                    })
                })
                
            });


        })
}

memes()