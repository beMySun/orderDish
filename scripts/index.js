window.onload = function() {
  //  30 * 60 * 1000
  var threePm = new Date().setHours(15, 30, 0, 0);
  var currentTime = new Date();
  // var s = currentTime - fourPm;

  var notifyTime;
  var drinkTime = 10 * 60 * 1000;
  var notify = new Notify({
    effect: "flash",
    interval: 100,
    audio: {
      file: ["./assets/msg.mp3"]
    },
    notification: {
      title: "大佬! 该点餐了",
      icon: "1",
      body: "还不点？ 饿死你"
    }
  });

  function remindDrink() {
    if (currentTime > threePm) {
      notifyTime = threePm + 24 * 60 * 60 * 1000;
      setTimeout(remindDrink, drinkTime);
      notify.player().notify({
        openurl: "http://dinner.szoa.shopee.com/"
      });
    } else {
      notifyTime = "";
    }
  }

  // var msg = new SpeechSynthesisUtterance("该点餐了");
  // speechSynthesis.speak(msg);

  remindDrink();
};
