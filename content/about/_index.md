+++
title = "about this idiot"
description = "how does this idiot cant stop being an stupid ass?"
generate_feeds = true
[extra]
no_header = true
+++

## hi, my name's <span class="rainbow">anins1der</span>
i am a 16 years old idiot who "codes", draws and writes 24/7 {{ sticker(path="/emoji/trolley.png", name="trolley") }}

oh um if you wanna say anything about me then you can just <abbr title="script stolen from https://azumanga.gay btw">type it below</abbr>

<div class="ntfy-er">
  <div class="msgbar">
    <input class="ntfy-msg" id="ntfy-msg" placeholder="qwack qwack 🪿">
    <button class="submit" onclick="javascript:sendNotification()">send ts</button>
  </div>
</div>

<script>
  // stolen from azumanga.gay lel

  // stolen ntfy script
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