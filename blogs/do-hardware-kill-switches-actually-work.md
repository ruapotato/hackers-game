---
id: do-hardware-kill-switches-actually-work
title: "Do Hardware Kill Switches Actually Work?"
date: 2026-01-15
category: Linux Phones
tags: ["linux phone", "flx1s", "hardware", "kill switches", "privacy", "security", "FuriLabs", "FuriOS", "GPIO", "analog disconnect", "mic kill switch", "camera kill switch", "modem kill switch"]
videoId: f5Bscjm3EJI
excerpt: "Linux phones are shipping with hardware kill switches. But do they actually work?"
---

# Do Hardware Kill Switches Actually Work?

Linux phones are shipping with hardware kill switches. But do they actually work? I tested all three on the FLX1s at the hardware level.

## The Test

This video provides a hardware-level analysis of the kill switches found on the FLX1s Linux phone from FuriLabs. Rather than taking marketing claims at face value, the switches are tested to verify their actual functionality.

## Key Findings

**Spoiler: The mic switch is a true analog disconnect - no software can bypass it.**

The three kill switches tested:

1. **Microphone kill switch** - True analog disconnect at the hardware level
2. **Camera kill switch** - Hardware-level camera disconnection
3. **Modem kill switch** - Cellular modem control

## Why This Matters

Hardware kill switches are a key privacy feature of Linux phones like the:

- FLX1s (FuriLabs)
- Librem 5 (Purism)
- PinePhone (Pine64)

Unlike software toggles that could potentially be bypassed by malware or compromised software, true hardware disconnects provide a physical guarantee that the component is disabled.

## Security Considerations

The video also discusses:

- **Accelerometer side-channel attacks** (AccEar) - Alternative eavesdropping vectors
- **GPIO-level verification** - How to confirm switches work at the hardware level
- **Real-world use cases** - When and why you might actually use these switches

But do I actually use them? ...What's your use case?

[Watch on YouTube](https://youtube.com/watch?v=f5Bscjm3EJI)
