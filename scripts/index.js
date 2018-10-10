window.onload = function () {
  var threePm = new Date().setHours(15, 30, 0);
  var currentTime = new Date().getTime();
  var notifyTime;
  var notify = new Notify({
    audio: {
      file: ["./assets/msg.mp3"]
    },
    notification: {
      title: "大佬! 该点餐了",
      icon: "1",
      body: "还不点？ 饿死你"
    }
  });
  var t;

  function remindDrink() {
    clearTimeout(t);
    notify.player().notify({
      openurl: "http://dinner.szoa.shopee.com/"
    });

    notifyTime = 24 * 60 * 60 * 1000;
    t = setTimeout(remindDrink, notifyTime);
  }

  function checkTime() {
    if (currentTime > threePm) {
      notifyTime = threePm + 24 * 60 * 60 * 1000;
    } else {
      notifyTime = threePm - currentTime;
    }
    setTimeout(remindDrink, notifyTime);
  }

  checkTime();

}

