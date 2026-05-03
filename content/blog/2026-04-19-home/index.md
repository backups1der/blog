+++
title = "Back to Home: Ametrine vs Static File Deployment"
description = "You thought I could survive in this wild world of static webpage deployment and shit? You're <del>(and me to a extent)</del> are all wrong."
authors = ["anins1der"]

[taxonomies]
tags = ["blog"]

[extra]
accent_color = "hsl(100, 28%, 59%)"
trigger = "I'm a dinkhead."
banner = "tanner.png"

[extra.weather]
condition = "The FitnessGram Pacer test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter Pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal *boop*. A single lap should be completed each time you hear this sound *ding*. Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start."
# Available styles: <cloudy, showers, snowing>
style = "cloudy"
# Any icon from https://phosphoricons.com
icon = "aperture"
temp = "10"
+++

Over the past few months, I have been pushing myself to do *something original* for my website; and I have failed miserably.
Like, nginx was pain in the ass, I couldn't get simple-web-server to work the way I wanted: and the issue was --- *drum roll* --- I couldn't get my website to display *nicer links*.

## Nicer links

What do I mean by "*nicer link*"s, exactly? You probably seen this before: When you take a look at your URL bar, most sites hide the extension of your page so it looks nicer.

<aside>
{{ image(alt="Notice how the URL bar doesn't have an file extensions", url="link.png") }}
<figcaption>Notice how the URL bar doesn't have an file extensions</figcaption>
</aside>

...I messed up so bad that I couldn't do it --- like, you **had to** put .html at the end just to see the contents; and doing that doesn't trigger page transitions :(

<small>Yep, that's why I gave up on writing bare HTML and CSS---</small> {{ sticker(path="/emoji/neofax_floof_explode.webp", name="oopsies, ig") }}

## New error, "new" setup { #zola }

If you've been following my website lately, chances are you might have *seen* this layout appear before (along with random nginx brainfarts). As the footer [^1] below here says, this website runs on Zola (a simple, but templatable static site generator written in Rust); and on top of that Ametrine lies there.
Ametrine is <small>(**not**)</small> a complete theme with a medium-sized feature set, designed to work with Zola and it's limitations.

I'm not exactly the guy that understands things or anything, it's just that I take readily avaiable stuff from people, modify them a litte bit, "cry" about them not being original and go forward --- oh look, I dont know how these got broken, *at all*!

<!-- other values (transparent,no_hover,pixels,drop_shadow) can be set with *value*=true -->
{{ image(alt="...how?", full=true, url="bradar.png") }}
<figcaption>...how?</figcaption>

<!-- other values (transparent,no_hover,pixels,drop_shadow) can be set with *value*=true -->
{{ image(alt="Huhh??", url="ayee.png") }}
<figcaption>Huhh??</figcaption>

...you probably get the idea. I guess it's time to redo the entirety of the blog from ground up, maybe I'll clean up every <span class="snug">nook</span> and cranny of this thingamabob while I'm at it <small>(lol)</small>.

> [!IMPORTANT]
> T'is painful.

> [!CAUTION]  
> I took a long time to get stuff back up, not including the time I didn't do anthing related to this blog (<span class="spoiler">of course I did *p r o c r a s t i n a t e*</span>)

Hi from a few days later. I finally got my shit back up and running. Everything's fine. I mean, you can read this in a nice looking theme, so it's a big pass to me.  
It's time for me to get this boy deployed on my Dokploy stack :)

[^1]: Well hello there, thanks for taking the quick ride to the footer!
