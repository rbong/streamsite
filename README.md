## streamsite

A quick script for grabbing the currently embedded stream at suptv.org

I will probably support more streaming sites in the future.

Once you have the stream url, you should copy it into livestreamer.

### Support

This is a personal script. It's for Linux. Please let me know if you're using
it by posting an issue here on github and I'll tidy things up/add more
features.

I also welcome pull requests.

### Livestreamer plugins

I will often write my own livestreamer plugins for suptv. Check my livestreamer
fork branches for compatible plugins.

If I haven't written a compatible plugin, you probably just need to use the
username to figure out the channel's regular URL and feed that to livestreamer.

### Purpose

swf streamers suck. By divorcing them, you can even run the stream through your
raspberry pi with graphics accelerated video playing without hiccups.
```
livestreamer $(suptv.sh) -np omxplayer
```
Or, if you have an ssh server named rpi set up,
```
ssh rpi livestreamer $(suptv.sh) -np omxplayer
```
It will magically play over HDMI.
