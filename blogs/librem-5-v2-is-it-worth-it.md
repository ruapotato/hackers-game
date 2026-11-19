---
id: librem-5-v2-is-it-worth-it
title: "Librem 5 v2: Is It Worth It?"
date: 2026-11-18
category: Linux Phones
tags: ["librem 5", "librem 5 v2", "purism", "risc-v", "spacemit k1", "linux phones", "crowdfunding", "privacy", "hardware review"]
videoId: Je3yZxKRnAI
excerpt: "The Librem 5 v2 is up for crowdfunding at $1,599. Same chassis, a RISC-V chip that's about the same per core, no refunds, and no guarantees. Here's why I'm passing."
---

# Librem 5 v2: Is It Worth It?

The Librem 5 v2 is up for crowdfunding. Is it worth it? No.

Quick disclosure before anyone digs it up: I used to work at Purism. I did marketing and I wrote code, including the Librem 5's flashing tooling. Part of my pay came in Purism notes, which I still hold, so if anything I'd gain from this campaign doing well. I want Linux phones to win. That's exactly why this one bugs me.

## What's Actually New

The headline is a shiny RISC-V chip, the SpacemiT K1. It runs at 1.6 GHz. The old Librem 5 ran at 1.5. And they're the same kind of core: small, simple, in-order cores. The old phone had four, this one has eight. Per core, you're getting about the same thing, just twice as many of them.

Some of the upgrades are real:

- RAM goes from 3 GB to 8 GB, which is great.
- It takes two SIMs.
- The SD card is about six times faster.
- Video gets hardware encoding.

The cameras, though, are the same 13 and 8 megapixel sensors as the old phone. And the chip doing the work is the same class of core. CPU-wise, this is a 2015 midrange phone with modern RAM. That's a small bump, not a new phone.

## RISC-V Is Not Open Silicon

Purism pitches RISC-V as the road to products you can fully audit, "every layer from silicon to apps." But an open instruction set is not open silicon. The instruction set is just the language the chip speaks. The actual design inside the K1 is closed. You can't audit it, so you're no better off than with ARM.

And it still ships blobs. Purism's own campaign page says current RISC-V CPUs "have some of these blobs also."

On graphics it's actually a step backwards. The old Librem 5's GPU runs on etnaviv, a fully open driver with no GPU firmware. Sure, the old phone still needed a blob to boot and set up its memory. But the v2's GPU needs closed firmware just to run, on top of that. The open source driver lists this exact GPU as unsupported and not under active development, and Purism's own risk section says the graphics can put a picture on the screen and that's about it. 3D still has to be built.

So from a freedom point of view, this phone is half-baked. Selling an open instruction set as the road to auditability is marketing BS.

For a company that sells security, here's a fun one: their own FAQ says tamper-evident boot isn't on the roadmap for this campaign. That's the feature they use to sell their laptops. On the phone? Maybe later.

## Not Exactly Future-Proof

RISC-V is moving to a newer baseline called RVA23. Ubuntu already requires it, and the K1 doesn't meet it. PureOS is based on Debian, which still supports older chips, so this isn't a dealbreaker today. But it's where things are heading.

To be fair to Purism, there isn't a better RISC-V option for a phone right now. SpacemiT's newer K3 is rated at 15 to 25 watts; the K1 is 3 to 5. You could clock a K3 down, but nobody has built a phone or even a tablet around one. It's sold for AI boxes. So the K1 is probably the best RISC-V chip they could use, and that tells you RISC-V isn't really ready for phones yet.

## Android Apps Get Worse

On the old Librem 5, Android apps run natively, because the phone is ARM and so are the apps. On the v2 the phone is RISC-V and the apps are still ARM, so every one of them runs through an ARM emulator on slow, in-order cores. Purism admits that emulation "needs optimization." Native RISC-V Android isn't coming to the rescue either: Google pulled RISC-V out of the Android kernel in 2024 and says it'll come back at some point.

My prediction: your banking app will run worse on the new phone than on the old one.

