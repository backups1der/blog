+++
title = "bu aptal hakkında"
description = "bu mal nasıl aptal bir götkafa olmayı durduramıyor?"
generate_feeds = true
[extra]
no_header = true
+++

## merhaba, benim adım <span class="rainbow">kornaman</span>
ben 16 yaşında bir aptalım; 7/24 "kod yazıyor", çiziyor ve yazı yazıyorum (yersen) {{ sticker(path="/emoji/trolley.png", name="trolley") }}

<div class="ntfy-er">
  <div class="msgbar">
    <input class="ntfy-msg" id="ntfy-msg" placeholder="tırtırt">
    <button class="submit" onclick="javascript:sendNotification()">gönder gelsin</button>
    
  </div>
</div>

<script>
//   stolen from azumanga.gay lel

//   stolen ntfy script
  function send(message) {
    let r = new XMLHttpRequest()
    r.open("POST", "https://ntfy.anins1der.com/website-en", true)
    r.setRequestHeader("Content-Type", "text/plain")
    r.send(message)
  }

// send notification
  let ntfyInput = document.getElementById("ntfy-msg")
  function sendNotification() {
    if (ntfyInput.value.length <= 0) return
    send(ntfyInput.value)
    ntfyInput.value = ""
  }
</script>
