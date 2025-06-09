# 🌾 Seasonal Crop Guide 🌍 | Cloud Deployment on AWS EC2

[![AWS Badge](https://img.shields.io/badge/AWS-EC2-orange?style=flat&logo=amazon-aws)](https://aws.amazon.com/ec2/)
[![HTML Badge](https://img.shields.io/badge/Frontend-HTML%20%26%20CSS-blue)](#)
[![JavaScript Badge](https://img.shields.io/badge/Language-JavaScript-yellow?logo=javascript)](#)

## 📌 About the Project

The **Seasonal Crop Guide** is a web-based platform hosted on **AWS EC2** that recommends the best crops to cultivate based on **soil type, region, and seasonal factors**. It is designed to empower farmers with timely, accurate, and location-specific agricultural insights.

This project demonstrates:
- Full-stack static web development
- Cloud deployment using AWS EC2 and Apache
- Real-world application in **AgriTech and sustainability**

---

## 🛠️ Tech Stack

| Role              | Tools & Technologies             |
|-------------------|----------------------------------|
| 💻 Frontend       | HTML, CSS                        |
| ☁️ Cloud Hosting  | Amazon EC2 (Ubuntu 20.04 LTS)    |
| 🌐 Web Server     | Apache2                          |
| 🔧 Version Control| Git, GitHub                      |
| 🧪 Environment    | Linux (console inside ec2)       |

---

## 📁 Project Structure

```bash
Website-AWS-EC2-Deployment/
├── assets/               # Folder for images and visual assets
├── custom-font/          # Folder for custom web fonts
├── english/              # English version of crop guide content(html,js)
├── hindi/                # Hindi version of crop guide content(html,js)
├── telugu/               # Telugu version of crop guide content(html,js)
├── index.html            # Main HTML file (homepage)
└── README.md             # Project documentation
```

---

## 🌍 Use Case

👨‍🌾 Farmers in remote areas often rely on traditional methods for crop selection. This platform gives them:

- Scientific, data-backed suggestions
- Seasonal recommendations based on soil and climate
- Real-time, scalable, and globally accessible interface

---

## 🚀 Deployment Guide (Step-by-Step)

### 1️⃣ Launch EC2 Instance on AWS
- Login to AWS Console → EC2 → Launch Instance
- Choose **Ubuntu 20.04 LTS**
- Instance type: **t2.micro** (Free Tier eligible)
- Add security rules for:  
  - SSH (port 22)  
  - HTTP (port 80)  
  - HTTPS (port 443)

✅ Note: Your instance’s **IPv4 Public IP** is the live address for the website.

---
## 2️⃣ Commands Used in this Project

```bash
# Switch to root user
sudo su -

# Update all packages
yum update -y

# Install Apache HTTP Server
yum install -y httpd

# Check Apache service status
systemctl status httpd

# Create a temporary directory
mkdir temp

# Navigate into the temp directory
cd temp

# Download zip file from GitHub or any URL
wget <downloadable-zip-url>

# Extract contents of the zip file
unzip filename.zip

# Navigate into extracted folder
cd filename

# List all files by last modified time
ls -lrt

# Move all files to Apache's web root
mv * /var/www/html

# Enable Apache to run on startup
systemctl enable httpd

# Start the Apache service
systemctl start httpd
```
---

🎉 **Now open your EC2 Public IPv4 address in a browser — your website is LIVE!**

---

## ✨ Features

- 📊 Smart seasonal crop recommendations
- 🧠 Educational content on soil & irrigation
- 💡 Future support for real-time APIs & ML
- 🧩 Modular, scalable cloud design

---

## 📚 Learning Highlights

- AWS EC2 setup, security configuration, and server management
- Real-world cloud deployment pipeline
- Hands-on with Linux CLI, Apache2, and Git
- Building an application for a social cause (AgriTech)

---

> “Technology should empower even the remotest farmer — and this is a small step in that direction.”
