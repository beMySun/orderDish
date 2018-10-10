  
  #一个每天下午提醒你点餐的小插件
    > 每天一忙就忘记点晚餐， 干脆写个小插件提醒一下。

  #浏览器也能喊你吃饭饭

  ```
   var msg = new SpeechSynthesisUtterance("该点餐了");
   speechSynthesis.speak(msg);

  ```
