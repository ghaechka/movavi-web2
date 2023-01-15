const addr = "http://localhost:3000"
$("#getgift").click(() => {
    axios.get(addr + "/api/gift").then((data) => {
        let gifts = data.data.list;
        $("#gifts").html("")
        gifts.forEach(element => {
            let gift = $("<div class='gift'></div>")
            let h1 = $("<h1>").text(element.name)
            let p = $("<p>").text(element.desc)
            let strong = $("<strong>").text(element.cost)
            gift.append(h1).append(p).append(strong);
            $("#gifts").append(gift)
        });
    })
})

$("#random").click(() => {
    axios.get(addr + '/api/random')
        .then((data) => {
            console.log(data.data);
            let element = data.data;
            $("#gifts").html("");
            let gift = $("<div class='gift'></div>")
            let h1 = $("<h1>").text(element.name)
            let p = $("<p>").text(element.desc)
            let strong = $("<strong>").text(element.cost)
            gift.append(h1).append(p).append(strong);
            $("#gifts").append(gift)
        })
})