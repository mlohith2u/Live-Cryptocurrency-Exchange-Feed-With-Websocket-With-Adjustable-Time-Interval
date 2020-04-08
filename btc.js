startWebsocket();
var arr=[];
function startWebsocket() {
    var websocket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
    websocket.onmessage = function (evt) {
        var obj = JSON.parse(event.data);
        var arrlen1=arr.length;
         var k=arr.push(obj);
        //  if(arrlen1!=k)
        //  {
            var x = arr[arr.length-1].E;
            var y = arr[arr.length-1].p;
            var Trade_id = obj.t;
            document.write("X : ", x);
            document.write("y : ", y);
            document.write("</br>");


            websocket.close();
            setTimeout(startWebsocket, 5000)
        //  }

       

    };

}