# FPL Deadline Reminder with Playwright

This repository contains a Playwright automation script designed to check the deadline day and time for the Fantasy Premier League (FPL) on its draft website. If the deadline is today, it sends an alert message to a specified Slack group so that the players do not miss making transfers for the week.

## Overview

The script fpl.spec.ts visits the FPL fixtures page, extracts the date and time of the first match, and compares it with the current date. If the match is scheduled for today, it posts a reminder to a Slack group using a webhook.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- A Slack account and a configured Incoming Webhook URL

## Installation

- Clone the Repository
- cd fpl-deadline-reminder
- Install Dependencies

## Configuration

- Update the Slack webhook URL in fpl.spec.ts with your actual Slack webhook.
- Ensure that your environment is set up to run Playwright tests.

## Running the Script
- Execute the script using the Playwright test runner: npx playwright test


## Key Features

- Automatic Deadline Checking: Automatically checks the FPL deadline day and time.
- Slack Integration: Sends a notification to a Slack group if the deadline is today.
- Easy to Use: Simple setup and execution with Playwright.
