---
id: networking-and-osi-basics
title: "Networking and OSI Basics"
date: 2020-11-07
category: Linux
tags: ["networking", "osi-model", "dhcp", "mac", "ip", "dns", "arp", "protocol", "tcp-ip"]
videoId: uJ5UOJJVkgA
excerpt: "How does the internet work?"
---

# Networking and OSI Basics

How does the internet work?

## The OSI Model

The Open Systems Interconnection (OSI) model explains how data travels across networks in 7 layers:

### Layer 7 - Application
- What users interact with
- HTTP, FTP, SMTP, DNS
- Web browsers, email clients

### Layer 6 - Presentation
- Data formatting and encryption
- SSL/TLS, JPEG, ASCII

### Layer 5 - Session
- Managing connections
- Authentication, reconnection

### Layer 4 - Transport
- Reliable data transfer
- TCP (reliable), UDP (fast)
- Port numbers

### Layer 3 - Network
- Routing between networks
- IP addresses
- Routers

### Layer 2 - Data Link
- Local network communication
- MAC addresses
- Switches, bridges

### Layer 1 - Physical
- Actual cables and signals
- Ethernet, WiFi, fiber

## Key Protocols

### DHCP (Dynamic Host Configuration Protocol)
Automatically assigns IP addresses to devices on a network.

### DNS (Domain Name System)
Translates domain names (google.com) to IP addresses.

### ARP (Address Resolution Protocol)
Maps IP addresses to MAC addresses on local networks.

### MAC Addresses
Physical hardware addresses, unique to each network interface.

### IP Addresses
Logical addresses for routing between networks.

## How Data Travels

1. Application creates data
2. Data is segmented and given port numbers
3. IP addresses are added for routing
4. MAC addresses are added for local delivery
5. Data becomes electrical/optical signals
6. Process reverses at destination

## Interactive Version

For a more hands-on learning experience: https://www.hackers-game.com/2020/11/07/networking-and-osi-basics/

[Watch on YouTube](https://youtube.com/watch?v=uJ5UOJJVkgA)
