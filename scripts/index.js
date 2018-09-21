window.onload = function() {
  //  30 * 60 * 1000
  var drinkTime = 30 * 1000;
  var notify = new Notify({
    effect: "flash",
    interval: 500,
    audio: {
      file: ["./assets/msg.mp3"]
    },
    notification: {
      title: "大佬! 该喝水了",
      icon: "",
      body: "还不喝？ 渴死你"
    }
  });

  function remindDrink() {
    setTimeout(remindDrink, drinkTime);
    notify
      .player()
      .setFavicon(1)
      .notify({
        openurl: "http://dinner.szoa.shopee.com/"
      });
  }

  var msg = new SpeechSynthesisUtterance("该点餐了");
  speechSynthesis.speak(msg);

  remindDrink();
};
