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

```
seasonal-crop-guide/
├── index.html
├── styles/
│   └── style.css
├── assets/
│   └── images/
└── README.md
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

### 2️⃣ Connect to EC2 via SSH
```bash
ssh -i "your-key.pem" ubuntu@<EC2-PUBLIC-IP>
```

---

### 3️⃣ Gain Root Access & Update System
```bash
sudo su -
apt update && apt upgrade -y
```

---

### 4️⃣ Install Apache Web Server
```bash
apt install apache2 -y
```

---

### 5️⃣ Upload Project Files

#### Option A: Using SCP
```bash
scp -i "your-key.pem" -r ./your-project/* ubuntu@<EC2-IP>:/var/www/html
```

#### Option B: Using GitHub
```bash
apt install git -y
git clone https://github.com/your-username/your-repo.git
cp -r your-repo/* /var/www/html/
```

---

### 6️⃣ Start and Enable Apache
```bash
systemctl start apache2
systemctl enable apache2
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
