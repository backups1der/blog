+++
title = "Emojis."
description = "Hall of [[EMOJIS]]. Mostly for myself but I wanted to share it \"publicly\"."
insert_anchor_links = "left"
[extra.weather]
condition = "Snowing"
# Available styles: <cloudy, showers, snowing>
style = "snowing"
# Any icon from https://phosphoricons.com
icon = "cloud-snow"
temp = "-2"
+++

Remember the [emoji shortcut from Ametrine's demo](https://ametrine.daudix.one/demo#emoji)?  <!-- "smh it works so i dont touch that" ahh link 😭 -->
Apparently it doesnt have any support for local files <small><mark>[(yet)](https://codeberg.org/Geode/ametrine/issues/36)</mark></small> as it depends on Mastodon servers' emojis too.
Since I'm not a Mastodon guy anymore[^1], I decided to ~~steal~~ rewrite the shortcode (template). <span class="spoiler">I also renamed *my* template to "sticker"s. <small>so fucking original amirite-</small></span>

Soo, what we were doing here?  
Oh right, listing every custom emoji that's ever existed like people like to do with their [88x31](https://eightyeightthirty.one)'s! Right now we have-  

2\. Yep. Just two fucking emojis: {{ sticker(path="/emoji/trolley.png", name="trolley") }} and {{ sticker(path="/emoji/parappa.png", name="parappa") }}

...I'm back with new emojis.  
{{ sticker(path="/emoji/dowg.png", name="dowg", big=true)}}
[{{ sticker(path="/emoji/neofax.png", name="neofax (CLICK HERE TO MEET COOL PEOPLE!!!)", big=true) }}](https://snugnook.org)
{{ sticker(path="/emoji/neofax_floof_explode.webp", name="You need a Nitro subscription to be able to use this emoji.", big=true) }}
{{ sticker(path="/emoji/miaf.png", name="miaf...", big=true) }}

***

Oh and I'd like to *just* do this:
{{ image(alt="Remember that one time where someone made a joke, another guy took it too literally and the first guy responded with the same action? No? I made it happen", url="/assets/poop.png", spoiler=true, no_hover=true) }}
<figcaption>Remember that one time where someone made a joke, another guy took it too literally and the first guy responded with the same action? No? I made it happen {{ sticker(path="/emoji/dowg.png", name="dowg")}}</figcaption>

[^1]: (I forget my password and I'm too lazy (and shy) to contact <a href="https://indieweb.social">indieweb.social</a> staff about it. Also I'm not really into the whole fedi thing anymore.) {{ sticker(path="/emoji/neofax_floof_explode.webp", name="You need a new processor before using this emoji, because there's a 99% change of your brain instantly rotting away from this very undodgeable cringe attack ;-;") }}