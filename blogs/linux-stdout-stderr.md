---
id: linux-stdout-stderr
title: "Linux stdout stderr"
date: 2018-11-27
category: Linux
tags: ["linux", "bash", "terminal", "stdout", "stderr", "stdin", "redirect", "pipe", "command-line"]
videoId: Ok_plRtZyac
excerpt: "Standard out and standard error overview"
---

# Linux stdout stderr

Standard out and standard error overview.

## Understanding Output Streams

In Linux, every process has three standard streams:

- **stdin (0)**: Standard input - where the program reads input from
- **stdout (1)**: Standard output - where normal output goes
- **stderr (2)**: Standard error - where error messages go

## Why Two Output Streams?

The separation of stdout and stderr allows you to:

- Redirect regular output to a file while still seeing errors on screen
- Filter out error messages while capturing normal output
- Handle errors differently in scripts
- Pipe output through other commands without error messages interfering

## Redirection Examples

Redirect stdout to a file:
```bash
command > output.txt
```

Redirect stderr to a file:
```bash
command 2> errors.txt
```

Redirect both to the same file:
```bash
command > all_output.txt 2>&1
```

Redirect stdout to file, stderr to another:
```bash
command > output.txt 2> errors.txt
```

## Piping

Pipes (`|`) only pass stdout by default:
```bash
command1 | command2
```

To pipe both stdout and stderr:
```bash
command1 2>&1 | command2
```

## Practical Applications

Understanding these streams is essential for:
- Shell scripting
- Log file management
- Debugging applications
- Building robust command pipelines

[Watch on YouTube](https://youtube.com/watch?v=Ok_plRtZyac)