## The Modem and the Antennas

It's still 4G. A brand-new 4G modem, from a campaign that ends in 2027.

They say 5G is coming and will drop into both the old and new phone. The problem is that 5G modems want four antennas. This frame has two, tuned for 4G. You can physically jam a 5G card in there (someone in the community already did in 2025), but those antennas aren't built for the high 5G bands, so you get bad 5G. Purism's own older FAQ said 5G would need an antenna upgrade. That requirement has quietly disappeared.

Realistically: 4G that mostly works, or 5G that's crap. And that's if a 5G modem ever ships at all.

## Same Fat Chassis

It's the same chassis as the original: 15.5 mm thick and 263 grams. It's the fattest phone I've ever used. My guess is they kept it because they already paid for the molds. Injection molds for a phone frame are expensive, so reusing them skips one of the biggest costs of making a phone. Makes sense for Purism. Not great for your pocket.

## Battery Life

Same 4,500 mAh battery. Today the original Librem 5 lasts around 10 hours idle without suspend and around 20 with it, by Purism's own numbers.

The new chip is 22 nm instead of 28, and drops an internal USB hub. That helps a bit. SpacemiT's own kernel can suspend the chip at around 32 milliwatts, but that's the vendor's old kernel, and Purism has to port drivers out of it. Remember, suspend took years to work properly on the original.

The GPU is the big one. If 3D acceleration doesn't land, the CPU draws the whole screen in software. That's slow and it burns battery.

My estimate: if everything lands, maybe 20 to 30 percent better while you're using it. Standby barely moves, because the modem drinks most of the power there. If the GPU work slips, it could be worse than the old phone. They're budgeting nine months just for power optimization, which tells you it isn't there yet.

## The Price

$1,599.

The original Librem 5 crowdfunded at $599, so you're paying about 2.7 times the original backer price for a phone that's half a generation better. The original dev kit was $299. This one is $1,599. That's not a dev kit, that's a rip-off.

And honestly? If it were $600, I'd probably still buy one.

There's a payment plan: $129 down, then $99 a month for 15 months. The catch is that if you stop paying partway through, you don't get that money back. Per their FAQ it goes into R&D, and any unclaimed balance becomes a donation to PureOS development in November 2028. If money gets tight halfway through, you didn't buy a phone. You made a donation.

Early investors also get 50 Purism shares with the phone. Back when I worked there, Purism paid part of employees' salaries in notes instead of cash, and I've still got a pile of them. Trust me, Purism paper is not a perk.

## No Promises, No Refunds

Here's what really gets me. Last time, Purism got hammered for broken promises. This time they fixed that: they just don't promise anything. It's right on the campaign page. Rewards are not guaranteed. No refunds. Cost overruns are likely, and the final price will probably be higher. The original campaign promised refunds if they missed their goal; this one says if they miss, they'll figure out what to cut.

Will you get a phone? Maybe. You will never get a refund. At least that part is clear.

When? They say 14 to 15 months after the campaign ends, so around spring 2028. Don't hold your breath. The original Librem 5 was promised for January 2019. The dev kits were due in June 2018 and shipped in December. Phones took years to reach everyone. The new timeline overlaps hardware revisions so tightly that a bug found in one revision gets fixed two revisions later. That's the best case.

And "free from the tech giants"? Their list of planned apps is Instagram, WhatsApp, YouTube and TikTok. Sandboxed, yes, but you're still using the tech giants' apps, just on a more expensive phone.

## So Should You Back It?

Am I skeptical? Yeah. But more than that, I'm disappointed. Purism is chasing "more open" at the cost of "more usable," and both matter. A phone nobody can daily drive frees nobody, and this one isn't even more open.

If you want a Linux phone today, the FuriLabs FLX1S is about as good as it gets right now (I reviewed it [here](https://hackers-game.com/?blog=flx1s-linux-phone-review)), though it's still a bigger phone than I like carrying around. Dawn Drums is cooking up something interesting with the Divine D, but it's nowhere near production yet.

Okay, bye bye!
